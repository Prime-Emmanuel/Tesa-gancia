import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { LocationsCards } from '../components/sections/LocationsCards';

export const LocationsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-white text-[#191424]">
      <section className="py-16 text-center border-b border-[#E7DEED] bg-[#FAF8FC]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.locations.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.locations.title}
            highlight={t.locations.titleHighlight}
            subtitle={t.locations.subtitle}
            as="h1"
            theme="light"
            className="mt-4"
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <LocationsCards />
        </Container>
      </section>
    </div>
  );
};
