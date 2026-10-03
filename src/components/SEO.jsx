import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Bahjat Enterprises | Industrial & Electrical Supplies';
const DEFAULT_DESCRIPTION = 'Bahjat Enterprises is an authorized distributor & procurement partner supplying certified electrical components, instrumentation, plumbing, safety equipment, fasteners, and precision tools.';
const DEFAULT_IMAGE = 'https://bahjatenterprises.com/logo/logo.png';
const SITE_URL = 'https://bahjatenterprises.com';

function setMetaTag(attribute, key, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalLink(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);

  // Ensure exactly one correct canonical tag per page
  const allCanonicals = document.querySelectorAll('link[rel="canonical"]');
  if (allCanonicals.length > 1) {
    for (let i = 1; i < allCanonicals.length; i++) {
      allCanonicals[i].remove();
    }
  }
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  keywords,
  schema,
  noindex = false,
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title
      ? (title.includes('Bahjat Enterprises') ? title : `${title} | Bahjat Enterprises`)
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Canonical URL (exclude query/tracking parameters by default, normalize trailing slashes)
    const cleanPath = location.pathname.length > 1 && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const canonicalUrl = canonical || `${SITE_URL}${cleanPath}`;
    setCanonicalLink(canonicalUrl);

    // 3. Indexing & Robots Directives
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // 4. Primary Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 5. Open Graph Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. JSON-LD Dynamic Schema
    let scriptElement = document.getElementById('route-schema');
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'route-schema';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Cleanup custom route schema on page unmount
      const el = document.getElementById('route-schema');
      if (el) el.remove();
    };
  }, [title, description, canonical, ogImage, ogType, keywords, schema, noindex, location.pathname]);

  return null;
}
