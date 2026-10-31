import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';

export const ProcessPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-white text-[#191424]">
      <section className="py-16 text-center border-b border-[#E7DEED] bg-[#FAF8FC]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.process.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.process.title}
            highlight={t.process.titleHighlight}
            subtitle={t.process.subtitle}
            as="h1"
            theme="light"
            className="mt-4"
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <ProcessTimeline />

          <div className="text-center pt-16">
            <Button to="/contact" variant="primary" size="lg">
              {t.nav.requestQuote}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
