import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const BRAND_LOGO_PRIMARY = '/logo.jpg';
  const BRAND_LOGO_FALLBACK = 'https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg';

  return (
    <footer className="bg-[#1C0833] border-t border-[#3E1570] text-white relative overflow-hidden">
      {/* Decorative subtle ambient violet glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2CBF]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="h-12 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={BRAND_LOGO_PRIMARY}
                  alt="Logo Tesa Gancia"
                  className="h-12 w-auto max-w-[140px] object-contain rounded-md"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== BRAND_LOGO_FALLBACK) {
                      target.src = BRAND_LOGO_FALLBACK;
                    }
                  }}
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-sans">
              {t.footer.brandTagline}
            </p>

            <div className="flex items-center gap-4 text-[#C77DFF]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#521C94] bg-[#260C45] flex items-center justify-center hover:border-[#9D4EDD] hover:text-white transition-colors"
                aria-label="Tesa Gancia sur Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#521C94] bg-[#260C45] flex items-center justify-center hover:border-[#9D4EDD] hover:text-white transition-colors"
                aria-label="Tesa Gancia sur Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@tesagancia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#521C94] bg-[#260C45] flex items-center justify-center hover:border-[#9D4EDD] hover:text-white transition-colors"
                aria-label="Tesa Gancia Events and Gifts sur TikTok"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.96-4.51V8.9a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-.95-.33z"/>
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/237655493685"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#521C94] bg-[#260C45] flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                aria-label="Tesa Gancia sur WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.67-.7c.974.553 1.761.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.182-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.745 0-3.376-.452-4.808-1.246l-5.192 1.36 1.393-5.088c-.896-1.488-1.393-3.218-1.393-5.026 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0AAFF] mb-5 font-sans">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans">
              <li>
                <Link to="/" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.locations}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/75 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Real Services & Gifts from Flyer */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0AAFF] mb-5 font-sans">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/services#organisation-evenementielle" className="hover:text-white transition-colors">
                  {language === 'fr' ? '01. Organisation Événementielle' : '01. Event Planning & Logistics'}
                </Link>
              </li>
              <li>
                <Link to="/services#decoration-scenographie" className="hover:text-white transition-colors">
                  {language === 'fr' ? '02. Décoration & Scénographie' : '02. Decoration & Balloon Scenography'}
                </Link>
              </li>
              <li>
                <Link to="/services#livraison-gateaux" className="hover:text-white transition-colors">
                  {language === 'fr' ? '03. Livraison de Gâteaux Toutes Occasions' : '03. Celebration Cake Delivery'}
                </Link>
              </li>
              <li>
                <Link to="/services#location-materiel" className="hover:text-white transition-colors">
                  {language === 'fr' ? '04. Location (Chaises, Tables, Couverts...)' : '04. Equipment Rental (Chairs, Tables)'}
                </Link>
              </li>
              <li>
                <Link to="/services#hotesses-stewards" className="hover:text-white transition-colors">
                  {language === 'fr' ? '05. Hôtesses et Stewards' : '05. Hostesses and Stewards'}
                </Link>
              </li>
              <li>
                <Link to="/services#bouquet-argent" className="hover:text-white transition-colors text-[#E0AAFF]">
                  {language === 'fr' ? '06. Bouquet d’Argent (dès 10.000 CFA)' : '06. Cash Bouquet (from 10,000 CFA)'}
                </Link>
              </li>
              <li>
                <Link to="/services#bouquet-fleurs" className="hover:text-white transition-colors">
                  {language === 'fr' ? '07. Bouquet de Fleurs Fraîches' : '07. Fresh Floral Bouquets'}
                </Link>
              </li>
              <li>
                <Link to="/services#box-chocolat" className="hover:text-white transition-colors">
                  {language === 'fr' ? '08. Box Chocolat & Gâteau d’Argent' : '08. Chocolate Boxes & Money Cakes'}
                </Link>
              </li>
              <li>
                <Link to="/services#tasse-personnalisee" className="hover:text-white transition-colors">
                  {language === 'fr' ? '09. Tasses & Montres Personnalisées' : '09. Personalized Mugs & Watches'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices & Phone Lines */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0AAFF] mb-5 font-sans">
              {t.footer.locationsTitle}
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/75 font-sans">
              <div className="border-l-2 border-[#7B2CBF] pl-3">
                <span className="text-white font-medium block">Douala (Siège & Showroom)</span>
                <span className="text-[11px] block text-white/60">Bonanjo, Boulevard de la Liberté</span>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:+237655493685" className="text-[#E0AAFF] hover:underline font-semibold">
                    +237 655 493 685
                  </a>
                  <a
                    href="https://wa.me/237655493685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-[10px] uppercase tracking-wider hover:underline font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-[#7B2CBF] pl-3">
                <span className="text-white font-medium block">Yaoundé</span>
                <span className="text-[11px] block text-white/60">Bastos, Avenue Jean-Paul II</span>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:+237651748836" className="text-[#E0AAFF] hover:underline font-semibold">
                    +237 651 748 836
                  </a>
                  <a
                    href="https://wa.me/237651748836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-[10px] uppercase tracking-wider hover:underline font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-[#7B2CBF] pl-3">
                <span className="text-white font-medium block">Bafoussam</span>
                <span className="text-[11px] block text-white/60">Centre-ville, Antenne Ouest</span>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:+237655493685" className="text-[#E0AAFF] hover:underline font-semibold">
                    +237 655 493 685
                  </a>
                  <a
                    href="https://wa.me/237655493685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-[10px] uppercase tracking-wider hover:underline font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with PRYMAX STUDIO Credit */}
        <div className="mt-16 pt-8 border-t border-[#3E1570] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} Tesa Gancia. {t.footer.rightsReserved}
          </p>

          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-[#E0AAFF] transition-colors">
              {t.footer.legalNotice}
            </Link>
            <span>•</span>
            <span>
              {t.footer.designedBy}{' '}
              <a
                href="https://prymaxstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E0AAFF] hover:text-white underline underline-offset-4 font-semibold transition-colors"
              >
                PRYMAX STUDIO
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
