import React from 'react';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    // If total pages is small, show all
    if (totalPages <= 8) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Near the start
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 6, '...', totalPages];
    }

    // Near the end
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    // In the middle
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pages = getPageNumbers();

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Products Pagination"
      className={`flex items-center justify-center gap-1.5 sm:gap-2 select-none flex-wrap py-6 ${className}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-md ${
          currentPage === 1
            ? 'text-zinc-300 cursor-not-allowed'
            : 'text-blue-600 hover:text-blue-800 cursor-pointer active:scale-95'
        }`}
      >
        <span aria-hidden="true">&lsaquo;</span>
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-7 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm text-zinc-400 font-medium"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={`page-${page}`}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={isActive ? 'page' : undefined}
              className={`w-7 h-8 sm:w-9 sm:h-9 rounded-md border text-xs sm:text-sm font-medium flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-100/80 border-blue-600 text-blue-700 font-semibold shadow-xs ring-1 ring-blue-600/30'
                  : 'bg-white border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 active:scale-95'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-md ${
          currentPage === totalPages
            ? 'text-zinc-300 cursor-not-allowed'
            : 'text-blue-600 hover:text-blue-800 cursor-pointer active:scale-95'
        }`}
      >
        <span>Next</span>
        <span aria-hidden="true">&rsaquo;</span>
      </button>
    </nav>
  );
}
