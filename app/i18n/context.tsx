"use client";

import { createContext, useContext } from "react";
import type { Translations } from "./types";

const I18nContext = createContext<Translations | null>(null);

export function I18nProvider({
  translations,
  children,
}: {
  translations: Translations;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={translations}>{children}</I18nContext.Provider>
  );
}

export function useTranslations(): Translations {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within I18nProvider");
  return ctx;
}
