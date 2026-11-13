import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface LegalPageProps {
  initialTab?: 'privacy' | 'cookies' | 'legal';
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  currentLang,
  setCurrentPage
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookies' | 'legal'>(initialTab);
  const t = translations[currentLang];

  return (
    <div className="w-full bg-fp-white text-fp-charcoal py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-fp-stone pb-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-anthracite/75">
            {t.legal.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-fp-anthracite tracking-tight">
            {activeTab === 'privacy'
              ? t.footer.privacyPolicy
              : activeTab === 'cookies'
              ? t.footer.cookiePolicy
              : t.footer.legalNotice}
          </h1>
          <p className="text-xs font-mono text-fp-anthracite/65">
            FidePath Expert Services · {t.common.location}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-fp-stone border border-fp-silver">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'privacy'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.privacyPolicy}
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'cookies'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.cookiePolicy}
          </button>
          <button
            onClick={() => setActiveTab('legal')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'legal'
                ? 'bg-fp-white text-fp-anthracite shadow-sm'
                : 'text-fp-charcoal/80 hover:text-fp-anthracite'
            }`}
          >
            {t.footer.legalNotice}
          </button>
        </div>

        {/* Legal Text Content */}
        <div className="max-w-none text-sm text-fp-charcoal/90 leading-relaxed space-y-6">
          
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="p-4 bg-fp-mist border border-fp-stone text-xs text-fp-charcoal/85">
                {t.legal.privacy.disclaimer}
              </div>

              {t.legal.privacy.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg font-bold text-fp-anthracite tracking-tight">
                    {sec.title}
                  </h2>
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-6">
              {t.legal.cookies.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg font-bold text-fp-anthracite tracking-tight">
                    {sec.title}
                  </h2>
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="space-y-6">
              <div className="p-4 bg-fp-mist border border-fp-stone text-xs text-fp-charcoal/85">
                {t.legal.legalNotice.disclaimer}
              </div>

              {t.legal.legalNotice.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg font-bold text-fp-anthracite tracking-tight">
                    {sec.title}
                  </h2>
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

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
