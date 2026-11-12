import { Language } from '../types';

export interface Translations {
  common: {
    tagline: string;
    location: string;
    allRightsReserved: string;
    categoryPrefix: string;
    sectorPrefix: string;
    groupPrefix: string;
    servicePrefix: string;
    stepPrefix: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    approach: string;
    contact: string;
    ctaButton: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustItems: string[];
    imageCaption: string;
    imageLocation: string;
  };
  intro: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    attributes: {
      independent: { title: string; desc: string };
      reliable: { title: string; desc: string };
      expert: { title: string; desc: string };
    };
  };
  services: {
    badge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewAll: string;
    detailsButton: string;
    cardTagline: string;
    problemsAddressedTitle: string;
    analysisIncludedTitle: string;
    valueBoxTitle: string;
    valueBoxHeading: string;
    recordsTitle: string;
    typicalRecords: string[];
    discussButtonPrefix: string;
    directInquiriesTitle: string;
    targetAudienceBadge: string;
    targetAudienceTitle: string;
    targetAudienceDesc: string;
    targetAudiences: string[];
    targetAudienceFooter: string;
    ctaBox: {
      title: string;
      desc: string;
      button: string;
    };
    items: {
      id: string;
      number: string;
      title: string;
      shortDesc: string;
      fullDesc: string;
      problemsAddressed: string[];
      analysisIncluded: string[];
      clientValue: string;
    }[];
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    principles: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  approach: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    corePrinciplesBadge: string;
    corePrinciplesTitle: string;
    corePrinciplesP1: string;
    corePrinciplesP2: string;
    imageCaption1: string;
    imageCaption2: string;
    exploreButton: string;
    stages: {
      number: string;
      title: string;
      desc: string;
    }[];
    methodologyBadge: string;
    methodologyTitle: string;
    methodologySteps: {
      number: string;
      title: string;
      desc: string;
    }[];
    ctaBox: {
      title: string;
      desc: string;
      button: string;
    };
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    frameworkIntro: string;
    sectorsTitle: string;
    typicalDelayLabel: string;
    sectors: {
      title: string;
      description: string;
      delayTypes: string;
    }[];
    confidentialityBadge: string;
    futureCasesNote: string;
  };
  finalCta: {
    badge: string;
    title: string;
    text: string;
    button: string;
    contactBar: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    foundationsTitle: string;
    foundations: string[];
    impartialityTitle: string;
    impartialityQuote: string;
    founderSectionBadge: string;
    founderSectionTitle: string;
    founderName: string;
    founderRole: string;
    founderBadge: string;
    founderNotice: string;
    founderFields: {
      focusLabel: string;
      focusValue: string;
      deliverablesLabel: string;
      deliverablesValue: string;
      contactLabel: string;
    };
    ctaBox: {
      title: string;
      desc: string;
      button: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directContactTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    confidentialityTitle: string;
    confidentialityText: string;
    procedureTitle: string;
    procedureSteps: string[];
    form: {
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phoneOptional: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      assistanceType: string;
      assistanceSelectDefault: string;
      assistanceOptions: { value: string; label: string }[];
      projectDescription: string;
      projectDescriptionPlaceholder: string;
      privacyText: string;
      privacyLink: string;
      submitButton: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      successFollowUp: string;
      referenceCodeLabel: string;
      submitAnother: string;
      errorGeneral: string;
      secureNotice: string;
      validation: {
        firstName: string;
        lastName: string;
        company: string;
        email: string;
        subject: string;
        assistanceType: string;
        projectDescription: string;
        privacyConsent: string;
      };
    };
  };
  footer: {
    brandDesc: string;
    quickLinks: string;
    services: string;
    contactInfo: string;
    discussButton: string;
    privacyPolicy: string;
    cookiePolicy: string;
    legalNotice: string;
  };
  legal: {
    badge: string;
    returnHome: string;
    lastUpdated: string;
    privacy: {
      title: string;
      disclaimer: string;
      sections: { title: string; content: string[] }[];
    };
    cookies: {
      title: string;
      sections: { title: string; content: string[] }[];
    };
    legalNotice: {
      title: string;
      disclaimer: string;
      sections: { title: string; content: string[] }[];
    };
  };
  meta: {
    pageTitles: {
      home: string;
      about: string;
      services: string;
      approach: string;
      contact: string;
      privacy: string;
      cookies: string;
      legal: string;
    };
    pageDescriptions: {
      home: string;
      about: string;
      services: string;
      approach: string;
      contact: string;
      privacy: string;
      cookies: string;
      legal: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      tagline: 'Independent · Reliable · Expert',
      location: 'Palma, Balearic Islands, Spain',
      allRightsReserved: 'All rights reserved.',
      categoryPrefix: 'Category',
      sectorPrefix: 'Sector',
      groupPrefix: 'Group',
      servicePrefix: 'Service',
      stepPrefix: 'Step'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      approach: 'Our Approach / Experience',
      contact: 'Contact',
      ctaButton: 'Discuss Your Project',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu'
    },
    hero: {
      badge: 'Independent · Reliable · Expert',
      title: 'Independent Construction Delay Analysis & Expert Services',
      subtitle: 'Clear, independent and reliable analysis of construction delays, disruption and project disputes. We turn complex project information into understandable, evidence-based conclusions.',
      ctaPrimary: 'Discuss Your Project',
      ctaSecondary: 'Explore Our Services',
      trustItems: [
        'Construction Delay Experts',
        'Extension of Time (EOT)',
        'Independent Expert Evidence',
        'International Scope'
      ],
      imageCaption: 'Infrastructure & Engineering Analysis',
      imageLocation: 'Palma · International'
    },
    intro: {
      badge: 'Our Purpose',
      title: 'Clarity in Complex Construction Matters',
      paragraph1: 'Construction delays and disruptions can create complex technical and commercial challenges.',
      paragraph2: 'At FidePath Expert Services, we analyse project information, assess the circumstances surrounding delays and help clients understand what has happened, why it happened and how it may affect their contractual and commercial position.',
      paragraph3: 'Our approach is independent, evidence-based and tailored to the specific needs of each case.',
      attributes: {
        independent: {
          title: 'Independent',
          desc: 'An objective, impartial perspective grounded strictly in contemporaneous project records and empirical facts.'
        },
        reliable: {
          title: 'Reliable',
          desc: 'Methodologically sound technical assessments that withstand scrutiny in commercial negotiations and disputes.'
        },
        expert: {
          title: 'Expert',
          desc: 'Specialised technical knowledge focused on construction schedules, critical path methodologies, and delay causation.'
        }
      }
    },
    services: {
      badge: 'Core Capabilities',
      sectionTitle: 'Our Expertise',
      sectionSubtitle: 'Specialised technical services addressing construction time, disruption, and dispute matters.',
      viewAll: 'Explore All Services',
      detailsButton: 'Details',
      cardTagline: 'Expert Delay & Forensic Assessment',
      problemsAddressedTitle: 'Key Problems Addressed',
      analysisIncludedTitle: 'Scope of Technical Analysis',
      valueBoxTitle: 'Commercial & Technical Value',
      valueBoxHeading: 'How This Supports Your Position',
      recordsTitle: 'Typical Contemporaneous Records Reviewed:',
      typicalRecords: [
        'Baseline programmes & native scheduling files (.xer, .mpp)',
        'Site diaries, clerk of works reports, and daily allocations',
        'Monthly progress summaries & site meeting minutes',
        'Variation instructions, RFIs, and architect notices'
      ],
      discussButtonPrefix: 'Discuss',
      directInquiriesTitle: 'Direct Inquiries:',
      targetAudienceBadge: 'Sector Engagement',
      targetAudienceTitle: 'Who We Assist',
      targetAudienceDesc: 'Our services are designed to bring clarity to parties across the construction industry:',
      targetAudiences: [
        'Construction Companies & General Contractors',
        'Specialist Subcontractors & Trade Packages',
        'Project Owners, Employers & Real Estate Developers',
        'Legal Counsel, Arbitrators & Dispute Boards',
        'Small and Medium-Sized Enterprises (SMEs) seeking accessible, high-grade expert advice'
      ],
      targetAudienceFooter: 'Independent Analysis · Clear Deliverables',
      ctaBox: {
        title: 'Have a Specific Project Delay or Dispute Question?',
        desc: 'Contact us for an initial confidential discussion regarding available documentation, project timelines, and analytical requirements.',
        button: 'Discuss Your Project'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Construction Delay Analysis',
          shortDesc: 'Independent analysis of construction programme delays, identifying the events and circumstances that have affected project progress.',
          fullDesc: 'We undertake forensic and contemporaneous schedule analysis to identify critical path delays, quantifying the specific time impacts caused by employer, contractor, and neutral risk events.',
          problemsAddressed: [
            'Unclear causes of overall project completion delays',
            'Conflicting claims regarding critical path progress',
            'Incomplete or competing baseline schedule updates',
            'Need to establish objective delay responsibility'
          ],
          analysisIncluded: [
            'Critical path identification and progression analysis',
            'As-built vs. as-planned schedule comparison',
            'Time-impact analysis and window-based schedule evaluations',
            'Contemporaneous programme update verification'
          ],
          clientValue: 'Provides an objective, mathematically and technically verifiable picture of schedule performance to guide commercial resolution or formal dispute proceedings.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Extension of Time (EOT) Assessment',
          shortDesc: 'Technical assessment of extension of time claims, examining delay events, their impact on project completion and the supporting project records.',
          fullDesc: 'A rigorous evaluation of contractual entitlement to additional time, reviewing whether claimed delay events actually affected the completion date under the contract provisions and available contemporaneous records.',
          problemsAddressed: [
            'Submissions or rejections of contractual EOT claims',
            'Disagreements over concurrent and sequential delays',
            'Evaluation of contractual notice compliance and records',
            'Mitigation and acceleration claim disputes'
          ],
          analysisIncluded: [
            'Contractual delay event chronological mapping',
            'Criticality evaluation of notified compensation events',
            'Concurrency and apportionment assessment',
            'Review of project correspondence, site records, and instructions'
          ],
          clientValue: 'Enables contractors, employers, and legal teams to establish or defend time extension entitlements with technical clarity.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Construction Disruption Analysis',
          shortDesc: 'Assessment of disruption to construction activities and productivity, considering project records and the circumstances affecting performance.',
          fullDesc: 'Disruption involves loss of productivity, fragmented work sequences, and trade interference without necessarily affecting the critical completion date. We analyse cause-and-effect relationships using project records.',
          problemsAddressed: [
            'Excess labour and equipment hours without corresponding progress',
            'Frequent design changes, late information, and out-of-sequence working',
            'Overcrowding and site access hindrances',
            'Quantifying productivity loss objectively'
          ],
          analysisIncluded: [
            'Work sequence variance and trade density analysis',
            'Productivity baseline assessment (e.g. measured mile or sampling analysis)',
            'Site diary and daily allocation sheet auditing',
            'Causal linkage between disruption events and lost output'
          ],
          clientValue: 'Separates genuine contractor inefficiency from owner-caused hindrances, substantiating disruption claims with structured technical evidence.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Independent Expert Reports',
          shortDesc: 'Preparation of clear, structured and technically supported reports to assist clients in commercial decision-making and construction dispute proceedings.',
          fullDesc: 'We author comprehensive independent technical expert reports for use in settlement negotiations, dispute boards, mediation, adjudication, arbitration, and litigation.',
          problemsAddressed: [
            'Need for independent expert opinion before entering costly formal proceedings',
            'Preparation of formal expert evidence for arbitration or court',
            'Translating complex scheduling data into lucid findings for tribunals',
            'Rebuttal and critical review of opposing delay reports'
          ],
          analysisIncluded: [
            'Structured narrative of facts, project background, and methodology',
            'Schedule data visualisations, Gantt charts, and timeline chronologies',
            'Explicit references to contemporaneous project documentation',
            'Clear, objective expert opinions and conclusions'
          ],
          clientValue: 'Provides arbitral tribunals, courts, and commercial directors with credible, authoritative, and intelligible delay evidence.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Construction Claims & Dispute Support',
          shortDesc: 'Technical analysis and support in the assessment and understanding of construction claims and disputes.',
          fullDesc: 'Hands-on technical advisory for parties navigating contractual disagreements. We help clients understand the technical strengths, weaknesses, and exposure of claims at any stage of a project.',
          problemsAddressed: [
            'Early-stage dispute escalation and strategy evaluation',
            'Review and audit of draft contractual claims',
            'Technical support during amicable settlement meetings',
            'Assisting legal counsel with technical fact-finding and query drafting'
          ],
          analysisIncluded: [
            'Review of project correspondence, site instructions, and variations',
            'Gap analysis of existing project documentation',
            'Risk exposure assessment regarding time and quantum interfaces',
            'Preparation of technical questions and issue briefs'
          ],
          clientValue: 'Ensures commercial decisions and legal strategies are anchored in realistic technical assessments rather than assumptions.'
        }
      ]
    },
    whyUs: {
      badge: 'Our Principles',
      title: 'An Independent Perspective. A Clearer Understanding.',
      subtitle: 'Four fundamental principles guide every analysis we deliver.',
      principles: [
        {
          number: '01',
          title: 'Independent Analysis',
          desc: 'An objective approach focused on the available evidence and the specific circumstances of each project.'
        },
        {
          number: '02',
          title: 'Tailored Solutions',
          desc: 'Every project is different. Our analysis adapts to the information, complexity and requirements of each case.'
        },
        {
          number: '03',
          title: 'Technical Clarity',
          desc: 'We translate complex technical matters into clear and understandable conclusions.'
        },
        {
          number: '04',
          title: 'Proportionate Approach',
          desc: 'Focused analysis and practical solutions, with particular attention to the needs of small and medium-sized businesses.'
        }
      ]
    },
    approach: {
      badge: 'Methodology',
      title: 'Understanding What Really Happened',
      subtitle: 'A four-stage methodology for unraveling complex construction delays.',
      intro: 'Delay analysis requires discipline, patience, and meticulous examination of contemporary records. We do not impose pre-conceived conclusions; we let the facts guide the analysis.',
      corePrinciplesBadge: 'Core Principles',
      corePrinciplesTitle: 'How We Approach Delay Investigation',
      corePrinciplesP1: 'In complex construction disputes, parties frequently disagree not on whether a project was delayed, but on which specific events dictated progress and who bears commercial responsibility.',
      corePrinciplesP2: 'Our duty as independent experts is to unravel the true chronology of events. Rather than relying on theoretical assumptions or hindsight assertions, we construct an evidence-backed factual matrix supported by contemporaneous project documents.',
      imageCaption1: 'Contemporaneous Record Auditing',
      imageCaption2: 'Schedule Verification',
      exploreButton: 'Explore Our 6-Step Framework',
      stages: [
        {
          number: '01',
          title: 'Understand',
          desc: 'We begin by understanding the project, the circumstances and the questions that need to be addressed.'
        },
        {
          number: '02',
          title: 'Investigate',
          desc: 'We examine the available project documentation, programmes, records and relevant information.'
        },
        {
          number: '03',
          title: 'Analyse',
          desc: 'We assess the events, their causes and their potential impact on project progress.'
        },
        {
          number: '04',
          title: 'Explain',
          desc: 'We present our findings through clear, structured and technically supported conclusions.'
        }
      ],
      methodologyBadge: '6-Stage Analytical Sequence',
      methodologyTitle: 'Our Complete Methodological Process',
      methodologySteps: [
        {
          number: '01',
          title: 'Understanding the Project & Scope',
          desc: 'Clarifying the contractual framework, baseline programme assumptions, project milestones, and the specific questions requiring technical resolution.'
        },
        {
          number: '02',
          title: 'Reviewing Available Documentation',
          desc: 'Auditing baseline schedules, periodic programme updates, site diaries, monthly progress reports, submittals, requests for information (RFIs), and contemporaneous correspondence.'
        },
        {
          number: '03',
          title: 'Identifying Relevant Delay Events',
          desc: 'Chronologically cataloguing variations, late design releases, unexpected ground conditions, access restrictions, and contractor-driven delay events.'
        },
        {
          number: '04',
          title: 'Assessing Critical Project Impact',
          desc: 'Determining the critical path at the time the events occurred, assessing whether progress was genuinely impeded, and evaluating concurrent or sequential effects.'
        },
        {
          number: '05',
          title: 'Developing Technical Conclusions',
          desc: 'Synthesising schedule logic and empirical records into reasoned, objective findings regarding delay liability and time entitlement.'
        },
        {
          number: '06',
          title: 'Preparing Clear & Structured Reports',
          desc: 'Drafting reports with clear executive summaries, detailed narrative chronologies, visual Gantt appendices, and robust supporting documentation.'
        }
      ],
      ctaBox: {
        title: 'Discuss Your Project Timeline',
        desc: 'Let us examine your project schedule and recommend the appropriate analytical methodology.',
        button: 'Discuss Your Project'
      }
    },
    experience: {
      badge: 'Sector Experience',
      title: 'Technical Insight. Project-Specific Analysis.',
      subtitle: 'Structured technical competence across core construction typologies.',
      frameworkIntro: 'Every project presents unique physical and contractual constraints. Our analytical approach adapts to the specific data landscape of each sector:',
      sectorsTitle: 'Analytical Capabilities by Project Environment',
      typicalDelayLabel: 'Typical Delay Events:',
      sectors: [
        {
          title: 'Civil Infrastructure & Transport',
          description: 'Highways, bridges, rail corridors, and municipal utilities with linear scheduling dependencies and interface complexities.',
          delayTypes: 'Permit delays, utility diversions, unforeseen geotechnical conditions, design alterations.'
        },
        {
          title: 'Commercial, Residential & Mixed-Use',
          description: 'High-rise residential, office developments, and hospitality projects with intensive MEP coordination and trade sequencing.',
          delayTypes: 'Late architectural packages, procurement bottlenecks, subcontractor interface clashes, commissioning issues.'
        },
        {
          title: 'Industrial, Energy & Technical Facilities',
          description: 'Process plants, logistical centers, and renewable energy installations where equipment delivery and installation dictate critical paths.',
          delayTypes: 'Long-lead equipment delivery delays, specialist vendor coordination, factory acceptance test (FAT) setbacks.'
        }
      ],
      confidentialityBadge: 'Client Confidentiality & Case Study Framework',
      futureCasesNote: 'Detailed case summaries and selected project records will be published as client confidentiality protocols allow. Contact us to discuss experience relevant to your specific project category.'
    },
    finalCta: {
      badge: "Let's Discuss Your Case",
      title: "Every Project Has Its Own Story. Let's Understand Yours.",
      text: 'If you are facing construction delays, disruption or a complex project dispute, we would be pleased to understand your situation and discuss how we may assist.',
      button: 'Discuss Your Project',
      contactBar: 'joan.perello@fidepath.com · +34 615 847 893 · Palma, Balearic Islands'
    },
    about: {
      badge: 'About FidePath',
      title: 'Independent Thinking. Technical Understanding.',
      subtitle: 'Providing objective, evidence-based delay analysis and accessible expert advice.',
      p1: 'FidePath Expert Services was established with a clear purpose: to provide independent, reliable and accessible technical analysis for construction-related matters.',
      p2: 'We understand that construction projects can involve complex circumstances, competing interpretations and significant commercial implications.',
      p3: 'Our role is to examine the available information, understand the issues and provide clear, reasoned analysis to support informed decisions.',
      p4: 'We believe that good technical advice should be rigorous, independent and, above all, understandable.',
      p5: 'A core tenet of our practice is accessibility: offering high-calibre expert services at fair, transparent, and proportionate fee structures, making specialised delay analysis viable for small and medium-sized enterprises as well as larger developments.',
      foundationsTitle: 'Core Foundations',
      foundations: [
        'Contemporaneous record auditing',
        'Empirical critical path verification',
        'Impartial dispute evidence',
        'Transparent, proportionate fees'
      ],
      impartialityTitle: 'Technical Impartiality',
      impartialityQuote: 'Our duty is to the facts of the project schedule. We present reasoned technical assessments based solely on contemporaneous evidence.',
      founderSectionBadge: 'Practice Profile',
      founderSectionTitle: 'Leadership & Professional Background',
      founderName: 'Joan Perelló',
      founderRole: 'Founder & Principal Consultant',
      founderBadge: 'Practice Principal',
      founderNotice: 'FidePath Expert Services is led by technical specialists with direct experience in construction programme management, delay analysis, and dispute evaluation. Detailed professional profiles and accreditation details will be updated as the practice expands.',
      founderFields: {
        focusLabel: 'Focus',
        focusValue: 'Schedule & Delay Analysis',
        deliverablesLabel: 'Deliverables',
        deliverablesValue: 'Independent Expert Reports',
        contactLabel: 'Contact'
      },
      ctaBox: {
        title: 'Ready to Discuss Your Construction Matter?',
        desc: 'Get in touch to share your project records and understand how we can assist.',
        button: 'Discuss Your Project'
      }
    },
    contact: {
      badge: 'Consultation & Advisory',
      title: "Let's Discuss Your Project",
      subtitle: 'Every construction matter is different. Get in touch to tell us about your project, the challenges you are facing and the support you may need.',
      directContactTitle: 'Direct Contact Details',
      emailLabel: 'Email',
      phoneLabel: 'Telephone',
      locationLabel: 'Location',
      locationValue: 'Palma, Balearic Islands, Spain',
      confidentialityTitle: 'Confidentiality & Non-Disclosure:',
      confidentialityText: 'All project documentation, schedules, and initial discussions are handled with strict professional confidentiality under standard NDA provisions.',
      procedureTitle: 'Initial Consultation Procedure',
      procedureSteps: [
        '1. Preliminary review of key dates and available schedule records.',
        '2. Identification of the appropriate analytical methodology.',
        '3. Clear, proportionate proposal with transparent scope and fees.'
      ],
      form: {
        firstName: 'First Name',
        firstNamePlaceholder: 'e.g. Joan',
        lastName: 'Last Name',
        lastNamePlaceholder: 'e.g. Perelló',
        company: 'Company',
        companyPlaceholder: 'e.g. Construction Corp Ltd.',
        email: 'Email Address',
        emailPlaceholder: 'name@company.com',
        phone: 'Phone Number',
        phoneOptional: '(optional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Subject',
        subjectPlaceholder: 'e.g. Schedule delay assessment for hospital project',
        assistanceType: 'Type of Assistance Required',
        assistanceSelectDefault: '-- Select Assistance --',
        assistanceOptions: [
          { value: 'Construction Delay Analysis', label: 'Construction Delay Analysis' },
          { value: 'Extension of Time Assessment', label: 'Extension of Time (EOT) Assessment' },
          { value: 'Disruption Analysis', label: 'Construction Disruption Analysis' },
          { value: 'Independent Expert Reports', label: 'Independent Expert Reports' },
          { value: 'Construction Claims & Dispute Support', label: 'Construction Claims & Dispute Support' },
          { value: 'Other', label: 'Other' }
        ],
        projectDescription: 'Project Description & Key Questions',
        projectDescriptionPlaceholder: 'Please outline the nature of the project, key dates, type of contract, and specific delay or dispute challenges you are addressing...',
        privacyText: 'I agree to the processing of my contact information in accordance with the',
        privacyLink: 'Privacy Policy',
        submitButton: 'Send Enquiry',
        submitting: 'Submitting Enquiry...',
        successTitle: 'Enquiry Received',
        successMessage: 'Thank you for reaching out to FidePath Expert Services. Your enquiry has been securely logged and forwarded to our technical team.',
        successFollowUp: 'A member of our technical team will review your project details and contact you via email or telephone within 24 to 48 business hours.',
        referenceCodeLabel: 'Enquiry Reference Code',
        submitAnother: 'Submit Another Enquiry',
        errorGeneral: 'An error occurred while submitting your message. Please check the fields or contact us directly at joan.perello@fidepath.com.',
        secureNotice: 'Secure SSL transmission · Non-disclosure protected',
        validation: {
          firstName: 'First name is required.',
          lastName: 'Last name is required.',
          company: 'Company name is required.',
          email: 'A valid corporate or professional email address is required.',
          subject: 'Subject is required.',
          assistanceType: 'Please select the type of assistance required.',
          projectDescription: 'Please provide a brief description of your project or matter (min 15 characters).',
          privacyConsent: 'You must accept the privacy policy to submit your enquiry.'
        }
      }
    },
    footer: {
      brandDesc: 'Independent technical analysis of construction delays, disruption, and dispute matters. Clear, evidence-based conclusions for informed commercial decisions.',
      quickLinks: 'Navigation',
      services: 'Services',
      contactInfo: 'Contact',
      discussButton: 'Discuss Your Project',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      legalNotice: 'Legal Notice'
    },
    legal: {
      badge: 'Legal & Compliance',
      returnHome: '← Return to Home',
      lastUpdated: 'Last updated: 2026',
      privacy: {
        title: 'Privacy Policy',
        disclaimer: 'Notice: This privacy framework reflects Regulation (EU) 2016/679 (GDPR) and the Spanish Organic Law 3/2018 (LOPDGDD). Definitive tax identification numbers (CIF/NIF) and registered corporate addresses will be completed upon statutory publication.',
        sections: [
          {
            title: '1. Data Controller',
            content: [
              'The data controller responsible for the processing of personal data collected through this website is:',
              '• Trade Name: FidePath Expert Services',
              '• Responsible Contact: Joan Perelló',
              '• Location: Palma, Balearic Islands, Spain',
              '• Email: joan.perello@fidepath.com',
              '• Phone: +34 615 847 893'
            ]
          },
          {
            title: '2. Purpose of Data Processing',
            content: [
              'Personal data submitted through the contact form (including name, company, email address, phone number, and project descriptions) is processed solely for the following purposes:',
              '• Responding to professional inquiries, consultancy requests, and expressions of interest.',
              '• Conducting preliminary technical conflict checks and assessing the suitability of expert assistance.',
              '• Submitting fee proposals and technical service agreements.'
            ]
          },
          {
            title: '3. Legal Basis for Processing',
            content: [
              'The legal basis for processing your data is the consent granted when submitting your inquiry, as well as the application of pre-contractual measures at the request of the interested party (Art. 6.1.a and 6.1.b GDPR).'
            ]
          },
          {
            title: '4. Data Retention & Confidentiality',
            content: [
              'Data will be retained only for as long as necessary to attend to your request or until you exercise your right to erasure. All project-related documentation submitted for initial appraisal is treated with strict professional confidentiality.'
            ]
          },
          {
            title: '5. Exercise of Rights',
            content: [
              'You may exercise your rights of access, rectification, erasure, restriction, objection, and data portability at any time by sending a written notice accompanied by proof of identity to joan.perello@fidepath.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD).'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie Policy',
        sections: [
          {
            title: '1. What are Cookies?',
            content: [
              'A cookie is a small text file stored on your browser when visiting a website. Cookies allow sites to recognize your device, remember preferences, and ensure seamless navigation.'
            ]
          },
          {
            title: '2. Cookies Used by FidePath Expert Services',
            content: [
              'FidePath adheres to a strict privacy-by-design policy:',
              '• Strictly Technical / Essential Cookies: These cookies are necessary for the website to function correctly (e.g., maintaining your selected language preference: English, Spanish, or Catalan). They do not track your browsing habits across third-party websites.',
              '• No Third-Party Advertising Trackers: This website does not install third-party advertising cookies, behavioural profiling trackers, or invasive marketing pixels.'
            ]
          },
          {
            title: '3. Managing Browser Cookies',
            content: [
              'You can configure or block cookies at any time via your browser settings (Chrome, Safari, Firefox, Edge). Blocking essential functional cookies may affect language preference persistence.'
            ]
          }
        ]
      },
      legalNotice: {
        title: 'Legal Notice',
        disclaimer: 'Legal Notice: In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE).',
        sections: [
          {
            title: '1. Identification of the Service Provider',
            content: [
              'In accordance with Article 10 of Law 34/2002, the following identifying information is provided:',
              '• Trade Name: FidePath Expert Services',
              '• Principal Consultant: Joan Perelló',
              '• Business Location: Palma, Balearic Islands, Spain',
              '• Direct Email: joan.perello@fidepath.com',
              '• Contact Phone: +34 615 847 893',
              '• Official Website: https://fidepath.com'
            ]
          },
          {
            title: '2. Intellectual Property',
            content: [
              'All contents on this website, including but not limited to texts, architectural photography, graphic diagrams, layouts, and brand identity, are the intellectual property of FidePath Expert Services or are used under appropriate licenses. Total or partial reproduction without express written authorisation is prohibited.'
            ]
          },
          {
            title: '3. Disclaimer of Liability',
            content: [
              'The information provided on this website is for general informational purposes concerning construction delay analysis and expert services. It does not constitute formal legal counsel or binding expert witness evidence for a specific dispute until an engagement agreement has been executed between the parties.'
            ]
          },
          {
            title: '4. Applicable Law and Jurisdiction',
            content: [
              'These terms are governed by the laws of Spain. Any dispute regarding the use of this website shall be subject to the jurisdiction of the courts of Palma de Mallorca, Spain.'
            ]
          }
        ]
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Independent Construction Delay Analysis',
        about: 'About Us — FidePath Expert Services',
        services: 'Services & Delay Analysis — FidePath Expert Services',
        approach: 'Our Approach & Experience — FidePath Expert Services',
        contact: 'Discuss Your Project — FidePath Expert Services',
        privacy: 'Privacy Policy — FidePath Expert Services',
        cookies: 'Cookie Policy — FidePath Expert Services',
        legal: 'Legal Notice — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Clear, independent, and reliable technical analysis of construction delays, EOT claims, disruption, and expert reports. Based in Palma, serving international clients.',
        about: 'Learn about FidePath Expert Services: independent thinking, technical rigour, and proportionate dispute advisory for the construction industry.',
        services: 'Specialised technical services: Construction Delay Analysis, Extension of Time (EOT) Assessment, Disruption Analysis, Expert Reports, and Dispute Support.',
        approach: 'Our structured 6-step methodology for construction delay investigation, critical path analysis, and evidence-based reporting.',
        contact: 'Contact FidePath Expert Services in Palma to discuss your construction project delays, contractual claims, or expert report requirements.',
        privacy: 'Privacy Policy of FidePath Expert Services in compliance with EU GDPR and Spanish LOPDGDD regulations.',
        cookies: 'Cookie Policy of FidePath Expert Services. We use only strictly necessary technical cookies.',
        legal: 'Legal Notice of FidePath Expert Services pursuant to Spanish Law 34/2002 (LSSI-CE).'
      }
    }
  },
  es: {
    common: {
      tagline: 'Independiente · Fiable · Experto',
      location: 'Palma, Islas Baleares, España',
      allRightsReserved: 'Todos los derechos reservados.',
      categoryPrefix: 'Categoría',
      sectorPrefix: 'Sector',
      groupPrefix: 'Grupo',
      servicePrefix: 'Servicio',
      stepPrefix: 'Fase'
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      approach: 'Enfoque y Experiencia',
      contact: 'Contacto',
      ctaButton: 'Tratar su Proyecto',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación'
    },
    hero: {
      badge: 'Independiente · Fiable · Experto',
      title: 'Análisis Independiente de Retrasos en Construcción y Servicios Periciales',
      subtitle: 'Análisis claro, independiente y fiable de retrasos, disrupciones y controversias en proyectos de construcción. Transformamos información compleja en conclusiones comprensibles y fundamentadas.',
      ctaPrimary: 'Tratar su Proyecto',
      ctaSecondary: 'Explorar Nuestros Servicios',
      trustItems: [
        'Especialistas en Retrasos de Obra',
        'Extensión de Plazo (EOT)',
        'Dictámenes Periciales Independientes',
        'Alcance Internacional'
      ],
      imageCaption: 'Análisis de Infraestructuras e Ingeniería',
      imageLocation: 'Palma · Internacional'
    },
    intro: {
      badge: 'Nuestro Propósito',
      title: 'Claridad en Asuntos Complejos de Construcción',
      paragraph1: 'Los retrasos y las disrupciones en la construcción generan desafíos técnicos y comerciales complejos.',
      paragraph2: 'En FidePath Expert Services analizamos la información del proyecto, evaluamos las circunstancias que rodean a los retrasos y ayudamos a nuestros clientes a comprender qué ha sucedido realmente, por qué ocurrió y cómo influye en su posición contractual y comercial.',
      paragraph3: 'Nuestro enfoque es independiente, basado en evidencias y adaptado a las necesidades específicas de cada caso.',
      attributes: {
        independent: {
          title: 'Independencia',
          desc: 'Una perspectiva objetiva e imparcial, fundamentada estrictamente en los registros contemporáneos del proyecto y en los hechos probados.'
        },
        reliable: {
          title: 'Fiabilidad',
          desc: 'Evaluaciones técnicas metodológicamente sólidas que resisten el escrutinio en negociaciones comerciales y litigios.'
        },
        expert: {
          title: 'Conocimiento Técnico',
          desc: 'Especialización técnica enfocada en planificación de obras, metodologías de ruta crítica y análisis causal de retrasos.'
        }
      }
    },
    services: {
      badge: 'Capacidades Principales',
      sectionTitle: 'Nuestros Servicios',
      sectionSubtitle: 'Servicios técnicos especializados para la gestión del plazo, disrupción y resolución de controversias en obras.',
      viewAll: 'Ver Todos los Servicios',
      detailsButton: 'Detalles',
      cardTagline: 'Análisis Forense y Peritaje Técnico de Retrasos',
      problemsAddressedTitle: 'Problemas Clave que Resolvemos',
      analysisIncludedTitle: 'Alcance del Análisis Técnico',
      valueBoxTitle: 'Valor Técnico y Comercial',
      valueBoxHeading: 'Cómo Respalda su Posición Contractual',
      recordsTitle: 'Registros Contemporáneos Habituales Analizados:',
      typicalRecords: [
        'Cronogramas base y archivos nativos de planificación (.xer, .mpp)',
        'Libros de órdenes, partes diarios y registros de personal y maquinaria',
        'Informes mensuales de avance y actas de reuniones de obra',
        'Órdenes de cambio, solicitudes de información (RFI) y notificaciones de dirección facultativa'
      ],
      discussButtonPrefix: 'Consultar sobre',
      directInquiriesTitle: 'Consultas Directas:',
      targetAudienceBadge: 'Ámbitos de Colaboración',
      targetAudienceTitle: 'A Quién Ayudamos',
      targetAudienceDesc: 'Nuestros servicios están diseñados para aportar certidumbre técnica a los diferentes agentes del sector:',
      targetAudiences: [
        'Empresas constructoras y contratistas principales',
        'Subcontratistas especializados e instaladores',
        'Promotores inmobiliarios, propietarios y entidades públicas',
        'Abogados, directores de litigios y árbitros',
        'Pequeñas y medianas empresas (PYMES) que buscan asesoramiento pericial accesible y de alta calidad'
      ],
      targetAudienceFooter: 'Análisis Independiente · Conclusiones Concretas',
      ctaBox: {
        title: '¿Tiene una Duda Concreta sobre Retrasos o Controversias en su Obra?',
        desc: 'Contáctenos para una conversación confidencial preliminar sobre la documentación disponible, el cronograma y los requisitos de análisis.',
        button: 'Tratar su Proyecto'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Análisis de Retrasos en Construcción',
          shortDesc: 'Análisis independiente de retrasos en programas de obra, identificando los eventos y circunstancias que han afectado al avance del proyecto.',
          fullDesc: 'Realizamos análisis forenses y contemporáneos de cronogramas para identificar los retrasos en la ruta crítica, cuantificando los impactos temporales imputables al promotor, al contratista o a riesgos neutrales.',
          problemsAddressed: [
            'Causas confusas o controvertidas del retraso en la finalización de la obra',
            'Posturas encontradas sobre el avance real de la ruta crítica',
            'Actualizaciones de cronograma incompletas o divergentes',
            'Necesidad de fijar objetivamente la responsabilidad temporal'
          ],
          analysisIncluded: [
            'Identificación y trazabilidad de la ruta crítica',
            'Comparación de cronograma real vs. planificado (As-Built vs. As-Planned)',
            'Análisis de impacto temporal (Time-Impact Analysis) y por ventanas',
            'Verificación de las actualizaciones contemporáneas del programa'
          ],
          clientValue: 'Proporciona una visión objetiva y técnicamente demostrable del comportamiento del cronograma para facilitar acuerdos o fundamentar reclamaciones.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Evaluación de Extensión de Plazo (EOT)',
          shortDesc: 'Evaluación técnica de reclamaciones de extensión de plazo, examinando los eventos de retraso, su impacto en la finalización y los registros de la obra.',
          fullDesc: 'Evaluación rigurosa de la legitimidad contractual para solicitar tiempo adicional, comprobando si los eventos alegados afectaron de facto a la fecha de terminación contractual según los registros coetáneos.',
          problemsAddressed: [
            'Presentación o desestimación de reclamaciones de ampliación de plazo',
            'Discrepancias sobre retrasos concurrentes y secuenciales',
            'Verificación del cumplimiento de notificaciones contractuales y registros',
            'Reclamaciones por medidas de mitigación o aceleración'
          ],
          analysisIncluded: [
            'Mapeo cronológico de eventos generadores de retraso',
            'Evaluación de criticidad de eventos compensables',
            'Análisis de concurrencia e imputación temporal',
            'Revisión de correspondencia, libros de órdenes e incidencias de obra'
          ],
          clientValue: 'Permite a contratistas, promotores y abogados respaldar o responder a solicitudes de prórroga con claridad técnica irrefutable.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Análisis de Disrupción e Interferencias',
          shortDesc: 'Evaluación de la pérdida de productividad y disrupción en las actividades constructivas, considerando los registros del proyecto y las circunstancias de ejecución.',
          fullDesc: 'La disrupción implica una merma de rendimiento, alteraciones en la secuencia lógica y solapes imprevistos sin que necesariamente se altere la fecha final de obra. Analizamos la causa-efecto con datos de obra.',
          problemsAddressed: [
            'Sobreconsumo de horas de mano de obra y maquinaria sin avance proporcional',
            'Modificaciones continuas de diseño, entregas tardías de información y trabajos fuera de secuencia',
            'Saturación de tajos y falta de accesos planificados',
            'Cuantificación objetiva de pérdidas de productividad'
          ],
          analysisIncluded: [
            'Análisis de desviaciones de secuencia y densidad de oficios',
            'Determinación de rendimientos base (método de la milla medida o muestreo)',
            'Auditoría de partes diarios de trabajo y asignación de recursos',
            'Vínculo causal directo entre eventos causantes y merma productiva'
          ],
          clientValue: 'Distingue ineficiencias propias del contratista de interferencias atribuibles a la propiedad, fundamentando reclamaciones económicas con rigor.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Informes Periciales Independientes',
          shortDesc: 'Preparación de informes claros, estructurados y técnicamente fundamentados para ayudar a los clientes en la toma de decisiones comerciales y en procedimientos de resolución de disputas.',
          fullDesc: 'Elaboramos informes periciales técnicos e independientes para comisiones de disputas, mediación, arbitraje y sede judicial civil o contenciosa.',
          problemsAddressed: [
            'Necesidad de criterio pericial objetivo antes de entrar en costosos litigios',
            'Aportación de prueba pericial para tribunales o paneles arbitrales',
            'Traducción de datos técnicos complejos a conclusiones comprensibles para jueces',
            'Contrainformes y análisis crítico de peritajes de la parte contraria'
          ],
          analysisIncluded: [
            'Relación estructurada de antecedentes fácticos y metodología empleada',
            'Cronogramas visuales, diagramas de Gantt y líneas de tiempo comprensibles',
            'Soporte documental directo en registros contemporáneos de la obra',
            'Conclusiones periciales fundamentadas, claras e imparciales'
          ],
          clientValue: 'Aporta a tribunales, árbitros y directivos comerciales una prueba pericial de máxima credibilidad técnica y claridad expositiva.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Soporte en Reclamaciones y Controversias',
          shortDesc: 'Análisis técnico y soporte en la evaluación y comprensión de reclamaciones y disputas en el sector de la construcción.',
          fullDesc: 'Asesoramiento técnico continuo para partes involucradas en desavenencias contractuales. Evaluamos los puntos fuertes, vulnerabilidades y alcance real de las reclamaciones.',
          problemsAddressed: [
            'Prevención de la escalada de conflictos y definición de estrategia',
            'Revisión y auditoría de borradores de reclamación contractual',
            'Acompañamiento técnico en reuniones de negociación amistosa',
            'Apoyo a letrados en la formulación de interrogatorios y consultas técnicas'
          ],
          analysisIncluded: [
            'Revisión de correspondencia técnica, instrucciones de obra y modificados',
            'Diagnóstico de lagunas en la documentación del proyecto',
            'Evaluación de exposición a riesgos de plazo y coste',
            'Preparación de memorandos y resúmenes ejecutivos técnicos'
          ],
          clientValue: 'Garantiza que las decisiones comerciales y legales descansen sobre valoraciones técnicas contrastadas y realistas.'
        }
      ]
    },
    whyUs: {
      badge: 'Nuestros Principios',
      title: 'Una Perspectiva Independiente. Una Comprensión Más Clara.',
      subtitle: 'Cuatro principios fundamentales orientan cada uno de nuestros análisis.',
      principles: [
        {
          number: '01',
          title: 'Análisis Independiente',
          desc: 'Un enfoque objetivo centrado en las evidencias disponibles y en las circunstancias específicas de cada proyecto.'
        },
        {
          number: '02',
          title: 'Soluciones a Medida',
          desc: 'Cada proyecto es diferente. Nuestro análisis se adapta a la información, la complejidad y los requerimientos de cada caso.'
        },
        {
          number: '03',
          title: 'Claridad Técnica',
          desc: 'Traducimos cuestiones técnicas complejas en conclusiones claras, sencillas y perfectamente comprensibles.'
        },
        {
          number: '04',
          title: 'Enfoque Proporcionado',
          desc: 'Análisis focalizado y soluciones prácticas, con especial atención a las necesidades y posibilidades de pequeñas y medianas empresas.'
        }
      ]
    },
    approach: {
      badge: 'Metodología',
      title: 'Comprender Qué Ha Sucedido Realmente',
      subtitle: 'Una metodología en cuatro fases para desentrañar retrasos complejos en la construcción.',
      intro: 'El análisis de retrasos exige disciplina, rigor documental y una minuciosa revisión de los registros coetáneos. No partimos de conclusiones preconcebidas; dejamos que los hechos determinen el resultado.',
      corePrinciplesBadge: 'Principios Esenciales',
      corePrinciplesTitle: 'Cómo Abordamos la Investigación de Retrasos',
      corePrinciplesP1: 'En disputas complejas de construcción, las partes a menudo no discrepan sobre si la obra se retrasó, sino sobre qué eventos concretos condicionaron el avance y quién asume la responsabilidad contractual.',
      corePrinciplesP2: 'Nuestra función como peritos independientes es reconstruir la cronología real de los acontecimientos. En lugar de apoyarnos en hipótesis teóricas o apreciaciones retrospectivas sin base, elaboramos una matriz fáctica respaldada en los documentos contemporáneos de la obra.',
      imageCaption1: 'Auditoría de Registros Contemporáneos',
      imageCaption2: 'Verificación del Cronograma',
      exploreButton: 'Explorar Nuestro Proceso en 6 Fases',
      stages: [
        {
          number: '01',
          title: 'Comprender',
          desc: 'Comenzamos por comprender el proyecto, sus circunstancias y las preguntas clave que necesitan respuesta.'
        },
        {
          number: '02',
          title: 'Investigar',
          desc: 'Examinamos la documentación disponible, cronogramas, libros de obra y registros relevantes del proyecto.'
        },
        {
          number: '03',
          title: 'Analizar',
          desc: 'Evaluamos los eventos acontecidos, sus causas determinantes y su impacto real en el avance de la obra.'
        },
        {
          number: '04',
          title: 'Explicar',
          desc: 'Presentamos nuestras conclusiones de forma clara, estructurada y técnicamente fundamentada.'
        }
      ],
      methodologyBadge: 'Secuencia Analítica en 6 Fases',
      methodologyTitle: 'Nuestro Proceso Metodológico Completo',
      methodologySteps: [
        {
          number: '01',
          title: 'Comprensión del Proyecto y del Alcance',
          desc: 'Clarificación del marco contractual, premisas del programa base, hitos contractuales y cuestiones técnicas planteadas.'
        },
        {
          number: '02',
          title: 'Revisión Exhaustiva de la Documentación',
          desc: 'Auditoría de cronogramas base y sucesivas revisiones, partes de obra, informes mensuales, consultas (RFI) y correspondencia de obra.'
        },
        {
          number: '03',
          title: 'Identificación de Eventos de Retraso',
          desc: 'Catalogación cronológica de modificaciones de proyecto, entregas tardías, imprevistos geotécnicos y condicionantes del contratista.'
        },
        {
          number: '04',
          title: 'Evaluación del Impacto Crítico',
          desc: 'Determinación de la ruta crítica en el momento de los hechos, analizando si existió retraso efectivo y evaluando la concurrencia.'
        },
        {
          number: '05',
          title: 'Elaboración de Conclusiones Técnicas',
          desc: 'Síntesis de la lógica de programación y la evidencia documental en conclusiones objetivas sobre responsabilidad y derechos.'
        },
        {
          number: '06',
          title: 'Redacción de Informes Claros y Estructurados',
          desc: 'Redacción de dictámenes con resúmenes ejecutivos, líneas temporales visuales y trazabilidad documental directa.'
        }
      ],
      ctaBox: {
        title: 'Analicemos el Cronograma de su Proyecto',
        desc: 'Permítanos examinar la planificación de su obra y recomendarle la metodología analítica más adecuada.',
        button: 'Tratar su Proyecto'
      }
    },
    experience: {
      badge: 'Experiencia Sectorial',
      title: 'Criterio Técnico. Análisis Específico de Cada Proyecto.',
      subtitle: 'Capacidad técnica estructurada en las principales tipologías constructivas.',
      frameworkIntro: 'Cada proyecto presenta condicionantes físicos y contractuales singulares. Nuestro método se ajusta al entorno documental propio de cada tipología:',
      sectorsTitle: 'Capacidades de Análisis por Tipología de Obra',
      typicalDelayLabel: 'Causas Habituales de Retraso Analizadas:',
      sectors: [
        {
          title: 'Infraestructuras Civiles y Transporte',
          description: 'Carreteras, puentes, líneas ferroviarias y canalizaciones con dependencias de trazado y afección a terceros.',
          delayTypes: 'Demoras en permisos, desvíos de servicios afectados, imprevistos geotécnicos, modificaciones de diseño.'
        },
        {
          title: 'Edificación Residencial, Terciaria y Singular',
          description: 'Edificios en altura, promociones residenciales, hoteles y oficinas con alta coordinación de instalaciones y acabados.',
          delayTypes: 'Entrega tardía de proyectos de ejecución, problemas de suministro, interferencias entre oficios, legalizaciones.'
        },
        {
          title: 'Instalaciones Industriales y Energéticas',
          description: 'Plantas industriales, naves logísticas y proyectos de energía donde la entrega de equipos comanda la ruta crítica.',
          delayTypes: 'Retrasos en suministros críticos, coordinación de tecnólogos, pruebas y puesta en servicio.'
        }
      ],
      confidentialityBadge: 'Confidencialidad y Marco de Casos de Estudio',
      futureCasesNote: 'Los resúmenes detallados de casos y proyectos se publicarán conforme lo permitan los acuerdos de confidencialidad con los clientes. Contáctenos para conocer experiencia relevante aplicable a su tipología de proyecto.'
    },
    finalCta: {
      badge: 'Hablemos de su Caso',
      title: 'Cada Proyecto Tiene su Propia Historia. Comprendamos la Suya.',
      text: 'Si se enfrenta a retrasos, problemas de productividad o una disputa técnica en su proyecto de construcción, estaremos encantados de conocer su caso y explicarle cómo podemos ayudarle.',
      button: 'Tratar su Proyecto',
      contactBar: 'joan.perello@fidepath.com · +34 615 847 893 · Palma, Islas Baleares'
    },
    about: {
      badge: 'Sobre FidePath',
      title: 'Pensamiento Independiente. Comprensión Técnica.',
      subtitle: 'Análisis objetivo de retrasos en obras y asesoramiento pericial accesible.',
      p1: 'FidePath Expert Services nació con un propósito claro: ofrecer análisis técnicos independientes, fiables y accesibles en asuntos relacionados con la construcción.',
      p2: 'Entendemos que los proyectos constructivos conllevan circunstancias complejas, interpretaciones contrapuestas e importantes consecuencias comerciales.',
      p3: 'Nuestra labor consiste en examinar la información disponible, desentrañar los hechos y proporcionar un análisis claro y razonado para sustentar decisiones acertadas.',
      p4: 'Creemos firmemente que el buen asesoramiento técnico debe ser riguroso, independiente y, ante todo, comprensible.',
      p5: 'Un pilar fundamental de nuestra consultora es la cercanía y la proporcionalidad: brindar servicios periciales de primer nivel con tarifas razonables y accesibles tanto para pequeñas y medianas empresas como para proyectos de mayor escala.',
      foundationsTitle: 'Pilares Metodológicos',
      foundations: [
        'Auditoría rigurosa de registros contemporáneos',
        'Verificación empírica de la ruta crítica',
        'Dictámenes periciales imparciales para litigios',
        'Tarifas transparentes, razonables y proporcionadas'
      ],
      impartialityTitle: 'Imparcialidad Pericial',
      impartialityQuote: 'Nuestro compromiso ético y profesional responde exclusivamente a los hechos acreditados del cronograma. Emitimos conclusiones razonadas sustentadas únicamente en las evidencias coetáneas de la obra.',
      founderSectionBadge: 'Perfil del Despacho',
      founderSectionTitle: 'Liderazgo y Perfil Profesional',
      founderName: 'Joan Perelló',
      founderRole: 'Fundador y Consultor Principal',
      founderBadge: 'Dirección Técnica',
      founderNotice: 'FidePath Expert Services está dirigida por profesionales técnicos con experiencia directa en planificación de proyectos, análisis forense de retrasos y apoyo en controversias. Los datos curriculares y acreditaciones se ampliarán a medida que crezca la firma.',
      founderFields: {
        focusLabel: 'Especialidad',
        focusValue: 'Planificación y Análisis Forense de Retrasos',
        deliverablesLabel: 'Dictámenes',
        deliverablesValue: 'Informes Periciales Independientes',
        contactLabel: 'Contacto'
      },
      ctaBox: {
        title: '¿Desea Tratar su Caso de Construcción?',
        desc: 'Póngase en contacto con nosotros para compartir la documentación de su obra y evaluar cómo podemos ayudarle.',
        button: 'Tratar su Proyecto'
      }
    },
    contact: {
      badge: 'Consulta y Asesoramiento',
      title: 'Hablemos de su Proyecto',
      subtitle: 'Cada caso en la construcción es único. Póngase en contacto con nosotros para explicarnos su proyecto, los retos a los que se enfrenta y el apoyo técnico que requiere.',
      directContactTitle: 'Datos de Contacto Directo',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      locationValue: 'Palma, Islas Baleares, España',
      confidentialityTitle: 'Confidencialidad y Secreto Profesional:',
      confidentialityText: 'Toda la documentación técnica, programas de obra y conversaciones iniciales se gestionan con estricta confidencialidad profesional bajo compromisos de no divulgación.',
      procedureTitle: 'Procedimiento de Consulta Inicial',
      procedureSteps: [
        '1. Revisión preliminar de fechas clave y registros de planificación disponibles.',
        '2. Determinación de la metodología pericial y analítica más apropiada.',
        '3. Propuesta técnica clara y ajustada, con alcance y honorarios transparentes.'
      ],
      form: {
        firstName: 'Nombre',
        firstNamePlaceholder: 'p. ej. Joan',
        lastName: 'Apellidos',
        lastNamePlaceholder: 'p. ej. Perelló',
        company: 'Empresa',
        companyPlaceholder: 'p. ej. Constructora Balear S.L.',
        email: 'Correo Electrónico',
        emailPlaceholder: 'nombre@empresa.com',
        phone: 'Teléfono',
        phoneOptional: '(opcional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Asunto',
        subjectPlaceholder: 'p. ej. Análisis de retrasos en proyecto hospitalario',
        assistanceType: 'Tipo de Asistencia Requerida',
        assistanceSelectDefault: '-- Seleccione el tipo de servicio --',
        assistanceOptions: [
          { value: 'Construction Delay Analysis', label: 'Análisis de Retrasos en Construcción' },
          { value: 'Extension of Time Assessment', label: 'Evaluación de Extensión de Plazo (EOT)' },
          { value: 'Disruption Analysis', label: 'Análisis de Disrupción e Interferencias' },
          { value: 'Independent Expert Reports', label: 'Informes Periciales Independientes' },
          { value: 'Construction Claims & Dispute Support', label: 'Soporte en Reclamaciones y Controversias' },
          { value: 'Other', label: 'Otro' }
        ],
        projectDescription: 'Descripción del Proyecto y Cuestiones Clave',
        projectDescriptionPlaceholder: 'Describa brevemente la naturaleza del proyecto, fechas principales, tipo de contrato y la problemática de plazo o disputa que desea analizar...',
        privacyText: 'Acepto el tratamiento de mis datos de contacto conforme a la',
        privacyLink: 'Política de Privacidad',
        submitButton: 'Enviar Consulta',
        submitting: 'Enviando Consulta...',
        successTitle: 'Consulta Recibida con Éxito',
        successMessage: 'Gracias por ponerse en contacto con FidePath Expert Services. Su consulta ha sido registrada de forma segura y remitida a nuestro equipo técnico.',
        successFollowUp: 'Un miembro de nuestro equipo técnico revisará los detalles de su proyecto y se pondrá en contacto con usted por correo electrónico o teléfono en un plazo de 24 a 48 horas laborables.',
        referenceCodeLabel: 'Código de Referencia de la Consulta',
        submitAnother: 'Enviar Otra Consulta',
        errorGeneral: 'Ha ocurrido un error al procesar el formulario. Por favor, revise los datos o escríbanos directamente a joan.perello@fidepath.com.',
        secureNotice: 'Transmisión segura cifrada SSL · Protección de confidencialidad',
        validation: {
          firstName: 'El nombre es obligatorio.',
          lastName: 'Los apellidos son obligatorios.',
          company: 'El nombre de la empresa u organización es obligatorio.',
          email: 'Introduzca un correo electrónico corporativo válido.',
          subject: 'El asunto de la consulta es obligatorio.',
          assistanceType: 'Seleccione el tipo de asistencia técnica requerida.',
          projectDescription: 'Describa brevemente su proyecto o consulta (mínimo 15 caracteres).',
          privacyConsent: 'Debe aceptar la política de privacidad para enviar la consulta.'
        }
      }
    },
    footer: {
      brandDesc: 'Análisis técnico independiente de retrasos, disrupciones y controversias en proyectos de construcción. Conclusiones objetivas para decisiones comerciales informadas.',
      quickLinks: 'Navegación',
      services: 'Servicios',
      contactInfo: 'Contacto',
      discussButton: 'Tratar su Proyecto',
      privacyPolicy: 'Política de Privacidad',
      cookiePolicy: 'Política de Cookies',
      legalNotice: 'Aviso Legal'
    },
    legal: {
      badge: 'Marco Legal y Cumplimiento',
      returnHome: '← Volver al Inicio',
      lastUpdated: 'Última actualización: 2026',
      privacy: {
        title: 'Política de Privacidad',
        disclaimer: 'Aviso: Esta política de privacidad se rige por el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Los datos fiscales definitivos (CIF/NIF) y la dirección social inscrita se completarán tras su publicación oficial.',
        sections: [
          {
            title: '1. Responsable del Tratamiento',
            content: [
              'El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:',
              '• Nombre comercial: FidePath Expert Services',
              '• Contacto responsable: Joan Perelló',
              '• Ubicación: Palma, Islas Baleares, España',
              '• Correo electrónico: joan.perello@fidepath.com',
              '• Teléfono: +34 615 847 893'
            ]
          },
          {
            title: '2. Finalidad del Tratamiento',
            content: [
              'Los datos personales facilitados a través del formulario de contacto (incluyendo nombre, empresa, correo electrónico, teléfono y descripción del proyecto) se tratan exclusivamente para:',
              '• Responder a consultas profesionales, solicitudes de asesoramiento pericial y muestras de interés.',
              '• Realizar comprobaciones preliminares de incompatibilidad técnica o conflicto de intereses y valorar la viabilidad de la intervención pericial.',
              '• Remitir propuestas de honorarios y acuerdos de servicios técnicos.'
            ]
          },
          {
            title: '3. Legitimación del Tratamiento',
            content: [
              'La base jurídica que legitima el tratamiento de sus datos es el consentimiento expreso otorgado al remitir el formulario, así como la aplicación de medidas precontractuales a petición del interesado (Art. 6.1.a y 6.1.b del RGPD).'
            ]
          },
          {
            title: '4. Conservación de los Datos y Confidencialidad',
            content: [
              'Los datos se conservarán durante el tiempo estrictamente necesario para atender su solicitud o hasta que ejerza su derecho de supresión. Toda la documentación aportada para valoración inicial de retrasos u obras se custodia bajo estricto secreto profesional.'
            ]
          },
          {
            title: '5. Ejercicio de Derechos',
            content: [
              'Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad en cualquier momento dirigiéndose por escrito a joan.perello@fidepath.com adjuntando copia de su documento de identidad. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).'
            ]
          }
        ]
      },
      cookies: {
        title: 'Política de Cookies',
        sections: [
          {
            title: '1. ¿Qué son las Cookies?',
            content: [
              'Una cookie es un pequeño archivo de texto que un sitio web almacena en su navegador al visitarlo. Permite recordar sus preferencias (como el idioma seleccionado) y garantizar una navegación fluida y segura.'
            ]
          },
          {
            title: '2. Cookies Utilizadas por FidePath Expert Services',
            content: [
              'FidePath aplica un estricto principio de privacidad desde el diseño:',
              '• Cookies Estrictamente Técnicas y Esenciales: Son imprescindibles para el funcionamiento correcto de la web (por ejemplo, para recordar su preferencia lingüística: castellano, catalán o inglés). No rastrean su navegación por sitios de terceros.',
              '• Sin Rastreadores Publicitarios de Terceros: Este sitio web no instala cookies publicitarias de terceros, ni mecanismos de perfilado comercial ni píxeles invasivos.'
            ]
          },
          {
            title: '3. Configuración y Desactivación',
            content: [
              'Puede configurar o bloquear las cookies en cualquier momento a través de los ajustes de su navegador (Chrome, Safari, Firefox, Edge). La desactivación de cookies técnicas esenciales puede impedir la conservación de su idioma de preferencia.'
            ]
          }
        ]
      },
      legalNotice: {
        title: 'Aviso Legal',
        disclaimer: 'Aviso Legal: En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).',
        sections: [
          {
            title: '1. Información Identificativa',
            content: [
              'En cumplimiento de las obligaciones legales aplicables, se detallan los siguientes datos identificativos:',
              '• Denominación comercial: FidePath Expert Services',
              '• Consultor principal: Joan Perelló',
              '• Ubicación profesional: Palma, Islas Baleares, España',
              '• Correo electrónico de contacto: joan.perello@fidepath.com',
              '• Teléfono: +34 615 847 893',
              '• Sitio web oficial: https://fidepath.com'
            ]
          },
          {
            title: '2. Propiedad Intelectual',
            content: [
              'Todos los contenidos de este sitio web, incluyendo textos, fotografías arquitectónicas, diagramas metodológicos, estructura y diseño gráfico, son propiedad intelectual de FidePath Expert Services o se utilizan bajo licencia. Queda prohibida su reproducción total o parcial sin autorización previa y por escrito.'
            ]
          },
          {
            title: '3. Exención de Responsabilidad',
            content: [
              'La información expuesta en este sitio web tiene carácter divulgativo y orientativo sobre servicios periciales y de análisis de retrasos en obras. No constituye asesoramiento jurídico formal ni dictamen pericial vinculante para un litigio concreto hasta la formalización del correspondiente encargo profesional.'
            ]
          },
          {
            title: '4. Legislación Aplicable y Jurisdicción',
            content: [
              'Las presentes condiciones se rigen por la legislación española. Cualquier discrepancia relativa a este sitio web se someterá a la jurisdicción de los juzgados y tribunales de Palma de Mallorca, España.'
            ]
          }
        ]
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Análisis Independiente de Retrasos en Construcción',
        about: 'Sobre Nosotros — FidePath Expert Services',
        services: 'Servicios de Análisis de Retrasos — FidePath Expert Services',
        approach: 'Enfoque y Experiencia Técnica — FidePath Expert Services',
        contact: 'Tratar su Proyecto — FidePath Expert Services',
        privacy: 'Política de Privacidad — FidePath Expert Services',
        cookies: 'Política de Cookies — FidePath Expert Services',
        legal: 'Aviso Legal — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Análisis técnico claro, independiente y fiable de retrasos en obras, reclamaciones de extensión de plazo (EOT), disrupción y dictámenes periciales. Palma y ámbito internacional.',
        about: 'Conozca FidePath Expert Services: criterio técnico independiente, rigor documental y asesoramiento pericial proporcionado para el sector de la construcción.',
        services: 'Servicios periciales especializados: Análisis de Retrasos, Extensión de Plazo (EOT), Disrupción, Dictámenes Periciales y Soporte en Controversias.',
        approach: 'Nuestra metodología forense en 6 fases para la investigación de retrasos en obra, análisis de ruta crítica y conclusiones fundamentadas.',
        contact: 'Contacte con FidePath Expert Services en Palma para tratar los retrasos de su obra, reclamaciones contractuales o informes periciales.',
        privacy: 'Política de Privacidad de FidePath Expert Services conforme al RGPD de la Unión Europea y a la LOPDGDD española.',
        cookies: 'Política de Cookies de FidePath Expert Services. Empleamos exclusivamente cookies técnicas estrictamente necesarias.',
        legal: 'Aviso Legal de FidePath Expert Services en cumplimiento de la Ley 34/2002 (LSSI-CE).'
      }
    }
  },
  ca: {
    common: {
      tagline: 'Independent · Fiable · Expert',
      location: 'Palma, Illes Balears, Espanya',
      allRightsReserved: 'Tots els drets reservats.',
      categoryPrefix: 'Categoria',
      sectorPrefix: 'Sector',
      groupPrefix: 'Grup',
      servicePrefix: 'Servei',
      stepPrefix: 'Fase'
    },
    nav: {
      home: 'Inici',
      about: 'Qui Som',
      services: 'Serveis',
      approach: 'El Nostre Mètode / Experiència',
      contact: 'Contacte',
      ctaButton: 'Analitzar el Seu Projecte',
      openMenu: 'Obrir menú de navegació',
      closeMenu: 'Tancar menú de navegació'
    },
    hero: {
      badge: 'Independent · Fiable · Expert',
      title: 'Anàlisi Independent de Retards en Construcció i Serveis Pericials',
      subtitle: 'Anàlisi clara, independent i fiable de retards, disrupcions i controvèrsies en projectes de construcció. Transformem informació complexa en conclusions comprensibles i fonamentades.',
      ctaPrimary: 'Analitzar el Seu Projecte',
      ctaSecondary: 'Explorar els Serveis',
      trustItems: [
        'Especialistes en Retards d\'Obra',
        'Extensió de Termini (EOT)',
        'Dictàmens Pericials Independents',
        'Abast Internacional'
      ],
      imageCaption: 'Anàlisi d\'Infraestructures i Enginyeria',
      imageLocation: 'Palma · Internacional'
    },
    intro: {
      badge: 'El Nostre Propòsit',
      title: 'Claredat en Assumptes Complexos de Construcció',
      paragraph1: 'Els retards i les disrupcions en la construcció generen desafiaments tècnics i comercials complexos.',
      paragraph2: 'A FidePath Expert Services analitzem la informació del projecte, avaluem les circumstàncies que envolten els retards i ajudem els nostres clients a comprendre què ha succeït realment, per què ha passat i com afecta la seva posició contractual i comercial.',
      paragraph3: 'El nostre enfocament és independent, basat en evidències i adaptat a les necessitats específiques de cada cas.',
      attributes: {
        independent: {
          title: 'Independència',
          desc: 'Una perspectiva objectiva i imparcial, fonamentada estrictament en els registres contemporanis del projecte i en els fets provats.'
        },
        reliable: {
          title: 'Fiabilitat',
          desc: 'Avaluacions tècniques metodològicament sòlides que resisteixen l\'escrutini en negociacions comercials i litigis.'
        },
        expert: {
          title: 'Coneixement Tècnic',
          desc: 'Especialització tècnica centrada en planificació d\'obres, metodologies de camí crític i anàlisi causal de retards.'
        }
      }
    },
    services: {
      badge: 'Capacitats Principals',
      sectionTitle: 'Els Nostres Serveis',
      sectionSubtitle: 'Serveis tècnics especialitzats per a la gestió del termini, disrupció i resolució de conflictes en obres.',
      viewAll: 'Veure Tots els Serveis',
      detailsButton: 'Detalls',
      cardTagline: 'Anàlisi Forense i Peritatge Tècnic de Retards',
      problemsAddressedTitle: 'Problemes Clau que Resolem',
      analysisIncludedTitle: 'Abast de l\'Anàlisi Tècnica',
      valueBoxTitle: 'Valor Tècnic i Comercial',
      valueBoxHeading: 'Com Recolza la Seva Posició Contractual',
      recordsTitle: 'Registres Contemporanis Habituals Analitzats:',
      typicalRecords: [
        'Cronogrames base i arxius natius de planificació (.xer, .mpp)',
        'Llibres d\'ordres, comunicats diaris i registres de recursos i maquinària',
        'Informes mensuals d\'avanç i actes de reunions d\'obra',
        'Ordres de canvi, consultes tècniques (RFI) i notificacions de direcció facultativa'
      ],
      discussButtonPrefix: 'Consultar sobre',
      directInquiriesTitle: 'Consultes Directes:',
      targetAudienceBadge: 'Àmbits de Col·laboració',
      targetAudienceTitle: 'A Qui Ajudem',
      targetAudienceDesc: 'Els nostres serveis estan dissenyats per aportar certesa tècnica als diferents agents del sector:',
      targetAudiences: [
        'Empreses constructores i contractistes principals',
        'Subcontractistes especialitzats i instal·ladors',
        'Promotors immobiliaris, propietaris i entitats públiques',
        'Advocats, directors de litigis i àrbitres',
        'Petites i mitjanes empreses (PIMES) que cerquen assessorament pericial accessible i d\'alta qualitat'
      ],
      targetAudienceFooter: 'Anàlisi Independent · Conclusions Concretes',
      ctaBox: {
        title: 'Té un Dubte Concret sobre Retards o Conflictes a la Seva Obra?',
        desc: 'Contacti amb nosaltres per a una conversa confidencial preliminar sobre la documentació disponible, el cronograma i les necessitats d\'anàlisi.',
        button: 'Analitzar el Seu Projecte'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Anàlisi de Retards en Construcció',
          shortDesc: 'Anàlisi independent de retards en programes d\'obra, identificant els esdeveniments i circumstàncies que han afectat l\'avanç del projecte.',
          fullDesc: 'Realitzem anàlisis forenses i contemporànies de cronogrames per identificar els retards en el camí crític, quantificant els impactes temporals imputables al promotor, al contractista o a riscos neutrals.',
          problemsAddressed: [
            'Causes confuses o controvertides del retard en la finalització de l\'obra',
            'Postures oposades sobre l\'avanç real del camí crític',
            'Actualitzacions de cronograma incompletes o divergents',
            'Necessitat de fixar objectivament la responsabilitat temporal'
          ],
          analysisIncluded: [
            'Identificació i traçabilitat del camí crític',
            'Comparació de cronograma real vs. planificat (As-Built vs. As-Planned)',
            'Anàlisi d\'impacte temporal (Time-Impact Analysis) i per finestres',
            'Verificació de les actualitzacions contemporànies del programa'
          ],
          clientValue: 'Proporciona una visió objectiva i tècnicament demostrable del comportament del cronograma per facilitar acords o fonamentar reclamacions.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Avaluació d\'Extensió de Termini (EOT)',
          shortDesc: 'Avaluació tècnica de reclamacions d\'extensió de termini, examinant els esdeveniments de retard, el seu impacte en la finalització i els registres de l\'obra.',
          fullDesc: 'Avaluació rigorosa de la legitimitat contractual per sol·licitar temps addicional, comprovant si els esdeveniments al·legats van afectar de facto la data de finalització contractual segons els registres coetanis.',
          problemsAddressed: [
            'Presentació o desestimació de reclamacions d\'ampliació de termini',
            'Discrepàncies sobre retards concurrents i seqüencials',
            'Verificació del compliment de notificacions contractuals i registres',
            'Reclamacions per mesures de mitigació o acceleració'
          ],
          analysisIncluded: [
            'Mapeig cronològic d\'esdeveniments generadors de retard',
            'Avaluació de criticitat d\'esdeveniments compensables',
            'Anàlisi de concurrència i imputació temporal',
            'Revisió de correspondència, llibres d\'ordres i incidències d\'obra'
          ],
          clientValue: 'Permet a contractistes, promotors i advocats donar suport o respondre a sol·licituds de pròrroga amb claredat tècnica irrefutable.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Anàlisi de Disrupció i Interferències',
          shortDesc: 'Avaluació de la pèrdua de productivitat i disrupció en les activitats constructives, considerant els registres del projecte i les circumstàncies d\'execució.',
          fullDesc: 'La disrupció implica una minva de rendiment, alteracions en la seqüència lògica i solapaments imprevistos sense que necessàriament s\'alteri la data final d\'obra. Analitzem la causa-efecte amb dades d\'obra.',
          problemsAddressed: [
            'Sobreconsum d\'hores de mà d\'obra i maquinària sense avanç proporcional',
            'Modificacions contínues de disseny, lliuraments tardans d\'informació i treballs fora de seqüència',
            'Saturació de zones de treball i manca d\'accessos planificats',
            'Quantificació objectiva de pèrdues de productivitat'
          ],
          analysisIncluded: [
            'Anàlisi de desviacions de seqüència i densitat d\'oficis',
            'Determinació de rendiments base (mètode de la milla mesurada o mostreig)',
            'Auditoria de parts diaris de treball i assignació de recursos',
            'Vincle causal directe entre esdeveniments causants i minva productiva'
          ],
          clientValue: 'Distingeix ineficiències pròpies del contractista d\'interferències atribuïbles a la propietat, fonamentant reclamacions econòmiques amb rigor.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Informes Pericials Independents',
          shortDesc: 'Preparació d\'informes clars, estructurats i tècnicament fonamentats per ajudar els clients en la presa de decisions comercials i en procediments de resolució de disputes.',
          fullDesc: 'Elaborem informes pericials tècnics i independents per a comissions de disputes, mediació, arbitratge i seu judicial civil o contenciosa.',
          problemsAddressed: [
            'Necessitat de criteri pericial objectiu abans d\'entrar en litigis costosos',
            'Aportació de prova pericial per a tribunals o panells arbitrals',
            'Traducció de dades tècniques complexes a conclusions comprensibles per a jutges',
            'Contrainformes i anàlisi crítica de peritatges de la part contrària'
          ],
          analysisIncluded: [
            'Relació estructurada d\'antecedents fàctics i metodologia emprada',
            'Cronogrames visuals, diagrames de Gantt i línies de temps comprensibles',
            'Suport documental directe en registres contemporanis de l\'obra',
            'Conclusions pericials fonamentades, clares i imparcials'
          ],
          clientValue: 'Aporta a tribunals, àrbitres i directius comercials una prova pericial de màxima credibilitat tècnica i claredat expositiva.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Suport en Reclamacions i Controvèrsies',
          shortDesc: 'Anàlisi tècnica i suport en l\'avaluació i comprensió de reclamacions i disputes en el sector de la construcció.',
          fullDesc: 'Assessorament tècnic continu per a parts involucrades en desacords contractuals. Avaluem els punts forts, vulnerabilitats i abast real de les reclamacions.',
          problemsAddressed: [
            'Prevenció de l\'escalada de conflictes i definició d\'estratègia',
            'Revisió i auditoria d\'esborranys de reclamació contractual',
            'Acompanyament tècnic en reunions de negociació amistosa',
            'Suport a lletrats en la formulació d\'interrogatoris i consultes tècniques'
          ],
          analysisIncluded: [
            'Revisió de correspondència tècnica, instruccions d\'obra i modificats',
            'Diagnòstic de llacunes en la documentació del projecte',
            'Avaluació d\'exposició a riscos de termini i cost',
            'Preparació de memoràndums i resums executius tècnics'
          ],
          clientValue: 'Garanteix que les decisions comercials i legals descansin sobre valoracions tècniques contrastades i realistes.'
        }
      ]
    },
    whyUs: {
      badge: 'Els Nostres Principis',
      title: 'Una Perspectiva Independent. Una Comprensió Més Clara.',
      subtitle: 'Quatre principis fonamentals orienten cadascuna de les nostres anàlisis.',
      principles: [
        {
          number: '01',
          title: 'Anàlisi Independent',
          desc: 'Un enfocament objectiu centrat en les evidències disponibles i en les circumstàncies específiques de cada projecte.'
        },
        {
          number: '02',
          title: 'Solucions a Mida',
          desc: 'Cada projecte és diferent. La nostra anàlisi s\'adapta a la informació, la complexitat i els requeriments de cada cas.'
        },
        {
          number: '03',
          title: 'Claredat Tècnica',
          desc: 'Traduïm qüestions tècniques complexes en conclusions clares, senzilles i perfectament comprensibles.'
        },
        {
          number: '04',
          title: 'Enfocament Proporcionat',
          desc: 'Anàlisi focalitzada i solucions pràctiques, amb especial atenció a les necessitats i possibilitats de petites i mitjanes empreses.'
        }
      ]
    },
    approach: {
      badge: 'Metodologia',
      title: 'Comprendre Què Ha Passat Realment',
      subtitle: 'Una metodologia en quatre fases per desentranyar retards complexos en la construcció.',
      intro: 'L\'anàlisi de retards exigeix disciplina, rigor documental i una minuciosa revisió dels registres coetanis. No partim de conclusions preconcebudes; deixem que els fets determinin el resultat.',
      corePrinciplesBadge: 'Principis Essencials',
      corePrinciplesTitle: 'Com Abordem la Investigació de Retards',
      corePrinciplesP1: 'En disputes complexes de construcció, les parts sovint no discrepen sobre si l\'obra es va retardar, sinó sobre quins esdeveniments concrets van condicionar l\'avanç i qui n\'assumeix la responsabilitat contractual.',
      corePrinciplesP2: 'La nostra funció com a perits independents és reconstruir la cronologia real dels fets. En comptes de recolzar-nos en hipòtesis teòriques o apreciacions retrospectives sense fonament, elaborem una matriu fàctica avalada en els documents contemporanis de l\'obra.',
      imageCaption1: 'Auditoria de Registres Contemporanis',
      imageCaption2: 'Verificació del Cronograma',
      exploreButton: 'Explorar el Nostre Mètode en 6 Fases',
      stages: [
        {
          number: '01',
          title: 'Comprendre',
          desc: 'Comencem per comprendre el projecte, les seves circumstàncies i les preguntes clau que necessiten resposta.'
        },
        {
          number: '02',
          title: 'Investigar',
          desc: 'Examinem la documentació disponible, cronogrames, llibres d\'obra i registres rellevants del projecte.'
        },
        {
          number: '03',
          title: 'Analitzar',
          desc: 'Avaluem els esdeveniments esdevinguts, les seves causes determinants i el seu impacte real en l\'avanç de l\'obra.'
        },
        {
          number: '04',
          title: 'Explicar',
          desc: 'Presentem les nostres conclusions de manera clara, estructurada i tècnicament fonamentada.'
        }
      ],
      methodologyBadge: 'Seqüència Analítica en 6 Fases',
      methodologyTitle: 'El Nostre Procés Metodològic Complet',
      methodologySteps: [
        {
          number: '01',
          title: 'Comprensió del Projecte i de l\'Abast',
          desc: 'Clarificació del marc contractual, premisses del programa base, fites contractuals i qüestions tècniques plantejades.'
        },
        {
          number: '02',
          title: 'Revisió Exhaustiva de la Documentació',
          desc: 'Auditoria de cronogrames base i successives revisions, parts d\'obra, informes mensuals, consultes (RFI) i correspondència d\'obra.'
        },
        {
          number: '03',
          title: 'Identificació d\'Esdeveniments de Retard',
          desc: 'Catalogació cronològica de modificacions de projecte, lliuraments tardans, imprevistos geotècnics i condicionants del contractista.'
        },
        {
          number: '04',
          title: 'Avaluació de l\'Impacte Crític',
          desc: 'Determinació del camí crític en el moment dels fets, analitzant si va existir retard efectiu i avaluant la concurrència.'
        },
        {
          number: '05',
          title: 'Elaboració de Conclusions Tècniques',
          desc: 'Síntesi de la lògica de programació i l\'evidència documental en conclusions objectives sobre responsabilitat i drets.'
        },
        {
          number: '06',
          title: 'Redacció d\'Informes Clars i Estructurats',
          desc: 'Redacció de dictàmens amb resums executius, línies temporals visuals i traçabilitat documental directa.'
        }
      ],
      ctaBox: {
        title: 'Analitzem el Cronograma del Seu Projecte',
        desc: 'Permeti\'ns examinar la planificació de la seva obra i recomanar-li la metodologia analítica més adient.',
        button: 'Analitzar el Seu Projecte'
      }
    },
    experience: {
      badge: 'Experiència Sectorial',
      title: 'Criteri Tècnic. Anàlisi Específica de Cada Projecte.',
      subtitle: 'Capacitat tècnica estructurada en les principals tipologies constructives.',
      frameworkIntro: 'Cada projecte presenta condicionants físics i contractuals singulars. El nostre mètode s\'ajusta a l\'entorn documental propi de cada tipologia:',
      sectorsTitle: 'Capacitats d\'Anàlisi per Tipologia d\'Obra',
      typicalDelayLabel: 'Causes Habituals de Retard Analitzades:',
      sectors: [
        {
          title: 'Infraestructures Civils i Transport',
          description: 'Carreteres, ponts, línies ferroviàries i canalitzacions amb dependències de traçat i afecció a tercers.',
          delayTypes: 'Demores en permisos, desviaments de serveis afectats, imprevistos geotècnics, modificacions de disseny.'
        },
        {
          title: 'Edificació Residencial, Terciària i Singular',
          description: 'Edificis en alçada, promocions residencials, hotels i oficines amb alta coordinació d\'instal·lacions i acabats.',
          delayTypes: 'Lliurament tardà de projectes d\'execució, problemes de subministrament, interferències entre oficis, legalitzacions.'
        },
        {
          title: 'Instal·lacions Industrials i Energètiques',
          description: 'Plantes industrials, naus logístiques i projectes d\'energia on el lliurament d\'equips comanda el camí crític.',
          delayTypes: 'Retards en subministraments crítics, coordinació de tecnòlegs, proves i posada en servei.'
        }
      ],
      confidentialityBadge: 'Confidencialitat i Marc de Casos d\'Estudi',
      futureCasesNote: 'Els resums detallats de casos i projectes es publicaran a mesura que ho permetin els acords de confidencialitat amb els clients. Contacti amb nosaltres per conèixer experiència rellevant aplicable a la seva tipologia de projecte.'
    },
    finalCta: {
      badge: 'Parlem del Seu Cas',
      title: 'Cada Projecte Té la Seva Pròpia Història. Entenguem la Seva.',
      text: 'Si s\'enfronta a retards, problemes de productivitat o una disputa tècnica en el seu projecte de construcció, estarem complaguts de conèixer el seu cas i explicar-li com podem ajudar-lo.',
      button: 'Analitzar el Seu Projecte',
      contactBar: 'joan.perello@fidepath.com · +34 615 847 893 · Palma, Illes Balears'
    },
    about: {
      badge: 'Sobre FidePath',
      title: 'Pensament Independent. Comprensió Tècnica.',
      subtitle: 'Anàlisi objectiva de retards en obres i assessorament pericial accessible.',
      p1: 'FidePath Expert Services va néixer amb un propòsit clar: oferir anàlisis tècniques independents, fiables i accessibles en assumptes relacionats amb la construcció.',
      p2: 'Entenem que els projectes constructius comporten circumstàncies complexes, interpretacions contraposades i importants conseqüències comercials.',
      p3: 'La nostra tasca consisteix a examinar la informació disponible, desentranyar els fets i proporcionar una anàlisi clara i raonada per recolzar decisions encertades.',
      p4: 'Creiem fermament que el bon assessorament tècnic ha de ser rigorós, independent i, sobretot, comprensible.',
      p5: 'Un pilar fonamental de la nostra consultora és la proximitat i la proporcionalitat: oferir serveis pericials de primer nivell amb tarifes raonables i accessibles tant per a petites i mitjanes empreses com per a projectes de major escala.',
      foundationsTitle: 'Pilars Metodològics',
      foundations: [
        'Auditoria rigorosa de registres contemporanis',
        'Verificació empírica del camí crític',
        'Dictàmens pericials imparcials per a litigis',
        'Tarifes transparents, raonables i proporcionades'
      ],
      impartialityTitle: 'Imparcialitat Pericial',
      impartialityQuote: 'El nostre compromís ètic i professional respon exclusivament als fets acreditats del cronograma. Emetem conclusions raonades sustentades únicament en les evidències coetànies de l\'obra.',
      founderSectionBadge: 'Perfil del Despatx',
      founderSectionTitle: 'Lideratge i Perfil Professional',
      founderName: 'Joan Perelló',
      founderRole: 'Fundador i Consultor Principal',
      founderBadge: 'Direcció Tècnica',
      founderNotice: 'FidePath Expert Services està dirigida per professionals tècnics amb experiència directa en planificació de projectes, anàlisi forense de retards i suport en controvèrsies. Les dades curriculars i acreditacions s\'ampliaran a mesura que creixi la firma.',
      founderFields: {
        focusLabel: 'Especialitat',
        focusValue: 'Planificació i Anàlisi Forense de Retards',
        deliverablesLabel: 'Dictàmens',
        deliverablesValue: 'Informes Pericials Independents',
        contactLabel: 'Contacte'
      },
      ctaBox: {
        title: 'Desitja Analitzar el Seu Cas de Construcció?',
        desc: 'Posi\'s en contacte amb nosaltres per compartir la documentació de la seva obra i avaluar com podem ajudar-lo.',
        button: 'Analitzar el Seu Projecte'
      }
    },
    contact: {
      badge: 'Consulta i Assessorament',
      title: 'Parlem del Seu Projecte',
      subtitle: 'Cada cas en la construcció és únic. Posi\'s en contacte amb nosaltres per explicar-nos el seu projecte, els reptes a què s\'enfronta i el suport tècnic que requereix.',
      directContactTitle: 'Dades de Contacte Directe',
      emailLabel: 'Correu Electrònic',
      phoneLabel: 'Telèfon',
      locationLabel: 'Ubicació',
      locationValue: 'Palma, Illes Balears, Espanya',
      confidentialityTitle: 'Confidencialitat i Secret Professional:',
      confidentialityText: 'Tota la documentació tècnica, programes d\'obra i converses inicials es gestionen amb estricta confidencialitat professional sota compromisos de no divulgació.',
      procedureTitle: 'Procediment de Consulta Inicial',
      procedureSteps: [
        '1. Revisió preliminar de dates clau i registres de planificació disponibles.',
        '2. Determinació de la metodologia pericial i analítica més adient.',
        '3. Proposta tècnica clara i ajustada, amb abast i honoraris transparents.'
      ],
      form: {
        firstName: 'Nom',
        firstNamePlaceholder: 'p. ex. Joan',
        lastName: 'Cognoms',
        lastNamePlaceholder: 'p. ex. Perelló',
        company: 'Empresa',
        companyPlaceholder: 'p. ex. Constructora Balear S.L.',
        email: 'Correu Electrònic',
        emailPlaceholder: 'nom@empresa.com',
        phone: 'Telèfon',
        phoneOptional: '(opcional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Assumpte',
        subjectPlaceholder: 'p. ex. Anàlisi de retards en projecte hospitalari',
        assistanceType: 'Tipus d\'Assistència Requerida',
        assistanceSelectDefault: '-- Seleccioni el tipus de servei --',
        assistanceOptions: [
          { value: 'Construction Delay Analysis', label: 'Anàlisi de Retards en Construcció' },
          { value: 'Extension of Time Assessment', label: 'Avaluació d\'Extensió de Termini (EOT)' },
          { value: 'Disruption Analysis', label: 'Anàlisi de Disrupció i Interferències' },
          { value: 'Independent Expert Reports', label: 'Informes Pericials Independents' },
          { value: 'Construction Claims & Dispute Support', label: 'Suport en Reclamacions i Controvèrsies' },
          { value: 'Other', label: 'Altre' }
        ],
        projectDescription: 'Descripció del Projecte i Qüestions Clau',
        projectDescriptionPlaceholder: 'Descrigui breument la naturalesa del projecte, dates principals, tipus de contracte i la problemàtica de termini o disputa que desitja analitzar...',
        privacyText: 'Accepto el tractament de les meves dades de contacte d\'acord amb la',
        privacyLink: 'Política de Privadesa',
        submitButton: 'Enviar Consulta',
        submitting: 'Enviant Consulta...',
        successTitle: 'Consulta Rebuda amb Èxit',
        successMessage: 'Gràcies per posar-se en contacte amb FidePath Expert Services. La seva consulta ha estat registrada de manera segura i remesa al nostre equip tècnic.',
        successFollowUp: 'Un membre del nostre equip tècnic revisarà els detalls del seu projecte i es posarà en contacte amb vostè per correu electrònic o telèfon en un termini de 24 a 48 hores laborables.',
        referenceCodeLabel: 'Codi de Referència de la Consulta',
        submitAnother: 'Enviar una Altra Consulta',
        errorGeneral: 'Hi ha hagut un error en processar el formulari. Si us plau, revisi les dades o escrigui\'ns directament a joan.perello@fidepath.com.',
        secureNotice: 'Transmissió segura xifrada SSL · Protecció de confidencialitat',
        validation: {
          firstName: 'El nom és obligatori.',
          lastName: 'Els cognoms són obligatoris.',
          company: 'El nom de l\'empresa o organització és obligatori.',
          email: 'Introdueixi un correu electrònic corporatiu vàlid.',
          subject: 'L\'assumpte de la consulta és obligatori.',
          assistanceType: 'Seleccioni el tipus d\'assistència tècnica requerida.',
          projectDescription: 'Descrigui breument el seu projecte o consulta (mínim 15 caràcters).',
          privacyConsent: 'Ha d\'acceptar la política de privadesa per enviar la consulta.'
        }
      }
    },
    footer: {
      brandDesc: 'Anàlisi tècnica independent de retards, disrupcions i controvèrsies en projectes de construcció. Conclusions objectives per a decisions comercials informades.',
      quickLinks: 'Navegació',
      services: 'Serveis',
      contactInfo: 'Contacte',
      discussButton: 'Analitzar el Seu Projecte',
      privacyPolicy: 'Política de Privadesa',
      cookiePolicy: 'Política de Cookies',
      legalNotice: 'Avís Legal'
    },
    legal: {
      badge: 'Marc Legal i Compliment',
      returnHome: '← Tornar a l\'Inici',
      lastUpdated: 'Darrera actualització: 2026',
      privacy: {
        title: 'Política de Privadesa',
        disclaimer: 'Avís: Aquesta política de privadesa es regeix pel Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD). Les dades fiscals definitives (CIF/NIF) i l\'adreça social inscrita es completaran després de la seva publicació oficial.',
        sections: [
          {
            title: '1. Responsable del Tractament',
            content: [
              'El responsable del tractament de les dades personals recollides a través d\'aquest lloc web és:',
              '• Denominació comercial: FidePath Expert Services',
              '• Contacte responsable: Joan Perelló',
              '• Ubicació: Palma, Illes Balears, Espanya',
              '• Correu electrònic: joan.perello@fidepath.com',
              '• Telèfon: +34 615 847 893'
            ]
          },
          {
            title: '2. Finalitat del Tractament',
            content: [
              'Les dades personals facilitades a través del formulari de contacte (incloent-hi nom, empresa, correu electrònic, telèfon i descripció del projecte) es tracten exclusivament per:',
              '• Respondre a consultes professionals, sol·licituds d\'assessorament pericial i mostres d\'interès.',
              '• Realitzar comprovacions preliminars d\'incompatibilitat tècnica o conflicte d\'interessos i valorar la viabilitat de la intervenció pericial.',
              '• Trametre propostes d\'honoraris i acords de serveis tècnics.'
            ]
          },
          {
            title: '3. Legitimació del Tractament',
            content: [
              'La base jurídica que legitima el tractament de les seves dades és el consentiment exprés atorgat en remetre el formulari, així com l\'aplicació de mesures precontractuals a petició de la persona interessada (Art. 6.1.a i 6.1.b del RGPD).'
            ]
          },
          {
            title: '4. Conservació de les Dades i Confidencialitat',
            content: [
              'Les dades es conservaran durant el temps estrictament necessari per atendre la seva sol·licitud o fins que exerceixi el seu dret de supressió. Tota la documentació aportada per a valoració inicial de retards o obres es custodia sota estricte secret professional.'
            ]
          },
          {
            title: '5. Exercici de Drets',
            content: [
              'Pot exercir els seus drets d\'accés, rectificació, supressió, limitació, oposició i portabilitat en qualsevol moment adreçant-se per escrit a joan.perello@fidepath.com adjuntant còpia del seu document d\'identitat. Així mateix, té dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (AEPD).'
            ]
          }
        ]
      },
      cookies: {
        title: 'Política de Cookies',
        sections: [
          {
            title: '1. Què són les Cookies?',
            content: [
              'Una cookie és un petit fitxer de text que un lloc web emmagatzema al seu navegador en visitar-lo. Permet recordar les seves preferències (com l\'idioma seleccionat) i garantir una navegació fluida i segura.'
            ]
          },
          {
            title: '2. Cookies Utilitzades per FidePath Expert Services',
            content: [
              'FidePath aplica un estricte principi de privadesa des del disseny:',
              '• Cookies Estrictament Tècniques i Essencials: Són imprescindibles per al funcionament correcte del web (per exemple, per recordar la seva preferència lingüística: català, castellà o anglès). No rastregen la seva navegació per llocs de tercers.',
              '• Sense Rastrejadors Publicitaris de Tercers: Aquest lloc web no instal·la cookies publicitàries de tercers, ni mecanismes de perfilat comercial ni píxels invasius.'
            ]
          },
          {
            title: '3. Configuració i Desactivació',
            content: [
              'Pot configurar o bloquejar les cookies en qualsevol moment a través dels paràmetres del seu navegador (Chrome, Safari, Firefox, Edge). La desactivació de cookies tècniques essencials pot impedir la conservació del seu idioma de preferència.'
            ]
          }
        ]
      },
      legalNotice: {
        title: 'Avís Legal',
        disclaimer: 'Avís Legal: En compliment de l\'article 10 de la Llei 34/2002 de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE).',
        sections: [
          {
            title: '1. Informació Identificativa',
            content: [
              'En compliment de les obligacions legals aplicables, es detallen les següents dades identificatives:',
              '• Denominació comercial: FidePath Expert Services',
              '• Consultor principal: Joan Perelló',
              '• Ubicació professional: Palma, Illes Balears, Espanya',
              '• Correu electrònic de contacte: joan.perello@fidepath.com',
              '• Telèfon: +34 615 847 893',
              '• Lloc web oficial: https://fidepath.com'
            ]
          },
          {
            title: '2. Propietat Intel·lectual',
            content: [
              'Tots els continguts d\'aquest lloc web, incloent-hi textos, fotografies arquitectòniques, diagrames metodològics, estructura i disseny gràfic, són propietat intel·lectual de FidePath Expert Services o s\'utilitzen sota llicència. En queda prohibida la reproducció total o parcial sense autorització prèvia i per escrit.'
            ]
          },
          {
            title: '3. Exempció de Responsabilitat',
            content: [
              'La informació exposada en aquest lloc web té caràcter divulgatiu i orientatiu sobre serveis pericials i d\'anàlisi de retards en obres. No constitueix assessorament jurídic formal ni dictamen pericial vinculant per a un litigi concret fins a la formalització del corresponent encàrrec professional.'
            ]
          },
          {
            title: '4. Legislació Aplicable i Jurisdicció',
            content: [
              'Aquestes condicions es regeixen per la legislació espanyola. Qualsevol discrepància relativa a aquest lloc web se sotmetrà a la jurisdicció dels jutjats i tribunals de Palma de Mallorca, Espanya.'
            ]
          }
        ]
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Anàlisi Independent de Retards en Construcció',
        about: 'Qui Som — FidePath Expert Services',
        services: 'Serveis d\'Anàlisi de Retards — FidePath Expert Services',
        approach: 'El Nostre Mètode i Experiència — FidePath Expert Services',
        contact: 'Analitzar el Seu Projecte — FidePath Expert Services',
        privacy: 'Política de Privadesa — FidePath Expert Services',
        cookies: 'Política de Cookies — FidePath Expert Services',
        legal: 'Avís Legal — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Anàlisi tècnica clara, independent i fiable de retards en obres, reclamacions d\'extensió de termini (EOT), disrupció i dictàmens pericials. Palma i abast internacional.',
        about: 'Conegui FidePath Expert Services: criteri tècnic independent, rigor documental i assessorament pericial proporcionat per al sector de la construcció.',
        services: 'Serveis pericials especialitzats: Anàlisi de Retards, Extensió de Termini (EOT), Disrupció, Dictàmens Pericials i Suport en Controvèrsies.',
        approach: 'La nostra metodologia forense en 6 fases per a la investigació de retards en obra, anàlisi de camí crític i conclusions fonamentades.',
        contact: 'Contacti amb FidePath Expert Services a Palma per tractar els retards de la seva obra, reclamacions contractuals o informes pericials.',
        privacy: 'Política de Privadesa de FidePath Expert Services d\'acord amb el RGPD de la Unió Europea i la LOPDGDD espanyola.',
        cookies: 'Política de Cookies de FidePath Expert Services. Utilitzem únicament cookies tècniques estrictament necessàries.',
        legal: 'Avís Legal de FidePath Expert Services en compliment de la Llei 34/2002 (LSSI-CE).'
      }
    }
  }
};
