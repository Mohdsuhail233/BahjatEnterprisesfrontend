import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      text: 'Speed up your procurement processes by more than 60%',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 17a5 5 0 0 1 10 0" />
        </svg>
      ),
      text: 'Personalized quotation & supply support for your specific project',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="8" cy="12" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      ),
      text: 'Respond to each RFQ & inquiry in less than 30 seconds',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      text: 'Certified industrial grade procurement & direct manufacturing supply',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
          <path d="M8.5 15.5l-3 3m0-3h3m-3 3v-3" />
        </svg>
      ),
      text: 'Reduce procurement costs and avoid costly project downtime',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <line x1="7" y1="16" x2="7" y2="13" />
          <line x1="12" y1="16" x2="12" y2="10" />
          <line x1="17" y1="16" x2="17" y2="7" />
        </svg>
      ),
      text: 'Ensure certified quality, high performance, and ISO compliance',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-900 leading-[1.2]">
            Why Leading Industrial <br className="hidden sm:inline" />
            Teams Choose <span className="font-serif italic font-medium text-zinc-950">Bahjat</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-xs sm:text-[14px] text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Supplied by authorized manufacturing partners, Bahjat is available 24/7 and adapts seamlessly to each project’s unique demands, ensuring the right components are delivered to your site on schedule.
          </p>
        </motion.div>

        {/* 3x2 Minimalist Divider Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 lg:divide-x divide-zinc-100 border-y border-zinc-100 rounded-3xl overflow-hidden"
        >
          {reasons.map((item, index) => {
            const isFirstRow = index < 3;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                whileHover={{ backgroundColor: 'rgba(250, 250, 250, 1)' }}
                className={`flex flex-col items-center text-center p-6 sm:p-10 group transition-colors duration-300 relative ${
                  isFirstRow ? 'lg:border-b border-zinc-100' : ''
                }`}
              >
                {/* Icon Squircle Box with refined micro-elevation */}
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs flex items-center justify-center mb-5 text-zinc-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-zinc-950 group-hover:text-white group-hover:shadow-md group-hover:border-zinc-950">
                  {item.icon}
                </div>

                {/* Feature Text */}
                <p className="text-xs sm:text-[13.5px] text-zinc-600 group-hover:text-zinc-900 font-medium leading-relaxed max-w-[240px] transition-colors">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
