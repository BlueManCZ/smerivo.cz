import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../i18n/config";
import { I18nProvider } from "../i18n/context";
import type { Translations } from "../i18n/types";

import cs from "../i18n/locales/cs.json";
import en from "../i18n/locales/en.json";

const translationMap: Record<Locale, Translations> = { cs, en };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = translationMap[locale as Locale];
  if (!t) return {};
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.ogDescription,
      type: "website",
      url: "https://smerivo.cz",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const translations = translationMap[locale as Locale];

  return (
    <I18nProvider translations={translations}>{children}</I18nProvider>
  );
}
