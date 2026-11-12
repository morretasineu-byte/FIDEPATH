/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageId, ContactFormData } from './types';
import { translations } from './translations';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ApproachPage } from './pages/ApproachPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  // Initialize language from URL query or localStorage or default to 'en'
  const [currentLang, setCurrentLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'es' || urlLang === 'ca' || urlLang === 'en') {
        return urlLang;
      }
      const savedLang = localStorage.getItem('fidepath_lang');
      if (savedLang === 'es' || savedLang === 'ca' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'en';
  });

  // Initialize page from URL hash or query param or default to 'home'
  const [currentPage, setCurrentPageState] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'approach',
        'contact',
        'privacy',
        'cookies',
        'legal'
      ];
      if (validPages.includes(hash as PageId)) {
        return hash as PageId;
      }
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam && validPages.includes(pageParam as PageId)) {
        return pageParam as PageId;
      }
    }
    return 'home';
  });

  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  // Persist form data across language switches so user draft is never lost
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    assistanceType: '',
    projectDescription: '',
    privacyConsent: false
  });

  // Synchronize state changes to URL and localStorage
  const setCurrentLang = (lang: Language) => {
    setCurrentLangState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fidepath_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
      document.documentElement.lang = lang;
    }
  };

  const setCurrentPage = (page: PageId) => {
    setCurrentPageState(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page;
      const url = new URL(window.location.href);
      url.searchParams.set('page', page);
      window.history.pushState({}, '', url.toString());
    }
  };

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'approach',
        'contact',
        'privacy',
        'cookies',
        'legal'
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPageState(hash as PageId);
      }
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'es' || langParam === 'ca' || langParam === 'en') {
        setCurrentLangState(langParam);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic Page Title, Meta Description & OpenGraph synchronization
  useEffect(() => {
    document.documentElement.lang = currentLang;

    const t = translations[currentLang];
    const title = t.meta.pageTitles[currentPage] || t.meta.pageTitles.home;
    const description = t.meta.pageDescriptions[currentPage] || t.meta.pageDescriptions.home;

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [currentLang, currentPage]);

  const handleSelectService = (title: string) => {
    setSelectedServiceTitle(title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-950 selection:text-white font-sans">
      
      {/* 3-Zone Top Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      {/* Main Page Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
            selectedServiceTitle={selectedServiceTitle}
            onSelectServiceForContact={handleSelectService}
          />
        )}

        {currentPage === 'approach' && (
          <ApproachPage
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
            preSelectedAssistance={selectedServiceTitle}
            formData={contactFormData}
            setFormData={setContactFormData}
          />
        )}

        {(currentPage === 'privacy' ||
          currentPage === 'cookies' ||
          currentPage === 'legal') && (
          <LegalPage
            initialTab={currentPage as 'privacy' | 'cookies' | 'legal'}
            currentLang={currentLang}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

    </div>
  );
}
