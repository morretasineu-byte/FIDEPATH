import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { LINKEDIN_URL } from '../config';
import { renderCopyWithItalics } from '../utils/formatCopy';
import { ArrowRight, ArrowUpRight, ShieldCheck, Scale, Compass, CheckCircle2 } from 'lucide-react';
import { heroImage, technicalPlansImage, dataCentreImage } from '../assets/images';

interface HomePageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
  onSelectService?: (serviceTitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  setCurrentPage,
  onSelectService
}) => {
  const t = translations[currentLang];

  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscussProject = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-fp-cream text-fp-slate">
      {/* HERO SECTION */}
      <section className="relative border-b border-fp-tan/30 overflow-hidden bg-fp-petrol text-fp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-18 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Left Column: Value Proposition & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-sand">
                  {t.hero.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-bold text-fp-cream tracking-tight leading-[1.12] text-balance">
                  {t.hero.title}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-fp-cream/90 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              <p className="text-sm text-fp-sand leading-relaxed max-w-2xl border-t border-fp-tan/35 pt-4">
                {renderCopyWithItalics(t.hero.audienceNote, currentLang)}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleDiscussProject}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-fp-petrol bg-fp-sand hover:bg-fp-cream transition-colors focus:outline-none focus:ring-2 focus:ring-fp-sand focus:ring-offset-2 focus:ring-offset-fp-petrol whitespace-nowrap"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-fp-cream bg-transparent hover:bg-fp-petrol-deep border border-fp-tan hover:border-fp-sand transition-colors whitespace-nowrap"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <ArrowRight className="w-4 h-4 text-fp-sand" />
                </button>
              </div>

              {/* Key trust bar - unboxed clean typography */}
              <div className="pt-5 border-t border-fp-tan/35 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-fp-sand">
                {t.hero.trustItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-fp-tan">/</span>}
                    <span>{item}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative border border-fp-tan/40 bg-fp-petrol-deep overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/13]">
                <img
                  src={heroImage}
                  alt={t.hero.imageAlt}
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Visual Architectural Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-fp-petrol-deep/90 backdrop-blur-sm p-4 text-fp-cream border-t border-fp-tan/35 flex items-center justify-between text-xs gap-4">
                  <span className="font-mono text-fp-cream">{t.hero.imageCaption}</span>
                  <span className="text-fp-sand font-mono text-[11px] shrink-0">
                    {t.hero.imageLocation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: POSITIONING & BRAND ATTRIBUTES */}
      <section className="py-20 lg:py-24 bg-fp-sand-light border-b border-fp-tan/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left title & context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
                {t.intro.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-fp-petrol tracking-tight leading-tight text-balance">
                {t.intro.title}
              </h2>
              <div className="w-12 h-0.5 bg-fp-tan" />
            </div>

            {/* Right text narrative */}
            <div className="lg:col-span-7 space-y-5 text-fp-slate leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-fp-petrol">{t.intro.paragraph1}</p>
              <p>{t.intro.paragraph2}</p>
              <p className="text-fp-slate">{t.intro.paragraph3}</p>
              <div className="p-5 bg-fp-cream border border-fp-tan/50 text-sm text-fp-petrol leading-relaxed">
                {t.intro.positioningNote}
              </div>
            </div>
          </div>

          {/* Three Core Brand Attributes */}
          <div className="mt-16 pt-16 border-t border-fp-tan/40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-fp-tan/45 bg-fp-white hover:bg-fp-cream/70 hover:border-fp-tan transition-colors space-y-4">
              <div className="w-10 h-10 border border-fp-tan/50 bg-fp-cream flex items-center justify-center text-fp-petrol">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                {t.intro.attributes.independent.title}
              </h3>
              <p className="text-sm text-fp-slate leading-relaxed">
                {t.intro.attributes.independent.desc}
              </p>
            </div>

            <div className="p-8 border border-fp-tan/45 bg-fp-white hover:bg-fp-cream/70 hover:border-fp-tan transition-colors space-y-4">
              <div className="w-10 h-10 border border-fp-tan/50 bg-fp-cream flex items-center justify-center text-fp-petrol">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                {t.intro.attributes.reliable.title}
              </h3>
              <p className="text-sm text-fp-slate leading-relaxed">
                {t.intro.attributes.reliable.desc}
              </p>
            </div>

            <div className="p-8 border border-fp-tan/45 bg-fp-white hover:bg-fp-cream/70 hover:border-fp-tan transition-colors space-y-4">
              <div className="w-10 h-10 border border-fp-tan/50 bg-fp-cream flex items-center justify-center text-fp-petrol">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                {t.intro.attributes.expert.title}
              </h3>
              <p className="text-sm text-fp-slate leading-relaxed">
                {t.intro.attributes.expert.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES (OUR EXPERTISE) */}
      <section className="py-20 lg:py-24 bg-fp-cream border-b border-fp-tan/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-fp-tan/45">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
                {t.services.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight">
                {t.services.sectionTitle}
              </h2>
              <p className="text-fp-slate max-w-2xl text-sm sm:text-base">
                {t.services.sectionSubtitle}
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-fp-petrol hover:text-fp-petrol-deep transition-colors whitespace-nowrap"
            >
              <span>{t.services.viewAll}</span>
              <ArrowRight className="w-4 h-4 text-fp-tan" />
            </button>
          </div>

          {/* 5 Services List */}
          <div className="divide-y divide-fp-tan/35">
            {t.services.items.map((service) => (
              <div
                key={service.id}
                className="py-9 group grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-fp-sand-light/65 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors"
              >
                <div className="md:col-span-1 text-sm font-mono font-semibold text-fp-petrol/80 group-hover:text-fp-petrol transition-colors tabular-nums">
                  {service.number}
                </div>

                <div className="md:col-span-5 space-y-2">
                  <h3 className="text-xl font-bold text-fp-petrol tracking-tight group-hover:text-fp-petrol-deep">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-fp-slate/80">
                    {t.services.cardTagline}
                  </div>
                </div>

                <div className="md:col-span-4 text-sm text-fp-slate leading-relaxed">
                  {renderCopyWithItalics(service.shortDesc, currentLang)}
                </div>

                <div className="md:col-span-2 flex md:justify-end items-center pt-2 md:pt-0">
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-fp-petrol group-hover:underline decoration-fp-tan underline-offset-4"
                  >
                    <span>{t.services.detailsButton}</span>
                    <ArrowUpRight className="w-4 h-4 text-fp-tan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL CAPABILITIES & SOFTWARE */}
      <section className="py-20 lg:py-24 bg-fp-sand-light border-b border-fp-tan/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
              {t.capabilities.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight text-balance">
              {t.capabilities.title}
            </h2>
            <p className="text-fp-slate text-base leading-relaxed">
              {t.capabilities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.capabilities.blocks.map((block) => (
              <div
                key={block.number}
                className="p-8 border border-fp-tan/45 bg-fp-white space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-fp-tan/35 pb-3">
                    <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                      {block.title}
                    </h3>
                    <span className="text-sm font-mono font-semibold text-fp-petrol tabular-nums">
                      {block.number}
                    </span>
                  </div>
                  <p className="text-sm text-fp-slate leading-relaxed">
                    {block.summary}
                  </p>
                  <ul className="space-y-2 pt-1">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-fp-slate">
                        <span className="w-1.5 h-1.5 bg-fp-tan mt-2 shrink-0" />
                        <span>{renderCopyWithItalics(item, currentLang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Software & Methodology Selection Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border border-fp-tan/50 bg-fp-cream p-6 sm:p-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-petrol">
                {t.capabilities.softwareLabel}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {t.capabilities.softwareTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-2 border border-fp-tan/50 bg-fp-white text-xs font-mono font-semibold text-fp-petrol"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-fp-tan/45 lg:pl-8 flex items-center">
              <p className="text-sm text-fp-slate leading-relaxed">
                {t.capabilities.methodologySelectionNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTRACTUAL FRAMEWORKS & TECHNICAL GUIDANCE */}
      <section className="py-20 lg:py-24 bg-fp-cream border-b border-fp-tan/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
              {t.standards.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight text-balance">
              {t.standards.title}
            </h2>
            <p className="text-fp-slate text-base leading-relaxed">
              {t.standards.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Contract Forms */}
            <div className="p-8 border border-fp-tan/45 bg-fp-white space-y-6">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-fp-petrol border-b border-fp-tan/35 pb-3">
                {t.standards.contractsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {t.standards.contracts.map((contract) => (
                  <div
                    key={contract.name}
                    className="p-4 border border-fp-tan/35 bg-fp-sand-light/65 space-y-1.5"
                  >
                    <div className="text-sm font-bold text-fp-petrol font-mono">
                      {contract.name}
                    </div>
                    <p className="text-xs text-fp-slate leading-relaxed">
                      {contract.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Protocols & Practices */}
            <div className="p-8 border border-fp-tan/45 bg-fp-white space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-fp-petrol border-b border-fp-tan/35 pb-3">
                  {t.standards.guidanceTitle}
                </h3>
                <div className="space-y-4">
                  {t.standards.guidance.map((guide) => (
                    <div
                      key={guide.name}
                      className="p-4 border border-fp-tan/35 bg-fp-sand-light/65 space-y-1.5"
                    >
                      <div className="text-sm font-bold text-fp-petrol">{guide.name}</div>
                      <p className="text-xs text-fp-slate leading-relaxed">
                        {guide.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 border border-fp-tan/50 bg-fp-cream text-xs text-fp-petrol leading-relaxed">
                {t.standards.referenceNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH (5 PILLARS) */}
      <section className="py-20 lg:py-24 bg-fp-sand-light border-b border-fp-tan/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
              {t.whyUs.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight text-balance">
              {t.whyUs.title}
            </h2>
            <p className="text-fp-slate text-base leading-relaxed">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {t.whyUs.principles.map((principle, idx) => (
              <div
                key={principle.number}
                className={`p-8 border border-fp-tan/45 hover:border-fp-tan bg-fp-white transition-colors space-y-4 flex flex-col justify-between ${
                  idx < 3 ? 'md:col-span-2' : 'md:col-span-3'
                }`}
              >
                <div className="space-y-4">
                  <span className="text-2xl font-mono font-bold text-fp-petrol tabular-nums">
                    {principle.number}
                  </span>
                  <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-fp-slate leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-fp-tan pt-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR METHOD (4 STAGES) */}
      <section className="py-20 lg:py-24 bg-fp-cream border-b border-fp-tan/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
                {t.approach.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight text-balance">
                {t.approach.title}
              </h2>
              <p className="text-fp-slate text-base leading-relaxed">
                {t.approach.intro}
              </p>

              {/* Documentary Technical Plans Image */}
              <div className="border border-fp-tan/50 bg-fp-white p-2">
                <img
                  src={technicalPlansImage}
                  alt={t.approach.imageAlt}
                  className="w-full h-auto object-cover grayscale contrast-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="pt-2 px-1 text-[11px] font-mono text-fp-slate flex justify-between gap-2">
                  <span>{t.approach.imageCaption1}</span>
                  <span>{t.approach.imageCaption2}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('approach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-fp-petrol hover:text-fp-petrol-deep transition-colors"
                >
                  <span>{t.approach.exploreButton}</span>
                  <ArrowRight className="w-4 h-4 text-fp-tan" />
                </button>
              </div>
            </div>

            {/* Sequence visual (editorial timeline) */}
            <div className="lg:col-span-7 space-y-4">
              {t.approach.stages.map((stage) => (
                <div
                  key={stage.number}
                  className="p-6 sm:p-8 bg-fp-white border border-fp-tan/45 hover:border-fp-tan transition-colors relative"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-fp-petrol text-fp-sand flex items-center justify-center font-mono font-bold text-sm shrink-0 tabular-nums">
                      {stage.number}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-fp-petrol tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-fp-slate leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: EXPERIENCE, SECTORS & PROJECT SCALE */}
      <section className="py-20 lg:py-24 bg-fp-sand-light border-b border-fp-tan/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-slate">
              {t.experience.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fp-petrol tracking-tight text-balance">
              {t.experience.title}
            </h2>
            <p className="text-fp-slate text-base leading-relaxed">
              {t.experience.frameworkIntro}
            </p>
          </div>

          {/* Scale Highlights + Data Centre Architectural Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 border border-fp-tan/50 bg-fp-cream p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-petrol">
                  {t.experience.scaleTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {t.experience.scaleHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-fp-tan/40 bg-fp-white space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="text-xl sm:text-2xl font-bold font-mono text-fp-petrol tracking-tight tabular-nums">
                          {item.figure}
                        </div>
                        <div className="text-xs font-semibold text-fp-petrol">
                          {item.label}
                        </div>
                      </div>
                      <p className="text-xs text-fp-slate leading-relaxed pt-1 border-t border-fp-tan/30">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-fp-slate leading-relaxed border-t border-fp-tan/35 pt-4">
                {t.experience.scaleDisclaimer}
              </p>
            </div>

            <div className="lg:col-span-5 relative border border-fp-tan/50 bg-fp-petrol-deep overflow-hidden min-h-[260px]">
              <img
                src={dataCentreImage}
                alt={t.experience.imageAlt}
                className="w-full h-full object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-fp-petrol-deep/90 backdrop-blur-sm p-4 text-fp-cream border-t border-fp-tan/35 flex items-center justify-between text-xs gap-4">
                <span className="font-mono text-fp-cream">{t.experience.imageCaption}</span>
                <span className="text-fp-sand font-mono text-[11px] shrink-0">
                  {t.experience.imageLocation}
                </span>
              </div>
            </div>
          </div>

          {/* 3 Core Sector Typologies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.experience.sectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-8 border border-fp-tan/45 bg-fp-white space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-fp-petrol font-semibold tabular-nums">
                    {t.common.categoryPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-fp-petrol tracking-tight">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-fp-slate leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-fp-tan/35 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-fp-petrol/80 block">
                    {t.experience.typicalDelayLabel}
                  </span>
                  <p className="text-xs text-fp-slate">{sector.delayTypes}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Full Sector Breadth Grid */}
          <div className="p-6 sm:p-8 border border-fp-tan/45 bg-fp-white space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-petrol">
              {t.experience.sectorBreadthTitle}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {t.experience.sectorTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 border border-fp-tan/45 bg-fp-cream text-xs font-mono text-fp-petrol"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project-type consultation note */}
          <div className="p-6 bg-fp-cream border border-fp-tan/50 text-xs sm:text-sm text-fp-slate leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-fp-petrol shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-fp-petrol block mb-0.5">
                  {t.experience.confidentialityBadge}
                </span>
                {t.experience.futureCasesNote}
              </div>
            </div>
            <button
              onClick={handleDiscussProject}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-fp-cream bg-fp-petrol hover:bg-fp-petrol-deep transition-colors shrink-0 self-start sm:self-center"
            >
              <span>{t.experience.contactButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-fp-sand" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 lg:py-24 bg-fp-petrol text-fp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-sand">
            {t.finalCta.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight text-fp-cream">
            {t.finalCta.title}
          </h2>
          <p className="text-base sm:text-lg text-fp-cream/90 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.finalCta.text}
          </p>
          <div className="pt-2">
            <button
              onClick={handleDiscussProject}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-fp-petrol bg-fp-sand hover:bg-fp-cream transition-colors"
            >
              <span>{t.finalCta.button}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs font-mono text-fp-sand pt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href="mailto:joan.perello@fidepath.com" className="hover:text-fp-cream hover:underline">
              joan.perello@fidepath.com
            </a>
            <span aria-hidden="true" className="text-fp-tan">·</span>
            <a href="tel:+34615847893" className="hover:text-fp-cream hover:underline">
              +34 615 847 893
            </a>
            <span aria-hidden="true" className="text-fp-tan">·</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fp-cream hover:underline inline-flex items-center gap-1"
            >
              <span>{t.common.linkedinLabel}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span aria-hidden="true" className="text-fp-tan">·</span>
            <span>{t.common.location}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
