"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "../i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = locales.find(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  ) ?? "cs";

  function switchTo(locale: Locale) {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`) || `/${locale}`;
    document.cookie = `locale=${locale};path=/;max-age=31536000`;
    window.location.href = newPath;
  }

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em]">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="mx-1 text-border">/</span>}
          <button
            type="button"
            onClick={() => switchTo(locale)}
            className={`transition-colors ${
              locale === currentLocale
                ? "text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
