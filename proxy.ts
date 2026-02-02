import { type NextRequest, NextResponse } from "next/server";
import { locales } from "./app/i18n/config";
import { detectLocale } from "./app/i18n/detectLocale";

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
  let locale: string;

  const cookieLocale = request.cookies.get("locale")?.value;
  if (
    cookieLocale &&
    locales.includes(cookieLocale as (typeof locales)[number])
  ) {
    locale = cookieLocale;
  } else {
    locale = detectLocale(request.headers.get("accept-language") ?? "");
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
