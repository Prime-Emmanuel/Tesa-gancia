import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/common/LazyImage';

export const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'events' | 'gifts'>('all');
  const [zoomFlyer, setZoomFlyer] = useState<string | null>(null);

  const filteredItems = t.services.items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.categoryGroup === activeTab;
  });

  const flyers = [
    {
      id: 'flyer-events',
      title: 'Affiche Everything Event',
      subtitle: 'Organisation, Décoration, Gâteaux, Location & Hôtesses',
      image: '/images/services/flyer_events.jpg',
    },
    {
      id: 'flyer-gifts',
      title: 'Affiche Our Gifts / Nos Cadeaux',
      subtitle: 'Grille tarifaire officielle des créations surprises',
      image: '/images/services/flyer_gifts.jpg',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white text-[#220A3D]">
      {/* Page Header */}
      <section className="py-16 text-center border-b border-[#EADBFA] bg-[#FAF5FE]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.services.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.services.title}
            highlight={t.services.titleHighlight}
            subtitle={t.services.subtitle}
            as="h1"
            theme="light"
            className="mt-4"
          />

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </Container>
      </section>

      {/* Alternating Image / Text Per Service & Gift */}
      <section className="section-padding">
        <Container className="space-y-24">
          {filteredItems.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-32 border-b border-[#EADBFA]/50 pb-20 last:border-b-0"
              >
                {/* Visual Image container */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative p-2.5 sm:p-3 bg-white border border-[#EADBFA] shadow-[0_12px_40px_rgba(123,44,191,0.08)] group overflow-hidden rounded-sm">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      aspectRatio="4/3"
                      className="group-hover:scale-105 transition-transform duration-700 object-cover"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <div className="bg-[#260C45]/90 backdrop-blur-md px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-[#E0AAFF] border border-[#7B2CBF] font-semibold shadow-md rounded-xs">
                        {service.number} • {service.category}
                      </div>

                      {service.price && (
                        <div className="bg-[#FAF5FE] text-[#7B2CBF] border border-[#EADBFA] px-3 py-1 text-xs font-bold tracking-wider rounded-xs shadow-xs">
                          {service.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content & What's Included */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } flex flex-col items-start`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-[0.22em] text-[#7B2CBF] font-sans font-bold">
                      {service.categoryGroup === 'events'
                        ? 'Prestation Événementielle'
                        : 'Création Cadeau Personnalisée'}
                    </span>
                    {service.price && (
                      <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                        {t.services.startingFrom} {service.price}
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#260C45] mb-4 leading-tight font-medium">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#6C5B82] leading-relaxed font-sans mb-6">
                    {service.fullDesc}
                  </p>

                  {/* What is Included List */}
                  <div className="w-full bg-[#FAF5FE] border border-[#EADBFA] p-5 sm:p-6 mb-8 rounded-sm">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#260C45] font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7B2CBF]" />
                      <span>{t.services.whatIsIncluded}</span>
                    </h3>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#382D45] font-sans"
                        >
                          <svg
                            className="w-4 h-4 text-[#7B2CBF] mt-0.5 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button (Pre-selects service in quote form) */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      to={`/contact?service=${service.id}`}
                      variant="primary"
                      size="md"
                    >
                      {t.services.requestThisService}
                    </Button>

                    <Button
                      href={`https://wa.me/237655493685?text=${encodeURIComponent(
                        language === 'fr'
                          ? `Bonjour Tesa Gancia, je souhaite me renseigner / commander : ${service.title}${
                              service.price ? ` (${service.price})` : ''
                            }.`
                          : `Hello Tesa Gancia, I would like to inquire about / order: ${service.title}${
                              service.price ? ` (${service.price})` : ''
                            }.`
                      )}`}
                      external
                      variant="secondary"
                      size="md"
                    >
                      WhatsApp Direct
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Official Price Flyers Showcase */}
      <section className="py-20 bg-[#FAF5FE] border-t border-[#EADBFA]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7B2CBF] font-sans font-bold block mb-2">
              Documentation Officielle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#260C45] mb-3">
              {t.services.flyerTitle}
            </h2>
            <p className="text-sm text-[#6C5B82] font-sans">
              {t.services.flyerSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {flyers.map((flyer) => (
              <div
                key={flyer.id}
                className="bg-white border border-[#EADBFA] p-4 rounded-sm shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div
                  className="relative overflow-hidden cursor-pointer aspect-[3/4] bg-neutral-100 flex items-center justify-center rounded-xs"
                  onClick={() => setZoomFlyer(flyer.image)}
                >
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="bg-[#7B2CBF] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full shadow-lg">
                      {t.services.viewFlyer} 🔍
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#EADBFA]">
                  <div>
                    <h3 className="font-serif text-lg text-[#260C45] font-medium">
                      {flyer.title}
                    </h3>
                    <p className="text-xs text-[#6C5B82]">{flyer.subtitle}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setZoomFlyer(flyer.image)}
                    className="text-xs uppercase tracking-wider text-[#7B2CBF] font-bold hover:underline cursor-pointer"
                  >
                    Agrandir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fullscreen Flyer Zoom Modal */}
      {zoomFlyer && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomFlyer(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-white p-3 rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomFlyer(null)}
              className="absolute top-2 right-2 w-10 h-10 bg-[#260C45] text-white rounded-full flex items-center justify-center hover:bg-[#7B2CBF] transition-colors cursor-pointer z-10"
              aria-label="Fermer"
            >
              ✕
            </button>
            <img
              src={zoomFlyer}
              alt="Flyer Officiel Tesa Gancia"
              className="max-h-[82vh] w-auto mx-auto object-contain rounded-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};
