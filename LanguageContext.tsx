import React, { createContext, useState, useContext, useEffect, useMemo, useCallback } from 'react';
import { translations } from './translations';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
  updateTranslations: (newContent: any) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [appTranslations, setAppTranslations] = useState(() => deepCopy(translations));

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = useCallback((key: string): any => {
    if (key === '.') return deepCopy(appTranslations[language]);
    const keys = key.split('.');
    let result = appTranslations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        return key; 
      }
    }
    return result;
  }, [language, appTranslations]);
  
  const updateTranslations = (newContentForLang: any) => {
    setAppTranslations(prev => deepCopy({
        ...prev,
        [language]: newContentForLang,
    }));
  };

  const value = useMemo(() => ({ language, setLanguage, t, updateTranslations }), [language, t, updateTranslations]);

  return (
    <LanguageContext.Provider value={value}>
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