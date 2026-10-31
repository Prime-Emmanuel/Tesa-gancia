import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export const ServicesNumberedGrid: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'events' | 'gifts'>('all');

  const filteredItems = t.services.items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.categoryGroup === activeTab;
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'organisation-evenementielle':
        return (
          // Calendar & Planning
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="m9 16 2 2 4-4" />
          </svg>
        );
      case 'decoration-scenographie':
        return (
          // Balloons & Sparkles
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            <path d="M5 3v4M3 5h4" />
            <path d="M19 17v4M17 19h4" />
          </svg>
        );
      case 'livraison-gateaux':
        return (
          // Tiered Cake
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
            <path d="M2 21h20" />
            <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
            <path d="M12 5V3" />
          </svg>
        );
      case 'location-materiel':
        return (
          // Chairs & Tables
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
            <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
            <path d="M5 18v3" />
            <path d="M19 18v3" />
          </svg>
        );
      case 'hotesses-stewards':
        return (
          // Hospitality & Hostesses
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'bouquet-argent':
      case 'gateau-argent':
        return (
          // Banknote / Currency Surprise
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        );
      case 'bouquet-fleurs':
        return (
          // Fresh Rose / Flower
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2a5 5 0 0 1 5 5c0 2.5-2 4.5-5 7-3-2.5-5-4.5-5-7a5 5 0 0 1 5-5z" />
            <path d="M12 14v8" />
            <path d="M12 18c-2 0-3.5-1-4-2" />
            <path d="M12 16c2 0 3.5 1 4 2" />
          </svg>
        );
      case 'bouquet-chocolat':
      case 'box-chocolat':
        return (
          // Chocolate & Sweet Heart
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case 'tasse-personnalisee':
        return (
          // Custom Mug
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        );
      case 'panier-cadeau':
        return (
          // Gift Basket / Hamper
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="m5 10 7-7 7 7" />
            <path d="M2 10h20l-2 11H4L2 10z" />
            <path d="M12 3v18" />
          </svg>
        );
      case 'montre-personnalisee':
        return (
          // Watch Timepiece
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="7" />
            <polyline points="12 9 12 12 13.5 13.5" />
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83" />
            <path d="M7.49 6.65l.35-3.83A2 2 0 0 1 9.83 1h4.34a2 2 0 0 1 2 1.82l.35 3.83" />
          </svg>
        );
      default:
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Selection Tabs: All / Everything Event / Our Gifts */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-sans font-semibold rounded-full transition-all cursor-pointer shadow-xs ${
            activeTab === 'all'
              ? 'bg-[#7B2CBF] text-white shadow-md'
              : 'bg-white text-[#220A3D] border border-[#EADBFA] hover:border-[#7B2CBF]'
          }`}
        >
          {t.services.allTab}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('events')}
          className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-sans font-semibold rounded-full transition-all cursor-pointer shadow-xs flex items-center gap-2 ${
            activeTab === 'events'
              ? 'bg-[#7B2CBF] text-white shadow-md'
              : 'bg-white text-[#220A3D] border border-[#EADBFA] hover:border-[#7B2CBF]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#E0AAFF]" />
          <span>{t.services.eventsTab}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('gifts')}
          className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-sans font-semibold rounded-full transition-all cursor-pointer shadow-xs flex items-center gap-2 ${
            activeTab === 'gifts'
              ? 'bg-[#7B2CBF] text-white shadow-md'
              : 'bg-white text-[#220A3D] border border-[#EADBFA] hover:border-[#7B2CBF]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span>{t.services.giftsTab}</span>
        </button>
      </div>

      {/* Grid of Real Services & Gifts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden bg-[#260C45] border border-[#3E1570] p-6 sm:p-7 flex flex-col justify-between min-h-[350px] transition-all duration-500 hover:border-[#9D4EDD] hover:shadow-[0_16px_45px_rgba(123,44,191,0.28)] rounded-sm"
          >
            {/* Background image revealed on desktop hover with violet overlay */}
            <div
              className="hidden lg:block absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none scale-105 group-hover:scale-100"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#1C0833] via-[#260C45]/85 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

            {/* Top Row: Number, Icon & Authentic Price Badge */}
            <div className="relative z-10 flex items-start justify-between mb-5">
              <span className="font-serif text-3xl font-light text-[#E0AAFF] group-hover:text-white transition-colors">
                {service.number}
              </span>

              <div className="flex items-center gap-2">
                {service.price && (
                  <span className="bg-[#FAF5FE] text-[#7B2CBF] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-[#EADBFA]">
                    {service.price}
                  </span>
                )}
                <div className="w-11 h-11 rounded-full border border-[#7B2CBF]/60 bg-[#311059] text-[#C77DFF] flex items-center justify-center group-hover:border-[#C77DFF] group-hover:bg-[#7B2CBF]/30 transition-all duration-300">
                  {getServiceIcon(service.id)}
                </div>
              </div>
            </div>

            {/* Middle: Title & Description */}
            <div className="relative z-10 my-auto">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C77DFF] font-sans font-bold">
                  {service.category}
                </span>
                {service.categoryGroup === 'gifts' && (
                  <span className="text-[9px] uppercase tracking-wider text-[#25D366] font-semibold bg-[#25D366]/10 px-1.5 py-0.5 rounded-xs">
                    Cadeau
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 group-hover:text-[#E0AAFF] transition-colors leading-snug">
                {service.title}
              </h3>

              <p className="text-xs text-white/75 font-sans leading-relaxed line-clamp-3">
                {service.shortDesc}
              </p>
            </div>

            {/* Bottom: Discover / Order Link in Violet */}
            <div className="relative z-10 pt-5 border-t border-[#3E1570] group-hover:border-[#7B2CBF]/60 transition-colors flex items-center justify-between">
              <Link
                to={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#C77DFF] group-hover:text-white transition-colors font-semibold font-sans"
              >
                <span>{t.services.discover}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transform group-hover:translate-x-1.5 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link
                to={`/contact?service=${service.id}`}
                className="text-[11px] uppercase tracking-wider text-white/60 hover:text-[#E0AAFF] font-medium"
              >
                Devis →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
