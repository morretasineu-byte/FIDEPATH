import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ArrowUpRight, Check, FileCheck, AlertCircle } from 'lucide-react';

interface ServicesPageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
  selectedServiceTitle?: string;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  currentLang,
  setCurrentPage,
  selectedServiceTitle,
  onSelectServiceForContact
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<string>(
    selectedServiceTitle
      ? t.services.items.find(
          (s) => s.title.toLowerCase() === selectedServiceTitle.toLowerCase()
        )?.id || 'delay-analysis'
      : 'delay-analysis'
  );

  const activeService =
    t.services.items.find((s) => s.id === activeTab) || t.services.items[0];

  const handleDiscussService = (title: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(title);
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-neutral-900">
      
      {/* Page Header */}
      <section className="border-b border-neutral-200 bg-neutral-50/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
            {t.services.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            {t.services.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>
      </section>

      {/* Services Interactive Deep-Dive View */}
      <section className="py-16 lg:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pb-12 border-b border-neutral-200">
            {t.services.items.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-4 text-left border transition-all text-sm flex flex-col justify-between h-full ${
                    isSelected
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                      : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  <div className="font-mono text-xs opacity-60 mb-2">
                    {service.number}
                  </div>
                  <div className="font-bold tracking-tight leading-snug">
                    {service.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed View */}
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Scope & Methodology */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-neutral-500">
                  {t.common.servicePrefix} {activeService.number}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                  {activeService.title}
                </h2>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Problems Addressed */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-neutral-600" />
                  <span>{t.services.problemsAddressedTitle}</span>
                </h3>
                <ul className="space-y-2.5">
                  {activeService.problemsAddressed.map((prob, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analysis Included */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-neutral-600" />
                  <span>{t.services.analysisIncludedTitle}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                  {activeService.analysisIncluded.map((item, i) => (
                    <div key={i} className="p-3 border border-neutral-200 bg-neutral-50/50 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Client Value Box & CTA */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 border border-neutral-300 bg-neutral-50 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                    {t.services.valueBoxTitle}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950">
                    {t.services.valueBoxHeading}
                  </h3>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {activeService.clientValue}
                </p>

                <div className="pt-4 border-t border-neutral-200 space-y-3">
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wide">
                    {t.services.recordsTitle}
                  </div>
                  <div className="text-xs text-neutral-600 space-y-1.5">
                    {t.services.typicalRecords.map((rec, i) => (
                      <div key={i}>• {rec}</div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleDiscussService(activeService.title)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-neutral-950 hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <span>{t.services.discussButtonPrefix} {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 border border-neutral-200 text-xs text-neutral-600 space-y-1 font-mono">
                <div className="font-semibold text-neutral-900">{t.services.directInquiriesTitle}</div>
                <div>joan.perello@fidepath.com</div>
                <div>+34 615 847 893</div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              {t.services.targetAudienceBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              {t.services.targetAudienceTitle}
            </h2>
            <p className="text-neutral-600 text-base">
              {t.services.targetAudienceDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.targetAudiences.map((audience, idx) => (
              <div
                key={idx}
                className="p-6 border border-neutral-200 bg-white space-y-3 flex flex-col justify-between hover:border-neutral-400 transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400">
                    {t.common.groupPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-neutral-950">
                    {audience}
                  </h3>
                </div>
                <div className="pt-2 text-xs text-neutral-500 font-mono">
                  {t.services.targetAudienceFooter}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t.services.ctaBox.title}
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm leading-relaxed">
            {t.services.ctaBox.desc}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
            >
              <span>{t.services.ctaBox.button}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
