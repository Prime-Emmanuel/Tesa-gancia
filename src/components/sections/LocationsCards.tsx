import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LazyImage } from '../common/LazyImage';

export const LocationsCards: React.FC = () => {
  const { t } = useLanguage();
  const [activeMapCity, setActiveMapCity] = useState<string | null>(null);

  const toggleMap = (cityId: string) => {
    setActiveMapCity((prev) => (prev === cityId ? null : cityId));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {t.locations.cities.map((city) => {
        const isMapOpen = activeMapCity === city.id;
        const googleDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          city.mapQuery
        )}`;

        return (
          <div
            key={city.id}
            className="bg-white border border-[#EADBFA] shadow-[0_8px_30px_rgba(123,44,191,0.06)] overflow-hidden flex flex-col justify-between group hover:border-[#7B2CBF] transition-all duration-300 rounded-sm"
          >
            {/* Visual Header / Image or Lazy Map */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#260C45]">
              {!isMapOpen ? (
                <>
                  <LazyImage
                    src={city.image}
                    alt={`Maison Tesa Gancia à ${city.name}`}
                    aspectRatio="16/10"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#260C45]/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-serif text-2xl text-white font-medium">
                    {city.name}
                  </span>
                </>
              ) : (
                <iframe
                  title={`Carte interactive ${city.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    city.mapQuery
                  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              )}
            </div>

            {/* Content & Details */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B2CBF] font-sans font-bold block mb-2">
                  {city.type}
                </span>

                <p className="text-xs sm:text-sm text-[#220A3D] font-sans leading-relaxed mb-3">
                  <strong className="text-[#260C45] font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                    Adresse :
                  </strong>
                  {city.address}
                </p>

                <p className="text-xs text-[#6C5B82] font-sans mb-5">
                  <strong className="text-[#260C45] font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                    Horaires d'accueil :
                  </strong>
                  {city.hours}
                </p>
              </div>

              {/* Action Buttons & Phone Lines in White & Violet */}
              <div className="pt-4 border-t border-[#EADBFA] space-y-3">
                {/* Phone 1 */}
                <div className="flex items-center justify-between text-xs font-sans">
                  <a
                    href={`tel:${city.phone1}`}
                    className="text-[#260C45] font-semibold hover:text-[#7B2CBF] transition-colors"
                  >
                    {city.phone1Formatted}
                  </a>
                  <a
                    href={`https://wa.me/${city.phone1.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-[11px] font-semibold uppercase tracking-wider hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center justify-between text-xs font-sans">
                  <a
                    href={`tel:${city.phone2}`}
                    className="text-[#260C45] font-semibold hover:text-[#7B2CBF] transition-colors"
                  >
                    {city.phone2Formatted}
                  </a>
                  <a
                    href={`https://wa.me/${city.phone2.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-[11px] font-semibold uppercase tracking-wider hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Map toggle & Directions link */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-dashed border-[#EADBFA]">
                  <button
                    type="button"
                    onClick={() => toggleMap(city.id)}
                    className="text-[#7B2CBF] hover:underline cursor-pointer font-semibold"
                  >
                    {isMapOpen ? t.locations.hideMap : t.locations.loadMap}
                  </button>

                  <a
                    href={googleDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6C5B82] hover:text-[#7B2CBF] inline-flex items-center gap-1 font-sans font-medium"
                  >
                    <span>{t.locations.getDirections}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
