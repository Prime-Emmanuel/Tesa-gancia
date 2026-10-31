import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MasonryGallery } from '../components/sections/MasonryGallery';

export const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-white text-[#220A3D]">
      <section className="py-16 text-center border-b border-[#EADBFA] bg-[#FAF5FE]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.gallery.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.gallery.title}
            highlight={t.gallery.titleHighlight}
            subtitle={t.gallery.subtitle}
            as="h1"
            theme="light"
            className="mt-4"
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <MasonryGallery />
        </Container>
      </section>
    </div>
  );
};
