import React, { useState, useEffect } from 'react';
import { Language, PageId, AssistanceType, ContactFormData } from '../types';
import { translations } from '../translations';
import { LINKEDIN_URL } from '../config';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';

interface ContactPageProps {
  currentLang: Language;
  setCurrentPage: (page: PageId) => void;
  preSelectedAssistance?: string;
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  setCurrentPage,
  preSelectedAssistance,
  formData,
  setFormData
}) => {
  const t = translations[currentLang];

  // Honeypot for spam protection
  const [honey, setHoney] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceCode: string;
    submittedAt: string;
  } | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  // Synchronize preSelectedAssistance when provided, without erasing existing user typing
  useEffect(() => {
    if (preSelectedAssistance) {
      const match = t.contact.form.assistanceOptions.find(
        (opt) =>
          opt.label.toLowerCase().includes(preSelectedAssistance.toLowerCase()) ||
          opt.value.toLowerCase().includes(preSelectedAssistance.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          assistanceType: match.value as AssistanceType,
          subject: prev.subject.trim() === '' ? `${match.label}` : prev.subject
        }));
      }
    }
  }, [preSelectedAssistance, t]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    const val = t.contact.form.validation;

    if (!formData.firstName.trim()) {
      errors.firstName = val.firstName;
    }
    if (!formData.lastName.trim()) {
      errors.lastName = val.lastName;
    }
    if (!formData.company.trim()) {
      errors.company = val.company;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = val.email;
    }
    if (!formData.subject.trim()) {
      errors.subject = val.subject;
    }
    if (!formData.assistanceType) {
      errors.assistanceType = val.assistanceType;
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      errors.projectDescription = val.projectDescription;
    }
    if (!formData.privacyConsent) {
      errors.privacyConsent = val.privacyConsent;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Spam honeypot trap
    if (honey) {
      console.warn('Spam trap triggered.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: formData.subject,
          assistanceType: formData.assistanceType,
          projectDescription: formData.projectDescription,
          privacyConsent: formData.privacyConsent,
          language: currentLang
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        throw new Error(data.message || t.contact.form.errorGeneral);
      }

      setSubmissionSuccess({
        referenceCode: data.referenceCode,
        submittedAt: new Date().toLocaleDateString()
      });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setApiError(err.message || t.contact.form.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
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
    setFieldErrors({});
    setSubmissionSuccess(null);
    setApiError(null);
  };

  return (
    <div className="w-full bg-fp-white text-fp-charcoal">
      
      {/* Page Header */}
      <section className="border-b border-fp-stone bg-fp-mist py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-fp-anthracite/75">
            {t.contact.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fp-anthracite tracking-tight text-balance">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg text-fp-charcoal/85 max-w-2xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-20 lg:py-28 bg-fp-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & Professional Notice */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 border border-fp-silver bg-fp-stone space-y-6">
                <h2 className="text-xl font-bold text-fp-anthracite tracking-tight">
                  {t.contact.directContactTitle}
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-fp-anthracite/65 block uppercase">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href="mailto:joan.perello@fidepath.com"
                      className="font-medium text-fp-anthracite hover:text-fp-charcoal transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-fp-anthracite/75 shrink-0" />
                      <span>joan.perello@fidepath.com</span>
                    </a>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-fp-silver/80">
                    <span className="text-xs font-mono text-fp-anthracite/65 block uppercase">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href="tel:+34615847893"
                      className="font-medium text-fp-anthracite hover:text-fp-charcoal transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-fp-anthracite/75 shrink-0" />
                      <span>+34 615 847 893</span>
                    </a>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-fp-silver/80">
                    <span className="text-xs font-mono text-fp-anthracite/65 block uppercase">
                      {t.contact.locationLabel}
                    </span>
                    <div className="font-medium text-fp-anthracite flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-fp-anthracite/75 shrink-0 mt-0.5" />
                      <span>{t.contact.locationValue}</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-fp-silver/80">
                    <span className="text-xs font-mono text-fp-anthracite/65 block uppercase">
                      {t.contact.linkedinLabel}
                    </span>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-fp-anthracite hover:text-fp-charcoal transition-colors inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>{t.common.linkedinLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-fp-anthracite/75 shrink-0" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-fp-silver/80 text-xs text-fp-charcoal/85 leading-relaxed space-y-2">
                  <div className="font-semibold text-fp-anthracite">
                    {t.contact.confidentialityTitle}
                  </div>
                  <p>
                    {t.contact.confidentialityText}
                  </p>
                </div>
              </div>

              {/* Service scope reminders */}
              <div className="p-6 border border-fp-stone bg-fp-mist space-y-3">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-fp-anthracite">
                  {t.contact.procedureTitle}
                </h3>
                <ul className="text-xs text-fp-charcoal/85 space-y-2 leading-relaxed">
                  {t.contact.procedureSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-fp-silver bg-fp-white p-8 sm:p-10 shadow-sm">
                
                {submissionSuccess ? (
                  /* Success State */
                  <div className="space-y-6 py-6 text-center sm:text-left">
                    <div className="w-12 h-12 bg-fp-anthracite text-fp-white flex items-center justify-center rounded-none mx-auto sm:mx-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-fp-anthracite tracking-tight">
                        {t.contact.form.successTitle}
                      </h3>
                      <p className="text-sm text-fp-charcoal/85 leading-relaxed max-w-lg">
                        {t.contact.form.successMessage}
                      </p>
                    </div>

                    <div className="p-4 bg-fp-mist border border-fp-stone text-xs font-mono space-y-1">
                      <div className="text-fp-anthracite/75">
                        {t.contact.form.referenceCodeLabel}:
                      </div>
                      <div className="text-base font-bold text-fp-anthracite">
                        {submissionSuccess.referenceCode}
                      </div>
                    </div>

                    <p className="text-xs text-fp-anthracite/75 leading-relaxed">
                      {t.contact.form.successFollowUp}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-fp-anthracite bg-fp-mist hover:bg-fp-stone border border-fp-silver transition-colors"
                      >
                        <span>{t.contact.form.submitAnother}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Main Form */
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    
                    {/* HoneyPot Spam Trap (Hidden) */}
                    <input
                      type="text"
                      name="website_url"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {apiError && (
                      <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{apiError}</span>
                      </div>
                    )}

                    {/* Name Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                          {t.contact.form.firstName} <span className="text-fp-anthracite/70">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                            fieldErrors.firstName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                          } outline-none transition-colors`}
                          placeholder={t.contact.form.firstNamePlaceholder}
                        />
                        {fieldErrors.firstName && (
                          <p className="text-[11px] text-red-600">{fieldErrors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                          {t.contact.form.lastName} <span className="text-fp-anthracite/70">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                            fieldErrors.lastName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                          } outline-none transition-colors`}
                          placeholder={t.contact.form.lastNamePlaceholder}
                        />
                        {fieldErrors.lastName && (
                          <p className="text-[11px] text-red-600">{fieldErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Company & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                          {t.contact.form.company} <span className="text-fp-anthracite/70">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, company: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                            fieldErrors.company
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                          } outline-none transition-colors`}
                          placeholder={t.contact.form.companyPlaceholder}
                        />
                        {fieldErrors.company && (
                          <p className="text-[11px] text-red-600">{fieldErrors.company}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                          {t.contact.form.email} <span className="text-fp-anthracite/70">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                            fieldErrors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                          } outline-none transition-colors`}
                          placeholder={t.contact.form.emailPlaceholder}
                        />
                        {fieldErrors.email && (
                          <p className="text-[11px] text-red-600">{fieldErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Assistance Type Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide flex items-center justify-between">
                          <span>{t.contact.form.phone}</span>
                          <span className="text-[11px] font-normal text-fp-anthracite/65 font-mono">
                            {t.contact.form.phoneOptional}
                          </span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite outline-none transition-colors"
                          placeholder={t.contact.form.phonePlaceholder}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                          {t.contact.form.assistanceType} <span className="text-fp-anthracite/70">*</span>
                        </label>
                        <select
                          required
                          value={formData.assistanceType}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              assistanceType: e.target.value as AssistanceType
                            }))
                          }
                          className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                            fieldErrors.assistanceType
                              ? 'border-red-500'
                              : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                          } outline-none transition-colors`}
                        >
                          <option value="">{t.contact.form.assistanceSelectDefault}</option>
                          {t.contact.form.assistanceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {fieldErrors.assistanceType && (
                          <p className="text-[11px] text-red-600">{fieldErrors.assistanceType}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                        {t.contact.form.subject} <span className="text-fp-anthracite/70">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, subject: e.target.value }))
                        }
                        className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                          fieldErrors.subject
                            ? 'border-red-500'
                            : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                        } outline-none transition-colors`}
                        placeholder={t.contact.form.subjectPlaceholder}
                      />
                      {fieldErrors.subject && (
                        <p className="text-[11px] text-red-600">{fieldErrors.subject}</p>
                      )}
                    </div>

                    {/* Project Description */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-fp-anthracite uppercase tracking-wide">
                        {t.contact.form.projectDescription} <span className="text-fp-anthracite/70">*</span>
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.projectDescription}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            projectDescription: e.target.value
                          }))
                        }
                        className={`w-full px-3.5 py-2.5 text-sm bg-fp-mist/40 focus:bg-fp-white border ${
                          fieldErrors.projectDescription
                            ? 'border-red-500'
                            : 'border-fp-silver focus:border-fp-anthracite focus:ring-1 focus:ring-fp-anthracite'
                        } outline-none transition-colors leading-relaxed`}
                        placeholder={t.contact.form.projectDescriptionPlaceholder}
                      />
                      {fieldErrors.projectDescription && (
                        <p className="text-[11px] text-red-600">
                          {fieldErrors.projectDescription}
                        </p>
                      )}
                    </div>

                    {/* Privacy Acceptance Checkbox */}
                    <div className="space-y-1.5 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-fp-charcoal/85 leading-normal">
                        <input
                          type="checkbox"
                          checked={formData.privacyConsent}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              privacyConsent: e.target.checked
                            }))
                          }
                          className="mt-0.5 rounded-none border-fp-silver text-fp-anthracite focus:ring-fp-anthracite"
                        />
                        <span>
                          {t.contact.form.privacyText}{' '}
                          <button
                            type="button"
                            onClick={() => {
                              setCurrentPage('privacy');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="underline text-fp-anthracite font-medium hover:text-fp-charcoal"
                          >
                            {t.contact.form.privacyLink}
                          </button>
                          .
                        </span>
                      </label>
                      {fieldErrors.privacyConsent && (
                        <p className="text-[11px] text-red-600">
                          {fieldErrors.privacyConsent}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase text-fp-white bg-fp-anthracite hover:bg-fp-charcoal disabled:bg-fp-slate transition-colors shadow-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{t.contact.form.submitting}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.contact.form.submitButton}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-fp-anthracite/65 text-center pt-2">
                      {t.contact.form.secureNotice}
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
