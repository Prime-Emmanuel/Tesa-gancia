import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/common/LazyImage';
import { StatsBand } from '../components/sections/StatsBand';
import { ServicesNumberedGrid } from '../components/sections/ServicesNumberedGrid';
import { MasonryGallery } from '../components/sections/MasonryGallery';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { LocationsCards } from '../components/sections/LocationsCards';
import { MultiStepQuoteForm } from '../components/sections/MultiStepQuoteForm';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  const editorialRef = useScrollReveal<HTMLDivElement>();
  const servicesRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>();
  const processRef = useScrollReveal<HTMLDivElement>();
  const locationsRef = useScrollReveal<HTMLDivElement>();
  const quoteRef = useScrollReveal<HTMLDivElement>();
  const closingCtaRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="relative overflow-hidden bg-white text-[#220A3D]">
      {/* =========================================================================
          1. HERO SECTION (White and Violet Theme, No Black, No Gold, No Blinking Badge)
          ========================================================================= */}
      <section className="relative h-[100svh] min-h-[640px] flex flex-col justify-end lg:justify-center overflow-hidden pb-8 sm:pb-12 pt-24 bg-[#FAF5FE]">
        {/* Background Image with Luminous White & Soft Violet Luxury Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Scénographie d'exception Tesa Gancia"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
          {/* Luminous White & Violet Gradient (No black) */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,245,254,0.85)_100%)]" />
        </div>

        <Container className="relative z-10 w-full text-left lg:text-center flex flex-col items-start lg:items-center max-w-4xl px-6 sm:px-8">
          {/* Fluid H1 with Violet Gradient (No blinking line/badge as explicitly instructed) */}
          <h1 className="font-serif text-fluid-h1 font-normal tracking-tight text-[#260C45] mb-4 sm:mb-6">
            {t.hero.titleLine1}{' '}
            <span className="italic font-normal text-violet-gradient font-serif">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titleLine2}
          </h1>

          {/* 2-line Subline in refined violet-slate */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#523B68] max-w-2xl leading-relaxed mb-6 sm:mb-8 whitespace-pre-line font-normal">
            {t.hero.subline}
          </p>

          {/* Two CTAs in White & Violet */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 sm:mb-10">
            <Button
              to="/contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Button>

            <Button
              href="https://wa.me/237655493685"
              external
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Bottom Bar: Discreet row of Douala · Yaoundé · Bafoussam + Violet Scroll Indicator */}
          <div className="w-full pt-6 flex items-center justify-between text-xs text-[#6C5B82] font-sans">
            {/* Cities Row in Violet */}
            <div className="tracking-[0.2em] uppercase text-[11px] text-[#7B2CBF] font-bold">
              {t.hero.citiesBar}
            </div>

            {/* Scroll Indicator in Violet */}
            <a
              href="#editorial"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#6C5B82] hover:text-[#7B2CBF] transition-colors font-medium"
            >
              <span className="hidden sm:inline">{t.hero.scrollIndicator}</span>
              <div className="w-4 h-7 border-2 border-[#7B2CBF] rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-1.5 bg-[#7B2CBF] rounded-full" />
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. EDITORIAL & STATS BAND (Clean White & Soft Violet)
          ========================================================================= */}
      <section
        id="editorial"
        ref={editorialRef}
        className="section-padding bg-white text-[#220A3D] relative reveal-item content-auto"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Paragraph in Cormorant Garamond */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <SectionLabel align="left" theme="light">
                {t.editorial.sectionLabel}
              </SectionLabel>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#260C45] mt-4 mb-6 leading-tight">
                {t.editorial.headline}{' '}
                <span className="italic font-normal text-violet-gradient font-serif">
                  {t.editorial.headlineHighlight}
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#3C195E] font-serif leading-relaxed">
                <p>{t.editorial.paragraph1}</p>
                <p className="text-sm sm:text-base font-sans text-[#6C5B82] leading-relaxed">
                  {t.editorial.paragraph2}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/about" variant="violet" size="md">
                  {language === 'fr' ? 'Découvrir la Maison' : 'Discover the Maison'}
                </Button>
                <Link
                  to="/services"
                  className="text-xs uppercase tracking-[0.16em] text-[#7B2CBF] hover:text-[#521C94] font-bold underline underline-offset-8 transition-colors"
                >
                  {t.services.viewAll} →
                </Link>
              </div>
            </div>

            {/* Right Column: Tall Image Offset */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 bg-white border border-[#EADBFA] shadow-[0_12px_40px_rgba(123,44,191,0.08)] relative z-10 rounded-sm">
                <LazyImage
                  src="/images/services/real_event_decor_main.jpg"
                  alt="Scénographie d'exception Tesa Gancia au Cameroun"
                  aspectRatio="3/4"
                />
              </div>

              {/* Offset decorative luxury violet box */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#260C45] text-white p-5 border border-[#7B2CBF] z-20 shadow-2xl max-w-[220px] rounded-sm">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E0AAFF] block mb-1 font-sans font-bold">
                  Prestige National
                </span>
                <p className="font-serif text-base leading-snug">
                  Douala • Yaoundé • Bafoussam
                </p>
              </div>
            </div>
          </div>

          {/* 4-Column Stats Band with Animated Count-Up */}
          <StatsBand stats={t.editorial.stats} />
        </Container>
      </section>

      {/* =========================================================================
          3. SERVICES & GIFTS (Everything Event & Our Gifts)
          ========================================================================= */}
      <section
        ref={servicesRef}
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative reveal-item content-auto border-y border-[#EADBFA]"
      >
        <Container>
          <div className="text-center mb-16">
            <SectionLabel align="center" theme="light">
              {t.services.sectionLabel}
            </SectionLabel>
            <SectionHeading
              title={t.services.title}
              highlight={t.services.titleHighlight}
              subtitle={t.services.subtitle}
              theme="light"
              className="mt-4"
            />
          </div>

          {/* 01–08 Services Grid */}
          <ServicesNumberedGrid />

          <div className="mt-12 text-center">
            <Button to="/services" variant="primary" size="lg">
              {t.services.viewAll}
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. MASONRY-STYLE GALLERY (White Background with Category Filters & Lightbox)
          ========================================================================= */}
      <section
        ref={galleryRef}
        className="section-padding bg-white text-[#220A3D] relative reveal-item content-auto"
      >
        <Container>
          <div className="text-center mb-12">
            <SectionLabel align="center" theme="light">
              {t.gallery.sectionLabel}
            </SectionLabel>
            <SectionHeading
              title={t.gallery.title}
              highlight={t.gallery.titleHighlight}
              subtitle={t.gallery.subtitle}
              theme="light"
              className="mt-4"
            />
          </div>

          {/* Masonry Gallery with accessible Lightbox - Limited to 6 on Home */}
          <MasonryGallery limit={6} />

          <div className="mt-12 text-center">
            <Button to="/portfolio" variant="primary" size="lg">
              {language === 'fr' ? 'Voir toute la galerie' : 'View all the gallery'}
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. PROCESS TIMELINE (Soft Violet Background)
          ========================================================================= */}
      <section
        ref={processRef}
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative reveal-item content-auto border-y border-[#EADBFA]"
      >
        <Container>
          <div className="text-center mb-12">
            <SectionLabel align="center" theme="light">
              {t.process.sectionLabel}
            </SectionLabel>
            <SectionHeading
              title={t.process.title}
              highlight={t.process.titleHighlight}
              subtitle={t.process.subtitle}
              theme="light"
              className="mt-4"
            />
          </div>

          <ProcessTimeline />
        </Container>
      </section>

      {/* =========================================================================
          6. LOCATIONS SECTION (Douala, Yaoundé, Bafoussam)
          ========================================================================= */}
      <section
        ref={locationsRef}
        className="section-padding bg-white text-[#220A3D] relative reveal-item content-auto"
      >
        <Container>
          <div className="text-center mb-16">
            <SectionLabel align="center" theme="light">
              {t.locations.sectionLabel}
            </SectionLabel>
            <SectionHeading
              title={t.locations.title}
              highlight={t.locations.titleHighlight}
              subtitle={t.locations.subtitle}
              theme="light"
              className="mt-4"
            />
          </div>

          {/* 3 Premium Cards */}
          <LocationsCards />
        </Container>
      </section>

      {/* =========================================================================
          7. SPLIT LAYOUT CONTACT & MULTI-STEP QUOTE FORM
          ========================================================================= */}
      <section
        id="quote-section"
        ref={quoteRef}
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative reveal-item border-t border-[#EADBFA]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Intro */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionLabel align="left" theme="light">
                  {t.quoteForm.sectionLabel}
                </SectionLabel>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#260C45] mt-3 mb-4 leading-tight">
                  {t.quoteForm.title}{' '}
                  <span className="italic font-normal text-violet-gradient font-serif">
                    {t.quoteForm.titleHighlight}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#6C5B82] font-sans leading-relaxed">
                  {t.quoteForm.subtitle}
                </p>
              </div>

              {/* Showroom Direct Inquiries Box in White & Violet */}
              <div className="bg-white border border-[#EADBFA] p-7 shadow-[0_8px_30px_rgba(123,44,191,0.06)] space-y-6 rounded-sm">
                <h3 className="font-serif text-xl text-[#260C45] font-medium border-b border-[#EADBFA] pb-3">
                  {t.quoteForm.directContactTitle}
                </h3>

                <div className="space-y-4">
                  {/* Douala */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B2CBF] font-sans block mb-1 font-bold">
                      Téléphone & Ligne Directe Douala & Bafoussam
                    </span>
                    <a
                      href="tel:+237655493685"
                      className="font-serif text-xl text-[#260C45] hover:text-[#7B2CBF] font-medium transition-colors block"
                    >
                      +237 655 493 685
                    </a>
                    <a
                      href="https://wa.me/237655493685"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline inline-block mt-1"
                    >
                      Échanger sur WhatsApp (+237 655 493 685)
                    </a>
                  </div>

                  {/* Yaoundé */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B2CBF] font-sans block mb-1 font-bold">
                      Téléphone & Ligne Directe Yaoundé
                    </span>
                    <a
                      href="tel:+237651748836"
                      className="font-serif text-xl text-[#260C45] hover:text-[#7B2CBF] font-medium transition-colors block"
                    >
                      +237 651 748 836
                    </a>
                    <a
                      href="https://wa.me/237651748836"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline inline-block mt-1"
                    >
                      Échanger sur WhatsApp (+237 651 748 836)
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B2CBF] font-sans block mb-1 font-bold">
                      Courriel Professionnel
                    </span>
                    <a
                      href="mailto:contact@tesagancia.com"
                      className="text-sm text-[#260C45] hover:text-[#7B2CBF] transition-colors"
                    >
                      contact@tesagancia.com
                    </a>
                  </div>

                  {/* Showroom Hours */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B2CBF] font-sans block mb-1 font-bold">
                      Horaires des Showrooms Privés
                    </span>
                    <p className="text-xs text-[#6C5B82]">
                      Lundi - Samedi : 08h30 - 18h30 (Sur rendez-vous préalable)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Step Quote Form */}
            <div className="lg:col-span-7">
              <MultiStepQuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. CLOSING CTA (Royal Violet Background, White Typography, No Black)
          ========================================================================= */}
      <section
        ref={closingCtaRef}
        className="relative py-24 sm:py-28 overflow-hidden flex items-center justify-center text-center text-white bg-gradient-to-br from-[#260C45] via-[#3E1570] to-[#260C45]"
      >
        {/* Subtle decorative violet radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.25)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10 max-w-3xl px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E0AAFF] font-sans block mb-3 font-bold">
            Maison Tesa Gancia
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t.closingCta.titleLine1}{' '}
            <span className="italic font-normal text-[#E0AAFF] font-serif">
              {t.closingCta.titleHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed mb-10 max-w-xl mx-auto">
            {t.closingCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {t.closingCta.ctaPrimary}
            </Button>

            <Button
              href="https://wa.me/237655493685"
              external
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-white border-white hover:bg-white/10"
            >
              {t.closingCta.ctaSecondary}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
