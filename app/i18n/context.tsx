"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import type { Translations } from "./types";

const I18nContext = createContext<{
  locale: Locale;
  translations: Translations;
} | null>(null);

export function I18nProvider({
  locale,
  translations,
  children,
}: {
  locale: Locale;
  translations: Translations;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, translations }}>
      {children}
    </I18nContext.Provider>
  );
}

function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useTranslations(): Translations {
  return useI18n().translations;
}

export function useLocale(): Locale {
  return useI18n().locale;
}
