import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CategoriesSection from '../components/CategoriesSection';
import ProductCard from '../components/ProductCard';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import heroImage from '../assets/hero.png';
import heroMobileImage from '../assets/hero-mobile.png';
import { FEATURED_PRODUCTS } from '../data';

// Pick 8 featured products for the home page (2 rows of 4 cards)
const homeProducts = [
  ...(FEATURED_PRODUCTS['electrical'] || []).slice(0, 1),
  ...(FEATURED_PRODUCTS['tools'] || []).slice(0, 2),
  ...(FEATURED_PRODUCTS['hardware'] || []).slice(0, 1),
  ...(FEATURED_PRODUCTS['safety'] || []).slice(0, 1),
  ...(FEATURED_PRODUCTS['fasteners'] || []).slice(0, 1),
  ...(FEATURED_PRODUCTS['plumbing'] || []).slice(0, 1),
  ...(FEATURED_PRODUCTS['instrumentation'] || []).slice(0, 1),
];

export default function Home() {
  return (
    <div>
      {/* Hero Banner Section (Responsive: Vertical on Mobile, Wide on Desktop) */}
      <section className="w-full bg-[#18181b] overflow-hidden shadow-sm">
        <div className="max-w-[1920px] mx-auto">
          <Link to="/categories" className="block focus:outline-none group" title="Explore Our Products">
            <picture>
              <source media="(max-width: 640px)" srcSet={heroMobileImage} />
              <motion.img
                src={heroImage}
                alt="Bahjat Enterprises - Supplying Solutions For A Stronger Tomorrow"
                className="w-full h-auto block transform group-hover:scale-[1.008] transition-transform duration-700 ease-out"
                loading="eager"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </picture>
          </Link>
        </div>
      </section>

      {/* Explore Categories Section (12 Circular Categories) */}
      <CategoriesSection title="Explore a Wide Range of Categories" />

      {/* Featured Products */}
      {homeProducts.length > 0 && (
        <section className="bg-white py-12 sm:py-16 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                Featured Products
              </h2>
              <Link
                to="/categories"
                className="group text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
              >
                <span>View All Products</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
              {homeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Industries We Serve Section */}
      <IndustriesWeServe />

      {/* About Us Section */}
      <AboutSection />
    </div>
  );
}
