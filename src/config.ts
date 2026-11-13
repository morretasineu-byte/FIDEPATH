export const LINKEDIN_URL = 'https://www.linkedin.com/in/joanperello1985';
export const LEGAL_URL = 'https://fidepathlegal-nine.vercel.app';
export const YEARS_EXPERIENCE = 12;
export const FOUNDED = 'January 2026';

const MONTHS_ES: Record<string, string> = {
  January: 'enero',
  February: 'febrero',
  March: 'marzo',
  April: 'abril',
  May: 'mayo',
  June: 'junio',
  July: 'julio',
  August: 'agosto',
  September: 'septiembre',
  October: 'octubre',
  November: 'noviembre',
  December: 'diciembre'
};

const MONTHS_CA: Record<string, string> = {
  January: 'gener',
  February: 'febrer',
  March: 'març',
  April: 'abril',
  May: 'maig',
  June: 'juny',
  July: 'juliol',
  August: 'agost',
  September: 'setembre',
  October: 'octubre',
  November: 'novembre',
  December: 'desembre'
};

export function formatFounded(lang: 'en' | 'es' | 'ca'): string {
  const parts = FOUNDED.trim().split(/\s+/);
  const month = parts[0];
  const year = parts.slice(1).join(' ');

  if (lang === 'es' && MONTHS_ES[month]) {
    return `${MONTHS_ES[month]} de ${year}`;
  }
  if (lang === 'ca' && MONTHS_CA[month]) {
    return `${MONTHS_CA[month]} de ${year}`;
  }
  return FOUNDED;
}
