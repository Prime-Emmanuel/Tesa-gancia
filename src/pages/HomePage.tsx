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
import { MultiStepQuoteForm } from '../components/sections/MultiStepQuoteForm';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  const editorialRef = useScrollReveal<HTMLDivElement>();
  const servicesRef = useScrollReveal<HTMLDivElement>();
  const galleryRef = useScrollReveal<HTMLDivElement>();
  const processRef = useScrollReveal<HTMLDivElement>();
  const quoteRef = useScrollReveal<HTMLDivElement>();
  const closingCtaRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="relative overflow-hidden bg-white text-[#220A3D]">
      {/* =========================================================================
          1. HERO SECTION (High Definition Imagery, White & Violet Luxury)
          ========================================================================= */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pb-10 sm:pb-14 pt-28 sm:pt-32 bg-[#FAF5FE]">
        {/* Crystal-Clear 4K Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2560&q=95"
            alt="Scénographie d'exception et réceptions de prestige Tesa Gancia"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center transform scale-100"
          />
          {/* Luminous, non-destructive gradient overlay keeping image crisp & deep */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5FE] via-[#FAF5FE]/40 to-[#260C45]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,245,254,0.45)_100%)]" />
        </div>

        <Container className="relative z-10 w-full flex flex-col items-center max-w-4xl px-4 sm:px-6 my-auto">
          {/* Frosted Glass Luxury Hero Box for maximum legibility and photographic impact */}
          <div className="w-full bg-white/85 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-white/90 shadow-[0_20px_60px_rgba(123,44,191,0.08)] flex flex-col items-center text-center">
            {/* Fluid H1 with Violet Gradient */}
            <h1 className="font-serif text-fluid-h1 font-normal tracking-tight text-[#260C45] mb-4 sm:mb-6 leading-[1.08]">
              {t.hero.titleLine1}{' '}
              <span className="italic font-normal text-violet-gradient font-serif">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleLine2}
            </h1>

            {/* 2-line Subline in refined high-contrast violet */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#32174D] max-w-2xl leading-relaxed mb-6 sm:mb-8 whitespace-pre-line font-medium">
              {t.hero.subline}
            </p>

            {/* Two CTAs in White & Violet */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                to="/contact"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto shadow-md"
              >
                {t.hero.ctaPrimary}
              </Button>

              <Button
                href="https://wa.me/237655493685"
                external
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-white/95 hover:bg-white text-[#260C45] border-[#D6BCFA] shadow-sm"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Bottom Bar: Discreet row of Douala · Yaoundé · Bafoussam + Violet Scroll Indicator */}
          <div className="w-full pt-6 sm:pt-8 flex items-center justify-between text-xs text-[#6C5B82] font-sans px-2">
            <div className="tracking-[0.2em] uppercase text-[11px] sm:text-xs text-[#7B2CBF] font-bold bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs border border-white/80">
              {t.hero.citiesBar}
            </div>

            <a
              href="#editorial"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#32174D] hover:text-[#7B2CBF] transition-colors font-semibold bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs border border-white/80"
            >
              <span className="hidden sm:inline">{t.hero.scrollIndicator}</span>
              <div className="w-4 h-7 border-2 border-[#7B2CBF] rounded-full flex items-start justify-center p-1 bg-white">
                <div className="w-1.5 h-2 bg-[#7B2CBF] rounded-full animate-scroll-bounce" />
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
        className="section-padding bg-white text-[#220A3D] relative"
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

              <div className="space-y-4 text-base sm:text-lg text-[#260C45] font-serif leading-relaxed">
                <p>{t.editorial.paragraph1}</p>
                <p className="text-sm sm:text-base font-sans text-[#4A3563] leading-relaxed">
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
              <div className="p-2 sm:p-3 bg-white border border-[#EADBFA] shadow-[0_12px_40px_rgba(123,44,191,0.08)] relative z-10 rounded-2xl overflow-hidden">
                <LazyImage
                  src="/images/services/editorial_event_4k.jpg"
                  alt="Scénographie d'exception et réceptions de prestige Tesa Gancia au Cameroun"
                  aspectRatio="3/4"
                  className="rounded-xl"
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
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative border-y border-[#EADBFA]"
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
        className="section-padding bg-white text-[#220A3D] relative"
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

          {/* Masonry Gallery with accessible Lightbox - Curated 4 Stylish Cards */}
          <MasonryGallery limit={4} />

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
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative border-y border-[#EADBFA]"
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
          7. SPLIT LAYOUT CONTACT & MULTI-STEP QUOTE FORM
          ========================================================================= */}
      <section
        id="quote-section"
        ref={quoteRef}
        className="section-padding bg-[#FAF5FE] text-[#220A3D] relative border-t border-[#EADBFA]"
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
