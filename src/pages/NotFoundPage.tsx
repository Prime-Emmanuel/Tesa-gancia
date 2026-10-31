import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  const BRAND_LOGO_URL = 'https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg';

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 text-center bg-white text-[#220A3D]">
      <Container className="max-w-xl">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[#EADBFA] p-1 bg-white overflow-hidden shadow-md">
          <img
            src={BRAND_LOGO_URL}
            alt="Logo Tesa Gancia"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <span className="font-serif text-7xl sm:text-9xl text-violet-gradient block font-normal mb-2">
          {t.notFound.title}
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl text-[#260C45] mb-4">
          {t.notFound.subtitle}
        </h1>

        <p className="text-sm text-[#6C5B82] font-sans leading-relaxed mb-8">
          {t.notFound.description}
        </p>

        <Button to="/" variant="primary" size="lg">
          {t.notFound.cta}
        </Button>
      </Container>
    </div>
  );
};
