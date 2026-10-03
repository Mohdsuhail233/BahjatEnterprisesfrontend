import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchProducts, WHATSAPP_NUMBER } from '../data';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const ITEMS_PER_PAGE = 20;

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const pageParam = parseInt(searchParams.get('page'), 10);
  const rawPage = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

  const results = useMemo(() => searchProducts(query), [query]);

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const currentPage = totalPages > 0 ? Math.min(rawPage, totalPages) : 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    const next = new URLSearchParams(searchParams);
    if (page === 1) {
      next.delete('page');
    } else {
      next.set('page', String(page));
    }
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTitle = query ? `Search: "${query}" | Bahjat Enterprises` : 'Search Products | Bahjat Enterprises';
  const pageDescription = query
    ? `Browse ${results.length} matching products for "${query}" across electrical, mechanical, plumbing, and safety supplies at Bahjat Enterprises.`
    : 'Search all certified industrial supplies, tools, valves, cables, and hardware at Bahjat Enterprises.';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <SEO
        title={pageTitle}
        description={pageDescription}
        noindex={true}
        schema={{
          "@context": "https://schema.org",
          "@type": "SearchResultsPage",
          "name": pageTitle,
          "description": pageDescription
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <span className="text-neutral-700 font-medium" aria-current="page">Search Results</span>
      </nav>

      <div className="mb-8 flex items-center justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">
            {results.length > 0
              ? <>Found <span className="text-primary-600">{results.length}</span> results for "{query}"</>
              : <>No results for "{query}"</>
            }
          </h1>
          <p className="text-neutral-500 text-sm">
            {results.length > 0
              ? `Showing ${startIndex + 1}–${Math.min(startIndex + ITEMS_PER_PAGE, results.length)} of ${results.length} matching products`
              : 'Try a different keyword or browse by category below'
            }
          </p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-14">
          <p className="text-6xl mb-4">🔍</p>
          <p className="text-neutral-600 font-semibold mb-2">No products found</p>
          <p className="text-neutral-400 text-sm mb-6">
            Can't find what you need? Contact us on WhatsApp!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm looking for: ${query}. Do you have it?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ask on WhatsApp
          </a>
          <div className="mt-8">
            <p className="text-neutral-500 text-sm mb-4">Or browse categories:</p>
            <Link to="/" className="text-primary-600 font-semibold hover:underline">← Back to Home</Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
            {paginatedResults.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-12 pt-6 border-t border-zinc-100"
          />
        </div>
      )}
    </div>
  );
}

