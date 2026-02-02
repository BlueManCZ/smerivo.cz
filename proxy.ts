import { type NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (hasLocale) return;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Determine locale: cookie → Accept-Language → default
  let locale = defaultLocale;

  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale as typeof locale)) {
    locale = cookieLocale as typeof locale;
  } else {
    const acceptLang = request.headers.get("accept-language") ?? "";
    for (const l of locales) {
      if (acceptLang.includes(l)) {
        locale = l;
        break;
      }
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
