import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(distDir, 'server/entry-server.js');

function xmlEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.error('Template not found at', templatePath);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const dataModule = await import(pathToFileURL(path.resolve(rootDir, 'src/data.js')).href);
  const { CATEGORIES, FEATURED_PRODUCTS } = dataModule;

  // Build core route list
  const routes = [
    {
      url: '/',
      title: 'Bahjat Enterprises | Industrial & Electrical Supplies',
      description: 'Bahjat Enterprises is an authorized distributor & procurement partner supplying certified electrical components, instrumentation, plumbing, safety equipment, fasteners, and precision tools.',
    },
    {
      url: '/about',
      title: 'About Us | Bahjat Enterprises - Industrial Supply Specialists',
      description: 'Learn about Bahjat Enterprises, our leadership, core values, domain expertise, and global procurement network across engineering, oil & gas, and infrastructure.',
    },
    {
      url: '/categories',
      title: 'Industrial Supply Categories & Product Catalogs | Bahjat Enterprises',
      description: 'Browse all 12 core industrial supply categories from Bahjat Enterprises: electrical components, plumbing, precision tools, fasteners, safety gear, instrumentation, and construction materials.',
    },
    {
      url: '/products',
      title: 'Products & Equipment Catalog | Bahjat Enterprises',
      description: 'Explore Bahjat Enterprises full product catalog of industrial equipment, electrical items, instrumentation, tools, and pipes.',
    },
    {
      url: '/products-we-deal-in',
      title: 'Major Products & Brands We Deal In | Bahjat Enterprises',
      description: 'Explore major products, engineering plastics, process instrumentation, and 130+ international brands dealt in by Bahjat Enterprises across global markets.',
    }
  ];

  // Add 12 categories
  CATEGORIES.forEach((cat) => {
    routes.push({
      url: `/category/${cat.id}`,
      title: `${cat.name} | Industrial Supplies | Bahjat Enterprises`,
      description: `Procure certified ${cat.name} from Bahjat Enterprises. Authorized distributor offering ${cat.name} products, specifications, and fast quotation.`,
    });
  });

  // Collect ALL real canonical indexable products from actual dataset (no fabricated slugs, deduplicated)
  const productMap = new Map();
  const allProducts = Object.values(FEATURED_PRODUCTS).flat();

  allProducts.forEach((product) => {
    if (!product || !product.id) return;
    const cat = CATEGORIES.find(c => c.id === product.category);
    if (!productMap.has(product.id)) {
      const cleanUrl = `/product/${product.id}`;
      productMap.set(product.id, {
        url: cleanUrl,
        title: `${product.name} | ${product.brand || 'Bahjat Enterprises'}`,
        description: `${product.name} by ${product.brand || 'Bahjat Enterprises'}. Category: ${cat?.name || 'Industrial'}. View specifications, request formal quotation, and order direct from Bahjat Enterprises.`,
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "@id": `https://bahjatenterprises.com${cleanUrl}#breadcrumb`,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bahjatenterprises.com/"
                },
                ...(cat ? [{
                  "@type": "ListItem",
                  "position": 2,
                  "name": cat.name,
                  "item": `https://bahjatenterprises.com/category/${cat.id}`
                }] : []),
                {
                  "@type": "ListItem",
                  "position": cat ? 3 : 2,
                  "name": product.name,
                  "item": `https://bahjatenterprises.com${cleanUrl}`
                }
              ]
            },
            {
              "@type": "Product",
              "@id": `https://bahjatenterprises.com${cleanUrl}#product`,
              "name": product.name,
              "image": product.image ? (product.image.startsWith('http') ? product.image : `https://bahjatenterprises.com${product.image}`) : undefined,
              "description": product.description || `${product.name} industrial supply`,
              "sku": product.id,
              "mpn": product.id,
              "brand": {
                "@type": "Brand",
                "name": product.brand || "Bahjat Enterprises"
              }
            }
          ]
        }
      });
    }
  });

  routes.push(...productMap.values());

  console.log(`Prerendering ${routes.length} static routes for Googlebot and search engines...`);

  let count = 0;
  for (const route of routes) {
    try {
      const appHtml = render(route.url);

      let html = template;
      // 1. Replace <title>
      html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
      // 2. Replace <meta name="description">
      html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`);
      // 3. Replace og:title & twitter:title
      html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
      html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
      // 4. Replace og:description & twitter:description
      html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
      html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
      // 5. Replace canonical with single clean tag
      const canonicalHref = `https://bahjatenterprises.com${route.url === '/' ? '/' : route.url}`;
      html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalHref}" />`);
      // 6. Inject schema if present
      if (route.schema) {
        html = html.replace('</head>', `    <script type="application/ld+json" id="route-schema">${JSON.stringify(route.schema)}</script>\n  </head>`);
      }
      // 7. Replace <div id="root"></div> with prerendered appHtml
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Target path
      const filePath = route.url === '/'
        ? path.resolve(distDir, 'index.html')
        : path.resolve(distDir, route.url.replace(/^\//, ''), 'index.html');

      const targetDir = path.dirname(filePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      fs.writeFileSync(filePath, html, 'utf-8');
      count++;
    } catch (err) {
      console.warn(`Failed to prerender ${route.url}:`, err.message);
    }
  }

  console.log(`Successfully prerendered ${count}/${routes.length} pages to dist/!`);

  // Generate sitemap.xml for all canonical routes
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${xmlEscape(`https://bahjatenterprises.com${r.url === '/' ? '/' : r.url}`)}</loc>
    <changefreq>${r.url === '/' ? 'daily' : r.url.startsWith('/category/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.url === '/' ? '1.0' : r.url.startsWith('/category/') ? '0.9' : r.url.startsWith('/product/') ? '0.8' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8');
  console.log('Generated sitemap.xml with', routes.length, 'URLs.');

  // Clean up server build folder from dist
  const serverDir = path.resolve(distDir, 'server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }
}

prerender();
