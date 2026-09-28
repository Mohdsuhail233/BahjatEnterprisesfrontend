import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, WHATSAPP_NUMBER } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f8f9fa] pt-12 sm:pt-16 pb-8 overflow-hidden relative border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Card Container */}
        <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-zinc-200/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] p-7 sm:p-10 lg:p-14 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Brand Column */}
            <div className="lg:col-span-5 space-y-5">
              {/* Brand Logo */}
              <Link to="/" className="inline-flex items-center group">
                <img
                  src="/logo/logo.png"
                  alt={COMPANY_NAME}
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Logo/Bahjat Enterprises Horizontal PNG.png';
                  }}
                />
              </Link>

              {/* Tagline / Mission */}
              <p className="text-zinc-500 text-xs sm:text-[13.5px] leading-relaxed max-w-sm">
                Bahjat Enterprises empowers industrial, engineering, healthcare, and infrastructure projects with certified procurement across electrical, surgical, plumbing, and precision hardware supplies.
              </p>

              {/* Social / Contact Icons */}
              <div className="flex items-center gap-2 pt-1">
                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>

              {/* Department Inquiries & Phone */}
              <div className="pt-4 border-t border-zinc-200/80 space-y-2.5 max-w-md">
                <span className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                  Official Inquiries
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-[13px] font-bold text-zinc-600 w-20 flex-shrink-0">Phone / WA:</span>
                  <a href="tel:+919599828365" className="text-sm sm:text-[14.5px] text-zinc-900 hover:text-blue-600 font-semibold transition-colors underline-offset-2 hover:underline">
                    +91 95998 28365
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-[13px] font-bold text-zinc-600 w-20 flex-shrink-0">Sales:</span>
                  <a href="mailto:sales@bahjatenterprises.com" className="text-sm sm:text-[14.5px] text-zinc-900 hover:text-blue-600 font-semibold transition-colors underline-offset-2 hover:underline truncate">
                    sales@bahjatenterprises.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-[13px] font-bold text-zinc-600 w-20 flex-shrink-0">Marketing:</span>
                  <a href="mailto:marketing@bahjatenterprises.com" className="text-sm sm:text-[14.5px] text-zinc-900 hover:text-blue-600 font-semibold transition-colors underline-offset-2 hover:underline truncate">
                    marketing@bahjatenterprises.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-[13px] font-bold text-zinc-600 w-20 flex-shrink-0">Accounts:</span>
                  <a href="mailto:accounts@bahjatenterprises.com" className="text-sm sm:text-[14.5px] text-zinc-900 hover:text-blue-600 font-semibold transition-colors underline-offset-2 hover:underline truncate">
                    accounts@bahjatenterprises.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Link Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Product */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider mb-3.5">
                  Product
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-500">
                  <li>
                    <Link to="/category/electrical" className="hover:text-zinc-950 transition-colors">
                      Electrical
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/plumbing" className="hover:text-zinc-950 transition-colors">
                      Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/surgical" className="hover:text-zinc-950 transition-colors">
                      Surgical & Medical
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/instrumentation" className="hover:text-zinc-950 transition-colors">
                      Instrumentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/hardware" className="hover:text-zinc-950 transition-colors">
                      Hardware & Fasteners
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/tools" className="hover:text-zinc-950 transition-colors">
                      Tools & Equipment
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider mb-3.5">
                  Resources
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-500">
                  <li>
                    <Link to="/categories" className="hover:text-zinc-950 transition-colors">
                      All Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="hover:text-zinc-950 transition-colors">
                      Product Catalog
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Bahjat%20Enterprises,%20I%20would%20like%20to%20request%20an%20RFQ%20quotation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      Instant RFQ Desk
                    </a>
                  </li>
                  <li>
                    <Link to="/category/electrical" className="hover:text-zinc-950 transition-colors">
                      Priority Stock
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-zinc-950 transition-colors">
                      Quality Standards
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider mb-3.5">
                  Company
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-500">
                  <li>
                    <Link to="/about" className="hover:text-zinc-950 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-zinc-950 transition-colors">
                      Leadership & Vision
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      WhatsApp Desk
                    </a>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-zinc-950 transition-colors">
                      Partners & Supply
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Divider & Bottom Sub-bar */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-normal">
            <p>
              © {currentYear} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-5 sm:gap-7">
              <Link to="/about" className="hover:text-zinc-700 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-zinc-700 transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="hover:text-zinc-700 transition-colors">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Faded Watermark Underneath the Card */}
      <div 
        className="relative -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20 overflow-hidden pointer-events-none select-none text-center"
        aria-hidden="true"
      >
        <span className="text-[13vw] sm:text-[14vw] font-black tracking-tighter text-zinc-900/[0.04] leading-none block whitespace-nowrap">
          bahjat
        </span>
      </div>
    </footer>
  );
}
