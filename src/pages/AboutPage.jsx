import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_NAME, WHATSAPP_NUMBER } from '../data';

// Brands listed in the Excel files (Electrical & Industrial Tools)
const MAJOR_BRANDS = [
  'ABB', 'Schneider Electric', 'Siemens', 'Fluke', 'Honeywell', 'Bosch',
  'Allen Bradley', 'Omron', 'Parker', 'WIKA', '3M', 'Makita',
  'Stanley', 'Rosemount', 'Emerson', 'SKF', 'DeWalt', 'Swagelok',
  'Hilti', 'Mitutoyo', 'Knipex', 'Insize', 'Taparia', 'JK Files',
  'Anest Iwata', 'DeVilbiss', 'Ingco', 'SATA', 'Super Ego', 'Tramontina',
  'Mennekes', 'Masibus', 'Bussmann', 'Druck', 'Metabo', 'LPS', 'Olfa', 'Caparo'
];

// Plastic Industry Materials from Excel
const PLASTIC_MATERIALS = [
  { name: 'Acrylic Sheet & Rods', desc: 'Optical clarity, weather resistance and fabrication ease' },
  { name: 'Polycarbonate Sheet & Rod', desc: 'High impact strength, flame retardant & UV stabilized' },
  { name: 'Delrin (POM) Sheet & Rod', desc: 'High stiffness, low friction and dimensional stability' },
  { name: 'PTFE / Teflon (Sheets, Rods & Bush)', desc: 'Exceptional chemical resistance & thermal stability' },
  { name: 'Cast Nylon & HDPE Sheets', desc: 'Wear-resistant, high tensile strength engineering polymers' },
  { name: 'Bakelite & Hylam Sheets', desc: 'Electrical insulation and high mechanical rigidity' },
  { name: 'UHMWPE & PEEK Rods', desc: 'Extreme wear resistance and high-temp performance' },
  { name: 'PVC Curtains & Flexible Sheets', desc: 'Industrial climate control, dust & acoustic barriers' },
  { name: 'Glass Epoxy Sheets & Tubes', desc: 'Superior dielectric strength for electrical assemblies' },
  { name: 'Silicon & PU Polyurethane', desc: 'Elasticity, abrasion resistance and vibration dampening' },
];

