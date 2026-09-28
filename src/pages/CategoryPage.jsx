import React, { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, Link, Navigate } from 'react-router-dom';
import { getCategoryById, CATEGORIES, FEATURED_PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 20;

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsSectionRef = useRef(null);

  const subCategoryParam = searchParams.get('sub');
  const brandParam = searchParams.get('brand');
  const priorityParam = searchParams.get('priority');
  const category = getCategoryById(categoryId);

  // Reset to first page when filters or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, searchTerm, subCategoryParam, brandParam, priorityParam]);

  if (!category) return <Navigate to="/" />;

  const allCategoryProducts = FEATURED_PRODUCTS[category.id] || [];

  const displayProducts = allCategoryProducts.filter((p) => {
    // 1. Search Bar Filter within active category
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      const pName = (p.name || '').toLowerCase();
      const pBrand = (p.brand || '').toLowerCase();
      const pSub = (p.subCategory || '').toLowerCase();
      const pMain = (p.mainCategory || '').toLowerCase();
      const pSpecs = (p.rawSpecs || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();

      const direct = pName.includes(q) ||
        pBrand.includes(q) ||
        pSub.includes(q) ||
        pMain.includes(q) ||
        pSpecs.includes(q) ||
        tags.includes(q);

      if (!direct) {
        const words = q.split(/\s+/).filter((w) => w.length > 1);
        const fullText = `${pName} ${pBrand} ${pSub} ${pMain} ${pSpecs} ${tags}`;
        const allWordsMatch = words.every((w) => fullText.includes(w));
        if (!allWordsMatch) return false;
      }
    }

    // 2. Priority Filter (from URL if any)
    if (priorityParam) {
      if (String(p.priority) !== String(priorityParam)) return false;
    }

    // 3. Sub-Category Filter (from URL if any)
    if (subCategoryParam) {
      const sub = subCategoryParam.toLowerCase().trim();
      const pSub = (p.subCategory || '').toLowerCase();
      const pMain = (p.mainCategory || '').toLowerCase();
      const pName = (p.name || '').toLowerCase();
      const pBrand = (p.brand || '').toLowerCase();
      const pSpecs = (p.rawSpecs || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();

      const directMatch = pSub === sub || pMain === sub || pSub.includes(sub) || sub.includes(pSub) ||
        pMain.includes(sub) || sub.includes(pMain) ||
        pName.includes(sub) || pBrand.includes(sub) || pSpecs.includes(sub) || tags.includes(sub);

      if (!directMatch) {
        const stopWords = ['and', 'the', 'for', 'with', 'type', 'hardware', 'product', 'products', 'item', 'items', 'supplies', 'tool', 'tools', 'plumbing'];
        const words = sub.replace(/[^\w\s]/g, ' ')
          .split(/\s+/)
          .filter((w) => w.length > 2 && !stopWords.includes(w));

        if (words.length > 0) {
          const fullText = `${pSub} ${pMain} ${pName} ${pBrand} ${pSpecs} ${tags}`;
          const tokenMatch = words.some((w) => {
            const stem = w.replace(/s$/, '').replace(/es$/, '');
            return fullText.includes(w) || (stem.length > 2 && fullText.includes(stem));
          });
          if (!tokenMatch) return false;
        } else {
          return false;
        }
      }
    }

    // 4. Brand Filter (from URL if any)
    if (brandParam) {
      const b = brandParam.toLowerCase().trim();
      const pBrand = (p.brand || '').toLowerCase();
      if (!pBrand.includes(b)) return false;
    }

    return true;
  });

  const clearAllFilters = () => {
    setSearchTerm('');
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters = Boolean(searchTerm.trim() || subCategoryParam || brandParam || priorityParam);

  // Pagination calculation (20 items per page)
  const totalPages = Math.ceil(displayProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = displayProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (productsSectionRef.current) {
      const topOffset = productsSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-zinc-900 transition-colors">Categories</Link>
          <span>/</span>
          <Link to={`/category/${category.id}`} className="hover:text-zinc-900 transition-colors">{category.name}</Link>
          {priorityParam && (
            <>
              <span>/</span>
              <span className="text-zinc-900 font-semibold">{priorityParam === '1' ? '1st Priority Stock' : '2nd & 3rd Priority Stock'}</span>
            </>
          )}
          {subCategoryParam && (
            <>
              <span>/</span>
              <span className="text-zinc-900 font-semibold">{subCategoryParam}</span>
            </>
          )}
          {brandParam && (
            <>
              <span>/</span>
              <span className="text-zinc-900 font-semibold">{brandParam}</span>
            </>
          )}
        </nav>

        {/* Clean Category Title Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-2 flex-wrap">
              <span>{category.name}</span>
              {subCategoryParam && (
                <span className="text-base sm:text-lg font-medium text-zinc-500">
                  — {subCategoryParam}
                </span>
              )}
              {brandParam && (
                <span className="text-base sm:text-lg font-medium text-sky-600">
                  [{brandParam}]
                </span>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              {category.description}
            </p>
          </div>
          <Link
            to="/categories"
            className="hidden sm:inline-flex items-center text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ← All Categories
          </Link>
        </div>

        {/* Category-Specific Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search products, brands, or specs in ${category.name}...`}
              className="w-full pl-11 pr-10 py-3.5 bg-zinc-50 border border-zinc-200/90 rounded-2xl text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 focus:bg-white transition-all shadow-xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
                title="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-3 flex-wrap text-xs">
              <span className="text-zinc-500 font-medium">Active:</span>
              {searchTerm.trim() && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-800 border border-zinc-200 font-medium">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-rose-600 font-bold cursor-pointer">✕</button>
                </span>
              )}
              {subCategoryParam && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-800 border border-zinc-200 font-medium">
                  Category: {subCategoryParam}
                  <button onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.delete('sub');
                    setSearchParams(next);
                  }} className="hover:text-rose-600 font-bold cursor-pointer">✕</button>
                </span>
              )}
              {brandParam && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-medium">
                  Brand: {brandParam}
                  <button onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.delete('brand');
                    setSearchParams(next);
                  }} className="hover:text-rose-600 font-bold cursor-pointer">✕</button>
                </span>
              )}
              {priorityParam && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-medium">
                  {priorityParam === '1' ? '1st Priority Stock' : '2nd & 3rd Priority Stock'}
                  <button onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.delete('priority');
                    setSearchParams(next);
                  }} className="hover:text-rose-600 font-bold cursor-pointer">✕</button>
                </span>
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-rose-600 hover:text-rose-800 font-semibold underline ml-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {displayProducts.length > 0 ? (
          <div ref={productsSectionRef} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm mb-10 scroll-mt-24">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                {subCategoryParam ? `${subCategoryParam} Products` : brandParam ? `${brandParam} Products` : 'Products'}
              </h2>
              <span className="text-xs sm:text-sm font-medium text-zinc-500">
                Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, displayProducts.length)} of {displayProducts.length} products
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} categoryName={category.name} />
              ))}
            </div>

            {/* Pagination Controls (20 products per page) */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-10 pt-6 border-t border-zinc-100"
            />
          </div>
        ) : (
          <div className="bg-zinc-50 rounded-3xl p-12 text-center mb-10 border border-zinc-200">
            <p className="text-zinc-600 text-sm mb-4">No products found matching your search or filter.</p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-semibold hover:bg-zinc-800 cursor-pointer"
            >
              View All {category.name} Products ({allCategoryProducts.length})
            </button>
          </div>
        )}

        {/* Other Categories Quick Navigation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm mt-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Explore Other Categories
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                Browse certified industrial, electrical, and construction catalogs
              </p>
            </div>
            <Link
              to="/categories"
              className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
            >
              <span>View All Categories</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {CATEGORIES.filter((c) => c.id !== categoryId).map((c) => {
              const productCount = (FEATURED_PRODUCTS[c.id] || []).length;
              return (
                <Link
                  key={c.id}
                  to={`/category/${c.id}`}
                  className="p-3 sm:p-3.5 rounded-2xl bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
                >
                  {/* Category Image Thumbnail */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="text-2xl">{c.icon}</span>
                    )}
                  </div>

                  {/* Title & Product Count */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                      {c.name}
                    </h3>
                    {productCount > 0 && (
                      <p className="text-[11px] text-zinc-400 font-medium mt-0.5">
                        {productCount}+ Products
                      </p>
                    )}
                  </div>

                  <span className="text-zinc-300 group-hover:text-zinc-700 transform group-hover:translate-x-0.5 transition-all text-xs hidden sm:inline">
                    →
                  </span>
                </Link>
              );
            })}

            {/* 12th card: View Full Catalog to balance the 4-column grid with zero empty spots */}
            <Link
              to="/categories"
              className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white border border-zinc-800 hover:shadow-lg transition-all duration-200 flex items-center gap-3 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                📦
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                  All 12 Categories
                </h3>
                <p className="text-[11px] text-zinc-400 font-medium mt-0.5">
                  Full Catalog Index →
                </p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
