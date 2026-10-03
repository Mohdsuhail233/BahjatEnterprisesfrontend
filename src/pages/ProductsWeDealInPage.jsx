import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductsAndBrandsWeDealIn from '../components/ProductsAndBrandsWeDealIn';

export default function ProductsWeDealInPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Products & Brands We Deal In | Bahjat Enterprises"
        description="Explore the complete range of engineering materials, sheets, rods, process instrumentation, and 130+ global industrial brands supplied by Bahjat Enterprises across international markets."
        keywords="products we deal in, brands we deal in, engineering plastics, acrylic sheet, bakelite, ptfe component, flowmeter, pressure transmitter, industrial brands"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Products & Brands We Deal In - Bahjat Enterprises",
          "description": "Comprehensive list of major products and international brands supplied by Bahjat Enterprises."
        }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-zinc-100/60 border-b border-zinc-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
            <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-zinc-900 font-semibold" aria-current="page">Products &amp; Brands We Deal In</span>
          </nav>
        </div>
      </div>

      {/* Main Content Component */}
      <ProductsAndBrandsWeDealIn isFullPage={true} />
    </div>
  );
}
