import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  currentLang,
  setCurrentLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'approach', label: t.nav.approach },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-fp-white/95 backdrop-blur-md border-b border-fp-stone transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 h-16 sm:h-20">
          
          {/* Zone 1: Brand Wordmark (Brand Name kept unmodified) */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group whitespace-nowrap shrink-0"
            aria-label="FidePath Expert Services"
          >
            <span className="text-base min-[375px]:text-lg sm:text-2xl font-bold tracking-tight text-fp-anthracite font-sans group-hover:text-fp-charcoal transition-colors">
              FIDEPATH
            </span>
            <span className="ml-1.5 pl-1.5 sm:ml-2 sm:pl-2 text-[10px] min-[375px]:text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-fp-anthracite/70 uppercase border-l border-fp-silver">
              EXPERT SERVICES
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-fp-anthracite/80">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-fp-charcoal ${
                    isActive ? 'text-fp-anthracite font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-fp-anthracite rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Selector & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-fp-anthracite/70">
              <button
                onClick={() => handleLangChange('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentLang === 'en'
                    ? 'text-fp-anthracite font-bold bg-fp-stone'
                    : 'hover:text-fp-charcoal'
                }`}
                title="English"
              >
                EN
              </button>
              <span className="text-fp-silver">/</span>
              <button
                onClick={() => handleLangChange('es')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentLang === 'es'
                    ? 'text-fp-anthracite font-bold bg-fp-stone'
                    : 'hover:text-fp-charcoal'
                }`}
                title="Castellano"
              >
                ES
              </button>
              <span className="text-fp-silver">/</span>
              <button
                onClick={() => handleLangChange('ca')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentLang === 'ca'
                    ? 'text-fp-anthracite font-bold bg-fp-stone'
                    : 'hover:text-fp-charcoal'
                }`}
                title="Català"
              >
                CA
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-fp-white bg-fp-anthracite hover:bg-fp-charcoal transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-fp-anthracite focus:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger & Language Selector */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-3 shrink-0">
            <div className="flex sm:hidden items-center text-[11px] font-mono font-medium text-fp-anthracite/75 shrink-0">
              {(['en', 'es', 'ca'] as Language[]).map((lang, idx) => (
                <React.Fragment key={lang}>
                  {idx > 0 && <span className="text-fp-silver mx-0.5">/</span>}
                  <button
                    type="button"
                    onClick={() => handleLangChange(lang)}
                    className={`px-0.5 py-0.5 rounded ${
                      currentLang === lang ? 'text-fp-anthracite font-bold bg-fp-stone' : ''
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 -mr-1.5 text-fp-anthracite hover:text-fp-charcoal hover:bg-fp-mist rounded transition-colors focus:outline-none focus:ring-2 focus:ring-fp-anthracite shrink-0"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 shrink-0" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 shrink-0" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-fp-stone bg-fp-mist px-4 pt-4 pb-6 space-y-3 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-fp-stone text-fp-anthracite font-semibold'
                      : 'text-fp-charcoal/80 hover:text-fp-charcoal hover:bg-fp-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-fp-stone">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wide uppercase text-fp-white bg-fp-anthracite hover:bg-fp-charcoal transition-colors"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
