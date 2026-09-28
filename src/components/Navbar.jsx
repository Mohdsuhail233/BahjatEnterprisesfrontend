import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, searchProducts, COMPANY_NAME, WHATSAPP_NUMBER, ELECTRICAL_SUBCATEGORIES } from '../data';
import { CATEGORY_MENU_DATA } from '../categoryMenuData';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'solutions' | 'resources' | null
  const [hoveredCategory, setHoveredCategory] = useState('electrical'); // 'electrical' | ...
  const dropdownTimeoutRef = useRef(null);

  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenu(false);
    setActiveDropdown(null);
    setHoveredCategory(null);
    setSearchOpen(false);
  }, [location.pathname]);

  // Autocomplete search
  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchProducts(query).slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveDropdown(null);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  const handleMouseEnter = (menuKey) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
    if (menuKey === 'products') {
      setHoveredCategory('electrical');
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredCategory('electrical');
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT GROUP: Logo + Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0 py-0.5">
              <img
                src="/logo/logo.png"
                alt="Bahjat Enterprises"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.currentTarget.src = '/images/Logo/Bahjat Enterprises Horizontal PNG.png';
                }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[14px]">
              
              {/* 1. Products (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                  className={`flex items-center gap-1.5 py-2 font-normal transition-colors ${
                    activeDropdown === 'products' ? 'text-zinc-950 font-medium' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <span>Products</span>
                  <svg
                    className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                      activeDropdown === 'products' ? 'rotate-180 text-zinc-700' : ''
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                  </svg>
                </button>

                {/* Products Mega Dropdown - Minimal Multi-Column Layout (Nike-Style Reference) */}
                {activeDropdown === 'products' && (() => {
                  const currentCategoryKey = hoveredCategory || 'electrical';
                  const currentCat = CATEGORY_MENU_DATA[currentCategoryKey] || CATEGORY_MENU_DATA['electrical'];

                  return (
                    <div className="absolute left-0 top-full pt-2 z-50 animate-fadeIn">
                      <div className="bg-white rounded-xl shadow-2xl border border-zinc-200/90 overflow-hidden w-[1040px] p-8">
                        
                        {/* 5-Column Nike Minimal Grid */}
                        <div className="grid grid-cols-5 gap-8 items-start">
                          
                          {/* Column 1: Departments (Featured with Right Divider) */}
                          <div className="border-r border-zinc-200 pr-6">
                            <h4 className="font-bold text-[13px] tracking-wider text-zinc-950 uppercase mb-3">
                              Departments
                            </h4>
                            <div className="space-y-1">
                              {CATEGORIES.map((cat) => {
                                const isActive = currentCategoryKey === cat.id;
                                return (
                                  <Link
                                    key={cat.id}
                                    to={`/category/${cat.id}`}
                                    onMouseEnter={() => setHoveredCategory(cat.id)}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`group flex items-center justify-between font-bold text-[12px] tracking-tight uppercase transition-all py-1.5 px-2.5 rounded-md leading-tight ${
                                      isActive
                                        ? 'text-zinc-950 bg-zinc-100 font-extrabold shadow-sm'
                                        : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50'
                                    }`}
                                  >
                                    <span>{cat.name}</span>
                                    <span className={`text-xs transition-opacity ${isActive ? 'text-zinc-950 opacity-100 font-bold' : 'opacity-0 text-zinc-400 group-hover:opacity-100'}`}>
                                      ›
                                    </span>
                                  </Link>
                                );
                              })}
                              <div className="pt-2 border-t border-zinc-100 mt-2">
                                <Link
                                  to="/categories"
                                  onClick={() => setActiveDropdown(null)}
                                  className="block font-bold text-[11.5px] tracking-tight uppercase text-zinc-400 hover:text-zinc-950 px-2.5 py-1 transition-colors"
                                >
                                  All 12 Catalogs →
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: First Group of Subcategories */}
                          <div>
                            <h4 className="font-bold text-[13px] tracking-wider text-zinc-950 uppercase mb-3">
                              {currentCat.col1Title}
                            </h4>
                            <div className="space-y-1.5">
                              <Link
                                to={`/category/${currentCat.id}`}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-[13px] font-semibold text-zinc-950 hover:text-zinc-600 transition-colors pb-1"
                              >
                                View All ({currentCat.totalItems})
                              </Link>
                              {currentCat.col1Links.map((subCat) => (
                                <Link
                                  key={subCat}
                                  to={`/category/${currentCat.id}?sub=${encodeURIComponent(subCat)}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-zinc-600 hover:text-zinc-950 font-normal leading-snug py-0.5 transition-colors"
                                >
                                  {subCat}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 3: Second Group of Subcategories (With Right Divider) */}
                          <div className="border-r border-zinc-200 pr-6">
                            <h4 className="font-bold text-[13px] tracking-wider text-zinc-950 uppercase mb-3">
                              {currentCat.col2Title}
                            </h4>
                            <div className="space-y-1.5">
                              {currentCat.col2Links.map((subCat) => (
                                <Link
                                  key={subCat}
                                  to={`/category/${currentCat.id}?sub=${encodeURIComponent(subCat)}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-zinc-600 hover:text-zinc-950 font-normal leading-snug py-0.5 transition-colors"
                                >
                                  {subCat}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 4: Brands / Manufacturing Partners */}
                          <div>
                            <h4 className="font-bold text-[13px] tracking-wider text-zinc-950 uppercase mb-3">
                              {currentCat.brandsTitle}
                            </h4>
                            <div className="space-y-1.5">
                              {currentCat.brands.map((brand) => (
                                <Link
                                  key={brand}
                                  to={`/category/${currentCat.id}?brand=${encodeURIComponent(brand)}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-zinc-600 hover:text-zinc-950 font-normal leading-snug py-0.5 transition-colors"
                                >
                                  {brand}
                                </Link>
                              ))}
                              <Link
                                to={`/category/${currentCat.id}`}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-[12px] font-medium text-zinc-400 hover:text-zinc-900 transition-colors pt-1.5"
                              >
                                View Full Directory →
                              </Link>
                            </div>
                          </div>

                          {/* Column 5: Commercial Desk & Direct Procurement */}
                          <div>
                            <h4 className="font-bold text-[13px] tracking-wider text-zinc-950 uppercase mb-3">
                              {currentCat.commercialTitle}
                            </h4>
                            <div className="space-y-2 mb-6">
                              {currentCat.priorityLinks.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-zinc-700 hover:text-zinc-950 font-medium py-0.5 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>

                            <div className="pt-3 border-t border-zinc-100">
                              <h5 className="text-[11.5px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                Direct Supply Desk
                              </h5>
                              <div className="space-y-1.5 text-[12.5px]">
                                <a
                                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Bahjat Enterprises, I need an urgent quotation for ${currentCat.name}.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setActiveDropdown(null)}
                                  className="block font-bold text-zinc-950 hover:underline"
                                >
                                  WhatsApp Quotation →
                                </a>
                                <a
                                  href="mailto:info@bahjatenterprises.com"
                                  className="block text-zinc-500 hover:text-zinc-950 transition-colors"
                                >
                                  info@bahjatenterprises.com
                                </a>
                                <p className="text-[11px] text-zinc-400 pt-1 leading-relaxed">
                                  Fast quotation, MTC 3.1 & site delivery across all categories.
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* 2. Solutions (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className={`flex items-center gap-1.5 py-2 font-normal transition-colors ${
                    activeDropdown === 'solutions' ? 'text-zinc-950 font-medium' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <span>Solutions</span>
                  <svg
                    className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                      activeDropdown === 'solutions' ? 'rotate-180 text-zinc-700' : ''
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                  </svg>
                </button>

                {/* Solutions Dropdown */}
                {activeDropdown === 'solutions' && (
                  <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200/90 p-4 space-y-1">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider px-3 pb-2 block">
                        Industry Applications
                      </span>
                      {[
                        { title: 'Industrial & Manufacturing', desc: 'Heavy machinery, electrical panels & switchgear' },
                        { title: 'Commercial & MEP Contracting', desc: 'Complete plumbing, wiring and structural hardware' },
                        { title: 'Oil, Gas & Petrochemical', desc: 'Flanges, high-pressure valves & pipe fittings' },
                        { title: 'Building & Infrastructure', desc: 'Structural fasteners, anchors & safety systems' },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need info regarding ${item.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setActiveDropdown(null)}
                          className="block p-3 rounded-xl hover:bg-zinc-50 transition-colors group/sol"
                        >
                          <div className="text-sm font-medium text-zinc-800 group-hover/sol:text-zinc-950">
                            {item.title}
                          </div>
                          <div className="text-xs text-zinc-500 mt-0.5">
                            {item.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Resources (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className={`flex items-center gap-1.5 py-2 font-normal transition-colors ${
                    activeDropdown === 'resources' ? 'text-zinc-950 font-medium' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <span>Resources</span>
                  <svg
                    className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                      activeDropdown === 'resources' ? 'rotate-180 text-zinc-700' : ''
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                  </svg>
                </button>

                {/* Resources Dropdown */}
                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 top-full pt-2 w-56 z-50 animate-fadeIn">
                    <div className="bg-white rounded-xl shadow-xl border border-zinc-200/90 p-1.5">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Bahjat Enterprises, please share the Product Catalog PDF.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-zinc-50 text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-colors"
                      >
                        <span className="text-base">📄</span>
                        <span>Product Catalog PDF</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Pricing */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Bahjat Enterprises, I would like to request price quotes.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-950 font-normal transition-colors py-2"
              >
                Pricing
              </a>

              {/* 5. About Us */}
              <Link
                to="/about"
                className={`font-normal transition-colors py-2 ${
                  location.pathname === '/about'
                    ? 'text-zinc-950 font-medium'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* RIGHT GROUP: Search & Action Button */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80 px-3 py-1.5 rounded-lg transition-colors focus:outline-none"
              title="Search (⌘K)"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono bg-white text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-200">
                ⌘K
              </kbd>
            </button>

            {/* Quick Contact / Request Quote Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Bahjat Enterprises, I have an inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-lg transition-all shadow-sm active:scale-95"
            >
              <span>Get Quote</span>
            </a>

            {/* Mobile Animated Hamburger Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center ${
                    mobileMenu ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-200 ease-out ${
                    mobileMenu ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center ${
                    mobileMenu ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* SEARCH MODAL OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fadeIn">
          <div 
            ref={searchContainerRef}
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden"
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-zinc-100 px-4 py-3">
              <svg className="w-5 h-5 text-zinc-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products by title, category, or code..."
                className="w-full text-sm text-zinc-800 placeholder-zinc-400 bg-transparent focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-xs text-zinc-400 hover:text-zinc-600 px-2"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs text-zinc-400 hover:text-zinc-700 ml-2 px-2 py-1 rounded bg-zinc-100"
              >
                Esc
              </button>
            </form>

            {/* Results Preview */}
            <div className="max-h-96 overflow-y-auto p-2">
              {results.length > 0 ? (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Products
                  </div>
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-xs font-mono text-zinc-600">
                          {p.id.substring(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-800">{p.name}</p>
                          <p className="text-xs text-zinc-400">Part: {p.id} · {p.brand}</p>
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400">View →</span>
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-full text-center py-2 mt-1 text-xs font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors"
                  >
                    View all matching results for "{query}"
                  </button>
                </div>
              ) : query.length >= 2 ? (
                <div className="py-8 text-center text-sm text-zinc-400">
                  No products found for "{query}".
                </div>
              ) : (
                <div className="py-6 px-3">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-2">
                    Popular Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Electrical', 'Tools', 'Fasteners', 'Plumbing', 'Safety'].map((item) => (
                      <Link
                        key={item}
                        to={`/category/${item.toLowerCase()}`}
                        onClick={() => setSearchOpen(false)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER WITH SMOOTH FRAMER-MOTION SLIDE & FADE */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-zinc-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                  Categories ({CATEGORIES.length})
                </span>
                <Link
                  to="/categories"
                  onClick={() => setMobileMenu(false)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  View All →
                </Link>
              </div>

              {/* All 12 Categories in a touch-friendly 2-column grid */}
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 text-zinc-800 hover:text-zinc-950 transition-colors"
                  >
                    <span className="text-lg flex-shrink-0">{cat.icon}</span>
                    <span className="text-xs font-medium leading-tight truncate">{cat.name}</span>
                  </Link>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Bahjat Enterprises, I would like to request price quotes.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenu(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 rounded-lg hover:bg-zinc-100"
              >
                Pricing & Quotations
              </a>
              <Link
                to="/about"
                onClick={() => setMobileMenu(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                  location.pathname === '/about'
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-800 hover:bg-zinc-100'
                }`}
              >
                About Us
              </Link>
            </div>

            <div className="pt-2 border-t border-zinc-100">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-950 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
