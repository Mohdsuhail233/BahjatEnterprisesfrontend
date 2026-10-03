import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, getCategoryProductCount } from '../data';
import SEO from '../components/SEO';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return CATEGORIES;
    const q = searchTerm.toLowerCase();
    return CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <SEO
        title="Industrial Supply Categories & Product Catalogs | Bahjat Enterprises"
        description="Browse all 12 core industrial supply categories from Bahjat Enterprises: electrical components, plumbing, precision tools, fasteners, safety gear, instrumentation, and construction materials."
        keywords="industrial categories, electrical supplies catalog, instrumentation products, piping valves, safety equipment catalog"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Industrial Supply Categories - Bahjat Enterprises",
          "description": "Comprehensive catalog of industrial supplies, tools, electrical components, and hardware."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-6">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-900 font-semibold" aria-current="page">Categories</span>
        </nav>

        {/* Header with Search */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            Explore a Wide Range of Categories
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 mb-6">
            Find the right industrial, electrical, and construction supplies across our comprehensive product range.
          </p>

          {/* Search Category Filter */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              id="category-search"
              name="categorySearch"
              aria-label="Filter categories by name or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter categories (e.g. electrical, tools, bearings)..."
              className="w-full bg-white border border-zinc-300 rounded-full pl-10 pr-4 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800 shadow-sm"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear category search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Circular Categories Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-sm">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 mb-4">No categories match "{searchTerm}"</p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-sm font-semibold text-zinc-900 underline"
              >
                Show all categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 lg:gap-x-6 gap-y-8 sm:gap-y-10 justify-items-center max-w-7xl mx-auto">
              {filteredCategories.map((cat) => (
                <article
                  key={cat.id}
                  className="w-full max-w-[160px] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <Link
                    to={`/category/${cat.id}`}
                    className="group flex flex-col items-center text-center focus:outline-none w-full"
                    aria-label={`Browse ${cat.name} supplies`}
                  >
                    {/* Circle Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-zinc-200/90 shadow-sm group-hover:border-zinc-900 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-zinc-900/10 transition-all duration-300 bg-white flex items-center justify-center p-1 relative">
                      <img
                        src={cat.image}
                        alt={`${cat.name} Industrial Supplies Catalog`}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Title */}
                    <span className="mt-3 text-xs sm:text-sm lg:text-[15px] font-bold text-zinc-800 group-hover:text-zinc-950 transition-colors leading-snug">
                      {cat.name}
                    </span>

                    {/* Product count */}
                    <span className="mt-1 text-[11.5px] sm:text-xs text-zinc-500 font-medium group-hover:text-zinc-700 transition-colors">
                      {getCategoryProductCount(cat.id)} Products
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>



      </div>
    </div>
  );
}
