import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LazyImage } from '../common/LazyImage';

export interface MasonryGalleryProps {
  limit?: number;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ limit }) => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // All gallery items without any filter tag restrictions
  const allItems = t.gallery.items;
  // If limit is specified (e.g. home page preview), take that amount; otherwise show all with continuous scroll
  const displayItems = limit ? allItems.slice(0, limit) : allItems;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const navigatePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : displayItems.length - 1
    );
  }, [selectedImageIndex, displayItems.length]);

  const navigateNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < displayItems.length - 1 ? prev! + 1 : 0
    );
  }, [selectedImageIndex, displayItems.length]);

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

  const currentItem = selectedImageIndex !== null ? displayItems[selectedImageIndex] : null;

  return (
    <div className="w-full">
      {/* Stylish Cards Grid - Pure Images Only (No Tags, No Text, No Descriptions) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-2xl bg-white border border-[#EADBFA]/80 shadow-[0_6px_24px_rgba(123,44,191,0.06)] hover:shadow-[0_20px_45px_rgba(123,44,191,0.18)] hover:border-[#7B2CBF] transition-all duration-500 cursor-pointer transform hover:-translate-y-1.5"
            role="button"
            tabIndex={0}
            aria-label={`Agrandir l'image ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            {/* Image Container with Elegant Aspect Ratio */}
            <div className="overflow-hidden aspect-[4/3] relative bg-[#FAF5FE]">
              <LazyImage
                src={item.image}
                alt={`Réalisation Tesa Gancia ${index + 1}`}
                aspectRatio="4/3"
                className="group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Ultra-subtle luxury violet overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#260C45]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Minimalist Glassmorphism Expand Icon Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-[#7B2CBF] shadow-lg flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-[#EADBFA]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal - Pure Clean Visual Presentation */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vue agrandie de l'image"
          className="fixed inset-0 z-50 bg-[#1C0833]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C77DFF] font-sans font-bold">
              {String((selectedImageIndex ?? 0) + 1).padStart(2, '0')} / {String(displayItems.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2.5 min-h-[44px] min-w-[44px] text-white/90 hover:text-white border border-[#521C94] bg-[#260C45] hover:bg-[#32174D] flex items-center justify-center transition-colors cursor-pointer rounded-xl shadow-md"
              aria-label="Fermer la vue agrandie"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Central Full View Image with Sleek Navigation */}
          <div className="relative my-auto flex items-center justify-center max-w-5xl mx-auto w-full">
            <button
              type="button"
              onClick={navigatePrev}
              className="absolute left-2 sm:-left-14 z-20 p-3 min-h-[44px] min-w-[44px] bg-[#260C45]/90 hover:bg-[#32174D] border border-[#521C94] text-white hover:text-[#C77DFF] flex items-center justify-center transition-colors cursor-pointer rounded-full shadow-lg"
              aria-label="Image précédente"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="relative max-h-[80vh] max-w-full overflow-hidden border border-[#521C94]/60 shadow-2xl rounded-2xl bg-black/40">
              <img
                src={currentItem.image}
                alt="Réalisation Tesa Gancia"
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <button
              type="button"
              onClick={navigateNext}
              className="absolute right-2 sm:-right-14 z-20 p-3 min-h-[44px] min-w-[44px] bg-[#260C45]/90 hover:bg-[#32174D] border border-[#521C94] text-white hover:text-[#C77DFF] flex items-center justify-center transition-colors cursor-pointer rounded-full shadow-lg"
              aria-label="Image suivante"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Bottom spacer for balance */}
          <div className="py-2" />
        </div>
      )}
    </div>
  );
};
