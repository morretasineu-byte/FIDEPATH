import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { LINKEDIN_URL } from '../config';
import { renderCopyWithItalics } from '../utils/formatCopy';
import { ArrowUpRight, Check, FileCheck, AlertCircle, Users } from 'lucide-react';

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
    <div className="w-full bg-fp-white text-fp-charcoal">
      {/* Page Header */}
      <section className="border-b border-fp-stone bg-fp-mist py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-anthracite/75">
            {t.services.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fp-anthracite tracking-tight text-balance">
            {t.services.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-fp-charcoal/85 max-w-3xl leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>
      </section>

      {/* Services Interactive Deep-Dive View */}
      <section className="py-16 lg:py-24 bg-fp-white border-b border-fp-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pb-12 border-b border-fp-stone">
            {t.services.items.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-4 text-left border transition-colors text-sm flex flex-col justify-between h-full ${
                    isSelected
                      ? 'border-fp-anthracite bg-fp-anthracite text-fp-white'
                      : 'border-fp-stone bg-fp-mist text-fp-anthracite hover:bg-fp-stone hover:border-fp-silver'
                  }`}
                >
                  <div
                    className={`font-mono text-xs mb-2 tabular-nums ${
                      isSelected ? 'text-fp-silver' : 'text-fp-anthracite/65'
                    }`}
                  >
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
                <div className="text-xs font-mono font-semibold text-fp-anthracite/75 tabular-nums">
                  {t.common.servicePrefix} {activeService.number}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight">
                  {activeService.title}
                </h2>
                <p className="text-base sm:text-lg text-fp-charcoal/90 leading-relaxed">
                  {renderCopyWithItalics(activeService.fullDesc, currentLang)}
                </p>
              </div>

              {/* Problems Addressed */}
              <div className="space-y-4 pt-4 border-t border-fp-stone">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-fp-anthracite flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-fp-anthracite/75" />
                  <span>{t.services.problemsAddressedTitle}</span>
                </h3>
                <ul className="space-y-2.5">
                  {activeService.problemsAddressed.map((prob, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-fp-charcoal/90">
                      <span className="w-1.5 h-1.5 bg-fp-anthracite mt-2 shrink-0" />
                      <span>{renderCopyWithItalics(prob, currentLang)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analysis Included */}
              <div className="space-y-4 pt-4 border-t border-fp-stone">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-fp-anthracite flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-fp-anthracite/75" />
                  <span>{t.services.analysisIncludedTitle}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-fp-charcoal/90">
                  {activeService.analysisIncluded.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 border border-fp-stone bg-fp-mist flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-fp-anthracite shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">
                        {renderCopyWithItalics(item, currentLang)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Clients / Who May Need This */}
              <div className="space-y-4 pt-4 border-t border-fp-stone">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-fp-anthracite flex items-center gap-2">
                  <Users className="w-4 h-4 text-fp-anthracite/75" />
                  <span>{t.services.typicalClientsTitle}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.typicalClients.map((client, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2.5 border border-fp-silver bg-fp-white text-xs text-fp-charcoal/90"
                    >
                      {renderCopyWithItalics(client, currentLang)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Client Value Box & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 border border-fp-silver bg-fp-stone space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
                    {t.services.valueBoxTitle}
                  </div>
                  <h3 className="text-lg font-bold text-fp-anthracite">
                    {t.services.valueBoxHeading}
                  </h3>
                </div>

                <p className="text-sm text-fp-charcoal/90 leading-relaxed">
                  {activeService.clientValue}
                </p>

                <div className="pt-4 border-t border-fp-silver space-y-3">
                  <div className="text-xs font-mono text-fp-anthracite/75 uppercase tracking-wide">
                    {t.services.recordsTitle}
                  </div>
                  <div className="text-xs text-fp-charcoal/85 space-y-1.5">
                    {t.services.typicalRecords.map((rec, i) => (
                      <div key={i}>• {rec}</div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleDiscussService(activeService.title)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-fp-white bg-fp-anthracite hover:bg-fp-charcoal transition-colors"
                >
                  <span>
                    {t.services.discussButtonPrefix} {activeService.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 border border-fp-stone bg-fp-mist text-xs text-fp-charcoal/85 space-y-1.5 font-mono">
                <div className="font-semibold text-fp-anthracite">
                  {t.services.directInquiriesTitle}
                </div>
                <div>
                  <a href="mailto:joan.perello@fidepath.com" className="hover:underline">
                    joan.perello@fidepath.com
                  </a>
                </div>
                <div>
                  <a href="tel:+34615847893" className="hover:underline">
                    +34 615 847 893
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline text-fp-anthracite"
                  >
                    <span>{t.common.linkedinLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-24 bg-fp-mist border-b border-fp-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite/75">
              {t.services.targetAudienceBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-fp-anthracite tracking-tight">
              {t.services.targetAudienceTitle}
            </h2>
            <p className="text-fp-charcoal/80 text-base leading-relaxed">
              {t.services.targetAudienceDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.targetAudiences.map((audience, idx) => (
              <div
                key={idx}
                className="p-6 border border-fp-stone bg-fp-white space-y-3 flex flex-col justify-between hover:border-fp-silver transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono text-fp-anthracite/65 tabular-nums">
                    {t.common.groupPrefix} 0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-fp-anthracite">
                    {renderCopyWithItalics(audience, currentLang)}
                  </h3>
                </div>
                <div className="pt-2 text-xs text-fp-anthracite/75 font-mono">
                  {t.services.targetAudienceFooter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-fp-anthracite text-fp-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-fp-white">
            {t.services.ctaBox.title}
          </h3>
          <p className="text-fp-stone/90 max-w-2xl mx-auto text-sm leading-relaxed">
            {t.services.ctaBox.desc}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-fp-charcoal bg-fp-white hover:bg-fp-stone transition-colors"
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
