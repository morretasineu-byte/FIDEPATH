import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { renderCopyWithItalics } from '../utils/formatCopy';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { technicalPlansImage, dataCentreImage } from '../assets/images';

interface ApproachPageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ currentLang, setCurrentPage }) => {
  const t = translations[currentLang];

  return (
    <div className="w-full bg-fp-white text-fp-charcoal">
      {/* Page Header */}
      <section className="border-b border-fp-stone bg-fp-mist py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-anthracite/75">
            {t.approach.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fp-anthracite tracking-tight text-balance">
            {t.approach.title}
          </h1>
          <p className="text-base sm:text-lg text-fp-charcoal/85 max-w-3xl leading-relaxed">
            {t.approach.subtitle}
          </p>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 lg:py-24 bg-fp-white border-b border-fp-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
                {t.approach.corePrinciplesBadge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight leading-snug">
                {t.approach.corePrinciplesTitle}
              </h2>

              <p className="text-sm sm:text-base text-fp-charcoal/90 leading-relaxed">
                {t.approach.corePrinciplesP1}
              </p>

              <p className="text-sm sm:text-base text-fp-charcoal/90 leading-relaxed">
                {t.approach.corePrinciplesP2}
              </p>

              {/* Documentary Image */}
              <div className="border border-fp-silver bg-fp-mist p-2">
                <img
                  src={technicalPlansImage}
                  alt={t.approach.imageAlt}
                  className="w-full h-auto object-cover grayscale contrast-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="pt-2 px-1 text-[11px] font-mono text-fp-anthracite/75 flex justify-between gap-2">
                  <span>{t.approach.imageCaption1}</span>
                  <span>{t.approach.imageCaption2}</span>
                </div>
              </div>
            </div>

            {/* Right: The 6 Detailed Methodological Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75 mb-2">
                {t.approach.methodologyBadge}
              </div>

              <div className="space-y-4">
                {t.approach.methodologySteps.map((step) => (
                  <div
                    key={step.number}
                    className="p-6 bg-fp-mist/80 border border-fp-stone hover:bg-fp-white hover:border-fp-silver transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-fp-anthracite text-fp-white flex items-center justify-center font-mono font-bold text-xs shrink-0 tabular-nums">
                        {step.number}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-fp-anthracite tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-fp-charcoal/85 leading-relaxed">
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

      {/* Technical Capabilities & Software Tools */}
      <section className="py-20 lg:py-24 bg-fp-mist border-b border-fp-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
              {t.capabilities.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight">
              {t.capabilities.title}
            </h2>
            <p className="text-sm sm:text-base text-fp-charcoal/85 leading-relaxed">
              {t.capabilities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.capabilities.blocks.map((block) => (
              <div key={block.number} className="p-8 border border-fp-silver bg-fp-white space-y-4">
                <div className="flex items-center justify-between border-b border-fp-stone pb-3">
                  <h3 className="text-lg font-bold text-fp-anthracite tracking-tight">
                    {block.title}
                  </h3>
                  <span className="text-sm font-mono font-semibold text-fp-slate tabular-nums">
                    {block.number}
                  </span>
                </div>
                <p className="text-sm text-fp-charcoal/85 leading-relaxed">
                  {block.summary}
                </p>
                <ul className="space-y-2">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-fp-charcoal/90">
                      <span className="w-1.5 h-1.5 bg-fp-anthracite mt-2 shrink-0" />
                      <span>{renderCopyWithItalics(item, currentLang)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border border-fp-silver bg-fp-stone p-6 sm:p-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
                {t.capabilities.softwareLabel}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {t.capabilities.softwareTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-2 border border-fp-silver bg-fp-white text-xs font-mono font-semibold text-fp-anthracite"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-fp-silver lg:pl-8 flex items-center">
              <p className="text-sm text-fp-charcoal/90 leading-relaxed">
                {t.capabilities.methodologySelectionNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contractual Frameworks & Industry Guidance */}
      <section className="py-20 lg:py-24 bg-fp-white border-b border-fp-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
              {t.standards.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight">
              {t.standards.title}
            </h2>
            <p className="text-sm sm:text-base text-fp-charcoal/85 leading-relaxed">
              {t.standards.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 border border-fp-silver bg-fp-mist space-y-5">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite border-b border-fp-silver pb-3">
                {t.standards.contractsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.standards.contracts.map((contract) => (
                  <div
                    key={contract.name}
                    className="p-4 border border-fp-stone bg-fp-white space-y-1.5"
                  >
                    <div className="text-sm font-bold text-fp-anthracite font-mono">
                      {contract.name}
                    </div>
                    <p className="text-xs text-fp-charcoal/85 leading-relaxed">
                      {contract.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border border-fp-silver bg-fp-mist space-y-5 flex flex-col justify-between">
              <div className="space-y-5">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite border-b border-fp-silver pb-3">
                  {t.standards.guidanceTitle}
                </h3>
                <div className="space-y-4">
                  {t.standards.guidance.map((guide) => (
                    <div
                      key={guide.name}
                      className="p-4 border border-fp-stone bg-fp-white space-y-1.5"
                    >
                      <div className="text-sm font-bold text-fp-anthracite">{guide.name}</div>
                      <p className="text-xs text-fp-charcoal/85 leading-relaxed">
                        {guide.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border border-fp-silver bg-fp-stone text-xs text-fp-anthracite/85 leading-relaxed">
                {t.standards.referenceNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Framework, Project Scale & Sectors */}
      <section className="py-20 lg:py-24 bg-fp-stone/70 border-b border-fp-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
              {t.experience.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight">
              {t.experience.title}
            </h2>
            <p className="text-fp-charcoal/85 text-base leading-relaxed">
              {t.experience.frameworkIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 border border-fp-silver bg-fp-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
                  {t.experience.scaleTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {t.experience.scaleHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-fp-stone bg-fp-mist space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="text-xl font-bold font-mono text-fp-anthracite tracking-tight tabular-nums">
                          {item.figure}
                        </div>
                        <div className="text-xs font-semibold text-fp-anthracite">
                          {item.label}
                        </div>
                      </div>
                      <p className="text-xs text-fp-charcoal/80 leading-relaxed pt-1 border-t border-fp-stone">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-fp-anthracite/75 leading-relaxed border-t border-fp-stone pt-4">
                {t.experience.scaleDisclaimer}
              </p>
            </div>

            <div className="lg:col-span-5 relative border border-fp-silver bg-fp-charcoal overflow-hidden min-h-[240px]">
              <img
                src={dataCentreImage}
                alt={t.experience.imageAlt}
                className="w-full h-full object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-fp-charcoal/90 backdrop-blur-sm p-4 text-fp-white border-t border-fp-anthracite flex items-center justify-between text-xs gap-4">
                <span className="font-mono text-fp-stone">{t.experience.imageCaption}</span>
                <span className="text-fp-silver font-mono text-[11px] shrink-0">
                  {t.experience.imageLocation}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.experience.sectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-8 border border-fp-silver bg-fp-white space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-fp-anthracite/65 tabular-nums">
                    {t.common.sectorPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-fp-anthracite">{sector.title}</h3>
                  <p className="text-sm text-fp-charcoal/85 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-fp-stone space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-fp-anthracite/70 block">
                    {t.experience.typicalDelayLabel}
                  </span>
                  <p className="text-xs text-fp-charcoal/90">{sector.delayTypes}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8 border border-fp-silver bg-fp-white space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
              {t.experience.sectorBreadthTitle}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {t.experience.sectorTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 border border-fp-silver bg-fp-mist text-xs font-mono text-fp-anthracite"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project-type consultation note */}
          <div className="p-6 bg-fp-white border border-fp-silver flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-fp-anthracite">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.experience.confidentialityBadge}</span>
              </div>
              <p className="text-sm text-fp-charcoal/85 leading-relaxed">
                {t.experience.futureCasesNote}
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-fp-white bg-fp-anthracite hover:bg-fp-charcoal transition-colors shrink-0 self-start sm:self-center"
            >
              <span>{t.experience.contactButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fp-anthracite text-fp-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-fp-white">
              {t.approach.ctaBox.title}
            </h3>
            <p className="text-sm text-fp-stone/90">{t.approach.ctaBox.desc}</p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-fp-charcoal bg-fp-white hover:bg-fp-stone transition-colors shrink-0"
          >
            <span>{t.approach.ctaBox.button}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
