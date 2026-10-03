import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES, getCategoryProductCount } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 120,
    },
  },
};

export default function CategoriesSection({ title = 'Explore a Wide Range of Categories' }) {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-zinc-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* 12 Categories Grid: 2 rows of 6 on desktop, 3 rows of 4 on tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 lg:gap-x-6 gap-y-8 sm:gap-y-10 justify-items-center max-w-7xl mx-auto"
        >
          {CATEGORIES.map((cat) => (
            <motion.article
              key={cat.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="w-full max-w-[160px]"
            >
              <Link
                to={`/category/${cat.id}`}
                aria-label={`Browse ${cat.name} supplies`}
                className="group flex flex-col items-center text-center focus:outline-none w-full"
              >
                {/* Circular category image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-zinc-200/90 shadow-sm group-hover:border-zinc-900 group-hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white flex items-center justify-center p-1">
                  <img
                    src={cat.image}
                    alt={`${cat.name} Industrial Equipment & Supplies`}
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Category title */}
                <span className="mt-3 text-xs sm:text-sm lg:text-[15px] font-bold text-zinc-800 group-hover:text-zinc-950 transition-colors duration-200 leading-snug">
                  {cat.name}
                </span>

                {/* Product count */}
                <span className="mt-1 text-[11.5px] sm:text-xs text-zinc-500 font-medium group-hover:text-zinc-700 transition-colors">
                  {getCategoryProductCount(cat.id)} Products
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
