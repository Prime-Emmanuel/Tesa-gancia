import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MultiStepQuoteForm } from '../components/sections/MultiStepQuoteForm';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();

  const initialService = searchParams.get('service') || '';
  const initialCity = searchParams.get('city') || '';

  return (
    <div className="pt-28 pb-20 bg-white text-[#191424]">
      {/* Header */}
      <section className="py-16 text-center border-b border-[#E7DEED] bg-[#FAF8FC]">
        <Container>
          <SectionLabel align="center" theme="light">
            {t.quoteForm.sectionLabel}
          </SectionLabel>
          <SectionHeading
            title={t.quoteForm.title}
            highlight={t.quoteForm.titleHighlight}
            subtitle={t.quoteForm.subtitle}
            as="h1"
            theme="light"
            className="mt-4 max-w-3xl mx-auto"
          />
        </Container>
      </section>

      {/* Split Layout */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Showroom Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#FAF8FC] border border-[#E7DEED] p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-[#2D124D] mb-3 font-medium">
                  {t.quoteForm.directContactTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E78] font-sans leading-relaxed mb-6">
                  {t.quoteForm.directContactSubtitle}
                </p>

                <div className="space-y-6 pt-4 border-t border-[#E7DEED]">
                  {/* Douala */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B38A6] font-sans block mb-1 font-semibold">
                      Douala (Siège & Showroom Principal)
                    </span>
                    <a
                      href="tel:+237655493685"
                      className="font-serif text-xl text-[#1D0A33] hover:text-[#7B38A6] transition-colors block font-medium"
                    >
                      +237 655 493 685
                    </a>
                    <a
                      href="https://wa.me/237655493685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline mt-1 inline-block"
                    >
                      Échanger sur WhatsApp (+237 655 493 685)
                    </a>
                  </div>

                  {/* Yaoundé */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B38A6] font-sans block mb-1 font-semibold">
                      Yaoundé (Protocole & Réceptions d’État)
                    </span>
                    <a
                      href="tel:+237651748836"
                      className="font-serif text-xl text-[#1D0A33] hover:text-[#7B38A6] transition-colors block font-medium"
                    >
                      +237 651 748 836
                    </a>
                    <a
                      href="https://wa.me/237651748836"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline mt-1 inline-block"
                    >
                      Échanger sur WhatsApp (+237 651 748 836)
                    </a>
                  </div>

                  {/* Bafoussam */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B38A6] font-sans block mb-1 font-semibold">
                      Bafoussam (Pôle Ouest & Logistique)
                    </span>
                    <a
                      href="tel:+237655493685"
                      className="font-serif text-xl text-[#1D0A33] hover:text-[#7B38A6] transition-colors block font-medium"
                    >
                      +237 655 493 685
                    </a>
                    <a
                      href="https://wa.me/237655493685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline mt-1 inline-block"
                    >
                      Échanger sur WhatsApp (+237 655 493 685)
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B38A6] font-sans block mb-1 font-semibold">
                      Courriel Professionnel
                    </span>
                    <a
                      href="mailto:contact@tesagancia.com"
                      className="text-sm text-[#1D0A33] hover:text-[#7B38A6] transition-colors font-sans"
                    >
                      contact@tesagancia.com
                    </a>
                  </div>

                  {/* Showroom Hours */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B38A6] font-sans block mb-1 font-semibold">
                      Accueil en Salon Privé
                    </span>
                    <p className="text-xs text-[#6B5E78] font-sans">
                      Lundi - Samedi : 08h30 - 18h30 (Sur rendez-vous préalable)
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Commitment */}
              <div className="bg-[#FAF8FC] border border-[#E7DEED] p-6 text-xs text-[#6B5E78] font-sans leading-relaxed">
                <span className="text-[#2D124D] uppercase tracking-[0.16em] font-semibold block mb-2">
                  Engagement & Discrétion Absolue
                </span>
                <p>
                  Chaque projet d'événement fait l'objet d'un accord de confidentialité strict. Vos coordonnées privées et vos projets de réception ne seront jamais divulgués.
                </p>
              </div>
            </div>

            {/* Right Column: Multi-Step Form */}
            <div className="lg:col-span-7">
              <MultiStepQuoteForm
                initialService={initialService}
                initialCity={initialCity}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
