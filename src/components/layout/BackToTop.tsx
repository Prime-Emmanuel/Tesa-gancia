import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../i18n/LanguageContext';

export const BackToTop: React.FC = () => {
  const scrollY = useScrollPosition();
  const { t } = useLanguage();
  const isVisible = scrollY > 600;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.floating.backToTop}
      className="fixed bottom-22 right-6 z-30 w-11 h-11 bg-white border border-[#EADBFA] text-[#7B2CBF] shadow-[0_4px_20px_rgba(123,44,191,0.18)] flex items-center justify-center transition-all duration-300 hover:bg-[#7B2CBF] hover:text-white hover:-translate-y-1 cursor-pointer rounded-full"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};
