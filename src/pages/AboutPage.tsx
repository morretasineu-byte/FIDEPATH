import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { structuralImage } from '../assets/images';

interface AboutPageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang, setCurrentPage }) => {
  const t = translations[currentLang];

  return (
    <div className="w-full bg-white text-neutral-900">
      
      {/* Header Banner */}
      <section className="border-b border-neutral-200 bg-neutral-50/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
            {t.about.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Main Narrative & Structural Image */}
      <section className="py-20 lg:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p className="text-xl font-medium text-neutral-950 leading-snug">
                {t.about.p1}
              </p>

              <p>
                {t.about.p2}
              </p>

              <div className="p-6 bg-neutral-50 border-l-2 border-neutral-900 text-neutral-900 font-medium my-6">
                {t.about.p3}
              </div>

              <p>
                {t.about.p4}
              </p>

              <p className="text-neutral-600">
                {t.about.p5}
              </p>

              {/* Core Tenets Bulletpoints */}
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-900">
                  {t.about.foundationsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {t.about.foundations.map((foundation, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{foundation}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Architectural Structural Image */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-neutral-300 bg-neutral-900 overflow-hidden shadow-lg aspect-[4/5]">
                <img
                  src={structuralImage}
                  alt={t.about.impartialityTitle}
                  className="w-full h-full object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="p-6 border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-600 space-y-2">
                <div className="font-semibold text-neutral-950 uppercase tracking-wider">
                  {t.about.impartialityTitle}
                </div>
                <p className="leading-relaxed">
                  "{t.about.impartialityQuote}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Professional Background Space */}
      <section className="py-20 lg:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              {t.about.founderSectionBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              {t.about.founderSectionTitle}
            </h2>
          </div>

          <div className="border border-neutral-200 bg-white p-8 sm:p-10 max-w-4xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
              <div>
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  {t.about.founderName}
                </h3>
                <div className="text-sm font-mono text-neutral-500 pt-1">
                  {t.about.founderRole} · {t.common.location}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>{t.about.founderBadge}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {t.about.founderNotice}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs">
              <div className="p-4 border border-neutral-200 bg-neutral-50/60 space-y-1">
                <span className="font-mono text-neutral-400 block">{t.about.founderFields.focusLabel}</span>
                <span className="font-semibold text-neutral-900">{t.about.founderFields.focusValue}</span>
              </div>
              <div className="p-4 border border-neutral-200 bg-neutral-50/60 space-y-1">
                <span className="font-mono text-neutral-400 block">{t.about.founderFields.deliverablesLabel}</span>
                <span className="font-semibold text-neutral-900">{t.about.founderFields.deliverablesValue}</span>
              </div>
              <div className="p-4 border border-neutral-200 bg-neutral-50/60 space-y-1">
                <span className="font-mono text-neutral-400 block">{t.about.founderFields.contactLabel}</span>
                <a href="mailto:joan.perello@fidepath.com" className="font-semibold text-neutral-900 hover:underline">
                  joan.perello@fidepath.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">
              {t.about.ctaBox.title}
            </h3>
            <p className="text-sm text-neutral-400">
              {t.about.ctaBox.desc}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-200 transition-colors shrink-0"
          >
            <span>{t.about.ctaBox.button}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
