import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchProducts, WHATSAPP_NUMBER } from '../data';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 20;

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [currentPage, setCurrentPage] = useState(1);

  const results = useMemo(() => searchProducts(query), [query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-neutral-700 font-medium">Search Results</span>
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

