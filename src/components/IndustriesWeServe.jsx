import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data';

export default function IndustriesWeServe() {
  const industries = [
    {
      id: 'oil-gas',
      num: '01',
      title: 'Oil, Gas & Petrochemical',
      badge: 'Energy & Refining',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      description:
        'Refinery-grade gate & ball valves, forged ASME flanges, heavy seamless piping, and explosion-proof instrumentation.',
      tags: ['Refinery Valves', 'ASME B16.5 Flanges', 'Instrumentation'],
    },
    {
      id: 'manufacturing',
      num: '02',
      title: 'Manufacturing & Plants',
      badge: 'Heavy Production',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      description:
        'Industrial power distribution switchgear, heavy-duty pneumatic fittings, industrial bearings, and specialized assembly tools.',
      tags: ['Power Distribution', 'Pneumatic Fittings', 'Industrial Bearings'],
    },
    {
      id: 'construction',
      num: '03',
      title: 'Construction & Civil Infra',
      badge: 'Structural & Roads',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M12 12h.01" />
          <path d="M17 12h.01" />
          <path d="M7 12h.01" />
          <path d="M2 10h20" />
        </svg>
      ),
      description:
        'Grade 8.8/10.9 high-tensile structural bolts, chemical anchor systems, scaffolding hardware, and certified fall protection.',
      tags: ['High-Tensile Fasteners', 'Chemical Anchors', 'Safety Gear'],
    },
    {
      id: 'mep',
      num: '04',
      title: 'MEP Contracting',
      badge: 'Commercial & Towers',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      description:
        'End-to-end electrical cable management, GI/CPVC water piping solutions, switchboards, and architectural door hardware.',
      tags: ['Armored XLPE Cables', 'CPVC / GI Piping', 'Cable Trays'],
    },
    {
      id: 'marine',
      num: '05',
      title: 'Marine & Offshore Engineering',
      badge: 'Maritime & Shipyards',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="22" x2="12" y2="8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      ),
      description:
        'Marine-grade SS 316/316L fasteners, seawater-resistant valves, specialized rigging hardware, and marine power cables.',
      tags: ['SS 316L Fasteners', 'Seawater Valves', 'Rigging Gear'],
    },
    {
      id: 'healthcare',
      num: '06',
      title: 'Healthcare & Laboratories',
      badge: 'Medical & Facilities',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2" />
          <path d="M8.5 2h7" />
          <path d="M14.5 16h-5" />
        </svg>
      ),
      description:
        'Precision surgical steel instruments, laboratory measurement balances, sanitary valves, and medical gas pipeline fittings.',
      tags: ['Surgical Instruments', 'Analytical Balances', 'Sanitary Fittings'],
    },
  ];

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
    hidden: { opacity: 0, y: 24 },
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
    <section id="industries" className="py-16 sm:py-24 bg-white border-t border-zinc-100 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-semibold text-zinc-700 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
            <span>Sectors &amp; Applications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-900 leading-[1.2]">
            Industries <span className="font-serif italic font-medium text-zinc-950">We Serve</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            From heavy petrochemical refineries to commercial infrastructure projects, Bahjat Enterprises delivers certified industrial supplies engineered for zero downtime and uncompromising safety.
          </p>
        </motion.div>

        {/* 6 Balanced & Sleek Industry Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {industries.map((ind) => {
            const waInquiry = encodeURIComponent(
              `Hi Bahjat Enterprises,\n\nWe have an industrial procurement requirement for the *${ind.title}* sector.\n\nPlease share your product catalog, corporate pricing, and supply lead times.`
            );

            return (
              <motion.article
                key={ind.id}
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
                        {ind.icon}
                      </div>
                      <div>
                        <span className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider block leading-tight">
                          {ind.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight leading-snug">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-zinc-950 transition-colors">
                      {ind.num}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                    {ind.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200/60 group-hover:border-zinc-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
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
    </section>
  );
}
