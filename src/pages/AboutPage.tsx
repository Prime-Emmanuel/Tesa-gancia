import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/common/LazyImage';
import { StatsBand } from '../components/sections/StatsBand';
import { Divider } from '../components/ui/Divider';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-white text-[#220A3D]">
      {/* Page Header */}
      <section className="py-16 text-center border-b border-[#EADBFA] bg-[#FAF5FE]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.editorial.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.editorial.headline}
            highlight={t.editorial.headlineHighlight}
            as="h1"
            theme="light"
            className="mt-4 max-w-3xl mx-auto"
          />
        </Container>
      </section>

      {/* Narrative Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-6 relative">
              <div className="p-3 bg-white border border-[#EADBFA] shadow-[0_12px_40px_rgba(123,44,191,0.08)] rounded-sm">
                <LazyImage
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                  alt="Maison Tesa Gancia au Cameroun"
                  aspectRatio="4/3"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#6C5B82] leading-relaxed font-sans">
              <blockquote className="border-l-2 border-[#7B2CBF] pl-5 italic font-serif text-lg text-[#260C45]">
                « Chaque détail est une émotion ciselée pour l’éternité. »
              </blockquote>
              <p>{t.editorial.paragraph1}</p>
              <p>{t.editorial.paragraph2}</p>
            </div>
          </div>

          <StatsBand stats={t.editorial.stats} />

          <Divider />

          {/* Three Foundational Pillars in White & Violet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="bg-[#FAF5FE] border border-[#EADBFA] p-8 shadow-sm rounded-sm">
              <span className="font-serif text-3xl text-[#7B2CBF] block mb-3 font-semibold">01</span>
              <h3 className="font-serif text-xl text-[#260C45] mb-2 font-medium">
                {language === 'fr' ? 'Rigueur & Maîtrise Logistique' : 'Logistical Rigor & Mastery'}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5B82] leading-relaxed font-sans">
                {language === 'fr'
                  ? 'Un parc de matériel propriétaire de pointe, des équipes formées aux standards internationaux et une coordination millimétrée.'
                  : 'State-of-the-art owned equipment, crews trained to international safety standards, and pinpoint field synchronization.'}
              </p>
            </div>

            <div className="bg-[#FAF5FE] border border-[#EADBFA] p-8 shadow-sm rounded-sm">
              <span className="font-serif text-3xl text-[#7B2CBF] block mb-3 font-semibold">02</span>
              <h3 className="font-serif text-xl text-[#260C45] mb-2 font-medium">
                {language === 'fr' ? 'Scénographie Haute Couture' : 'Haute Couture Scenography'}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5B82] leading-relaxed font-sans">
                {language === 'fr'
                  ? 'Pas de modèles préconçus. Chaque réception est une œuvre personnalisée, sculptée pour refléter l’âme et le statut de nos hôtes.'
                  : 'Zero cookie-cutter templates. Every event is designed as a singular masterpiece reflecting the soul and status of our hosts.'}
              </p>
            </div>

            <div className="bg-[#FAF5FE] border border-[#EADBFA] p-8 shadow-sm rounded-sm">
              <span className="font-serif text-3xl text-[#7B2CBF] block mb-3 font-semibold">03</span>
              <h3 className="font-serif text-xl text-[#260C45] mb-2 font-medium">
                {language === 'fr' ? 'Présence Tripartite au Cameroun' : 'Tri-City Cameroon Footprint'}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5B82] leading-relaxed font-sans">
                {language === 'fr'
                  ? 'Des showrooms et entrepôts actifs à Douala (cœur économique), Yaoundé (capitale politique) et Bafoussam (pôle Ouest).'
                  : 'Active showrooms and logistics hubs in Douala (commercial capital), Yaoundé (diplomatic hub), and Bafoussam (Western hub).'}
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button to="/contact" variant="primary" size="lg">
              {language === 'fr' ? 'Rencontrer Nos Directeurs Artistiques' : 'Meet Our Creative Directors'}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
