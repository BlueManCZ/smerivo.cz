import { type Locale, locales, defaultLocale } from "./config";

/**
 * Parse an Accept-Language header and return the best matching locale.
 */
export function detectLocale(acceptLanguage: string): Locale {
  const preferred = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, q] = entry.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const lang = tag.split("-")[0];
    const match = locales.find((l) => l === lang);
    if (match) return match;
  }

  return defaultLocale;
}
