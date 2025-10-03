import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(?:.*)$/;
const locales = ['en', 'am'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes fast
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];
  const hasLocale = locales.includes(maybeLocale);

  // If URL already has a locale, just persist it in a cookie and continue
  if (hasLocale) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', maybeLocale);
    return response;
  }

  // Otherwise, pick locale from cookie or fall back to default and redirect
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const targetLocale = locales.includes(cookieLocale ?? '')
    ? (cookieLocale as string)
    : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${targetLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
