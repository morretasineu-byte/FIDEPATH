import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  currentLang,
  setCurrentLang
}) => {
  const t = translations[currentLang];

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                FIDEPATH
              </span>
              <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase border-l border-neutral-700 pl-2">
                EXPERT SERVICES
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-400 tracking-wide uppercase">
              {t.common.tagline}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('approach')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.approach}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Shortlist */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {t.services.items.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-neutral-200 transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-300">
              <a
                href="mailto:joan.perello@fidepath.com"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
                <span className="truncate">joan.perello@fidepath.com</span>
              </a>

              <a
                href="tel:+34615847893"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
                <span>+34 615 847 893</span>
              </a>

              <div className="flex items-start gap-2 text-neutral-400 pt-1">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>{t.common.location}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
              >
                <span>{t.footer.discussButton}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} FidePath Expert Services. {t.common.allRightsReserved}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={() => handleNav('cookies')}
              className="hover:text-neutral-300 transition-colors"
            >
              {t.footer.cookiePolicy}
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={() => handleNav('legal')}
              className="hover:text-neutral-300 transition-colors"
            >
              {t.footer.legalNotice}
            </button>
          </div>

          {/* Language Switcher in Footer */}
          <div className="flex items-center gap-1 font-mono text-neutral-400">
            <button
              onClick={() => setCurrentLang('en')}
              className={`hover:text-white ${currentLang === 'en' ? 'text-white font-bold' : ''}`}
            >
              EN
            </button>
            <span className="text-neutral-700">/</span>
            <button
              onClick={() => setCurrentLang('es')}
              className={`hover:text-white ${currentLang === 'es' ? 'text-white font-bold' : ''}`}
            >
              ES
            </button>
            <span className="text-neutral-700">/</span>
            <button
              onClick={() => setCurrentLang('ca')}
              className={`hover:text-white ${currentLang === 'ca' ? 'text-white font-bold' : ''}`}
            >
              CA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
