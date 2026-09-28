import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 120 },
    },
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-neutral-200/60 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header & Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 sm:mb-8 font-sans">
            About Bahjat Enterprises
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed font-normal mb-8 text-balance">
            <p>
              Bahjat Enterprises is a forward-thinking industrial supply and trading company serving businesses across India and international markets. With decades of domain expertise and a modern procurement infrastructure, we provide a comprehensive range of electrical, safety, plumbing, oil &amp; gas, pipe fittings, tools, engineering and construction materials.
            </p>
            <p>
              Our focus goes beyond supplying products. We work to understand our customers&apos; requirements and deliver dependable sourcing, quality products, competitive solutions and responsive service.
            </p>
          </div>

          {/* Minimalist Vertical Separator with Centered Pulsing Dot */}
          <div className="flex flex-col items-center justify-center my-14 sm:my-16">
            <div className="w-px h-10 bg-neutral-300" />
            <div className="relative flex items-center justify-center my-1.5">
              <span className="absolute w-5 h-5 rounded-full bg-neutral-900/20 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
            </div>
            <div className="w-px h-10 bg-neutral-300" />
          </div>
        </motion.div>

        {/* Concept & Logic Section (3 Cards) */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 text-center mb-10 sm:mb-12"
          >
            Concept &amp; logic
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* CARD 1: 1 Pulsing Dot */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="bg-[#f4f4f6] rounded-[28px] p-8 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:bg-neutral-100/90 transition-all duration-300 border border-neutral-200/40 group"
            >
              <div>
                <div className="relative w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex items-center justify-center mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <span className="absolute w-6 h-6 rounded-full bg-neutral-900/15 animate-ping" />
                  <span className="w-3 h-3 rounded-full bg-neutral-900" />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Guided first impression
                </h4>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Personalized sales strategies tailored to optimize procurement pipelines.
                  Our team collaborates closely with each partner to understand operational demands, delivering
                  clarity, competitive edge, and prompt fulfillment.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/40 flex items-center text-xs font-semibold text-neutral-500 tracking-wider uppercase">
                <span>Pillar 01 • Sourcing</span>
              </div>
            </motion.div>

            {/* CARD 2: 2 Synchronized Pulsing Dots */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="bg-[#f4f4f6] rounded-[28px] p-8 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:bg-neutral-100/90 transition-all duration-300 border border-neutral-200/40 group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex items-center justify-center gap-2 mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse delay-150" />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Motion as product navigation
                </h4>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Data-driven logistics and proactive market adaptation. We leverage deep technical
                  insights to anticipate market shifts, ensuring volatile supply lines turn into seamless,
                  uninterrupted delivery channels.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/40 flex items-center text-xs font-semibold text-neutral-500 tracking-wider uppercase">
                <span>Pillar 02 • Agility</span>
              </div>
            </motion.div>

            {/* CARD 3: 3 Dots Cluster */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="bg-[#f4f4f6] rounded-[28px] p-8 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:bg-neutral-100/90 transition-all duration-300 border border-neutral-200/40 group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex flex-col items-center justify-center gap-1 mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce delay-75" />
                    <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce delay-150" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce" />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Consistent cross-device experience
                </h4>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Uncompromising ethics and dedicated customer service. We pride ourselves on transparent
                  communication, certified quality assurance, and remaining our clients&apos; enduring first choice
                  across all platforms and touchpoints.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/40 flex items-center text-xs font-semibold text-neutral-500 tracking-wider uppercase">
                <span>Pillar 03 • Integrity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Learn More link */}
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors group"
            >
              <span>View Leadership Note &amp; Full Sourcing Scope</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
