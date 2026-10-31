import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { FormField } from '../ui/FormField';
import { Button } from '../ui/Button';
import { validateCameroonPhone, validateEmail, sanitizeText } from '../../utils/validation';

interface MultiStepQuoteFormProps {
  initialService?: string;
  initialCity?: string;
  className?: string;
}

export const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({
  initialService = '',
  initialCity = '',
  className = '',
}) => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    service: initialService,
    city: initialCity,
    date: '',
    guests: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    website_hp: '', // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formMountTime = useRef<number>(Date.now());

  useEffect(() => {
    formMountTime.current = Date.now();
  }, []);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialCity) {
      setFormData((prev) => ({ ...prev, city: initialCity }));
    }
  }, [initialService, initialCity]);

  const serviceOptions = t.services.items.map((item) => ({
    value: item.id,
    label: `${item.number}. ${item.title}${item.price ? ` (${item.price})` : ''}`,
  }));

  const cityOptions = [
    { value: 'douala', label: 'Douala (Littoral)' },
    { value: 'yaounde', label: 'Yaoundé (Centre)' },
    { value: 'bafoussam', label: 'Bafoussam (Ouest)' },
    { value: 'autre', label: language === 'fr' ? 'Autre ville au Cameroun' : 'Other city in Cameroon' },
  ];

  const budgetOptions = [
    { value: 'cadeau', label: language === 'fr' ? 'Moins de 50 000 FCFA (Cadeau / Surprise)' : 'Under 50,000 FCFA (Gift / Surprise)' },
    { value: 'tier1', label: language === 'fr' ? '50 000 - 250 000 FCFA (Gâteau, Décoration intime)' : '50,000 - 250,000 FCFA (Cake, Intimate decor)' },
    { value: 'tier2', label: language === 'fr' ? '250 000 - 1 000 000 FCFA (Location, Hôtesses, Scénographie)' : '250,000 - 1,000,000 FCFA (Rental, Hostesses, Scenography)' },
    { value: 'tier3', label: language === 'fr' ? '1 000 000 - 3 000 000 FCFA (Organisation complète de réception)' : '1,000,000 - 3,000,000 FCFA (Full Event Organization)' },
    { value: 'tier4', label: language === 'fr' ? '3 000 000 FCFA et plus (Grand Mariage / Événement majeur)' : '3,000,000+ FCFA (Grand Wedding / Major Event)' },
  ];

  const guestOptions = [
    { value: 'cadeau', label: language === 'fr' ? 'Cadeau personnel / Commande individuelle' : 'Personal Gift / Individual Order' },
    { value: '20-50', label: '20 - 50 convives (Intimiste)' },
    { value: '50-150', label: '50 - 150 convives' },
    { value: '150-350', label: '150 - 350 convives' },
    { value: '350-600', label: '350 - 600 convives' },
    { value: '600+', label: '600+ convives (Grande réception)' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.service) {
        newErrors.service =
          language === 'fr'
            ? 'Veuillez sélectionner un type d’événement.'
            : 'Please select an event category.';
      }
      if (!formData.city) {
        newErrors.city =
          language === 'fr'
            ? 'Veuillez sélectionner la ville de célébration.'
            : 'Please select an event city.';
      }
    } else if (step === 2) {
      if (!formData.date) {
        newErrors.date =
          language === 'fr'
            ? 'Veuillez indiquer la date prévue (ou estimée).'
            : 'Please indicate a target date.';
      }
      if (!formData.guests) {
        newErrors.guests =
          language === 'fr'
            ? 'Veuillez estimer le nombre de convives.'
            : 'Please select estimated guest count.';
      }
    } else if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name =
          language === 'fr'
            ? 'Veuillez renseigner votre nom complet.'
            : 'Please enter your full name.';
      }
      const phoneValidation = validateCameroonPhone(formData.phone, language);
      if (!phoneValidation.isValid && phoneValidation.error) {
        newErrors.phone = phoneValidation.error;
      }
      const emailValidation = validateEmail(formData.email, language);
      if (!emailValidation.isValid && emailValidation.error) {
        newErrors.email = emailValidation.error;
      }
      if (!formData.message.trim() || formData.message.trim().length < 8) {
        newErrors.message =
          language === 'fr'
            ? 'Veuillez préciser quelques détails sur votre projet (minimum 8 caractères).'
            : 'Please share a few details about your vision (minimum 8 characters).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const generateWhatsAppMessage = () => {
    const selectedServiceObj = t.services.items.find((i) => i.id === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;

    return language === 'fr'
      ? `Bonjour Tesa Gancia, voici ma demande de devis sur-mesure :\n\n` +
          `• Événement : ${serviceName || 'Non spécifié'}\n` +
          `• Ville : ${formData.city.toUpperCase() || 'Cameroun'}\n` +
          `• Date envisagée : ${formData.date || 'À déterminer'}\n` +
          `• Convives estimés : ${formData.guests || 'À définir'}\n` +
          `• Enveloppe budgétaire : ${formData.budget || 'À discuter'}\n` +
          `• Nom : ${formData.name}\n` +
          `• Téléphone : ${formData.phone}\n` +
          `• Email : ${formData.email}\n` +
          `• Message & Vision : ${formData.message}`
      : `Hello Tesa Gancia, here is my bespoke event inquiry:\n\n` +
          `• Event Type: ${serviceName || 'Not specified'}\n` +
          `• City: ${formData.city.toUpperCase() || 'Cameroon'}\n` +
          `• Target Date: ${formData.date || 'TBD'}\n` +
          `• Estimated Guests: ${formData.guests || 'TBD'}\n` +
          `• Budget Tier: ${formData.budget || 'Flexible'}\n` +
          `• Full Name: ${formData.name}\n` +
          `• Phone: ${formData.phone}\n` +
          `• Email: ${formData.email}\n` +
          `• Vision & Details: ${formData.message}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    if (formData.website_hp) return;

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/237655493685?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  const handleEmailEndpointSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    if (formData.website_hp) return;

    if (Date.now() - formMountTime.current < 2500) {
      console.warn('Submission too fast');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const endpoint = (import.meta.env.VITE_FORM_ENDPOINT as string) || '';

    try {
      const sanitizedPayload = {
        service: sanitizeText(formData.service),
        city: sanitizeText(formData.city),
        date: sanitizeText(formData.date),
        guests: sanitizeText(formData.guests),
        budget: sanitizeText(formData.budget),
        name: sanitizeText(formData.name),
        phone: sanitizeText(formData.phone),
        email: sanitizeText(formData.email),
        message: sanitizeText(formData.message),
        timestamp: new Date().toISOString(),
      };

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(sanitizedPayload),
        });
        if (!res.ok) throw new Error('Network error');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(t.quoteForm.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      service: '',
      city: '',
      date: '',
      guests: '',
      budget: '',
      name: '',
      phone: '',
      email: '',
      message: '',
      website_hp: '',
    });
    setErrors({});
    setCurrentStep(1);
    setIsSuccess(false);
    setSubmitError(null);
    formMountTime.current = Date.now();
  };

  return (
    <div className={`bg-white border border-[#EADBFA] p-6 sm:p-10 shadow-[0_12px_45px_rgba(123,44,191,0.08)] relative rounded-sm ${className}`}>
      {/* Step Progress Bar in Violet */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] font-semibold text-[#260C45] mb-3">
          <span>{t.quoteForm.stepIndicator.replace('{step}', String(currentStep))}</span>
          <span className="text-[#7B2CBF] font-bold">
            {currentStep === 1
              ? t.quoteForm.step1Title
              : currentStep === 2
              ? t.quoteForm.step2Title
              : t.quoteForm.step3Title}
          </span>
        </div>

        {/* 3 Step Track */}
        <div className="grid grid-cols-3 gap-2">
          <div
            className={`h-1.5 transition-all duration-300 rounded-xs ${
              currentStep >= 1 ? 'bg-[#7B2CBF]' : 'bg-[#EADBFA]'
            }`}
          />
          <div
            className={`h-1.5 transition-all duration-300 rounded-xs ${
              currentStep >= 2 ? 'bg-[#9D4EDD]' : 'bg-[#EADBFA]'
            }`}
          />
          <div
            className={`h-1.5 transition-all duration-300 rounded-xs ${
              currentStep >= 3 ? 'bg-[#521C94]' : 'bg-[#EADBFA]'
            }`}
          />
        </div>
      </div>

      {isSuccess ? (
        // Success View
        <div className="py-12 text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#7B2CBF] bg-[#FAF5FE] flex items-center justify-center text-[#7B2CBF] shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className="font-serif text-3xl text-[#260C45] mb-3">
            {t.quoteForm.successTitle}
          </h3>
          <p className="text-sm text-[#6C5B82] max-w-md mx-auto mb-8 font-sans leading-relaxed">
            {t.quoteForm.successMessage}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href={`https://wa.me/237655493685?text=${encodeURIComponent(generateWhatsAppMessage())}`}
              external
              variant="primary"
              size="md"
            >
              Ouvrir sur WhatsApp (+237 655 493 685)
            </Button>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border border-[#EADBFA] text-xs uppercase tracking-wider text-[#6C5B82] hover:text-[#260C45] hover:border-[#7B2CBF] transition-colors cursor-pointer rounded-sm"
            >
              {t.quoteForm.resetForm}
            </button>
          </div>
        </div>
      ) : (
        <form noValidate>
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Do not fill</label>
            <input
              type="text"
              id="website_hp"
              value={formData.website_hp}
              onChange={(e) => setFormData((p) => ({ ...p, website_hp: e.target.value }))}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* ================= STEP 1 ================= */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="font-serif text-2xl text-[#260C45] mb-1">
                {t.quoteForm.step1Title}
              </h4>
              <p className="text-xs text-[#6C5B82] font-sans mb-4">
                {language === 'fr'
                  ? 'Précisez la nature de votre réception et sa ville d’accueil au Cameroun.'
                  : 'Specify the nature of your event and target host city in Cameroon.'}
              </p>

              <FormField
                id="service"
                type="select"
                label={t.quoteForm.eventTypeLabel}
                placeholder={t.quoteForm.eventTypePlaceholder}
                options={serviceOptions}
                value={formData.service}
                onChange={handleInputChange}
                error={errors.service}
                required
              />

              <FormField
                id="city"
                type="select"
                label={t.quoteForm.cityLabel}
                placeholder={t.quoteForm.cityPlaceholder}
                options={cityOptions}
                value={formData.city}
                onChange={handleInputChange}
                error={errors.city}
                required
              />
            </div>
          )}

          {/* ================= STEP 2 ================= */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="font-serif text-2xl text-[#260C45] mb-1">
                {t.quoteForm.step2Title}
              </h4>
              <p className="text-xs text-[#6C5B82] font-sans mb-4">
                {language === 'fr'
                  ? 'Ces informations nous permettent de calibrer la logistique et l’envergure scénographique.'
                  : 'This helps us size the logistical fleet and scenographic scope.'}
              </p>

              <FormField
                id="date"
                type="date"
                label={t.quoteForm.dateLabel}
                value={formData.date}
                onChange={handleInputChange}
                error={errors.date}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  id="guests"
                  type="select"
                  label={t.quoteForm.guestsLabel}
                  placeholder={t.quoteForm.guestsPlaceholder}
                  options={guestOptions}
                  value={formData.guests}
                  onChange={handleInputChange}
                  error={errors.guests}
                  required
                />

                <FormField
                  id="budget"
                  type="select"
                  label={t.quoteForm.budgetLabel}
                  placeholder={t.quoteForm.budgetPlaceholder}
                  options={budgetOptions}
                  value={formData.budget}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {/* ================= STEP 3 ================= */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="font-serif text-2xl text-[#260C45] mb-1">
                {t.quoteForm.step3Title}
              </h4>
              <p className="text-xs text-[#6C5B82] font-sans mb-4">
                {language === 'fr'
                  ? 'Votre contact privé pour la transmission de notre étude stylistique et tarifaire.'
                  : 'Your private contact for receiving our stylistic and budget study.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  type="text"
                  label={t.quoteForm.nameLabel}
                  placeholder={t.quoteForm.namePlaceholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                />

                <FormField
                  id="phone"
                  type="tel"
                  label={t.quoteForm.phoneLabel}
                  placeholder={t.quoteForm.phonePlaceholder}
                  hint={language === 'fr' ? 'ex: +237 655 493 685' : 'e.g., +237 655 493 685'}
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  required
                />
              </div>

              <FormField
                id="email"
                type="email"
                label={t.quoteForm.emailLabel}
                placeholder={t.quoteForm.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />

              <FormField
                id="message"
                type="textarea"
                rows={3}
                label={t.quoteForm.messageLabel}
                placeholder={t.quoteForm.messagePlaceholder}
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                required
              />

              {/* Summary Box */}
              <div className="bg-[#FAF5FE] border border-[#EADBFA] p-4 text-xs font-sans text-[#220A3D] space-y-1 rounded-sm">
                <p className="font-bold text-[#7B2CBF] uppercase tracking-wider mb-2">
                  {t.quoteForm.summaryTitle}
                </p>
                <p>
                  <strong>{language === 'fr' ? 'Événement :' : 'Event:'}</strong>{' '}
                  {serviceOptions.find((o) => o.value === formData.service)?.label || '—'}
                </p>
                <p>
                  <strong>{language === 'fr' ? 'Ville & Date :' : 'City & Date:'}</strong>{' '}
                  {formData.city.toUpperCase() || '—'} • {formData.date || '—'}
                </p>
                <p>
                  <strong>{language === 'fr' ? 'Invités & Budget :' : 'Guests & Budget:'}</strong>{' '}
                  {formData.guests || '—'} • {formData.budget || '—'}
                </p>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 rounded-sm">
                  {submitError}
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#EADBFA] flex flex-col sm:flex-row items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#6C5B82] hover:text-[#260C45] border border-[#EADBFA] hover:border-[#7B2CBF] transition-colors cursor-pointer w-full sm:w-auto text-center rounded-sm font-semibold"
              >
                ← {t.quoteForm.prevStep}
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                {t.quoteForm.nextStep} →
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  {t.quoteForm.submitWhatsApp}
                </Button>

                <Button
                  type="button"
                  onClick={handleEmailEndpointSubmit}
                  variant="secondary"
                  size="md"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {t.quoteForm.submitEmail}
                </Button>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};
