import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { LINKEDIN_URL, LEGAL_URL } from '../config';
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
    <footer className="bg-fp-petrol text-fp-cream border-t border-fp-tan/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-fp-cream font-sans">
                FIDEPATH
              </span>
              <span className="text-xs font-semibold tracking-widest text-fp-sand uppercase border-l border-fp-tan/45 pl-2">
                EXPERT SERVICES
              </span>
            </div>
            
            <p className="text-sm text-fp-cream/85 leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 text-xs font-mono text-fp-sand tracking-wide uppercase">
              {t.common.tagline}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-sand">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-fp-cream/90">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-fp-sand transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-fp-sand transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-fp-sand transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('approach')}
                  className="hover:text-fp-sand transition-colors text-left"
                >
                  {t.nav.approach}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-fp-sand transition-colors text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Shortlist */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-sand">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-xs text-fp-cream/85">
              {t.services.items.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-fp-sand transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-sand">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-sm text-fp-cream/90">
              <a
                href="mailto:joan.perello@fidepath.com"
                className="flex items-center gap-2 hover:text-fp-sand transition-colors group"
              >
                <Mail className="w-4 h-4 text-fp-tan group-hover:text-fp-sand shrink-0" />
                <span className="truncate">joan.perello@fidepath.com</span>
              </a>

              <a
                href="tel:+34615847893"
                className="flex items-center gap-2 hover:text-fp-sand transition-colors group"
              >
                <Phone className="w-4 h-4 text-fp-tan group-hover:text-fp-sand shrink-0" />
                <span>+34 615 847 893</span>
              </a>

              <div className="flex items-start gap-2 text-fp-cream/85 pt-1">
                <MapPin className="w-4 h-4 text-fp-tan shrink-0 mt-0.5" />
                <span>{t.common.location}</span>
              </div>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-fp-sand hover:text-fp-cream transition-colors pt-1 group"
              >
                <ArrowUpRight className="w-4 h-4 text-fp-tan group-hover:text-fp-cream shrink-0" />
                <span>{t.common.linkedinLabel}</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-fp-petrol bg-fp-sand hover:bg-fp-cream border border-fp-sand transition-colors"
              >
                <span>{t.footer.discussButton}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-8 border-t border-fp-tan/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fp-sand/90">
          <div>
            © {new Date().getFullYear()} FidePath Expert Services. {t.common.allRightsReserved}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={LEGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fp-sand hover:text-fp-cream transition-colors"
            >
              {t.footer.legalNotice}
            </a>
            <span className="text-fp-tan">·</span>
            <a
              href={LEGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fp-sand hover:text-fp-cream transition-colors"
            >
              {t.footer.privacyPolicy}
            </a>
            <span className="text-fp-tan">·</span>
            <a
              href={LEGAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fp-sand hover:text-fp-cream transition-colors"
            >
              {t.footer.cookiePolicy}
            </a>
          </div>

          {/* Language Switcher in Footer */}
          <div className="flex items-center gap-1 font-mono text-fp-sand/85">
            <button
              onClick={() => setCurrentLang('en')}
              className={`hover:text-fp-cream ${currentLang === 'en' ? 'text-fp-cream font-bold' : ''}`}
            >
              EN
            </button>
            <span className="text-fp-tan/60">/</span>
            <button
              onClick={() => setCurrentLang('es')}
              className={`hover:text-fp-cream ${currentLang === 'es' ? 'text-fp-cream font-bold' : ''}`}
            >
              ES
            </button>
            <span className="text-fp-tan/60">/</span>
            <button
              onClick={() => setCurrentLang('ca')}
              className={`hover:text-fp-cream ${currentLang === 'ca' ? 'text-fp-cream font-bold' : ''}`}
            >
              CA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
