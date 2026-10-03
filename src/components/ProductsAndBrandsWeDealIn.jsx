import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MAJOR_PRODUCT_GROUPS, MAJOR_BRANDS_DEALT_IN } from '../dealingsData';
import { WHATSAPP_NUMBER } from '../data';

// SVG Industrial Icons matching the sleek theme of IndustriesWeServe
const GROUP_ICONS = {
  'sheets-pipes-rods': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" />
      <path d="M2 13.5L12 19L22 13.5" />
      <path d="M2 17.5L12 23L22 17.5" />
    </svg>
  ),
  'flow-pressure-temp': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7V12L15 15" />
      <path d="M12 3V5" />
      <path d="M12 19V21" />
      <path d="M3 12H5" />
      <path d="M19 12H21" />
    </svg>
  ),
  'sensors-transmitters-controllers': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12C2 6.48 6.48 2 12 2" />
      <path d="M5 12C5 8.13 8.13 5 12 5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15V22" />
      <path d="M9 22H15" />
    </svg>
  ),
  'electrical-control': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'pneumatic-hydraulic': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="14" height="8" rx="2" />
      <path d="M17 12H21" />
      <circle cx="21" cy="12" r="1.5" />
      <path d="M7 8V5" />
      <path d="M13 8V5" />
    </svg>
  ),
  'lab-scientific': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2V7L4.5 18C3.8 19.3 4.8 21 6.3 21H17.7C19.2 21 20.2 19.3 19.5 18L14 7V2" />
      <path d="M8.5 2H15.5" />
      <path d="M7 15H17" />
    </svg>
  ),
  'measurement-industrial': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12L8 8" />
      <path d="M8 12H6" />
      <path d="M12 6V8" />
      <path d="M16 12H18" />
      <path d="M14 14L17 17" />
    </svg>
  )
};

// Sector badges for headers
const GROUP_BADGES = {
  'sheets-pipes-rods': 'Polymers & Engineering Plastics',
  'flow-pressure-temp': 'Process & Level Instrumentation',
  'sensors-transmitters-controllers': 'Automation & Protection',
  'electrical-control': 'Power & Switchgear Systems',
  'pneumatic-hydraulic': 'Fluid Power & Actuation',
  'lab-scientific': 'Analytical & Scientific Devices',
  'measurement-industrial': 'Diagnostics & Gear Products'
};

export default function ProductsAndBrandsWeDealIn({ isFullPage = false }) {
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'brands'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 110,
      },
    },
  };

  return (
    <section
      id="products-we-deal-in"
      className={`bg-white border-t border-zinc-100 scroll-mt-16 overflow-hidden ${
        isFullPage ? 'py-12 sm:py-20' : 'py-16 sm:py-24'
      }`}
      aria-label="Products and Brands Dealt In"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: CLEAN THEME HEADLINE                      */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-semibold text-zinc-700 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
            <span>Global Supply &amp; Distribution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-zinc-900 leading-[1.25]">
            Some Major Product and Brand — <span className="font-serif italic font-medium text-zinc-950">Dealing In International Markets</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Supplying international markets with precision engineering plastics, process instrumentation, fluid power automation, and certified industrial components.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* SEGMENTED SWITCH BAR: MATCHING REFERENCE IMAGE PILL BAR  */}
        {/* ========================================================= */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#f1f3f5] border border-zinc-200/80 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'products'
                  ? 'bg-white text-zinc-950 font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900 font-medium'
              }`}
            >
              Products We Deal In
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('brands')}
              className={`px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'brands'
                  ? 'bg-white text-zinc-950 font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900 font-medium'
              }`}
            >
              Brands We Deal In
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB CONTENT: PRODUCTS                                     */}
        {/* ========================================================= */}
        {activeTab === 'products' && (
          <div>
            {/* 7 Logical Product Cards Matching Exactly IndustriesWeServe Theme */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20"
            >
              {MAJOR_PRODUCT_GROUPS.map((group, index) => {
                const num = String(index + 1).padStart(2, '0');
                const icon = GROUP_ICONS[group.id] || GROUP_ICONS['sheets-pipes-rods'];
                const badge = GROUP_BADGES[group.id] || group.subtitle;

                const waInquiry = encodeURIComponent(
                  `Hi Bahjat Enterprises,\n\nWe have an inquiry for products in: *${group.title}* (${badge}).\n\nPlease share your commercial catalog, corporate rates, and stock availability.`
                );

                return (
                  <motion.article
                    key={group.id}
                    variants={itemVariants}
                    whileHover={{ y: -7 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="group relative bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-7 hover:border-zinc-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top dynamic hover accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Header: Icon + Title & Badge + Index Number */}
                      <div className="flex items-start justify-between gap-3.5 mb-3.5">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 flex-shrink-0 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-200 shadow-sm">
                            {icon}
                          </div>
                          <div>
                            <span className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider block leading-tight">
                              {badge}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight leading-snug">
                              {group.title}
                            </h3>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-zinc-950 transition-colors">
                          {num}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                        {group.subtitle}. Supplied in factory-certified grades for global industrial specifications.
                      </p>

                      {/* Tag Pills (Products listed in this group) */}
                      <div className="flex flex-wrap gap-1.5 mb-4 max-h-[155px] overflow-y-auto pr-1 scrollbar-thin">
                        {group.products.map((item, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200/60 group-hover:border-zinc-300 transition-colors whitespace-nowrap"
                            title={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3.5 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium">Certified Industrial</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waInquiry}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-1.5 group-hover:underline transition-colors"
                      >
                        <span>Request Sector RFQ</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB CONTENT: BRANDS                                       */}
        {/* ========================================================= */}
        {activeTab === 'brands' && (
          <div>
            {/* Responsive Brand Logo & Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-16 sm:mb-20">
              {MAJOR_BRANDS_DEALT_IN.map((brand, idx) => {
                  const waBrandInquiry = encodeURIComponent(
                    `Hi Bahjat Enterprises,\n\nI want to inquire about genuine parts and quotations for brand: *${brand.name}*.\n\nPlease share price list and delivery timeline.`
                  );

                  return (
                    <div
                      key={idx}
                      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waBrandInquiry}`, '_blank')}
                      className="bg-white border border-neutral-200/80 hover:border-neutral-900 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-2xs hover:shadow-lg transition-all duration-300 group cursor-pointer min-h-[125px] sm:min-h-[135px]"
                    >
                      {/* Logo Area */}
                      <div className="h-11 sm:h-12 w-full flex items-center justify-center">
                        {brand.logo ? (
                          <img
                            src={brand.logo}
                            alt={`${brand.name} Authorized Industrial Supply Partner`}
                            loading="lazy"
                            decoding="async"
                            className="max-h-8 sm:max-h-9 max-w-[110px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                            {brand.name.substring(0, 3)}
                          </span>
                        )}
                      </div>

                      {/* Brand Info with Subtle Divider */}
                      <div className="w-full pt-2.5 border-t border-neutral-100 flex flex-col items-center">
                        <span className="text-xs font-bold text-neutral-800 group-hover:text-neutral-950 transition-colors truncate max-w-full">
                          {brand.name}
                        </span>
                        {brand.tag && (
                          <span className="text-[10px] text-neutral-500 font-medium tracking-tight truncate max-w-full">
                            {brand.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        )}

        {/* Action Call to Action Strip */}
        <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-zinc-900">
              Need custom cut-to-size plastics, instrumentation or volume procurement?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Explore our full 12 core product categories with complete part numbers, specification sheets, and instant RFQ.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-sm active:scale-95"
            >
              <span>Explore Full Catalog</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
