import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const location = useLocation();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="h-full flex flex-col"
    >
      <Link
        to={`/product/${product.id}`}
        state={{ from: `${location.pathname}${location.search}` }}
        aria-label={`View ${product.name} specifications and inquiry`}
        className="group flex flex-col h-full focus:outline-none"
      >
        {/* Image Card */}
        <div className="bg-white rounded-2xl border border-zinc-200/90 group-hover:border-zinc-400 group-hover:shadow-lg overflow-hidden transition-all duration-300 mb-3 relative">
          <div className="flex items-center justify-center aspect-square overflow-hidden p-4 sm:p-6 bg-zinc-50/50">
            {product.image ? (
              <img
                src={product.image}
                alt={`${product.name} - Industrial Supply | Bahjat Enterprises`}
                className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 rounded-xl bg-gradient-to-b from-zinc-50 to-zinc-100/60 border border-dashed border-zinc-200 group-hover:border-zinc-300 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-zinc-200/70 flex items-center justify-center text-zinc-500 mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-zinc-700 uppercase tracking-wider line-clamp-1 mb-0.5">
                  Specification Sheet
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Technical Spec Sheet
                </span>
              </div>
            )}
          </div>
          {/* Subtle sheen highlight */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/5 via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 px-0.5">
          {/* Sub-Category Badge */}
          {product.subCategory && (
            <div className="flex items-center gap-1 mb-1.5">
              <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 truncate">
                {product.subCategory}
              </span>
            </div>
          )}

          {/* Product Title */}
          <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 group-hover:text-zinc-950 leading-snug mb-3 line-clamp-2 transition-colors">
            {product.name}
          </h3>

          {/* Enquire Button */}
          <div className="mt-auto pt-1">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white rounded-full px-4 py-1.5 transition-all duration-200 shadow-2xs group-hover:shadow"
            >
              <svg className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Enquire</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
