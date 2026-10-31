import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Divider } from '../components/ui/Divider';

export const LegalPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-white text-[#191424]">
      <section className="py-16 text-center border-b border-[#E7DEED] bg-[#FAF8FC]">
        <Container>
          <SectionLabel align="center" theme="light">Conformité & Transparence</SectionLabel>
          <SectionHeading
            title={t.legal.title}
            subtitle={t.legal.lastUpdated}
            as="h1"
            theme="light"
            className="mt-4"
          />
        </Container>
      </section>

      <section className="section-padding">
        <Container className="max-w-3xl space-y-10">
          {t.legal.sections.map((section, idx) => (
            <div key={idx} className="bg-[#FAF8FC] border border-[#E7DEED] p-8 sm:p-10 shadow-sm">
              <h2 className="font-serif text-xl sm:text-2xl text-[#2D124D] mb-4 font-medium">
                {section.heading}
              </h2>
              <p className="text-sm text-[#6B5E78] leading-relaxed font-sans">
                {section.body}
              </p>
            </div>
          ))}

          <Divider />

          <div className="text-center text-xs text-[#6B5E78] font-sans">
            <p>
              Site officiel conçu et réalisé par{' '}
              <a
                href="https://prymaxstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B38A6] font-semibold underline hover:text-[#2D124D]"
              >
                PRYMAX STUDIO
              </a>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};
