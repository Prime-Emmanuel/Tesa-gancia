import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LazyImage } from '../common/LazyImage';
import { Button } from '../ui/Button';

export interface MasonryGalleryProps {
  limit?: number;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ limit }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(limit || 6);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const filteredItems = t.gallery.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const navigatePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const navigateNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, closeLightbox, navigatePrev, navigateNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigateNext();
      } else {
        navigatePrev();
      }
    }
  };

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {t.gallery.filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 sm:px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 border cursor-pointer rounded-sm ${
                isActive
                  ? 'border-[#7B2CBF] bg-[#7B2CBF] text-white shadow-md font-bold'
                  : 'border-[#EADBFA] bg-white text-[#6C5B82] hover:border-[#7B2CBF] hover:text-[#7B2CBF]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      {visibleItems.length === 0 ? (
        <div className="py-16 text-center text-sm text-[#6C5B82] font-sans">
          {t.gallery.noResults}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden bg-white border border-[#EADBFA] shadow-[0_8px_30px_rgba(123,44,191,0.06)] hover:border-[#7B2CBF] transition-all duration-500 cursor-pointer rounded-sm"
            >
              <div className="overflow-hidden aspect-[4/3] relative">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  aspectRatio="4/3"
                  className="group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0833] via-[#1C0833]/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] bg-white/95 text-[#260C45] font-bold backdrop-blur-sm shadow-sm rounded-xs">
                    {item.location}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#E0AAFF] font-sans block mb-1 font-semibold">
                    {item.year} • {item.guests}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-[#E0AAFF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <Button
            type="button"
            onClick={handleLoadMore}
            variant="secondary"
            size="md"
          >
            {t.gallery.loadMore} ({filteredItems.length - visibleCount} restants)
          </Button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-[#1C0833]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C77DFF] font-sans font-bold">
              {(selectedImageIndex ?? 0) + 1} {t.gallery.counterOf} {filteredItems.length}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 min-h-[44px] min-w-[44px] text-white/80 hover:text-white border border-[#521C94] bg-[#260C45] flex items-center justify-center transition-colors cursor-pointer rounded-sm"
              aria-label="Fermer la vue agrandie"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Central Image with Arrows */}
          <div className="relative my-auto flex items-center justify-center max-w-5xl mx-auto w-full">
            <button
              type="button"
              onClick={navigatePrev}
              className="absolute left-2 sm:-left-12 z-20 p-2 min-h-[44px] min-w-[44px] bg-[#260C45]/85 border border-[#521C94] text-white hover:text-[#C77DFF] flex items-center justify-center transition-colors cursor-pointer rounded-sm"
              aria-label="Image précédente"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="relative max-h-[70vh] max-w-full overflow-hidden border border-[#521C94] shadow-2xl rounded-sm">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <button
              type="button"
              onClick={navigateNext}
              className="absolute right-2 sm:-right-12 z-20 p-2 min-h-[44px] min-w-[44px] bg-[#260C45]/85 border border-[#521C94] text-white hover:text-[#C77DFF] flex items-center justify-center transition-colors cursor-pointer rounded-sm"
              aria-label="Image suivante"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="text-center z-10 max-w-2xl mx-auto w-full pt-4">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-1">
              {currentItem.title}
            </h3>
            <p className="text-xs text-[#E0AAFF] uppercase tracking-[0.18em] mb-2 font-sans font-semibold">
              {currentItem.location} • {currentItem.year} • {currentItem.guests}
            </p>
            <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
              {currentItem.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
