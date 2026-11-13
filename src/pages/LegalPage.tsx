import React, { useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { getLegalRoute, LegalPageId } from '../utils/routes';

interface LegalPageProps {
  initialTab?: LegalPageId;
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'legal',
  currentLang,
  setCurrentPage
}) => {
  const [activeTab, setActiveTab] = useState<LegalPageId>(initialTab);
  const t = translations[currentLang];

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: LegalPageId) => {
    setActiveTab(tab);
    setCurrentPage(tab);
  };

  return (
    <div className="w-full bg-fp-white text-fp-charcoal py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-fp-stone pb-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-anthracite/75">
            {t.legal.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-fp-anthracite tracking-tight">
            {activeTab === 'legal'
              ? t.footer.legalNotice
              : activeTab === 'privacy'
              ? t.footer.privacyPolicy
              : t.footer.cookiePolicy}
          </h1>
          <p className="text-xs font-mono text-fp-anthracite/65">
            FidePath Expert Services · {t.common.location}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-fp-stone border border-fp-silver">
          <a
            href={getLegalRoute(currentLang, 'legal')}
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('legal');
            }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'legal'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.legalNotice}
          </a>
          <a
            href={getLegalRoute(currentLang, 'privacy')}
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('privacy');
            }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'privacy'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.privacyPolicy}
          </a>
          <a
            href={getLegalRoute(currentLang, 'cookies')}
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('cookies');
            }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'cookies'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.cookiePolicy}
          </a>
        </div>

        {/* Temporary Page Under Construction Placeholder */}
        <div className="p-8 sm:p-10 bg-fp-mist border border-fp-stone space-y-3">
          <h2 className="text-lg font-bold text-fp-anthracite tracking-tight">
            {t.legal.underConstructionTitle}
          </h2>
          <p className="text-sm text-fp-charcoal/85 leading-relaxed">
            {t.legal.underConstructionDesc}
          </p>
        </div>

        <div className="pt-8 border-t border-fp-stone flex justify-between items-center text-xs">
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-fp-anthracite font-semibold hover:underline uppercase tracking-wider"
          >
            {t.legal.returnHome}
          </button>
          <span className="text-fp-anthracite/65 font-mono">
            {t.legal.lastUpdated}
          </span>
        </div>

      </div>
    </div>
  );
};
