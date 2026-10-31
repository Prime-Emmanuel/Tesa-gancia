export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    process: string;
    locations: string;
    contact: string;
    requestQuote: string;
    whatsappUs: string;
    menu: string;
    close: string;
  };
  hero: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollIndicator: string;
    citiesBar: string;
  };
  editorial: {
    sectionLabel: string;
    headline: string;
    headlineHighlight: string;
    paragraph1: string;
    paragraph2: string;
    stats: {
      value: number;
      suffix: string;
      label: string;
    }[];
  };
  services: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    discover: string;
    viewAll: string;
    requestThisService: string;
    whatIsIncluded: string;
    allTab: string;
    eventsTab: string;
    giftsTab: string;
    startingFrom: string;
    flyerTitle: string;
    flyerSubtitle: string;
    viewFlyer: string;
    items: {
      number: string;
      id: string;
      title: string;
      category: string;
      categoryGroup: 'events' | 'gifts';
      shortDesc: string;
      fullDesc: string;
      features: string[];
      image: string;
      price?: string;
    }[];
  };
  gallery: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    loadMore: string;
    allLoaded: string;
    noResults: string;
    counterOf: string;
    filters: {
      id: string;
      label: string;
    }[];
    items: {
      id: string;
      title: string;
      category: string;
      location: string;
      year: string;
      guests: string;
      image: string;
      caption: string;
    }[];
  };
  process: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  locations: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    loadMap: string;
    hideMap: string;
    getDirections: string;
    cities: {
      id: string;
      name: string;
      type: string;
      address: string;
      phone1: string;
      phone1Formatted: string;
      phone2: string;
      phone2Formatted: string;
      hours: string;
      image: string;
      mapQuery: string;
    }[];
  };
  quoteForm: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    stepIndicator: string;
    eventTypeLabel: string;
    eventTypePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    dateLabel: string;
    guestsLabel: string;
    guestsPlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    nextStep: string;
    prevStep: string;
    submitWhatsApp: string;
    submitEmail: string;
    summaryTitle: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    resetForm: string;
    directContactTitle: string;
    directContactSubtitle: string;
  };
  closingCta: {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    brandTagline: string;
    quickLinks: string;
    servicesTitle: string;
    locationsTitle: string;
    rightsReserved: string;
    privacy: string;
    legalNotice: string;
    sitemap: string;
    designedBy: string;
    designedByLink: string;
    prymaxStudio: string;
  };
  floating: {
    whatsappTooltip: string;
    backToTop: string;
    offlineMessage: string;
    onlineRestored: string;
  };
  errorBoundary: {
    title: string;
    description: string;
    reloadButton: string;
    homeButton: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  legal: {
    title: string;
    lastUpdated: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
}
