import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { technicalPlansImage } from '../assets/images';

interface ApproachPageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ currentLang, setCurrentPage }) => {
  const t = translations[currentLang];

  return (
    <div className="w-full bg-white text-neutral-900">
      
      {/* Page Header */}
      <section className="border-b border-neutral-200 bg-neutral-50/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
            {t.approach.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            {t.approach.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {t.approach.subtitle}
          </p>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 lg:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                {t.approach.corePrinciplesBadge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug">
                {t.approach.corePrinciplesTitle}
              </h2>
              
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {t.approach.corePrinciplesP1}
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {t.approach.corePrinciplesP2}
              </p>

              {/* Documentary Image */}
              <div className="pt-4 border border-neutral-300 bg-white p-2 shadow-sm">
                <img
                  src={technicalPlansImage}
                  alt={t.approach.imageCaption1}
                  className="w-full h-auto object-cover grayscale contrast-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="pt-2 px-1 text-[11px] font-mono text-neutral-500 flex justify-between">
                  <span>{t.approach.imageCaption1}</span>
                  <span>{t.approach.imageCaption2}</span>
                </div>
              </div>
            </div>

            {/* Right: The 6 Detailed Methodological Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                {t.approach.methodologyBadge}
              </div>

              <div className="space-y-4">
                {t.approach.methodologySteps.map((step) => (
                  <div
                    key={step.number}
                    className="p-6 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-neutral-950 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {step.number}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Experience Framework & Sectors */}
      <section className="py-20 lg:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              {t.experience.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              {t.experience.title}
            </h2>
            <p className="text-neutral-600 text-base">
              {t.experience.frameworkIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.experience.sectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-8 border border-neutral-200 bg-white space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400">
                    {t.common.sectorPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    {t.experience.typicalDelayLabel}
                  </span>
                  <p className="text-xs text-neutral-700">
                    {sector.delayTypes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Confidentiality and future case study placeholder */}
          <div className="p-6 bg-white border border-neutral-300 space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-neutral-900">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.experience.confidentialityBadge}</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {t.experience.futureCasesNote}
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">
              {t.approach.ctaBox.title}
            </h3>
            <p className="text-sm text-neutral-400">
              {t.approach.ctaBox.desc}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-200 transition-colors shrink-0"
          >
            <span>{t.approach.ctaBox.button}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
