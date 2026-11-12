export type Language = 'en' | 'es' | 'ca';

export type PageId = 'home' | 'about' | 'services' | 'approach' | 'contact' | 'privacy' | 'cookies' | 'legal';

export type AssistanceType =
  | 'Construction Delay Analysis'
  | 'Extension of Time Assessment'
  | 'Disruption Analysis'
  | 'Independent Expert Reports'
  | 'Construction Claims & Dispute Support'
  | 'Other';

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  problemsAddressed: string[];
  analysisIncluded: string[];
  clientValue: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  deliverables?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  assistanceType: AssistanceType | '';
  projectDescription: string;
  privacyConsent: boolean;
}
