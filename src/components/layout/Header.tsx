import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 30;
  const mobileMenuRef = useFocusTrap(isMobileMenuOpen, () => setIsMobileMenuOpen(false));

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.portfolio, path: '/portfolio' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.process, path: '/process' },
    { label: t.nav.locations, path: '/locations' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const BRAND_LOGO_URL = 'https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg';

  return (
    <>
      {/* Accessible Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-[#7B2CBF] text-white text-xs uppercase font-semibold tracking-wider shadow-lg"
      >
        {language === 'fr' ? 'Passer au contenu principal' : 'Skip to main content'}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#EADBFA] py-2.5 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-[#EADBFA]/50'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo ONLY (no text, no name near it or under it, as strictly requested) */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center group cursor-pointer focus-visible:outline-offset-4"
            aria-label="Tesa Gancia"
          >
            <div className="h-10 sm:h-12 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={BRAND_LOGO_URL}
                alt="Logo Tesa Gancia"
                className="h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-[140px] object-contain rounded-md"
                loading="eager"
                decoding="sync"
              />
            </div>
          </Link>

          {/* Desktop Navigation in White and Violet (no gold) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs uppercase tracking-[0.18em] py-2 transition-colors duration-200 font-sans ${
                    isActive ? 'text-[#7B2CBF] font-semibold' : 'text-[#220A3D] hover:text-[#7B2CBF]'
                  }`}
                >
                  {link.label}
                  {/* Clean Violet Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#7B2CBF] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Header Utilities: Language toggle + Violet Quote CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher in White and Violet */}
            <div className="flex items-center border border-[#EADBFA] bg-[#FAF5FE] px-2 py-1 text-xs uppercase tracking-[0.14em] rounded-sm">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
                  language === 'fr'
                    ? 'text-white bg-[#7B2CBF] font-semibold'
                    : 'text-[#6C5B82] hover:text-[#220A3D]'
                }`}
                aria-label="Passer en Français"
                aria-pressed={language === 'fr'}
              >
                FR
              </button>
              <span className="text-[#EADBFA] mx-0.5">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
                  language === 'en'
                    ? 'text-white bg-[#7B2CBF] font-semibold'
                    : 'text-[#6C5B82] hover:text-[#220A3D]'
                }`}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>

            {/* Request a Quote CTA in Violet */}
            <Button to="/contact" size="sm" variant="violet">
              {t.nav.requestQuote}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile language toggle */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="text-xs uppercase tracking-widest text-[#7B2CBF] font-semibold border border-[#EADBFA] bg-[#FAF5FE] px-2.5 py-1.5 min-h-[38px] cursor-pointer rounded-sm"
              aria-label={`Changer de langue vers ${language === 'fr' ? 'Anglais' : 'Français'}`}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#220A3D] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#EADBFA] bg-[#FAF5FE] hover:border-[#7B2CBF] transition-colors cursor-pointer rounded-sm"
              aria-label={t.nav.menu}
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="9" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation in White & Violet */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation mobile"
          className="fixed inset-0 z-50 bg-white text-[#220A3D] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-in fade-in duration-300"
        >
          {/* Top Bar of Mobile Menu: ONLY logo */}
          <div className="flex items-center justify-between border-b border-[#EADBFA] pb-5">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <img
                src={BRAND_LOGO_URL}
                alt="Logo Tesa Gancia"
                className="h-11 w-auto max-w-[120px] object-contain rounded-md"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 min-h-[44px] min-w-[44px] text-[#6C5B82] hover:text-[#220A3D] border border-[#EADBFA] flex items-center justify-center cursor-pointer rounded-sm"
              aria-label={t.nav.close}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links List in Violet */}
          <nav className="my-auto py-8 flex flex-col gap-5 sm:gap-6" aria-label="Menu mobile">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`font-serif text-2xl sm:text-3xl tracking-wide transition-all duration-200 flex items-center justify-between py-1.5 border-b border-[#FAF5FE] ${
                    isActive ? 'text-[#7B2CBF] pl-2 font-semibold' : 'text-[#220A3D] hover:text-[#7B2CBF]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#7B2CBF] font-sans tracking-widest font-semibold">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer with Quote CTA in Violet */}
          <div className="pt-6 border-t border-[#EADBFA] flex flex-col gap-3">
            <Button
              to="/contact"
              onClick={handleLinkClick}
              variant="violet"
              className="w-full py-4 text-center"
            >
              {t.nav.requestQuote}
            </Button>

            <Button
              href="https://wa.me/237655493685"
              external
              variant="secondary"
              className="w-full py-3 text-center"
            >
              WhatsApp (+237 655 493 685)
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#6C5B82] pt-2 font-sans">
              <p>Douala • Yaoundé • Bafoussam</p>
              <a
                href="tel:+237655493685"
                className="text-[#7B2CBF] font-medium hover:underline"
              >
                +237 655 493 685
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