// International Market Categories from Excel
const INTERNATIONAL_PORTFOLIO = [
  'Pneumatic Valves & Cylinders',
  'Electromagnetic Flowmeters',
  'Pressure Transmitters',
  'Temperature Sensors & Probes',
  'Ultrasonic Level Transmitters',
  'Combustion & Gas Analyzers',
  'Circuit & Load Protection',
  'Modular DIN Rail Products',
  'Hydraulic Power Units',
  'Low Voltage Controlgear',
  'Scientific & Lab Instrumentation',
  'Highbay Industrial LED Light'
];

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

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('plastics');

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: HERO & INTRODUCTION                        */}
      {/* ---------------------------------------------------- */}
      <section className="pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 sm:mb-8 font-sans">
            About Bahjat Enterprises
          </h1>

          {/* Description Paragraphs */}
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

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: CONCEPT & LOGIC                           */}
        {/* ---------------------------------------------------- */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 text-center mb-10 sm:mb-12"
          >
            Concept &amp; logic
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* CARD 1: 1 Dot */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="bg-[#f4f4f6] rounded-[28px] p-8 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:bg-neutral-100/90 transition-all duration-300 border border-neutral-200/40 group"
            >
              <div>
                {/* Dot Badge */}
                <div className="relative w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex items-center justify-center mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <span className="absolute w-6 h-6 rounded-full bg-neutral-900/15 animate-ping" />
                  <span className="w-3 h-3 rounded-full bg-neutral-900" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Guided first impression
                </h3>

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

            {/* CARD 2: 2 Dots */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="bg-[#f4f4f6] rounded-[28px] p-8 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:bg-neutral-100/90 transition-all duration-300 border border-neutral-200/40 group"
            >
              <div>
                {/* 2 Dots Badge */}
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex items-center justify-center gap-2 mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse delay-150" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Motion as product navigation
                </h3>

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
                {/* 3 Dots Badge */}
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-200/60 flex flex-col items-center justify-center gap-1 mb-8 sm:mb-10 group-hover:scale-105 transition-transform">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce delay-75" />
                    <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce delay-150" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                  Consistent cross-device experience
                </h3>

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
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: MESSAGE FROM DIRECTOR (WHITE CLEAN THEME) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-white text-neutral-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/70">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-neutral-900"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-semibold">Leadership Note</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-8">
            Message From The Director
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              <blockquote className="text-xl sm:text-2xl font-light text-neutral-900 italic border-l-2 border-neutral-900 pl-4 py-1 leading-snug">
                &ldquo;Our key strategic imperative is to shift our focus in providing solutions to the end-users rather than only items. We pride ourselves on being the customer&apos;s FIRST CHOICE.&rdquo;
              </blockquote>

              <p>
                For the last few years, <strong className="text-neutral-900">Bahjat Enterprises</strong> has provided the Indian and international markets with building and industrial material solutions, maximizing value for our customers. In the region, we have witnessed consistent growth, achieved long-term success, and navigated challenging times.
              </p>

              <p>
                The measure of any trading house is how well it reacts to changes in the market and in the world at large. As one of the most prominent trading partners, Bahjat Enterprises has not only reacted to volatile conditions, but excelled at discovering opportunities where others see turmoil.
              </p>

              <p>
                When it comes to ethics and integrity, there can be no compromises, no excuses. Integrity, honesty, competency, collaboration, creativity, and respect — these values have defined Bahjat Enterprises since our founding.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#f8f9fa] border border-neutral-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs overflow-hidden">
              <div>
                {/* Founder Photo */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 border border-neutral-200/80 bg-neutral-100 shadow-xs group">
                  <img
                    src="/founder.jpeg"
                    alt="Bahjat Hanif - Founder & Managing Director"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                      Founder
                    </span>
                    <span className="text-[10px] text-neutral-300 font-medium tracking-wide">
                      Bahjat Enterprises
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 mb-0.5">Bahjat Hanif</h4>
                <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-5">Founder &amp; Managing Director</p>

                <div className="space-y-3 pt-4 border-t border-neutral-200/80 text-xs text-neutral-500">
                  <div>
                    <span className="block text-neutral-400 uppercase tracking-wider text-[10px]">Mission</span>
                    <span className="text-neutral-800 font-medium">To be the Customer&apos;s First Choice</span>
                  </div>
                  <div>
                    <span className="block text-neutral-400 uppercase tracking-wider text-[10px]">Vision</span>
                    <span className="text-neutral-800 font-medium">Customer experience second to none</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/80">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Mr. Bahjat Hanif, I would like to schedule a business discussion.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Connect with Director</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Core Values Pills */}
          <div className="mt-12 pt-8 border-t border-neutral-200/80">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4 text-center sm:text-left">
              Our Core Guiding Values
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {['Integrity', 'Honesty', 'Competency', 'Collaboration', 'Creativity', 'Respect'].map((val, idx) => (
                <span
                  key={idx}
                  className="bg-[#f8f9fa] border border-neutral-200/90 text-neutral-700 px-4 py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: INDUSTRIAL SCOPE & MATERIALS (EXCEL DATA) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full mb-3">
            Product &amp; Sourcing Scope
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Specialized Industrial Portfolio
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2">
            Comprehensive range of engineering polymers, raw materials, and precision instrumentation dealing in domestic and international markets.
          </p>

          {/* Toggle buttons */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-2xl mt-6 border border-neutral-200/70 shadow-inner">
            <button
              onClick={() => setActiveTab('plastics')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                activeTab === 'plastics'
                  ? 'bg-white text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Plastic &amp; Engineering Materials
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                activeTab === 'international'
                  ? 'bg-white text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              International Systems &amp; Devices
            </button>
          </div>
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'plastics' ? (
            <motion.div
              key="plastics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {PLASTIC_MATERIALS.map((mat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="p-5 rounded-2xl border border-neutral-200/80 bg-white hover:border-neutral-900 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      <span>Engineering Grade</span>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-base mb-1">{mat.name}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{mat.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 font-medium">Sheets, Rods &amp; Custom Bush</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I would like to inquire about specifications and pricing for ${mat.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 inline-flex items-center gap-1 transition-colors group"
                    >
                      <span>Inquire</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="international"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {INTERNATIONAL_PORTFOLIO.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="p-4 rounded-xl border border-neutral-200/80 bg-white hover:border-neutral-900 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-neutral-800 leading-snug">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: BRANDS WE DEAL WITH (EXCEL DATA)          */}
      {/* ---------------------------------------------------- */}
      <section className="bg-neutral-50 border-t border-neutral-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold block mb-2">
              Global Sourcing Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Major Brands We Deal In
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Supplying premier electrical, mechanical, instrumentation, and automation equipment from world-class manufacturers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {MAJOR_BRANDS.map((brand, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="px-4 py-2 bg-white border border-neutral-200/80 hover:border-neutral-900 rounded-xl text-xs sm:text-sm font-semibold text-neutral-700 shadow-2xs hover:shadow-md transition-all hover:text-neutral-950 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
            <span className="px-4 py-2 bg-neutral-900 border border-neutral-900 rounded-xl text-xs sm:text-sm font-bold text-white shadow-sm">
              + Many More
            </span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: INQUIRY & CONTACT CALL TO ACTION          */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-[#f8f9fa] border border-neutral-200/90 text-neutral-900 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight text-neutral-900">
            Ready to Partner With Us?
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            We would love the opportunity to discuss how we can support and empower your industrial supply, sales, and procurement goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Bahjat Enterprises, I would like to schedule a call / meeting to discuss our product requirements.')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Call or Meeting</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/categories"
                className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-800 font-medium text-sm px-6 py-3 rounded-xl transition-colors border border-neutral-300 inline-flex items-center justify-center shadow-xs"
              >
                Explore Products Catalog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
