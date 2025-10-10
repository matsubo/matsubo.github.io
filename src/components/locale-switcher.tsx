'use client';

import { useState, useEffect } from 'react';

const LOCALE_STORAGE_KEY = 'preferred-locale';
const DEFAULT_LOCALE = 'en';

export function useLocale() {
  const [locale, setLocaleState] = useState<string>(DEFAULT_LOCALE);

  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && (stored === 'en' || stored === 'ja')) {
      setLocaleState(stored);
      return;
    }

    // Detect from browser
    const browserLang = navigator.language.toLowerCase();
    const detectedLocale = browserLang.startsWith('ja') ? 'ja' : 'en';
    setLocaleState(detectedLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, detectedLocale);
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  };

  return { locale, setLocale };
}

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`btn btn-sm transition-all duration-300 ${
          locale === 'en' ? 'btn-primary' : 'btn-ghost hover:btn-primary'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('ja')}
        className={`btn btn-sm transition-all duration-300 ${
          locale === 'ja' ? 'btn-primary' : 'btn-ghost hover:btn-primary'
        }`}
      >
        日本語
      </button>
    </div>
  );
}
