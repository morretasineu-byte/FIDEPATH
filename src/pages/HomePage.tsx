import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ArrowRight, ArrowUpRight, ShieldCheck, Scale, Compass, CheckCircle2 } from 'lucide-react';
import { heroImage, technicalPlansImage } from '../assets/images';

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
    <div className="w-full bg-white text-neutral-900">
      
      {/* HERO SECTION */}
      <section className="relative border-b border-neutral-200 overflow-hidden bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & Call to Action */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
                  {t.hero.badge}
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-neutral-950 tracking-tight leading-[1.12] text-balance">
                  {t.hero.title}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl text-balance">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleDiscussProject}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-neutral-950 hover:bg-neutral-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 whitespace-nowrap"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors whitespace-nowrap"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key trust bar - unboxed clean typography */}
              <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
                {t.hero.trustItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-neutral-300">/</span>}
                    <span>{item}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-300/80 bg-neutral-900 shadow-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/13]">
                <img
                  src={heroImage}
                  alt={t.hero.imageCaption}
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Visual Architectural Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-neutral-950/85 backdrop-blur-sm p-4 text-white border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-neutral-300">{t.hero.imageCaption}</span>
                  <span className="text-neutral-400 font-mono text-[11px]">{t.hero.imageLocation}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION & BRAND ATTRIBUTES */}
      <section className="py-20 lg:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left title & context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                {t.intro.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight leading-tight text-balance">
                {t.intro.title}
              </h2>
              <div className="w-12 h-0.5 bg-neutral-950" />
            </div>

            {/* Right text narrative */}
            <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-neutral-950">
                {t.intro.paragraph1}
              </p>
              <p>
                {t.intro.paragraph2}
              </p>
              <p className="text-neutral-600">
                {t.intro.paragraph3}
              </p>
            </div>

          </div>

          {/* Three Core Brand Attributes */}
          <div className="mt-16 pt-16 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-neutral-400 transition-all space-y-4">
              <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-neutral-900">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                {t.intro.attributes.independent.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.intro.attributes.independent.desc}
              </p>
            </div>

            <div className="p-8 border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-neutral-400 transition-all space-y-4">
              <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-neutral-900">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                {t.intro.attributes.reliable.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.intro.attributes.reliable.desc}
              </p>
            </div>

            <div className="p-8 border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-neutral-400 transition-all space-y-4">
              <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-neutral-900">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                {t.intro.attributes.expert.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.intro.attributes.expert.desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES (OUR EXPERTISE) */}
      <section className="py-20 lg:py-28 bg-neutral-50/40 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                {t.services.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
                {t.services.sectionTitle}
              </h2>
              <p className="text-neutral-600 max-w-xl text-sm sm:text-base">
                {t.services.sectionSubtitle}
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-950 hover:text-neutral-600 transition-colors whitespace-nowrap"
            >
              <span>{t.services.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5 Services List */}
          <div className="divide-y divide-neutral-200">
            {t.services.items.map((service) => (
              <div
                key={service.id}
                className="py-10 group grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-100/50 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors"
              >
                <div className="md:col-span-1 text-sm font-mono font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  {service.number}
                </div>
                
                <div className="md:col-span-5 space-y-2">
                  <h3 className="text-xl font-bold text-neutral-950 tracking-tight group-hover:text-neutral-800">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400">
                    {t.services.cardTagline}
                  </div>
                </div>

                <div className="md:col-span-4 text-sm text-neutral-600 leading-relaxed">
                  {service.shortDesc}
                </div>

                <div className="md:col-span-2 flex md:justify-end items-center pt-2 md:pt-0">
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-neutral-950 group-hover:underline"
                  >
                    <span>{t.services.detailsButton}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY FIDEPATH? */}
      <section className="py-20 lg:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              {t.whyUs.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight text-balance">
              {t.whyUs.title}
            </h2>
            <p className="text-neutral-600 text-base">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyUs.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 border border-neutral-200 hover:border-neutral-400 bg-white transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-mono font-bold text-neutral-300">
                    {principle.number}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
                <div className="w-8 h-px bg-neutral-200 pt-2" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR APPROACH (4 STAGES) */}
      <section className="py-20 lg:py-28 bg-neutral-50/50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                {t.approach.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight text-balance">
                {t.approach.title}
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                {t.approach.intro}
              </p>

              {/* Documentary Technical Plans Image */}
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

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('approach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-950 hover:text-neutral-600 transition-colors"
                >
                  <span>{t.approach.exploreButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sequence visual (editorial timeline) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {t.approach.stages.map((stage) => (
                  <div
                    key={stage.number}
                    className="p-6 sm:p-8 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors relative"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-neutral-950 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                        {stage.number}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                          {stage.title}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {stage.desc}
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

      {/* SECTION 6: EXPERIENCE & PROJECT CAPABILITY */}
      <section className="py-20 lg:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              {t.experience.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight text-balance">
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
                className="p-8 border border-neutral-200 bg-neutral-50/50 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400">
                    {t.common.categoryPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
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

          {/* Transparent note on future case studies */}
          <div className="mt-12 p-6 bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-600 leading-relaxed flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-neutral-900 block mb-0.5">
                {t.experience.confidentialityBadge}
              </span>
              {t.experience.futureCasesNote}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
            {t.finalCta.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.finalCta.text}
          </p>
          <div className="pt-4">
            <button
              onClick={handleDiscussProject}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>{t.finalCta.button}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs font-mono text-neutral-500 pt-4">
            {t.finalCta.contactBar}
          </div>
        </div>
      </section>

    </div>
  );
};
