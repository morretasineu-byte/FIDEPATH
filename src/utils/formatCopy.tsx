import React from 'react';
import { Language } from '../types';

export function renderCopyWithItalics(text: string, lang: Language): React.ReactNode {
  if (lang === 'en' || !/\badjudication\b/i.test(text)) {
    return text;
  }
  const parts = text.split(/(\badjudication\b)/gi);
  return parts.map((part, idx) =>
    part.toLowerCase() === 'adjudication' ? (
      <em key={idx} className="italic">
        {part}
      </em>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );
}
