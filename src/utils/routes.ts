import { Language, PageId } from '../types';

export type LegalPageId = 'legal' | 'privacy' | 'cookies';

export const LEGAL_ROUTES: Record<Language, Record<LegalPageId, string>> = {
  en: {
    legal: '/en/legal-notice',
    privacy: '/en/privacy-policy',
    cookies: '/en/cookie-policy',
  },
  ca: {
    legal: '/ca/avis-legal',
    privacy: '/ca/politica-de-privadesa',
    cookies: '/ca/politica-de-cookies',
  },
  es: {
    legal: '/es/aviso-legal',
    privacy: '/es/politica-de-privacidad',
    cookies: '/es/politica-de-cookies',
  },
};

export function getLegalRoute(lang: Language, page: LegalPageId): string {
  return LEGAL_ROUTES[lang][page];
}

export function isLegalPage(page: PageId): page is LegalPageId {
  return page === 'legal' || page === 'privacy' || page === 'cookies';
}

export function matchLegalPathname(
  pathname: string
): { lang: Language; page: LegalPageId } | null {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  const langs: Language[] = ['en', 'ca', 'es'];
  const pages: LegalPageId[] = ['legal', 'privacy', 'cookies'];

  for (const lang of langs) {
    for (const page of pages) {
      if (LEGAL_ROUTES[lang][page] === normalized) {
        return { lang, page };
      }
    }
  }
  return null;
}
