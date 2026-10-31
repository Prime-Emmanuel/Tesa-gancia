import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language, t } = useLanguage();

  const message =
    language === 'fr'
      ? encodeURIComponent(
          'Bonjour Tesa Gancia, je souhaite me renseigner pour la conception d’un événement de prestige.'
        )
      : encodeURIComponent(
          'Hello Tesa Gancia, I would like to inquire about designing a bespoke luxury event.'
        );

  const whatsappUrl = `https://wa.me/237655493685?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover on desktop */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white text-[#220A3D] text-xs px-3 py-1.5 border border-[#EADBFA] shadow-lg whitespace-nowrap font-medium rounded-sm">
        {t.floating.whatsappTooltip}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Tesa Gancia sur WhatsApp (+237 655 493 685)"
        className="w-13 h-13 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 active:scale-95 pulse-once cursor-pointer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.67-.7c.974.553 1.761.814 2.79.814 3.182 0 5.768-2.587 5.768-5.766 0-3.182-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.745 0-3.376-.452-4.808-1.246l-5.192 1.36 1.393-5.088c-.896-1.488-1.393-3.218-1.393-5.026 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
        </svg>
      </a>
    </div>
  );
};
