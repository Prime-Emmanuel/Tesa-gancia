import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from './types';
import { fr } from './fr';
import { en } from './en';
import { safeStorage } from '../utils/storage';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'tesa_gancia_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') {
      return saved;
    }
    // Default to French as requested for Cameroon
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    // Dynamically update document lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = language === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
