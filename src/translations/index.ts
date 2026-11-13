import { Language } from '../types';
import { YEARS_EXPERIENCE, FOUNDED, formatFounded } from '../config';

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
    linkedinLabel: string;
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
    audienceNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustItems: string[];
    imageAlt: string;
    imageCaption: string;
    imageLocation: string;
  };
  intro: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    positioningNote: string;
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
    typicalClientsTitle: string;
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
      typicalClients: string[];
      clientValue: string;
    }[];
  };
  capabilities: {
    badge: string;
    title: string;
    subtitle: string;
    methodologySelectionNote: string;
    softwareLabel: string;
    softwareTools: string[];
    blocks: {
      number: string;
      title: string;
      summary: string;
      items: string[];
    }[];
  };
  standards: {
    badge: string;
    title: string;
    subtitle: string;
    referenceNote: string;
    contractsTitle: string;
    contracts: { name: string; detail: string }[];
    guidanceTitle: string;
    guidance: { name: string; detail: string }[];
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
    imageAlt: string;
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
    sectorBreadthTitle: string;
    sectorTags: string[];
    scaleTitle: string;
    scaleDisclaimer: string;
    scaleHighlights: {
      figure: string;
      label: string;
      context: string;
    }[];
    imageAlt: string;
    imageCaption: string;
    imageLocation: string;
    sectors: {
      title: string;
      description: string;
      delayTypes: string;
    }[];
    confidentialityBadge: string;
    futureCasesNote: string;
    contactButton: string;
  };
  finalCta: {
    badge: string;
    title: string;
    text: string;
    button: string;
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
    structuralImageAlt: string;
    impartialityTitle: string;
    impartialityQuote: string;
    founderSectionBadge: string;
    founderSectionTitle: string;
    founderName: string;
    founderRole: string;
    founderBadge: string;
    founderBio1: string;
    founderBio2: string;
    consiliumNoteTitle: string;
    consiliumNoteText: string;
    founderFields: {
      focusLabel: string;
      focusValue: string;
      experienceLabel: string;
      experienceValue: string;
      regionsLabel: string;
      regionsValue: string;
      contactLabel: string;
    };
    expertExperience: {
      badge: string;
      title: string;
      subtitle: string;
      highlights: {
        title: string;
        detail: string;
      }[];
    };
    languages: {
      badge: string;
      title: string;
      subtitle: string;
      items: {
        language: string;
        level: string;
      }[];
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
    linkedinLabel: string;
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
    underConstructionTitle: string;
    underConstructionDesc: string;
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
      tagline: 'Independent · Objective · Expert',
      location: 'Palma, Balearic Islands',
      allRightsReserved: 'All rights reserved.',
      categoryPrefix: 'Category',
      sectorPrefix: 'Sector',
      groupPrefix: 'Group',
      servicePrefix: 'Service',
      stepPrefix: 'Step',
      linkedinLabel: 'LinkedIn'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      approach: 'Our Method',
      contact: 'Contact',
      ctaButton: 'Discuss Your Project',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu'
    },
    hero: {
      badge: 'Independent · Objective · Expert',
      title: 'Forensic Planning, Construction Delay Analysis & Expert Services',
      subtitle: 'Independent technical analysis of construction delays, Extension of Time (EOT) claims, disruption and project disputes. Combining civil engineering, live site execution and forensic scheduling for UK, European and Middle Eastern projects.',
      audienceNote: 'Supporting law firms, employers, developers, main contractors and subcontractors in adjudication, arbitration, Dispute Adjudication Boards (DAB) and litigation.',
      ctaPrimary: 'Request an Initial Consultation',
      ctaSecondary: 'Explore Our Services',
      trustItems: [
        'Construction Delay Analysis',
        'Forensic Planning',
        'Extension of Time (EOT)',
        'Independent Expert Reports'
      ],
      imageAlt: 'Cable-stayed bridge over a river',
      imageCaption: 'Construction Project Analysis',
      imageLocation: 'Palma · UK · Europe · Middle East'
    },
    intro: {
      badge: 'Specialist Positioning',
      title: 'Specialist Delay & Forensic Planning Consultancy',
      paragraph1: 'FidePath Expert Services is an independent technical consultancy focused exclusively on construction delay analysis, forensic planning, Extension of Time (EOT) assessments, disruption analysis and dispute support.',
      paragraph2: 'We are not a general civil engineering practice or a construction contractor. Our work combines civil engineering fundamentals, practical site execution knowledge and specialist programme forensics to examine what delayed a project, why it occurred and how contractual risk applies.',
      paragraph3: `Led by civil engineer Joan A. Perelló, who has more than ${YEARS_EXPERIENCE} years of experience in civil engineering and construction, including forensic planning and delay analysis on projects in the UK, Europe and the Middle East, FidePath delivers clear, evidence-based technical conclusions for commercial resolution and formal dispute proceedings.`,
      positioningNote: `Founded in ${FOUNDED} in Palma, working internationally in English, Spanish and Catalan.`,
      attributes: {
        independent: {
          title: 'Independent',
          desc: 'An objective, impartial perspective grounded strictly in contemporaneous project records and empirical schedule facts.'
        },
        reliable: {
          title: 'Objective',
          desc: 'Methodologically sound and well-documented technical assessments, prepared to be explained and substantiated clearly.'
        },
        expert: {
          title: 'Expert',
          desc: `More than ${YEARS_EXPERIENCE} years in civil engineering and construction, including forensic planning and delay analysis on disputes in the UK, Europe and the Middle East.`
        }
      }
    },
    services: {
      badge: 'Core Services',
      sectionTitle: 'Specialist Delay & Dispute Services',
      sectionSubtitle: 'Independent technical analysis aligned with international construction claims practice and contemporaneous project evidence.',
      viewAll: 'Explore All Services',
      detailsButton: 'Details',
      cardTagline: 'Technical delay & claims analysis',
      problemsAddressedTitle: 'Problems Addressed',
      analysisIncludedTitle: 'Scope of Technical Analysis',
      typicalClientsTitle: 'Who May Need This Service',
      valueBoxTitle: 'Analytical Value',
      valueBoxHeading: 'How Independent Analysis Supports Your Position',
      recordsTitle: 'Typical Contemporaneous Records Reviewed:',
      typicalRecords: [
        'Tender, master and revised programmes (.xer, .mpp, Asta Powerproject)',
        'As-built programmes, progress updates and resource allocations',
        'Site diaries, inspection logs, monthly progress reports and minutes',
        'Contractual notices, variations, RFIs and contract administrator determinations'
      ],
      discussButtonPrefix: 'Discuss',
      directInquiriesTitle: 'Direct Consultation with Joan A. Perelló:',
      targetAudienceBadge: 'Who We Assist',
      targetAudienceTitle: 'Clients & Dispute Stakeholders',
      targetAudienceDesc: 'We provide clear, proportionate technical support to parties navigating time, disruption and contractual disputes:',
      targetAudiences: [
        'Law Firms & Construction Counsel',
        'Employers, Project Owners & Real Estate Developers',
        'Main Contractors & Construction Companies',
        'Subcontractors & Specialist Trade Packages',
        'Parties in Adjudication, Arbitration, Dispute Adjudication Boards (DAB) & Litigation'
      ],
      targetAudienceFooter: 'Independent Technical Analysis · Defensible Conclusions',
      ctaBox: {
        title: 'Discuss Your Construction Delay or Dispute Matter',
        desc: 'Contact Joan A. Perelló for a confidential initial consultation on your project records, contractual programme and analytical scope.',
        button: 'Request an Initial Consultation'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Construction Delay Analysis',
          shortDesc: 'Forensic retrospective and prospective schedule analysis to establish critical path delays, causation and responsibility using contemporaneous project records.',
          fullDesc: 'We investigate tender, baseline, updated and as-built programmes to reconstruct the actual sequence of works, isolate critical delay events and quantify delay impact using recognised forensic planning methodologies tailored to the available project evidence.',
          problemsAddressed: [
            'Unclear or contested causes of critical completion delay',
            'Divergent narratives over which events actually drove the critical path',
            'Inconsistent, incomplete or unverified contractor programme updates',
            'Need for an objective chronology backed by contemporaneous site records'
          ],
          analysisIncluded: [
            'As-Planned versus As-Built Windows Analysis and Time Slice Windows Analysis',
            'Time Impact Analysis (TIA), Retrospective Longest Path Analysis, Impacted As-Planned Analysis and Collapsed As-Built Analysis',
            'Programme logic validation in Oracle Primavera P6, Asta Powerproject and Microsoft Project',
            'Reconstruction of as-built sequences from site diaries, logs and progress reports'
          ],
          typicalClients: [
            'Main contractors, subcontractors and employers facing critical completion delays',
            'Law firms preparing early case assessments or formal pleadings',
            'Parties needing a realistic technical view prior to settlement negotiations'
          ],
          clientValue: 'Establishes a transparent, evidence-led link between delay events and completion dates so parties can assess liability with technical rigour.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Extension of Time (EOT) Assessment',
          shortDesc: 'Technical evaluation of Extension of Time (EOT) claims, delay entitlement and contract administrator EOT determinations under standard or bespoke contracts.',
          fullDesc: 'We assess whether notified delay events caused critical impact to contractual completion dates under FIDIC, NEC3/NEC4, JCT or bespoke contracts, including independent audits of EOT submissions and reviews of determinations issued by contract administrators.',
          problemsAddressed: [
            'Preparation or independent review of contractual EOT claims',
            'Disputes over concurrent, sequential and pacing delays',
            'Challenges to EOT determinations issued by contract administrators or engineers',
            'Assessment of notice compliance, programme baselines and mitigation measures'
          ],
          analysisIncluded: [
            'Criticality and causation testing of claimed compensation or relevant events',
            'Concurrency and entitlement assessment against contractual provisions',
            'Independent audit of contract administrator EOT determinations',
            'Review of contractual programmes, early warnings, instructions and correspondence'
          ],
          typicalClients: [
            'Employers and contract administrators seeking an objective audit of contractor EOT claims',
            'Main contractors and specialist subcontractors substantiating time entitlement',
            'Legal teams advising on liquidated damages exposure or time-at-large arguments'
          ],
          clientValue: 'Clarifies actual time entitlement and contractual exposure, replacing assertion with verified schedule chronology and record traceability.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Construction Disruption Analysis',
          shortDesc: 'Technical assessment of productivity loss, out-of-sequence working and site interference affecting construction efficiency and resource performance.',
          fullDesc: 'Disruption often occurs without necessarily extending the final completion date. We examine site records, labour and plant allocations, trade density and design release patterns to distinguish third-party interference from contractor inefficiency.',
          problemsAddressed: [
            'Significant labour and plant overruns without commensurate physical progress',
            'Fragmented work sequences caused by late design, RFIs or restricted site access',
            'Trade stacking and interface clashes across multi-discipline works',
            'Difficulty isolating causal disruption events from tender under-allowance'
          ],
          analysisIncluded: [
            'Productivity benchmarking and measured-mile or sampling comparisons where records allow',
            'Out-of-sequence work tracking and trade interference mapping',
            'Auditing of daily allocation sheets, progress curves and site diaries',
            'Cause-and-effect substantiation linking disruption triggers to lost output'
          ],
          typicalClients: [
            'Main contractors and MEP or civil subcontractors experiencing severe productivity losses',
            'Employers and quantity surveyors evaluating submitted disruption claims',
            'Counsel requiring structured factual evidence on site inefficiency causes'
          ],
          clientValue: 'Separates compensable disruption triggers from contractor-borne productivity variance using verifiable contemporaneous project data.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Independent Expert Reports',
          shortDesc: 'Preparation of clear, independent technical expert reports and rebuttals for adjudication, arbitration, Dispute Adjudication Boards (DAB) and litigation.',
          fullDesc: 'Drawing on experience as named Delay Analysis Expert in two adjudication proceedings and extensive work alongside appointed experts in arbitration, Dispute Adjudication Boards (DAB) and court proceedings, we prepare structured, impartial reports designed for tribunals and decision-makers.',
          problemsAddressed: [
            'Need for an independent expert report in adjudication, arbitration or court proceedings',
            'Technical rebuttal and critique of opposing party delay expert reports',
            'Translating complex Oracle Primavera P6 or Asta Powerproject schedules into accessible visual evidence',
            'Early-stage expert testing before committing to formal dispute escalation'
          ],
          analysisIncluded: [
            'Independent expert delay reports structured around clear instructions and factual evidence',
            'Critical review and technical rebuttal of opposing expert methodologies and assumptions',
            'Clean chronology charts, critical path diagrams and document-indexed appendices',
            'Factual investigation and technical assistance through pleadings and expert meetings'
          ],
          typicalClients: [
            'Construction law firms instructing delay analysts or independent experts',
            'Parties engaged in statutory adjudication, international arbitration, DAB or litigation',
            'Senior commercial directors requiring an impartial opinion on dispute merits'
          ],
          clientValue: 'Presents complex forensic scheduling findings in clear, structured prose and visualisations that tribunals, judges and lawyers can readily follow.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Construction Claims & Dispute Support',
          shortDesc: 'Forensic planning, programme auditing and factual technical support for legal teams and construction stakeholders across all dispute stages.',
          fullDesc: 'We provide targeted technical advisory for ongoing or escalating construction disputes, assisting legal counsel and commercial teams with factual investigations, contractual programme reviews, strategy testing and technical queries.',
          problemsAddressed: [
            'Escalating contractual disputes requiring rapid schedule diagnostics',
            'Documentation gaps and fragmented project records across multi-year builds',
            'Reviewing contractual programmes and opposing claim submissions for technical weaknesses',
            'Preparing technical questions for witness statements, pleadings or negotiations'
          ],
          analysisIncluded: [
            'Factual investigation across project correspondence, instructions and progress records',
            'Forensic schedule diagnostics and programme compliance audits',
            'Technical support for mediation, negotiation, DAB, adjudication and arbitration',
            'Preparation of issue briefs, technical chronologies and claim audit memoranda'
          ],
          typicalClients: [
            'Law firms seeking responsive forensic planning support for active disputes',
            'Employers, developers and contractors managing live claims before formal proceedings',
            'Subcontractors requiring proportionate expert analysis in commercial settlements'
          ],
          clientValue: 'Grounds legal strategy and commercial negotiation in verifiable programme facts rather than assumptions.'
        }
      ]
    },
    capabilities: {
      badge: 'Technical Competencies',
      title: 'Forensic Delay, Programming & Dispute Capabilities',
      subtitle: 'Focused expertise combining civil engineering, site construction reality and recognised forensic scheduling techniques.',
      methodologySelectionNote: 'Forensic delay methodologies are never forced to fit a template: the appropriate technique is selected according to the available contemporaneous records, project circumstances and specific questions in dispute.',
      softwareLabel: 'Scheduling & Planning Software',
      softwareTools: ['Oracle Primavera P6', 'Asta Powerproject', 'Microsoft Project'],
      blocks: [
        {
          number: '01',
          title: 'Delay Analysis & Forensic Planning',
          summary: 'Application of recognised retrospective and prospective delay methodologies based on record quality and contractual context.',
          items: [
            'As-Planned versus As-Built Windows Analysis',
            'Time Slice Windows Analysis',
            'Time Impact Analysis (TIA)',
            'Retrospective Longest Path Analysis',
            'Impacted As-Planned Analysis',
            'Collapsed As-Built Analysis'
          ]
        },
        {
          number: '02',
          title: 'Construction Programming',
          summary: 'Full lifecycle programme development, tracking and forensic schedule verification across complex civil and building works.',
          items: [
            'Tender programmes & master programmes',
            'Programme updates, revisions & baseline control',
            'As-built programme reconstruction',
            'Programme monitoring & progress reporting',
            'Construction planning & forensic scheduling',
            'Oracle Primavera P6, Asta Powerproject & Microsoft Project'
          ]
        },
        {
          number: '03',
          title: 'Extension of Time & Disruption',
          summary: 'Detailed evaluation of time entitlement, productivity loss and contractual programme compliance.',
          items: [
            'Extension of Time (EOT) assessments',
            'Delay entitlement & concurrency evaluation',
            'Construction disruption & productivity loss analysis',
            'Technical assessment of causes of delay',
            'Review of contractual programmes & submissions',
            'Construction claims preparation & audit'
          ]
        },
        {
          number: '04',
          title: 'Expert Reports & Dispute Support',
          summary: 'Rigorous factual investigation and clear reporting tailored for formal and informal dispute resolution.',
          items: [
            'Independent expert reports & rebuttals',
            'Adjudication & Dispute Adjudication Boards (DAB)',
            'Arbitration & litigation technical support',
            'Factual investigation & record verification',
            'Review of contract administrator EOT determinations',
            'Direct technical support to legal teams & construction professionals'
          ]
        }
      ]
    },
    standards: {
      badge: 'Standards & Contractual Frameworks',
      title: 'Recognised Contracts & Industry Guidance',
      subtitle: 'Technical analyses structured around the contractual mechanisms and forensic guidelines used in international construction disputes.',
      referenceNote: 'These contractual forms and industry publications serve as technical reference frameworks to ensure rigorous, transparent and well-founded analyses; they are applied as analytical guidance rather than presented as personal certifications.',
      contractsTitle: 'Contractual Frameworks',
      contracts: [
        {
          name: 'FIDIC Contracts',
          detail: 'International civil, plant and EPC/turnkey standard forms'
        },
        {
          name: 'NEC3/NEC4 Contracts',
          detail: 'Programme management, early warnings and compensation event frameworks'
        },
        {
          name: 'JCT Contracts',
          detail: 'UK building contracts, relevant events and Extension of Time (EOT) provisions'
        },
        {
          name: 'Bespoke Construction Contracts',
          detail: 'Tailored infrastructure, energy, data centre and commercial agreements'
        }
      ],
      guidanceTitle: 'Industry Standards & Guidance',
      guidance: [
        {
          name: 'SCL Delay and Disruption Protocol',
          detail: 'Core reference for delay methodologies, concurrency, mitigation and disruption principles'
        },
        {
          name: 'AACE International Recommended Practices RP 29R-03',
          detail: 'Forensic schedule analysis classification and technical verification reference'
        }
      ]
    },
    whyUs: {
      badge: 'Approach',
      title: 'Our Approach',
      subtitle: 'Practical engineering understanding combined with disciplined forensic planning.',
      principles: [
        {
          number: '01',
          title: 'Independent Approach',
          desc: 'Objective, impartial technical analysis grounded strictly in the available contemporaneous documentation and recognised forensic methodologies.'
        },
        {
          number: '02',
          title: 'Engineering & Site Experience',
          desc: 'Civil engineering training combined with hands-on site execution and construction planning experience allows us to understand delay issues technically and practically.'
        },
        {
          number: '03',
          title: 'Methodology Tailored to Each Case',
          desc: 'Rather than forcing every dispute into one formula, we select the analytical method suited to the specific project records and disputed issues.'
        },
        {
          number: '04',
          title: 'Clear & Defensible Reporting',
          desc: 'Complex scheduling data and technical chronologies translated into structured, transparent reports easily understood by lawyers, tribunals and executives.'
        },
        {
          number: '05',
          title: 'International Experience',
          desc: `More than ${YEARS_EXPERIENCE} years in civil engineering and construction across diverse project types, with delay analysis experience under different contractual frameworks in the UK, Europe and the Middle East.`
        }
      ]
    },
    approach: {
      badge: 'Methodology',
      title: 'Understanding What Really Happened',
      subtitle: 'A structured forensic workflow designed to transform fragmented records into clear, evidence-backed schedule conclusions.',
      intro: 'Forensic delay analysis demands discipline, engineering judgement and meticulous verification of contemporaneous records. We never work backwards from a desired answer; we let the verified chronology establish the technical findings.',
      corePrinciplesBadge: 'Core Principles',
      corePrinciplesTitle: 'How We Approach Delay Investigation',
      corePrinciplesP1: 'In construction disputes, disagreement rarely centres on whether completion slipped—it centres on which events genuinely controlled critical progress, what was concurrent, and how contractual risk applies.',
      corePrinciplesP2: 'By testing programme logic against site diaries, progress reports, design releases and resource records, we reconstruct a factual matrix that withstands scrutiny in negotiation or formal proceedings.',
      imageAlt: 'Engineering floor plan, scale ruler and printed construction master schedule on a desk',
      imageCaption1: 'Contemporaneous Record Auditing',
      imageCaption2: 'Programme Verification',
      exploreButton: 'Explore Our Method in 4 Steps',
      stages: [
        {
          number: '01',
          title: 'Understand',
          desc: 'We review the contract provisions, baseline assumptions, project scope and specific questions requiring technical determination.'
        },
        {
          number: '02',
          title: 'Investigate',
          desc: 'We audit tender, master, updated and as-built programmes alongside site diaries, progress reports, RFIs and correspondence.'
        },
        {
          number: '03',
          title: 'Analyse',
          desc: 'We select and apply the appropriate forensic delay methodology to test criticality, causation, concurrency and disruption.'
        },
        {
          number: '04',
          title: 'Explain',
          desc: 'We present reasoned, well-indexed conclusions and visual chronologies designed to be clearly understood and defended.'
        }
      ],
      methodologyBadge: '6-Stage Analytical Sequence',
      methodologyTitle: 'Our Complete Methodological Process',
      methodologySteps: [
        {
          number: '01',
          title: 'Understanding the Project & Scope',
          desc: 'Clarifying contractual EOT and programme rules (FIDIC, NEC3/NEC4, JCT or bespoke), baseline assumptions and the technical questions in dispute.'
        },
        {
          number: '02',
          title: 'Auditing Programmes & Project Records',
          desc: 'Reviewing native Oracle Primavera P6, Asta Powerproject or Microsoft Project schedules, progress updates, site diaries, allocation logs, RFIs and correspondence.'
        },
        {
          number: '03',
          title: 'Selecting the Appropriate Methodology',
          desc: 'Choosing the suitable prospective or retrospective technique (Windows, Time Slice, TIA or Longest Path) in line with SCL Delay and Disruption Protocol and AACE International Recommended Practices RP 29R-03.'
        },
        {
          number: '04',
          title: 'Identifying & Mapping Delay Events',
          desc: 'Chronologically establishing variations, late design releases, unforeseen ground conditions, access constraints and contractor-driven issues.'
        },
        {
          number: '05',
          title: 'Testing Critical Path & Entitlement',
          desc: 'Determining the contemporaneous critical path, quantifying critical delay periods and assessing concurrent or pacing delays.'
        },
        {
          number: '06',
          title: 'Preparing Clear & Defensible Reports',
          desc: 'Delivering structured expert or advisory reports with clear executive summaries, Gantt comparisons and explicit record citations.'
        }
      ],
      ctaBox: {
        title: 'Discuss Your Project Programme',
        desc: 'Speak with Joan A. Perelló to review your available project records and determine the most suitable analytical approach.',
        button: 'Discuss Your Project'
      }
    },
    experience: {
      badge: 'Projects & Sectors',
      title: 'Cross-Sector Project Experience',
      subtitle: 'Planning, civil engineering and forensic delay experience across complex building, infrastructure and mission-critical developments.',
      frameworkIntro: 'Every project typology carries distinct technical interfaces, procurement sequences and documentary environments:',
      sectorsTitle: 'Core Project Typologies',
      typicalDelayLabel: 'Typical causes of delay in this type of project:',
      sectorBreadthTitle: 'Sectors of Experience',
      sectorTags: [
        'Data Centres',
        'Hospitals & Healthcare',
        'Civil Infrastructure',
        'Railway Infrastructure',
        'Aviation Projects',
        'Water Infrastructure & Pipelines',
        'Industrial Projects',
        'Mixed-Use Developments',
        'Residential Developments',
        'Extra Care Facilities',
        'Underground Car Parks'
      ],
      scaleTitle: 'Representative Project Scale & Complexity',
      scaleDisclaimer: 'Selected examples reflect the scale and complexity of projects on which Joan A. Perelló has undertaken planning, engineering or delay analysis roles, without disclosing confidential project details.',
      scaleHighlights: [
        {
          figure: '120 MW / ~€1.2bn',
          label: 'Hyperscale Data Centre Campus',
          context: 'Planning and programme experience on large-scale, power- and MEP-intensive mission-critical campus construction.'
        },
        {
          figure: '~£300m',
          label: 'New Hospital Development (England)',
          context: 'Experience on major UK acute healthcare construction involving complex clinical services and multi-tier interfaces.'
        },
        {
          figure: `${YEARS_EXPERIENCE}+ Years`,
          label: 'Civil Engineering & Construction',
          context: 'Engineering, site execution, planning and forensic delay analysis experience across public and private works in the UK, Europe and the Middle East.'
        }
      ],
      imageAlt: 'Aerial monochrome view of a hyperscale data centre facility and industrial mechanical plant',
      imageCaption: 'Mission-Critical & Industrial Infrastructure',
      imageLocation: 'Scale & Technical Complexity',
      sectors: [
        {
          title: 'Civil Infrastructure, Rail, Aviation & Water',
          description: 'Linear transport corridors, railway and aviation infrastructure, water networks, pipelines and underground civil structures with complex third-party interfaces.',
          delayTypes: 'Permit delays, utility diversions, unforeseen ground conditions, design changes.'
        },
        {
          title: 'Hospitals, Residential, Extra Care & Mixed-Use',
          description: 'Acute hospitals, high-rise residential, extra care facilities and mixed-use buildings requiring intensive building-services coordination and staged handovers.',
          delayTypes: 'Late design packages, procurement bottlenecks, interface clashes between trades, commissioning and licensing issues.'
        },
        {
          title: 'Data Centres & Industrial Facilities',
          description: 'Hyperscale data centres and industrial facilities where long-lead plant, HV power and commissioning sequences drive the critical path.',
          delayTypes: 'Late delivery of long-lead equipment, coordination with technology suppliers, testing and commissioning setbacks.'
        }
      ],
      confidentialityBadge: "Let's discuss your project",
      futureCasesNote: 'Contact us to discuss your project typology, available schedules and specific delay or disruption questions.',
      contactButton: 'Contact FidePath'
    },
    finalCta: {
      badge: 'Initial Consultation',
      title: 'Need Clear, Independent Technical Analysis on a Delayed Project?',
      text: 'Whether you are a law firm instructing on a formal dispute, an employer reviewing an EOT claim, or a contractor assessing delay and disruption, get in touch directly with Joan A. Perelló.',
      button: 'Discuss Your Project'
    },
    about: {
      badge: 'About FidePath & Founder',
      title: 'Independent Perspective. Engineering & Forensic Depth.',
      subtitle: 'FidePath Expert Services was founded by civil engineer Joan A. Perelló to provide rigorous, clear and independent delay analysis and expert support.',
      p1: 'FidePath Expert Services is an independent specialist consultancy dedicated to construction delay analysis, forensic planning, Extension of Time (EOT) assessments, disruption analysis and dispute support.',
      p2: 'Unlike generalist engineering practices or contractors, our practice focuses solely on helping law firms, employers, developers, main contractors and subcontractors understand the technical causes and contractual consequences of delay and disruption.',
      p3: 'Our work bridges the gap between site construction reality and forensic programme analysis—combining civil engineering fundamentals, hands-on planning and disciplined investigation of contemporaneous project records.',
      p4: 'We believe technical expert advice must be independent, objective and presented with sufficient clarity for lawyers, arbitrators, adjudicators and commercial directors to rely upon without ambiguity.',
      p5: 'Operating from Palma with an international outlook, FidePath supports matters across Spain, the United Kingdom, wider Europe and the Middle East.',
      foundationsTitle: 'Practice Pillars',
      foundations: [
        'Strict independence & factual impartiality',
        'Civil engineering & live site understanding',
        'Forensic schedule & record traceability',
        'Clear reporting for tribunals & legal counsel'
      ],
      structuralImageAlt: 'Concrete and steel-braced commercial building facade',
      impartialityTitle: 'Technical Impartiality',
      impartialityQuote: 'Our duty is to the facts established by contemporaneous project records. We deliver objective technical assessments prepared to stand up to scrutiny.',
      founderSectionBadge: 'Founder & Principal',
      founderSectionTitle: 'Joan A. Perelló — Civil Engineer & Delay Analyst',
      founderName: 'Joan A. Perelló',
      founderRole: 'Founder, Civil Engineer & Delay Analyst',
      founderBadge: `Founded ${FOUNDED}`,
      founderBio1: `Joan A. Perelló is a civil engineer with more than ${YEARS_EXPERIENCE} years of experience in civil engineering and construction, including forensic planning and delay analysis on projects in the United Kingdom, Europe and the Middle East. His career spans feasibility studies, detailed design, project planning, site execution and forensic dispute analysis, providing a grounded understanding of how programmes perform in real construction environments.`,
      founderBio2: `Specialising in delay analysis and forensic planning, he founded FidePath Expert Services in ${FOUNDED} to provide focused, independent technical advisory and expert delay services.`,
      consiliumNoteTitle: 'External Collaboration — Consilium',
      consiliumNoteText: 'Since February 2026, Joan also acts as an Associate Director with Consilium on disputes across the United Kingdom and Europe. This is an external professional collaboration; FidePath Expert Services operates strictly as an independent consultancy and does not belong to the same corporate group.',
      founderFields: {
        focusLabel: 'Specialisation',
        focusValue: 'Delay Analysis & Forensic Planning',
        experienceLabel: 'Experience',
        experienceValue: `${YEARS_EXPERIENCE}+ Years Civil Engineering & Construction`,
        regionsLabel: 'Geographic Scope',
        regionsValue: 'UK, Europe & Middle East',
        contactLabel: 'Direct Contact'
      },
      expertExperience: {
        badge: 'Dispute & Adjudication Track Record',
        title: 'Delay Expert & Formal Dispute Experience',
        subtitle: 'Practical experience in formal dispute forums, factual investigation and critical review of opposing technical arguments.',
        highlights: [
          {
            title: 'Named Expert in Two Adjudications',
            detail: 'Acted as named Delay Analysis Expert in two adjudication proceedings, preparing independent delay assessments and conclusions.'
          },
          {
            title: 'Multi-Forum Dispute Collaboration',
            detail: 'Prepared expert reports under senior expert review and collaborated closely with appointed experts in adjudication, arbitration, Dispute Adjudication Boards (DAB) and court proceedings.'
          },
          {
            title: 'Forensic Investigation & Technical Drafting',
            detail: 'Conducted detailed factual investigations, forensic schedule reconstructions and technical report drafting grounded in contemporaneous site evidence.'
          },
          {
            title: 'Rebuttals & EOT Determination Audits',
            detail: 'Responded to opposing party expert delay reports and reviewed Extension of Time (EOT) determinations issued by contract administrators.'
          }
        ]
      },
      languages: {
        badge: 'Languages & International Collaboration',
        title: 'Working Across Borders & Contract Jurisdictions',
        subtitle: 'Direct communication with international clients, site teams, contract administrators and legal counsel without language barriers.',
        items: [
          { language: 'English', level: 'Fluent' },
          { language: 'Spanish', level: 'Fluent' },
          { language: 'Catalan', level: 'Fluent' },
          { language: 'Portuguese', level: 'Conversational' }
        ]
      },
      ctaBox: {
        title: 'Discuss Your Construction Dispute or Delay Matter',
        desc: 'Contact Joan A. Perelló directly to arrange an initial consultation regarding your project documentation and programme questions.',
        button: 'Contact FidePath'
      }
    },
    contact: {
      badge: 'Initial Consultation',
      title: 'Discuss Your Project',
      subtitle: 'Please share a brief overview of your project, contractual context and the delay or disruption questions you need addressed.',
      directContactTitle: 'Direct Contact Details',
      emailLabel: 'Email',
      phoneLabel: 'Telephone',
      locationLabel: 'Location',
      locationValue: 'Palma, Balearic Islands',
      linkedinLabel: 'LinkedIn',
      confidentialityTitle: 'Confidentiality & Non-Disclosure:',
      confidentialityText: 'All project documentation, schedules and initial discussions are treated with strict professional confidentiality.',
      procedureTitle: 'Initial Consultation Process',
      procedureSteps: [
        '1. Conflict check and initial review of key dates, contract form and available schedules.',
        '2. Identification of the suitable forensic delay or disruption methodology.',
        '3. Clear, proportionate scope and fee proposal.'
      ],
      form: {
        firstName: 'First Name',
        firstNamePlaceholder: 'e.g. Joan',
        lastName: 'Last Name',
        lastNamePlaceholder: 'e.g. Perelló',
        company: 'Company / Law Firm',
        companyPlaceholder: 'e.g. Construction Corp Ltd.',
        email: 'Email Address',
        emailPlaceholder: 'name@company.com',
        phone: 'Phone Number',
        phoneOptional: '(optional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Subject',
        subjectPlaceholder: 'e.g. EOT review or delay analysis for hospital build',
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
        projectDescription: 'Project Overview & Key Questions',
        projectDescriptionPlaceholder: 'Please outline the project type, contract form (e.g. FIDIC, NEC3/NEC4, JCT), key dates, available schedules and specific delay or dispute issues...',
        privacyText: 'I agree to the processing of my contact information in accordance with the',
        privacyLink: 'Privacy Policy',
        submitButton: 'Request an Initial Consultation',
        submitting: 'Submitting Enquiry...',
        successTitle: 'Enquiry Received',
        successMessage: 'Thank you for contacting FidePath Expert Services. Your enquiry has been securely logged and forwarded to Joan A. Perelló.',
        successFollowUp: 'We will review your matter, perform a preliminary conflict check and reply via email or telephone within 24 to 48 business hours.',
        referenceCodeLabel: 'Enquiry Reference Code',
        submitAnother: 'Submit Another Enquiry',
        errorGeneral: 'An error occurred while submitting your message. Please verify the fields or contact us directly at joan.perello@fidepath.com.',
        secureNotice: 'Confidential initial enquiry · Conflict-checked review',
        validation: {
          firstName: 'First name is required.',
          lastName: 'Last name is required.',
          company: 'Company or firm name is required.',
          email: 'A valid corporate or professional email address is required.',
          subject: 'Subject is required.',
          assistanceType: 'Please select the type of assistance required.',
          projectDescription: 'Please provide a brief description of your project or matter (min 15 characters).',
          privacyConsent: 'You must accept the privacy policy to submit your enquiry.'
        }
      }
    },
    footer: {
      brandDesc: 'Independent consultancy specialising in forensic planning, construction delay analysis, EOT assessments, disruption and expert dispute support.',
      quickLinks: 'Navigation',
      services: 'Services',
      contactInfo: 'Contact',
      discussButton: 'Contact FidePath',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      legalNotice: 'Legal Notice'
    },
    legal: {
      badge: 'Legal & Compliance',
      returnHome: '← Return to Home',
      lastUpdated: 'Last updated: 2026',
      underConstructionTitle: 'Page under construction',
      underConstructionDesc: 'This legal notice and compliance page is currently being prepared and will be published shortly.',
      privacy: {
        title: 'Privacy Policy',
        disclaimer: 'Notice: This privacy framework reflects Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
        sections: []
      },
      cookies: {
        title: 'Cookie Policy',
        sections: []
      },
      legalNotice: {
        title: 'Legal Notice',
        disclaimer: 'Legal Notice: In compliance with Spanish Law 34/2002 (LSSI-CE).',
        sections: []
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Forensic Planning & Construction Delay Analysis',
        about: 'About Joan A. Perelló — FidePath Expert Services',
        services: 'Specialist Delay & Dispute Services — FidePath Expert Services',
        approach: 'Our Method, Capabilities & Standards — FidePath Expert Services',
        contact: 'Discuss Your Project — FidePath Expert Services',
        privacy: 'Privacy Policy — FidePath Expert Services',
        cookies: 'Cookie Policy — FidePath Expert Services',
        legal: 'Legal Notice — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Independent specialist consultancy in construction delay analysis, forensic planning, Extension of Time (EOT) assessments, disruption and independent expert reports.',
        about: `Profile of civil engineer and delay analyst Joan A. Perelló: more than ${YEARS_EXPERIENCE} years in civil engineering and construction, including forensic planning and delay analysis across the UK, Europe and the Middle East.`,
        services: 'Construction delay analysis, EOT assessments, disruption analysis, independent expert reports and dispute support for law firms, employers and contractors.',
        approach: 'Forensic delay methodologies (As-Planned versus As-Built Windows Analysis, Time Slice Windows Analysis, TIA, Retrospective Longest Path Analysis), Oracle Primavera P6, Asta Powerproject and Microsoft Project scheduling.',
        contact: 'Contact FidePath Expert Services and Joan A. Perelló to discuss your construction delay, EOT or dispute support requirements.',
        privacy: 'Privacy Policy of FidePath Expert Services.',
        cookies: 'Cookie Policy of FidePath Expert Services.',
        legal: 'Legal Notice of FidePath Expert Services.'
      }
    }
  },
  es: {
    common: {
      tagline: 'Independiente · Objetivo · Experto',
      location: 'Palma, Islas Baleares',
      allRightsReserved: 'Todos los derechos reservados.',
      categoryPrefix: 'Categoría',
      sectorPrefix: 'Sector',
      groupPrefix: 'Grupo',
      servicePrefix: 'Servicio',
      stepPrefix: 'Fase',
      linkedinLabel: 'LinkedIn'
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      services: 'Servicios',
      approach: 'Nuestro método',
      contact: 'Contacto',
      ctaButton: 'Hablemos de su proyecto',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación'
    },
    hero: {
      badge: 'Independiente · Objetivo · Experto',
      title: 'Planificación forense, análisis de retrasos en construcción y servicios periciales',
      subtitle: 'Análisis técnico independiente de retrasos en obra, evaluaciones de ampliación de plazo (EOT), disrupción y apoyo en controversias. Combinamos ingeniería civil, experiencia real en obra y planificación forense para proyectos en Reino Unido, Europa y Oriente Medio.',
      audienceNote: 'Apoyo técnico para despachos de abogados, propietarios de obra (employers), promotores, contratistas principales y subcontratistas en adjudicación (procedimiento de adjudication del Reino Unido), arbitraje, Juntas de Resolución de Disputas (DAB) y litigios.',
      ctaPrimary: 'Solicitar una consulta inicial',
      ctaSecondary: 'Explorar nuestros servicios',
      trustItems: [
        'Análisis de retrasos en construcción',
        'Planificación forense',
        'Ampliación de plazo (EOT)',
        'Informes periciales independientes'
      ],
      imageAlt: 'Puente atirantado sobre un río',
      imageCaption: 'Análisis de proyectos de construcción',
      imageLocation: 'Palma · Reino Unido · Europa · Oriente Medio'
    },
    intro: {
      badge: 'Posicionamiento especializado',
      title: 'Consultora especializada en análisis de retrasos y planificación forense',
      paragraph1: 'FidePath Expert Services es una consultora técnica independiente dedicada exclusivamente al análisis de retrasos en construcción, planificación forense, evaluaciones de ampliación de plazo (EOT), análisis de disrupción y apoyo en reclamaciones y controversias.',
      paragraph2: 'No somos una ingeniería generalista ni una empresa constructora. Nuestro trabajo integra fundamentos de ingeniería civil, experiencia práctica en ejecución de obra y dominio técnico de la planificación forense para determinar qué retrasó un proyecto, por qué sucedió y cómo repercute contractualmente.',
      paragraph3: `Dirigida por el ingeniero civil Joan A. Perelló, con más de ${YEARS_EXPERIENCE} años de experiencia en ingeniería civil y construcción, incluyendo planificación forense y análisis de retrasos en proyectos en el Reino Unido, Europa y Oriente Medio, FidePath aporta conclusiones técnicas claras y fundamentadas en la evidencia documental para resoluciones comerciales y procedimientos formales.`,
      positioningNote: `Fundada en ${formatFounded('es')} en Palma, con capacidad de trabajo internacional en inglés, castellano y catalán.`,
      attributes: {
        independent: {
          title: 'Independiente',
          desc: 'Una perspectiva objetiva e imparcial, basada estrictamente en los registros coetáneos del proyecto y en los hechos empíricos del programa de obra.'
        },
        reliable: {
          title: 'Objetivo',
          desc: 'Evaluaciones técnicas metodológicamente sólidas y bien documentadas, preparadas para ser explicadas y fundamentadas con claridad.'
        },
        expert: {
          title: 'Experto',
          desc: `Más de ${YEARS_EXPERIENCE} años en ingeniería civil y construcción, incluyendo planificación forense y análisis de retrasos en disputas en el Reino Unido, Europa y Oriente Medio.`
        }
      }
    },
    services: {
      badge: 'Servicios principales',
      sectionTitle: 'Servicios especializados en retrasos y controversias',
      sectionSubtitle: 'Análisis técnico independiente alineado con la práctica internacional de reclamaciones de construcción y la prueba documental de obra.',
      viewAll: 'Explorar todos los servicios',
      detailsButton: 'Detalles',
      cardTagline: 'Análisis técnico de retrasos y reclamaciones',
      problemsAddressedTitle: 'Problemas que resuelve',
      analysisIncludedTitle: 'Alcance del análisis técnico',
      typicalClientsTitle: 'Quién puede necesitar este servicio',
      valueBoxTitle: 'Valor analítico',
      valueBoxHeading: 'Cómo respalda su posición el análisis independiente',
      recordsTitle: 'Registros coetáneos habituales analizados:',
      typicalRecords: [
        'Programas de obra de licitación, maestros y revisados (.xer, .mpp, Asta Powerproject)',
        'Programas as-built, actualizaciones de avance y asignaciones de recursos',
        'Partes diarios de obra, registros de inspección, informes mensuales de avance y actas',
        'Notificaciones contractuales, modificados, consultas técnicas (RFI) y determinaciones del contract administrator'
      ],
      discussButtonPrefix: 'Consultar sobre',
      directInquiriesTitle: 'Consulta directa con Joan A. Perelló:',
      targetAudienceBadge: 'A quién ayudamos',
      targetAudienceTitle: 'Clientes e intervinientes en disputas',
      targetAudienceDesc: 'Ofrecemos apoyo técnico claro y proporcionado a las partes implicadas en controversias temporales, de disrupción y contractuales:',
      targetAudiences: [
        'Despachos de abogados y letrados especializados en construcción',
        'Promotores, propietarios de proyectos y desarrolladores inmobiliarios',
        'Contratistas principales y empresas constructoras',
        'Subcontratistas e instaladores especializados',
        'Partes en adjudicación (procedimiento de adjudication del Reino Unido), arbitraje, Juntas de Resolución de Disputas (DAB) y litigios'
      ],
      targetAudienceFooter: 'Análisis técnico independiente · Conclusiones defendibles',
      ctaBox: {
        title: 'Hablemos de su retraso de obra o controversia',
        desc: 'Contacte con Joan A. Perelló para mantener una consulta inicial confidencial sobre los registros disponibles, el programa de obra contractual y el alcance analítico.',
        button: 'Solicitar una consulta inicial'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Análisis de retrasos en construcción',
          shortDesc: 'Análisis forense retrospectivo y prospectivo del programa de obra para establecer retrasos en la ruta crítica, relación causal y responsabilidad a partir de los registros coetáneos.',
          fullDesc: 'Examinamos los programas de licitación, programas base, actualizaciones y programas as-built para reconstruir la secuencia real de ejecución, aislar los eventos críticos y cuantificar su impacto mediante metodologías reconocidas de planificación forense adaptadas a la prueba disponible.',
          problemsAddressed: [
            'Causas confusas o controvertidas del retraso crítico en la fecha de terminación',
            'Relatos divergentes sobre qué eventos determinaron realmente la ruta crítica',
            'Actualizaciones del programa de obra incoherentes, incompletas o sin verificación',
            'Necesidad de fijar una cronología objetiva respaldada por registros coetáneos de obra'
          ],
          analysisIncluded: [
            'As-Planned versus As-Built Windows Analysis y Time Slice Windows Analysis',
            'Time Impact Analysis (TIA), Retrospective Longest Path Analysis, Impacted As-Planned Analysis y Collapsed As-Built Analysis',
            'Validación lógica del programa de obra en Oracle Primavera P6, Asta Powerproject y Microsoft Project',
            'Reconstrucción de secuencias as-built a partir de partes diarios, registros e informes de avance'
          ],
          typicalClients: [
            'Contratistas principales, subcontratistas y promotores ante retrasos críticos de terminación',
            'Despachos de abogados que preparan evaluaciones preliminares o escritos formales',
            'Partes que necesitan una visión técnica realista antes de negociar un acuerdo'
          ],
          clientValue: 'Establece un vínculo transparente y basado en pruebas entre los eventos de retraso y las fechas de finalización para evaluar la responsabilidad con rigor técnico.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Evaluación de ampliación de plazo (EOT)',
          shortDesc: 'Evaluación técnica de reclamaciones de ampliación de plazo (EOT), derecho a ampliación de plazo y determinaciones EOT del contract administrator (administrador del contrato) bajo contratos estándar o a medida.',
          fullDesc: 'Evaluamos si los eventos notificados causaron un impacto crítico en las fechas de terminación contractuales bajo contratos FIDIC, NEC3/NEC4, JCT o contratos a medida, incluyendo auditorías independientes de solicitudes de EOT y revisiones de las determinaciones emitidas por contract administrators.',
          problemsAddressed: [
            'Preparación o revisión independiente de reclamaciones contractuales de EOT',
            'Disputas sobre concurrencia, retrasos secuenciales y ritmo de obra',
            'Impugnación o revisión de determinaciones EOT emitidas por contract administrators o ingenieros',
            'Evaluación del cumplimiento de notificaciones, programas base y medidas de mitigación'
          ],
          analysisIncluded: [
            'Comprobación de criticidad y causalidad de eventos compensables o relevantes reclamados',
            'Análisis de concurrencia y derecho a ampliación de plazo frente a las cláusulas contractuales',
            'Auditoría independiente de determinaciones EOT del contract administrator',
            'Revisión de programas de obra contractuales, alertas tempranas, instrucciones y correspondencia'
          ],
          typicalClients: [
            'Promotores y contract administrators que buscan auditar objetivamente reclamaciones EOT del contratista',
            'Contratistas principales y subcontratistas especializados que fundamentan su derecho a ampliación de plazo',
            'Equipos legales que asesoran sobre penalidades por demora o disputas de plazo contractual'
          ],
          clientValue: 'Aclara el derecho real a ampliación de plazo y la exposición contractual, sustituyendo afirmaciones por cronología verificada del programa de obra y trazabilidad documental.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Análisis de disrupción en construcción',
          shortDesc: 'Evaluación técnica de pérdidas de productividad, trabajos fuera de secuencia e interferencias en obra que afectan a la eficiencia constructiva y al rendimiento de recursos.',
          fullDesc: 'La disrupción suele producirse sin ampliar necesariamente la fecha final de terminación. Analizamos registros de obra, asignaciones de mano de obra y maquinaria, densidad de oficios y entrega de diseño para diferenciar interferencias de terceros de ineficiencias propias.',
          problemsAddressed: [
            'Desviaciones significativas de mano de obra y maquinaria sin avance físico equivalente',
            'Secuencias de trabajo fragmentadas por diseño tardío, consultas RFI o accesos restringidos',
            'Solapamiento de oficios e interferencias entre disciplinas en obra',
            'Dificultad para aislar causas compensables de disrupción frente a insuficiencias de licitación'
          ],
          analysisIncluded: [
            'Comparativas de productividad y análisis measured-mile o muestreo cuando los registros lo permiten',
            'Seguimiento de trabajos fuera de secuencia y mapeo de interferencias entre oficios',
            'Auditoría de partes diarios de asignación, curvas de avance y diarios de obra',
            'Acreditación causa-efecto entre los desencadenantes de disrupción y la pérdida productiva'
          ],
          typicalClients: [
            'Contratistas principales y subcontratistas civiles o de instalaciones con graves pérdidas de productividad',
            'Promotores y equipos de costes que evalúan reclamaciones de disrupción presentadas',
            'Abogados que requieren prueba fáctica estructurada sobre causas de ineficiencia en obra'
          ],
          clientValue: 'Separa los desencadenantes compensables de disrupción de las variaciones de rendimiento asumibles por el contratista mediante registros coetáneos verificables.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Informes periciales independientes',
          shortDesc: 'Preparación de informes periciales técnicos independientes y contestaciones para adjudication, arbitraje, Juntas de Resolución de Disputas (DAB) y litigios.',
          fullDesc: 'Con experiencia como experto designado en análisis de retrasos en dos procedimientos de adjudication y amplia colaboración con expertos designados en arbitraje, Juntas de Resolución de Disputas (DAB) y procedimientos judiciales, elaboramos informes estructurados e imparciales para tribunales y órganos decisorios.',
          problemsAddressed: [
            'Necesidad de un informe pericial independiente en procedimientos de adjudication, arbitraje o juicio',
            'Contestación técnica y crítica fundamentada a informes periciales de retraso de la parte contraria',
            'Traducción de programas complejos en Oracle Primavera P6 o Asta Powerproject a evidencia visual comprensible',
            'Contrastación pericial temprana antes de escalar a un procedimiento formal'
          ],
          analysisIncluded: [
            'Informes periciales independientes de retraso estructurados conforme a instrucciones claras y hechos probados',
            'Revisión crítica y contestación técnica a las metodologías y premisas del experto contrario',
            'Gráficos cronológicos claros, diagramas de ruta crítica y anexos documentales indexados',
            'Investigación fáctica y asistencia técnica en escritos de alegaciones y reuniones de expertos'
          ],
          typicalClients: [
            'Despachos de abogados de construcción que designan analistas de retrasos o peritos independientes',
            'Partes inmersas en adjudication, arbitraje internacional, DAB o litigios judiciales',
            'Directores comerciales que precisan una opinión imparcial sobre los méritos técnicos de la disputa'
          ],
          clientValue: 'Presenta hallazgos complejos de planificación forense con prosa clara, estructurada y gráficos que tribunales, jueces y abogados pueden seguir con facilidad.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Apoyo en reclamaciones y controversias',
          shortDesc: 'Planificación forense, auditoría de programas de obra y apoyo técnico fáctico para equipos legales y agentes constructivos en todas las fases de la disputa.',
          fullDesc: 'Prestamos asesoramiento técnico específico en controversias constructivas en curso o en escalada, asistiendo a abogados y equipos comerciales en investigaciones fácticas, revisiones del programa de obra contractual, contraste estratégico y consultas técnicas.',
          problemsAddressed: [
            'Disputas contractuales en escalada que exigen un diagnóstico rápido del programa de obra',
            'Lagunas documentales y registros dispersos en obras plurianuales',
            'Revisión de programas de obra contractuales y reclamaciones contrarias para detectar debilidades técnicas',
            'Preparación de preguntas técnicas para declaraciones testificales, escritos o negociaciones'
          ],
          analysisIncluded: [
            'Investigación fáctica en correspondencia de proyecto, instrucciones y registros de avance',
            'Diagnóstico forense de programas de obra y auditorías de cumplimiento contractual',
            'Apoyo técnico para mediación, negociación, DAB, adjudication y arbitraje',
            'Elaboración de notas técnicas, cronologías de hechos y memorandos de auditoría de reclamaciones'
          ],
          typicalClients: [
            'Despachos de abogados que buscan apoyo ágil de planificación forense en disputas activas',
            'Promotores, desarrolladores y contratistas que gestionan reclamaciones antes de un procedimiento formal',
            'Subcontratistas que necesitan un análisis experto proporcionado en acuerdos comerciales'
          ],
          clientValue: 'Asienta la estrategia legal y la negociación comercial sobre hechos verificables del programa de obra en lugar de suposiciones.'
        }
      ]
    },
    capabilities: {
      badge: 'Competencias técnicas',
      title: 'Capacidades en análisis de retrasos, programación y disputas',
      subtitle: 'Especialización focalizada que combina ingeniería civil, realidad constructiva en obra y técnicas reconocidas de planificación forense.',
      methodologySelectionNote: 'Las metodologías de análisis forense nunca se fuerzan para encajar en una plantilla: la técnica adecuada se selecciona según los registros coetáneos disponibles, las circunstancias del proyecto y las cuestiones concretas en disputa.',
      softwareLabel: 'Software de programación y planificación',
      softwareTools: ['Oracle Primavera P6', 'Asta Powerproject', 'Microsoft Project'],
      blocks: [
        {
          number: '01',
          title: 'Análisis de retrasos y planificación forense',
          summary: 'Aplicación de metodologías reconocidas retrospectivas y prospectivas según la calidad documental y el contexto contractual.',
          items: [
            'As-Planned versus As-Built Windows Analysis',
            'Time Slice Windows Analysis',
            'Time Impact Analysis (TIA)',
            'Retrospective Longest Path Analysis',
            'Impacted As-Planned Analysis',
            'Collapsed As-Built Analysis'
          ]
        },
        {
          number: '02',
          title: 'Programación de construcción',
          summary: 'Desarrollo, seguimiento y verificación forense de programas de obra a lo largo de todo el ciclo de obras civiles y edificación.',
          items: [
            'Programas de obra de licitación y programas maestros',
            'Actualizaciones, revisiones y control de línea base',
            'Reconstrucción de programas de obra as-built',
            'Seguimiento de programa de obra e informes de avance',
            'Planificación constructiva y programación forense',
            'Oracle Primavera P6, Asta Powerproject y Microsoft Project'
          ]
        },
        {
          number: '03',
          title: 'Ampliación de plazo (EOT) y disrupción',
          summary: 'Evaluación detallada del derecho a ampliación de plazo, pérdidas de productividad y cumplimiento del programa de obra contractual.',
          items: [
            'Evaluaciones de ampliación de plazo (EOT)',
            'Derecho a ampliación de plazo y evaluación de concurrencia',
            'Análisis de disrupción en construcción y pérdida de productividad',
            'Evaluación técnica de causas del retraso',
            'Revisión de programas de obra contractuales y presentaciones',
            'Preparación y auditoría de reclamaciones de construcción'
          ]
        },
        {
          number: '04',
          title: 'Informes periciales y apoyo en controversias',
          summary: 'Investigación fáctica rigurosa e informes claros adaptados a mecanismos formales e informales de resolución.',
          items: [
            'Informes periciales independientes y contestaciones',
            'Procedimientos de adjudication y Juntas de Resolución de Disputas (DAB)',
            'Apoyo técnico en arbitraje y litigios judiciales',
            'Investigación fáctica y verificación de registros',
            'Revisión de determinaciones EOT del contract administrator',
            'Apoyo técnico directo a equipos legales y profesionales de la construcción'
          ]
        }
      ]
    },
    standards: {
      badge: 'Estándares y marcos contractuales',
      title: 'Contratos reconocidos y guías del sector',
      subtitle: 'Análisis técnicos estructurados en torno a los mecanismos contractuales y guías forenses empleados en controversias internacionales.',
      referenceNote: 'Estos modelos contractuales y publicaciones sectoriales sirven como marcos técnicos de referencia para garantizar análisis rigurosos, transparentes y bien fundamentados; se aplican como guía analítica y no se presentan como certificaciones personales.',
      contractsTitle: 'Marcos contractuales',
      contracts: [
        {
          name: 'Contratos FIDIC',
          detail: 'Modelos estándar internacionales de obra civil, planta y llave en mano'
        },
        {
          name: 'Contratos NEC3/NEC4',
          detail: 'Gestión de programa de obra, alertas tempranas y eventos de compensación'
        },
        {
          name: 'Contratos JCT',
          detail: 'Contratos de edificación en el Reino Unido, eventos relevantes y cláusulas de ampliación de plazo (EOT)'
        },
        {
          name: 'Contratos de construcción a medida',
          detail: 'Acuerdos específicos para infraestructuras, energía, centros de datos y edificación comercial'
        }
      ],
      guidanceTitle: 'Estándares y guías del sector',
      guidance: [
        {
          name: 'SCL Delay and Disruption Protocol',
          detail: 'Referencia principal para metodologías de retraso, concurrencia, mitigación y principios de disrupción'
        },
        {
          name: 'AACE International Recommended Practices RP 29R-03',
          detail: 'Referencia de clasificación y verificación técnica en análisis forense de programas de obra'
        }
      ]
    },
    whyUs: {
      badge: 'Enfoque',
      title: 'Nuestro enfoque',
      subtitle: 'Comprensión práctica de ingeniería combinada con planificación forense disciplinada.',
      principles: [
        {
          number: '01',
          title: 'Enfoque independiente',
          desc: 'Análisis técnico objetivo e imparcial, basado estrictamente en la documentación coetánea disponible y en metodologías forenses reconocidas.'
        },
        {
          number: '02',
          title: 'Ingeniería y experiencia en obra',
          desc: 'La formación en ingeniería civil combinada con experiencia práctica de ejecución y planificación de obra nos permite comprender los retrasos técnica y prácticamente.'
        },
        {
          number: '03',
          title: 'Metodología adaptada a cada caso',
          desc: 'En lugar de forzar cada disputa en una fórmula única, seleccionamos el método analítico adecuado a los registros concretos del proyecto y a las cuestiones controvertidas.'
        },
        {
          number: '04',
          title: 'Informes claros y defendibles',
          desc: 'Datos complejos de programación y cronologías técnicas traducidos en informes estructurados y transparentes fáciles de entender por abogados, tribunales y directivos.'
        },
        {
          number: '05',
          title: 'Experiencia internacional',
          desc: `Más de ${YEARS_EXPERIENCE} años en ingeniería civil y construcción en distintas tipologías de obra, con experiencia en análisis de retrasos bajo diferentes marcos contractuales en el Reino Unido, Europa y Oriente Medio.`
        }
      ]
    },
    approach: {
      badge: 'Metodología',
      title: 'Comprender qué ocurrió realmente',
      subtitle: 'Un flujo de trabajo forense estructurado para transformar registros fragmentados en conclusiones claras y respaldadas por pruebas.',
      intro: 'El análisis forense de retrasos exige disciplina, criterio de ingeniería y verificación minuciosa de los registros coetáneos. Nunca partimos de una conclusión prefijada: dejamos que la cronología verificada establezca los hallazgos técnicos.',
      corePrinciplesBadge: 'Principios básicos',
      corePrinciplesTitle: 'Cómo abordamos la investigación de retrasos',
      corePrinciplesP1: 'En las disputas de construcción, el desacuerdo rara vez gira en torno a si la obra se retrasó; gira en torno a qué eventos controlaron realmente el avance crítico, qué fue concurrente y cómo aplica el riesgo contractual.',
      corePrinciplesP2: 'Al contrastar la lógica del programa de obra con partes diarios, informes de avance, entregas de diseño y registros de recursos, reconstruimos una matriz fáctica sólida frente al escrutinio de la negociación o de procedimientos formales.',
      imageAlt: 'Planos de ingeniería, escalímetro y programa maestro de obra impreso sobre mesa de trabajo',
      imageCaption1: 'Auditoría de registros coetáneos',
      imageCaption2: 'Verificación del programa de obra',
      exploreButton: 'Explorar nuestro método en 4 fases',
      stages: [
        {
          number: '01',
          title: 'Comprender',
          desc: 'Revisamos las cláusulas contractuales, las premisas de la línea base, el alcance del proyecto y las cuestiones técnicas que requieren determinación.'
        },
        {
          number: '02',
          title: 'Investigar',
          desc: 'Auditamos los programas de obra de licitación, maestros, actualizados y as-built junto con partes diarios, informes de avance, RFI y correspondencia.'
        },
        {
          number: '03',
          title: 'Analizar',
          desc: 'Seleccionamos y aplicamos la metodología forense adecuada para comprobar criticidad, causalidad, concurrencia y disrupción.'
        },
        {
          number: '04',
          title: 'Explicar',
          desc: 'Presentamos conclusiones razonadas, debidamente indexadas y cronologías visuales diseñadas para ser comprendidas y defendidas con claridad.'
        }
      ],
      methodologyBadge: 'Secuencia analítica en 6 fases',
      methodologyTitle: 'Nuestro proceso metodológico completo',
      methodologySteps: [
        {
          number: '01',
          title: 'Comprensión del proyecto y del alcance',
          desc: 'Clarificación de las reglas contractuales de EOT y programa de obra (FIDIC, NEC3/NEC4, JCT o a medida), premisas de línea base y cuestiones técnicas en disputa.'
        },
        {
          number: '02',
          title: 'Auditoría de programas de obra y registros',
          desc: 'Revisión de archivos nativos en Oracle Primavera P6, Asta Powerproject o Microsoft Project, actualizaciones de avance, partes diarios, asignaciones, RFI y correspondencia.'
        },
        {
          number: '03',
          title: 'Selección de la metodología adecuada',
          desc: 'Elección de la técnica prospectiva o retrospectiva idónea (Windows, Time Slice, TIA o Longest Path) conforme al SCL Delay and Disruption Protocol y AACE International Recommended Practices RP 29R-03.'
        },
        {
          number: '04',
          title: 'Identificación y mapeo de eventos de retraso',
          desc: 'Determinación cronológica de modificados, entregas tardías de diseño, condiciones geotécnicas imprevistas, restricciones de acceso e incidencias atribuibles al contratista.'
        },
        {
          number: '05',
          title: 'Comprobación de ruta crítica y derecho',
          desc: 'Determinación de la ruta crítica coetánea, cuantificación de periodos de retraso crítico y evaluación de concurrencia o retrasos de ritmo.'
        },
        {
          number: '06',
          title: 'Preparación de informes claros y defendibles',
          desc: 'Entrega de informes periciales o técnicos estructurados con resúmenes ejecutivos claros, comparativas Gantt y citas explícitas a los registros.'
        }
      ],
      ctaBox: {
        title: 'Hablemos del programa de obra de su proyecto',
        desc: 'Converse con Joan A. Perelló para revisar los registros disponibles de su proyecto y determinar el enfoque analítico más adecuado.',
        button: 'Hablemos de su proyecto'
      }
    },
    experience: {
      badge: 'Proyectos y sectores',
      title: 'Experiencia multisectorial en proyectos',
      subtitle: 'Experiencia en planificación, ingeniería civil y análisis forense de retrasos en edificación compleja, infraestructuras y desarrollos críticos.',
      frameworkIntro: 'Cada tipología de proyecto conlleva interfaces técnicas, secuencias de contratación y entornos documentales específicos:',
      sectorsTitle: 'Tipologías principales de proyecto',
      typicalDelayLabel: 'Causas habituales de retraso en este tipo de proyecto:',
      sectorBreadthTitle: 'Sectores de experiencia',
      sectorTags: [
        'Centros de datos',
        'Hospitales y sanidad',
        'Infraestructuras civiles',
        'Infraestructuras ferroviarias',
        'Proyectos aeroportuarios',
        'Infraestructuras hidráulicas y tuberías',
        'Proyectos industriales',
        'Desarrollos de uso mixto',
        'Promociones residenciales',
        'Centros residenciales asistidos (Extra Care)',
        'Aparcamientos subterráneos'
      ],
      scaleTitle: 'Escala y complejidad representativa de proyectos',
      scaleDisclaimer: 'Los ejemplos citados reflejan la escala y complejidad de proyectos en los que Joan A. Perelló ha desempeñado funciones de planificación, ingeniería o análisis de retrasos, sin divulgar detalles confidenciales de los mismos.',
      scaleHighlights: [
        {
          figure: '120 MW / ~€1.2bn',
          label: 'Campus de centro de datos hyperscale',
          context: 'Experiencia en planificación y programa de obra en construcción de campus críticos de gran escala e intensa carga eléctrica y MEP.'
        },
        {
          figure: '~£300m',
          label: 'Nuevo desarrollo hospitalario (Inglaterra)',
          context: 'Experiencia en gran edificación sanitaria aguda en el Reino Unido con servicios clínicos complejos e interfaces multinivel.'
        },
        {
          figure: `${YEARS_EXPERIENCE}+ años`,
          label: 'Ingeniería civil y construcción',
          context: 'Experiencia en ingeniería, ejecución en obra, planificación y análisis forense de retrasos en obras públicas y privadas en el Reino Unido, Europa y Oriente Medio.'
        }
      ],
      imageAlt: 'Vista aérea monocroma de un centro de datos hyperscale e instalaciones mecánicas industriales',
      imageCaption: 'Infraestructuras críticas e industriales',
      imageLocation: 'Escala y complejidad técnica',
      sectors: [
        {
          title: 'Infraestructuras civiles, ferrocarril, aviación y agua',
          description: 'Corredores lineales de transporte, infraestructuras ferroviarias y aeroportuarias, redes hidráulicas, tuberías y estructuras civiles subterráneas con complejas interfaces de terceros.',
          delayTypes: 'Retrasos en permisos, desvíos de servicios afectados, condiciones geotécnicas imprevistas, cambios de diseño.'
        },
        {
          title: 'Hospitales, residencial, centros asistenciales y uso mixto',
          description: 'Hospitales de agudos, residencial en altura, centros asistenciales y edificios de uso mixto que requieren coordinación intensiva de instalaciones y entregas por fases.',
          delayTypes: 'Paquetes de diseño tardíos, cuellos de botella en suministros, interferencias entre oficios, incidencias de puesta en marcha y licencias.'
        },
        {
          title: 'Centros de datos e instalaciones industriales',
          description: 'Centros de datos hyperscale e instalaciones industriales donde los equipos con largo plazo de entrega, la alta tensión y la puesta en marcha marcan la ruta crítica.',
          delayTypes: 'Entrega tardía de equipos críticos, coordinación con proveedores tecnológicos, contratiempos en pruebas y puesta en marcha.'
        }
      ],
      confidentialityBadge: 'Hablemos de su proyecto',
      futureCasesNote: 'Contacte con nosotros para comentar la tipología de su proyecto, los programas de obra disponibles y sus cuestiones concretas de retraso o disrupción.',
      contactButton: 'Contactar con FidePath'
    },
    finalCta: {
      badge: 'Consulta inicial',
      title: '¿Necesita un análisis técnico claro e independiente sobre un proyecto retrasado?',
      text: 'Tanto si representa a un despacho de abogados en una disputa formal, a un propietario de obra que revisa una reclamación EOT o a un contratista que evalúa retrasos y disrupción, póngase en contacto directamente con Joan A. Perelló.',
      button: 'Hablemos de su proyecto'
    },
    about: {
      badge: 'Sobre FidePath y su fundador',
      title: 'Perspectiva independiente. Solidez técnica y forense.',
      subtitle: 'FidePath Expert Services fue fundada por el ingeniero civil Joan A. Perelló para ofrecer análisis de retrasos y apoyo pericial riguroso, claro e independiente.',
      p1: 'FidePath Expert Services es una consultora especializada independiente dedicada al análisis de retrasos en construcción, planificación forense, evaluaciones de ampliación de plazo (EOT), análisis de disrupción y apoyo en reclamaciones y controversias.',
      p2: 'A diferencia de ingenierías generalistas o constructoras, nuestra práctica se centra exclusivamente en ayudar a despachos de abogados, promotores, desarrolladores, contratistas principales y subcontratistas a comprender las causas técnicas y consecuencias contractuales del retraso y la disrupción.',
      p3: 'Nuestro trabajo tiende un puente entre la realidad constructiva de la obra y el análisis forense del programa de obra, combinando fundamentos de ingeniería civil, planificación práctica e investigación disciplinada de los registros coetáneos del proyecto.',
      p4: 'Creemos que el asesoramiento técnico pericial debe ser independiente, objetivo y presentarse con la claridad suficiente para que abogados, árbitros, adjudicadores y directores comerciales puedan apoyarse en él sin ambigüedades.',
      p5: 'Desde Palma y con vocación internacional, FidePath presta apoyo en asuntos en España, el Reino Unido, Europa y Oriente Medio.',
      foundationsTitle: 'Pilares de la práctica',
      foundations: [
        'Estricta independencia e imparcialidad fáctica',
        'Ingeniería civil y comprensión real de la obra',
        'Trazabilidad forense de programas de obra y registros',
        'Informes claros para tribunales y dirección letrada'
      ],
      structuralImageAlt: 'Fachada de edificio con estructura de hormigón y arriostramientos de acero',
      impartialityTitle: 'Imparcialidad técnica',
      impartialityQuote: 'Nuestro deber se debe a los hechos acreditados en los registros coetáneos del proyecto. Emitimos evaluaciones técnicas objetivas preparadas para resistir el escrutinio.',
      founderSectionBadge: 'Fundador y director',
      founderSectionTitle: 'Joan A. Perelló — Ingeniero civil y analista de retrasos',
      founderName: 'Joan A. Perelló',
      founderRole: 'Fundador, ingeniero civil y analista de retrasos',
      founderBadge: `Fundada en ${formatFounded('es')}`,
      founderBio1: `Joan A. Perelló es ingeniero civil con más de ${YEARS_EXPERIENCE} años de experiencia en ingeniería civil y construcción, incluyendo planificación forense y análisis de retrasos en proyectos en el Reino Unido, Europa y Oriente Medio. Su carrera abarca estudios de viabilidad, diseño detallado, planificación de proyectos, ejecución en obra y análisis forense de disputas, lo que le aporta una comprensión sólida de cómo funcionan los programas de obra en entornos constructivos reales.`,
      founderBio2: `Especializado en análisis de retrasos y planificación forense, fundó FidePath Expert Services en ${formatFounded('es')} para prestar asesoramiento técnico focalizado e independiente y servicios periciales de retrasos.`,
      consiliumNoteTitle: 'Colaboración externa — Consilium',
      consiliumNoteText: 'Desde febrero de 2026, Joan colabora también como Associate Director con Consilium en disputas en el Reino Unido y Europa. Se trata de una colaboración profesional externa; FidePath Expert Services opera estrictamente como consultora independiente y no pertenece al mismo grupo empresarial.',
      founderFields: {
        focusLabel: 'Especialización',
        focusValue: 'Análisis de retrasos y planificación forense',
        experienceLabel: 'Experiencia',
        experienceValue: `${YEARS_EXPERIENCE}+ años en ingeniería civil y construcción`,
        regionsLabel: 'Ámbito geográfico',
        regionsValue: 'Reino Unido, Europa y Oriente Medio',
        contactLabel: 'Contacto directo'
      },
      expertExperience: {
        badge: 'Trayectoria en disputas y adjudicación',
        title: 'Experiencia como experto en retrasos y en disputas formales',
        subtitle: 'Experiencia práctica en foros formales de resolución de disputas, investigación fáctica y revisión crítica de argumentos técnicos contrarios.',
        highlights: [
          {
            title: 'Experto designado en dos adjudicaciones',
            detail: 'Actuó como experto designado en análisis de retrasos en dos procedimientos de adjudication (procedimiento de adjudication del Reino Unido), preparando evaluaciones de retraso y conclusiones independientes.'
          },
          {
            title: 'Colaboración en múltiples foros de disputa',
            detail: 'Preparó informes periciales bajo revisión de experto senior y colaboró estrechamente con expertos designados en adjudication, arbitraje, Juntas de Resolución de Disputas (DAB) y procedimientos judiciales.'
          },
          {
            title: 'Investigación forense y redacción técnica',
            detail: 'Dirigió investigaciones fácticas detalladas, reconstrucciones forenses de programas de obra y redacción de informes técnicos basados en pruebas coetáneas de obra.'
          },
          {
            title: 'Contestaciones y auditorías de determinaciones EOT',
            detail: 'Respondió a informes periciales de retraso de la parte contraria y revisó determinaciones de ampliación de plazo (EOT) emitidas por contract administrators.'
          }
        ]
      },
      languages: {
        badge: 'Idiomas y colaboración internacional',
        title: 'Trabajo transfronterizo y entre jurisdicciones contractuales',
        subtitle: 'Comunicación directa con clientes internacionales, equipos de obra, contract administrators y dirección letrada sin barreras lingüísticas.',
        items: [
          { language: 'Inglés', level: 'Fluido' },
          { language: 'Castellano', level: 'Fluido' },
          { language: 'Catalán', level: 'Fluido' },
          { language: 'Portugués', level: 'Conversacional' }
        ]
      },
      ctaBox: {
        title: 'Hablemos de su disputa constructiva o asunto de retrasos',
        desc: 'Contacte directamente con Joan A. Perelló para concertar una consulta inicial sobre la documentación de su proyecto y las cuestiones de programa de obra.',
        button: 'Contactar con FidePath'
      }
    },
    contact: {
      badge: 'Consulta inicial',
      title: 'Hablemos de su proyecto',
      subtitle: 'Comparta una breve descripción de su proyecto, el contexto contractual y las cuestiones de retraso o disrupción que necesita abordar.',
      directContactTitle: 'Datos de contacto directo',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      locationValue: 'Palma, Islas Baleares',
      linkedinLabel: 'LinkedIn',
      confidentialityTitle: 'Confidencialidad y no divulgación:',
      confidentialityText: 'Toda la documentación del proyecto, programas de obra y conversaciones iniciales se tratan con estricta confidencialidad profesional.',
      procedureTitle: 'Proceso de consulta inicial',
      procedureSteps: [
        '1. Comprobación de conflictos de intereses y revisión inicial de fechas clave, modalidad contractual y programas de obra disponibles.',
        '2. Identificación de la metodología forense de retraso o disrupción adecuada.',
        '3. Propuesta de alcance y honorarios clara y proporcionada.'
      ],
      form: {
        firstName: 'Nombre',
        firstNamePlaceholder: 'p. ej. Joan',
        lastName: 'Apellidos',
        lastNamePlaceholder: 'p. ej. Perelló',
        company: 'Empresa / Despacho de abogados',
        companyPlaceholder: 'p. ej. Constructora Balear S.L.',
        email: 'Correo electrónico',
        emailPlaceholder: 'nombre@empresa.com',
        phone: 'Teléfono',
        phoneOptional: '(opcional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Asunto',
        subjectPlaceholder: 'p. ej. Revisión EOT o análisis de retrasos en obra hospitalaria',
        assistanceType: 'Tipo de asistencia requerida',
        assistanceSelectDefault: '-- Seleccione asistencia --',
        assistanceOptions: [
          { value: 'Construction Delay Analysis', label: 'Análisis de retrasos en construcción' },
          { value: 'Extension of Time Assessment', label: 'Evaluación de ampliación de plazo (EOT)' },
          { value: 'Disruption Analysis', label: 'Análisis de disrupción en construcción' },
          { value: 'Independent Expert Reports', label: 'Informes periciales independientes' },
          { value: 'Construction Claims & Dispute Support', label: 'Apoyo en reclamaciones y controversias' },
          { value: 'Other', label: 'Otro' }
        ],
        projectDescription: 'Resumen del proyecto y cuestiones clave',
        projectDescriptionPlaceholder: 'Indique el tipo de proyecto, forma contractual (p. ej. FIDIC, NEC3/NEC4, JCT), fechas clave, programas de obra disponibles y cuestiones de retraso o disputa...',
        privacyText: 'Acepto el tratamiento de mis datos de contacto conforme a la',
        privacyLink: 'Política de Privacidad',
        submitButton: 'Solicitar una consulta inicial',
        submitting: 'Enviando consulta...',
        successTitle: 'Consulta recibida',
        successMessage: 'Gracias por contactar con FidePath Expert Services. Su consulta ha sido registrada de forma segura y remitida a Joan A. Perelló.',
        successFollowUp: 'Revisaremos su asunto, realizaremos una comprobación preliminar de conflictos y responderemos por correo electrónico o teléfono en un plazo de 24 a 48 horas laborables.',
        referenceCodeLabel: 'Código de referencia de la consulta',
        submitAnother: 'Enviar otra consulta',
        errorGeneral: 'Se ha producido un error al enviar su mensaje. Por favor, verifique los campos o contáctenos directamente en joan.perello@fidepath.com.',
        secureNotice: 'Consulta inicial confidencial · Revisión con control de conflictos',
        validation: {
          firstName: 'El nombre es obligatorio.',
          lastName: 'Los apellidos son obligatorios.',
          company: 'El nombre de la empresa o despacho es obligatorio.',
          email: 'Se requiere una dirección de correo corporativa o profesional válida.',
          subject: 'El asunto es obligatorio.',
          assistanceType: 'Por favor, seleccione el tipo de asistencia requerida.',
          projectDescription: 'Describa brevemente su proyecto o asunto (mínimo 15 caracteres).',
          privacyConsent: 'Debe aceptar la política de privacidad para enviar su consulta.'
        }
      }
    },
    footer: {
      brandDesc: 'Consultora independiente especializada en planificación forense, análisis de retrasos en construcción, evaluaciones EOT, disrupción y apoyo pericial en controversias.',
      quickLinks: 'Navegación',
      services: 'Servicios',
      contactInfo: 'Contacto',
      discussButton: 'Contactar con FidePath',
      privacyPolicy: 'Política de Privacidad',
      cookiePolicy: 'Política de Cookies',
      legalNotice: 'Aviso Legal'
    },
    legal: {
      badge: 'Información legal y cumplimiento',
      returnHome: '← Volver al inicio',
      lastUpdated: 'Última actualización: 2026',
      underConstructionTitle: 'Página en construcción',
      underConstructionDesc: 'Esta página de aviso legal y cumplimiento normativo se encuentra actualmente en preparación y se publicará próximamente.',
      privacy: {
        title: 'Política de Privacidad',
        disclaimer: 'Aviso: Este marco de privacidad refleja el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
        sections: []
      },
      cookies: {
        title: 'Política de Cookies',
        sections: []
      },
      legalNotice: {
        title: 'Aviso Legal',
        disclaimer: 'Aviso Legal: En cumplimiento de la Ley 34/2002 (LSSI-CE).',
        sections: []
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Planificación forense y análisis de retrasos en construcción',
        about: 'Sobre Joan A. Perelló — FidePath Expert Services',
        services: 'Servicios especializados en retrasos y controversias — FidePath Expert Services',
        approach: 'Nuestro método, capacidades y estándares — FidePath Expert Services',
        contact: 'Hablemos de su proyecto — FidePath Expert Services',
        privacy: 'Política de Privacidad — FidePath Expert Services',
        cookies: 'Política de Cookies — FidePath Expert Services',
        legal: 'Aviso Legal — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Consultora técnica independiente especializada en análisis de retrasos en construcción, planificación forense, evaluaciones de ampliación de plazo (EOT), disrupción e informes periciales independientes.',
        about: `Perfil del ingeniero civil y analista de retrasos Joan A. Perelló: más de ${YEARS_EXPERIENCE} años en ingeniería civil y construcción, incluyendo planificación forense y análisis de retrasos en el Reino Unido, Europa y Oriente Medio.`,
        services: 'Análisis de retrasos en construcción, evaluaciones EOT, análisis de disrupción, informes periciales independientes y apoyo en controversias para despachos, promotores y contratistas.',
        approach: 'Metodologías forenses de retraso (As-Planned versus As-Built Windows Analysis, Time Slice Windows Analysis, TIA, Retrospective Longest Path Analysis), Oracle Primavera P6, Asta Powerproject y Microsoft Project.',
        contact: 'Contacte con FidePath Expert Services y Joan A. Perelló para tratar sus necesidades de análisis de retrasos, EOT o apoyo en controversias.',
        privacy: 'Política de Privacidad de FidePath Expert Services.',
        cookies: 'Política de Cookies de FidePath Expert Services.',
        legal: 'Aviso Legal de FidePath Expert Services.'
      }
    }
  },
  ca: {
    common: {
      tagline: 'Independent · Objectiu · Expert',
      location: 'Palma, Illes Balears',
      allRightsReserved: 'Tots els drets reservats.',
      categoryPrefix: 'Categoria',
      sectorPrefix: 'Sector',
      groupPrefix: 'Grup',
      servicePrefix: 'Servei',
      stepPrefix: 'Fase',
      linkedinLabel: 'LinkedIn'
    },
    nav: {
      home: 'Inici',
      about: 'Sobre nosaltres',
      services: 'Serveis',
      approach: 'El nostre mètode',
      contact: 'Contacte',
      ctaButton: 'Parlem del seu projecte',
      openMenu: 'Obrir menú de navegació',
      closeMenu: 'Tancar menú de navegació'
    },
    hero: {
      badge: 'Independent · Objectiu · Expert',
      title: 'Planificació forense, anàlisi de retards en construcció i serveis pericials',
      subtitle: 'Anàlisi tècnica independent de retards en construcció, reclamacions d\'ampliació de termini (EOT), disrupció i disputes de projecte. Combinem enginyeria civil, execució real d\'obra i planificació forense per a projectes al Regne Unit, Europa i Orient Mitjà.',
      audienceNote: 'Suport tècnic per a despatxos d\'advocats, propietaris d\'obra (employers), promotors, contractistes principals i subcontractistes en adjudicació (procediment d\'adjudication del Regne Unit), arbitratge, Juntes de Resolució de Disputes (DAB) i litigis.',
      ctaPrimary: 'Sol·licitar una consulta inicial',
      ctaSecondary: 'Explorar els serveis',
      trustItems: [
        'Anàlisi de retards en construcció',
        'Planificació forense',
        'Ampliació de termini (EOT)',
        'Informes pericials independents'
      ],
      imageAlt: 'Pont atirantat sobre un riu',
      imageCaption: 'Anàlisi de projectes de construcció',
      imageLocation: 'Palma · Regne Unit · Europa · Orient Mitjà'
    },
    intro: {
      badge: 'Posicionament especialitzat',
      title: 'Consultora especialitzada en retards i planificació forense',
      paragraph1: 'FidePath Expert Services és una consultora tècnica independent centrada exclusivament en l\'anàlisi de retards en construcció, planificació forense, avaluacions d\'ampliació de termini (EOT), anàlisi de disrupció i suport en reclamacions i controvèrsies.',
      paragraph2: 'No som una enginyeria civil generalista ni una empresa constructora. El nostre treball combina fonaments d\'enginyeria civil, coneixement pràctic d\'execució a peu d\'obra i planificació forense especialitzada per examinar què va retardar un projecte, per què va passar i com s\'hi aplica el risc contractual.',
      paragraph3: `Dirigida per l'enginyer civil Joan A. Perelló, que compta amb més de ${YEARS_EXPERIENCE} anys d'experiència en enginyeria civil i construcció, incloent planificació forense i anàlisi de retards en projectes al Regne Unit, Europa i Orient Mitjà, FidePath ofereix conclusions tècniques clares i basades en proves per a resolucions comercials i procediments formals de disputa.`,
      positioningNote: `Fundada el ${formatFounded('ca')} a Palma, treballant internacionalment en anglès, castellà i català.`,
      attributes: {
        independent: {
          title: 'Independent',
          desc: 'Una perspectiva objectiva i imparcial basada estrictament en els registres coetanis del projecte i en fets empírics del programa d\'obra.'
        },
        reliable: {
          title: 'Objectiu',
          desc: 'Avaluacions tècniques metodològicament sòlides i ben documentades, preparades per ser explicades i fonamentades amb claredat.'
        },
        expert: {
          title: 'Expert',
          desc: `Més de ${YEARS_EXPERIENCE} anys en enginyeria civil i construcció, incloent planificació forense i anàlisi de retards en disputes al Regne Unit, Europa i Orient Mitjà.`
        }
      }
    },
    services: {
      badge: 'Serveis principals',
      sectionTitle: 'Serveis especialitzats en retards i disputes',
      sectionSubtitle: 'Anàlisi tècnica independent alineada amb la pràctica internacional de reclamacions de construcció i els registres coetanis del projecte.',
      viewAll: 'Explorar tots els serveis',
      detailsButton: 'Detalls',
      cardTagline: 'Anàlisi tècnica de retards i reclamacions',
      problemsAddressedTitle: 'Problemes que resol',
      analysisIncludedTitle: 'Abast de l\'anàlisi tècnica',
      typicalClientsTitle: 'Qui pot necessitar aquest servei',
      valueBoxTitle: 'Valor analític',
      valueBoxHeading: 'Com reforça la seva posició l\'anàlisi independent',
      recordsTitle: 'Registres coetanis habituals revisats:',
      typicalRecords: [
        'Programes d\'obra de licitació, mestres i revisats (.xer, .mpp, Asta Powerproject)',
        'Programes d\'obra as-built, actualitzacions d\'avanç i assignacions de recursos',
        'Diaris d\'obra, registres d\'inspecció, informes mensuals d\'avanç i actes',
        'Notificacions contractuals, variacions, consultes tècniques (RFI) i determinacions del contract administrator'
      ],
      discussButtonPrefix: 'Consultar sobre',
      directInquiriesTitle: 'Consulta directa amb Joan A. Perelló:',
      targetAudienceBadge: 'A qui assistim',
      targetAudienceTitle: 'Clients i parts en disputes',
      targetAudienceDesc: 'Oferim suport tècnic clar i proporcionat a les parts que gestionen disputes temporals, de disrupció i contractuals:',
      targetAudiences: [
        'Despatxos d\'advocats i assessors jurídics de construcció',
        'Promotors, propietaris de projectes i desenvolupadors immobiliaris',
        'Contractistes principals i empreses constructores',
        'Subcontractistes i lots d\'oficis especialitzats',
        'Parts en adjudicació (procediment d\'adjudication del Regne Unit), arbitratge, Juntes de Resolució de Disputes (DAB) i litigis'
      ],
      targetAudienceFooter: 'Anàlisi tècnica independent · Conclusions defensables',
      ctaBox: {
        title: 'Parlem del seu retard d\'obra o controvèrsia',
        desc: 'Contacti amb Joan A. Perelló per mantenir una consulta inicial confidencial sobre els registres del projecte, el programa d\'obra contractual i l\'abast analític.',
        button: 'Sol·licitar una consulta inicial'
      },
      items: [
        {
          id: 'delay-analysis',
          number: '01',
          title: 'Anàlisi de retards en construcció',
          shortDesc: 'Anàlisi forense retrospectiva i prospectiva del programa d\'obra per establir retards al camí crític, causalitat i responsabilitat mitjançant registres coetanis.',
          fullDesc: 'Investiguem programes d\'obra de licitació, base, actualitzats i as-built per reconstruir la seqüència real d\'obres, aïllar esdeveniments crítics de retard i quantificar l\'impacte mitjançant metodologies reconegudes de planificació forense adaptades a l\'evidència disponible.',
          problemsAddressed: [
            'Causes poc clares o disputades del retard crític en la terminació',
            'Relats divergents sobre quins fets van impulsar realment el camí crític',
            'Actualitzacions del programa d\'obra incoherents, incompletes o no verificades',
            'Necessitat d\'una cronologia objectiva recolzada per registres coetanis d\'obra'
          ],
          analysisIncluded: [
            'As-Planned versus As-Built Windows Analysis i Time Slice Windows Analysis',
            'Time Impact Analysis (TIA), Retrospective Longest Path Analysis, Impacted As-Planned Analysis i Collapsed As-Built Analysis',
            'Validació lògica del programa d\'obra en Oracle Primavera P6, Asta Powerproject i Microsoft Project',
            'Reconstrucció de seqüències as-built a partir de diaris d\'obra, registres i informes d\'avanç'
          ],
          typicalClients: [
            'Contractistes principals, subcontractistes i promotors davant retards crítics de terminació',
            'Despatxos d\'advocats que preparen avaluacions inicials o escrits formals',
            'Parts que necessiten una visió tècnica realista abans de negociar un acord'
          ],
          clientValue: 'Estableix un vincle transparent i basat en proves entre els esdeveniments de retard i les dates de terminació perquè les parts puguin avaluar la responsabilitat amb rigor tècnic.'
        },
        {
          id: 'eot-assessment',
          number: '02',
          title: 'Avaluació d\'ampliació de termini (EOT)',
          shortDesc: 'Avaluació tècnica de reclamacions d\'ampliació de termini (EOT), dret a ampliació de termini i determinacions EOT del contract administrator (administrador del contracte) sota contractes estàndard o a mida.',
          fullDesc: 'Avaluem si els esdeveniments notificats van causar un impacte crític en les dates contractuals de terminació sota contractes FIDIC, NEC3/NEC4, JCT o a mida, incloent auditories independents de sol·licituds EOT i revisions de determinacions emeses per contract administrators.',
          problemsAddressed: [
            'Preparació o revisió independent de reclamacions contractuals d\'EOT',
            'Disputes sobre concurrència, retards seqüencials i ritme d\'execució',
            'Impugnacions a determinacions EOT emeses per contract administrators o enginyers',
            'Avaluació del compliment de notificacions, línies base del programa d\'obra i mesures de mitigació'
          ],
          analysisIncluded: [
            'Comprovació de criticitat i causalitat d\'esdeveniments compensables o rellevants reclamats',
            'Avaluació de concurrència i dret d\'acord amb les disposicions contractuals',
            'Auditoria independent de determinacions EOT del contract administrator',
            'Revisió de programes d\'obra contractuals, alertes primerenques, instruccions i correspondència'
          ],
          typicalClients: [
            'Promotors i contract administrators que cerquen una auditoria objectiva de reclamacions EOT del contractista',
            'Contractistes principals i subcontractistes especialitzats que fonamenten el seu dret a ampliació de termini',
            'Equips legals que assessoren sobre penalitats per demora o qüestions de termini contractual'
          ],
          clientValue: 'Aclareix el dret real de temps i l\'exposició contractual, substituint afirmacions per cronologia verificada del programa d\'obra i traçabilitat documental.'
        },
        {
          id: 'disruption-analysis',
          number: '03',
          title: 'Anàlisi de disrupció en construcció',
          shortDesc: 'Avaluació tècnica de pèrdues de productivitat, treball fora de seqüència i interferències a l\'obra que afecten l\'eficiència constructiva i el rendiment de recursos.',
          fullDesc: 'La disrupció sovint es produeix sense allargar necessàriament la data final de terminació. Examinem registres d\'obra, assignacions de mà d\'obra i maquinària, densitat d\'oficis i patrons de lliurament de disseny per distingir interferències de tercers de la ineficiència pròpia.',
          problemsAddressed: [
            'Desviacions significatives de mà d\'obra i maquinària sense progrés físic equivalent',
            'Seqüències de treball fragmentades per disseny tardà, RFI o accés restringit a l\'obra',
            'Solapament d\'oficis i conflictes d\'interfície en treballs multidisciplinaris',
            'Dificultat per aïllar causes de disrupció respecte a infraestimacions en licitació'
          ],
          analysisIncluded: [
            'Comparatives de productivitat i anàlisi measured-mile o mostreig quan els registres ho permeten',
            'Seguiment de treballs fora de seqüència i mapeig d\'interferències entre oficis',
            'Auditoria de fulls d\'assignació diaris, corbes d\'avanç i diaris d\'obra',
            'Fonamentació causa-efecte que vincula els desencadenants de disrupció amb la pèrdua productiva'
          ],
          typicalClients: [
            'Contractistes principals i subcontractistes civils o d\'instal·lacions amb pèrdues greus de productivitat',
            'Promotors i equips de costos que avaluen reclamacions de disrupció presentades',
            'Lletrats que requereixen prova fàctica estructurada sobre causes d\'ineficiència en obra'
          ],
          clientValue: 'Separa els desencadenants compensables de disrupció de les variacions de productivitat assumibles pel contractista mitjançant dades coetànies verificables.'
        },
        {
          id: 'expert-reports',
          number: '04',
          title: 'Informes pericials independents',
          shortDesc: 'Preparació d\'informes pericials tècnics independents i contrainformes per a adjudication, arbitratge, Juntes de Resolució de Disputes (DAB) i litigis.',
          fullDesc: 'Amb experiència com a expert designat en anàlisi de retards en dos procediments d\'adjudication i àmplia col·laboració amb experts designats en arbitratge, Juntes de Resolució de Disputes (DAB) i procediments judicials, preparem informes estructurats i imparcials per a tribunals i decisors.',
          problemsAddressed: [
            'Necessitat d\'un informe pericial independent en procediments d\'adjudication, arbitratge o judici',
            'Rèplica tècnica i crítica d\'informes pericials de retard de la part contrària',
            'Traducció de programes complexos en Oracle Primavera P6 o Asta Powerproject a evidència visual accessible',
            'Contrastació pericial en fase inicial abans d\'escalar a una disputa formal'
          ],
          analysisIncluded: [
            'Informes pericials de retard independents estructurats entorn d\'instruccions clares i prova fàctica',
            'Revisió crítica i rèplica tècnica a les metodologies i premisses de l\'expert contrari',
            'Gràfics cronològics nets, diagrames de camí crític i annexos indexats documentalment',
            'Investigació fàctica i assistència tècnica en escrits i reunions d\'experts'
          ],
          typicalClients: [
            'Despatxos d\'advocats de construcció que designen analistes de retards o pèrits independents',
            'Parts implicades en adjudication, arbitratge internacional, DAB o litigis judicials',
            'Directors comercials que requereixen una opinió imparcial sobre els mèrits d\'una disputa'
          ],
          clientValue: 'Presenta troballes complexes de planificació forense en una prosa clara i estructurada amb visualitzacions que tribunals, jutges i advocats poden seguir fàcilment.'
        },
        {
          id: 'claims-dispute-support',
          number: '05',
          title: 'Suport en reclamacions i controvèrsies',
          shortDesc: 'Planificació forense, auditoria de programes d\'obra i suport tècnic fàctic per a equips legals i agents de la construcció en totes les fases de la disputa.',
          fullDesc: 'Proporcionem assessorament tècnic específic en disputes constructives en curs o en escalada, assistint advocats i equips comercials amb investigacions fàctiques, revisions de programes d\'obra contractuals, proves d\'estratègia i consultes tècniques.',
          problemsAddressed: [
            'Disputes contractuals en escalada que requereixen diagnòstic ràpid del programa d\'obra',
            'Llacunes documentals i registres fragmentats en obres plurianuals',
            'Revisió de programes d\'obra contractuals i reclamacions contràries per detectar debilitats tècniques',
            'Preparació de preguntes tècniques per a declaracions testificals, escrits o negociacions'
          ],
          analysisIncluded: [
            'Investigació fàctica en correspondència de projecte, instruccions i registres d\'avanç',
            'Diagnòstic forense de programes d\'obra i auditories de compliment contractual',
            'Suport tècnic per a mediació, negociació, DAB, adjudication i arbitratge',
            'Preparació de notes tècniques, cronologies d\'esdeveniments i memoràndums d\'auditoria de reclamacions'
          ],
          typicalClients: [
            'Despatxos d\'advocats que cerquen suport àgil de planificació forense en disputes actives',
            'Promotors, desenvolupadors i contractistes que gestionen reclamacions vives abans d\'un procediment formal',
            'Subcontractistes que necessiten anàlisi experta proporcionada en acords comercials'
          ],
          clientValue: 'Fonamenta l\'estratègia legal i la negociació comercial en fets verificables del programa d\'obra en lloc de suposicions.'
        }
      ]
    },
    capabilities: {
      badge: 'Competències tècniques',
      title: 'Capacitats en anàlisi de retards, programació i disputes',
      subtitle: 'Experiència focalitzada que combina enginyeria civil, realitat constructiva a peu d\'obra i tècniques reconegudes de planificació forense.',
      methodologySelectionNote: 'Les metodologies d\'anàlisi forense mai no es forcen dins d\'una plantilla: la tècnica adequada se selecciona segons els registres coetanis disponibles, les circumstàncies del projecte i les qüestions concretes en disputa.',
      softwareLabel: 'Programari de planificació i programació',
      softwareTools: ['Oracle Primavera P6', 'Asta Powerproject', 'Microsoft Project'],
      blocks: [
        {
          number: '01',
          title: 'Anàlisi de retards i planificació forense',
          summary: 'Aplicació de metodologies reconegudes retrospectives i prospectives segons la qualitat documental i el context contractual.',
          items: [
            'As-Planned versus As-Built Windows Analysis',
            'Time Slice Windows Analysis',
            'Time Impact Analysis (TIA)',
            'Retrospective Longest Path Analysis',
            'Impacted As-Planned Analysis',
            'Collapsed As-Built Analysis'
          ]
        },
        {
          number: '02',
          title: 'Programació de construcció',
          summary: 'Desenvolupament, seguiment i verificació forense de programes d\'obra durant tot el cicle d\'obres civils i d\'edificació.',
          items: [
            'Programes d\'obra de licitació i programes mestres',
            'Actualitzacions, revisions i control de línia base',
            'Reconstrucció de programes d\'obra as-built',
            'Seguiment del programa d\'obra i informes d\'avanç',
            'Planificació constructiva i programació forense',
            'Oracle Primavera P6, Asta Powerproject i Microsoft Project'
          ]
        },
        {
          number: '03',
          title: 'Ampliació de termini (EOT) i disrupció',
          summary: 'Avaluació detallada del dret a ampliació de termini, pèrdues de productivitat i compliment del programa d\'obra contractual.',
          items: [
            'Avaluacions d\'ampliació de termini (EOT)',
            'Dret a ampliació de termini i avaluació de concurrència',
            'Anàlisi de disrupció en construcció i pèrdua de productivitat',
            'Avaluació tècnica de les causes del retard',
            'Revisió de programes d\'obra contractuals i presentacions',
            'Preparació i auditoria de reclamacions de construcció'
          ]
        },
        {
          number: '04',
          title: 'Informes pericials i suport en controvèrsies',
          summary: 'Investigació fàctica rigorosa i informes clars adaptats a mecanismes formals i informals de resolució de disputes.',
          items: [
            'Informes pericials independents i contrainformes',
            'Procediments d\'adjudication i Juntes de Resolució de Disputes (DAB)',
            'Suport tècnic en arbitratge i litigis judicials',
            'Investigació fàctica i verificació de registres',
            'Revisió de determinacions EOT del contract administrator',
            'Suport tècnic directe a equips legals i professionals de la construcció'
          ]
        }
      ]
    },
    standards: {
      badge: 'Estàndards i marcs contractuals',
      title: 'Contractes reconeguts i guies del sector',
      subtitle: 'Anàlisis tècniques estructurades entorn dels mecanismes contractuals i guies forenses emprats en disputes internacionals de construcció.',
      referenceNote: 'Aquests models contractuals i publicacions sectorials serveixen com a marcs tècnics de referència per garantir anàlisis rigoroses, transparents i ben fonamentades; s\'apliquen com a guia analítica i no es presenten com a certificacions personals.',
      contractsTitle: 'Marcs contractuals',
      contracts: [
        {
          name: 'Contractes FIDIC',
          detail: 'Models estàndard internacionals d\'obra civil, planta i clau en mà'
        },
        {
          name: 'Contractes NEC3/NEC4',
          detail: 'Gestió del programa d\'obra, alertes primerenques i esdeveniments de compensació'
        },
        {
          name: 'Contractes JCT',
          detail: 'Contractes d\'edificació al Regne Unit, esdeveniments rellevants i disposicions d\'ampliació de termini (EOT)'
        },
        {
          name: 'Contractes de construcció a mida',
          detail: 'Acords específics per a infraestructures, energia, centres de dades i edificació comercial'
        }
      ],
      guidanceTitle: 'Estàndards i guies del sector',
      guidance: [
        {
          name: 'SCL Delay and Disruption Protocol',
          detail: 'Referència principal per a metodologies de retard, concurrència, mitigació i principis de disrupció'
        },
        {
          name: 'AACE International Recommended Practices RP 29R-03',
          detail: 'Referència de classificació i verificació tècnica en anàlisi forense de programes d\'obra'
        }
      ]
    },
    whyUs: {
      badge: 'Enfocament',
      title: 'El nostre enfocament',
      subtitle: 'Comprensió pràctica d\'enginyeria combinada amb planificació forense disciplinada.',
      principles: [
        {
          number: '01',
          title: 'Enfocament independent',
          desc: 'Anàlisi tècnica objectiva i imparcial fonamentada estrictament en la documentació coetània disponible i en metodologies forenses reconegudes.'
        },
        {
          number: '02',
          title: 'Enginyeria i experiència en obra',
          desc: 'La formació en enginyeria civil combinada amb experiència pràctica d\'execució i planificació d\'obra ens permet comprendre els retards tècnicament i de manera pràctica.'
        },
        {
          number: '03',
          title: 'Metodologia adaptada a cada cas',
          desc: 'En lloc de forçar cada disputa dins d\'una fórmula única, seleccionem el mètode analític adequat als registres específics del projecte i a les qüestions controvertides.'
        },
        {
          number: '04',
          title: 'Informes clars i defensables',
          desc: 'Dades complexes de programació i cronologies tècniques traduïdes en informes estructurats i transparents fàcils d\'entendre per advocats, tribunals i directius.'
        },
        {
          number: '05',
          title: 'Experiència internacional',
          desc: `Més de ${YEARS_EXPERIENCE} anys en enginyeria civil i construcció en diferents tipologies d'obra, amb experiència en anàlisi de retards sota diversos marcs contractuals al Regne Unit, Europa i Orient Mitjà.`
        }
      ]
    },
    approach: {
      badge: 'Metodologia',
      title: 'Comprendre què va passar realment',
      subtitle: 'Un flux de treball forense estructurat per transformar registres fragmentats en conclusions clares i basades en proves.',
      intro: 'L\'anàlisi forense de retards exigeix disciplina, criteri d\'enginyeria i verificació minuciosa dels registres coetanis. Mai no partim d\'una resposta desitjada: deixem que la cronologia verificada estableixi les troballes tècniques.',
      corePrinciplesBadge: 'Principis bàsics',
      corePrinciplesTitle: 'Com abordem la investigació de retards',
      corePrinciplesP1: 'En les disputes de construcció, el desacord rares vegades se centra en si l\'obra es va retardar; se centra en quins fets van controlar realment el progrés crític, què va ser concurrent i com s\'aplica el risc contractual.',
      corePrinciplesP2: 'En contrastar la lògica del programa d\'obra amb diaris d\'obra, informes d\'avanç, lliuraments de disseny i registres de recursos, reconstruïm una matriu fàctica que resisteix l\'escrutini en negociació o procediments formals.',
      imageAlt: 'Plànols d\'enginyeria, escalímetre i programa mestre d\'obra imprès sobre taula de treball',
      imageCaption1: 'Auditoria de registres coetanis',
      imageCaption2: 'Verificació del programa d\'obra',
      exploreButton: 'Explorar el nostre mètode en 4 fases',
      stages: [
        {
          number: '01',
          title: 'Comprendre',
          desc: 'Revisem les clàusules contractuals, les premisses de línia base, l\'abast del projecte i les qüestions tècniques que requereixen determinació.'
        },
        {
          number: '02',
          title: 'Investigar',
          desc: 'Auditem els programes d\'obra de licitació, mestres, actualitzats i as-built juntament amb diaris d\'obra, informes d\'avanç, RFI i correspondència.'
        },
        {
          number: '03',
          title: 'Analitzar',
          desc: 'Seleccionem i apliquem la metodologia forense adequada per comprovar criticitat, causalitat, concurrència i disrupció.'
        },
        {
          number: '04',
          title: 'Explicar',
          desc: 'Presentem conclusions raonades, degudament indexades i cronologies visuals dissenyades per ser enteses i defensades amb claredat.'
        }
      ],
      methodologyBadge: 'Seqüència analítica en 6 fases',
      methodologyTitle: 'El nostre procés metodològic complet',
      methodologySteps: [
        {
          number: '01',
          title: 'Comprensió del projecte i de l\'abast',
          desc: 'Clarificació de les regles contractuals d\'EOT i programa d\'obra (FIDIC, NEC3/NEC4, JCT o a mida), premisses de línia base i qüestions tècniques en disputa.'
        },
        {
          number: '02',
          title: 'Auditoria de programes d\'obra i registres',
          desc: 'Revisió d\'arxius nadius en Oracle Primavera P6, Asta Powerproject o Microsoft Project, actualitzacions d\'avanç, diaris d\'obra, assignacions, RFI i correspondència.'
        },
        {
          number: '03',
          title: 'Selecció de la metodologia adequada',
          desc: 'Elecció de la tècnica prospectiva o retrospectiva adient (Windows, Time Slice, TIA o Longest Path) d\'acord amb SCL Delay and Disruption Protocol i AACE International Recommended Practices RP 29R-03.'
        },
        {
          number: '04',
          title: 'Identificació i mapeig d\'esdeveniments de retard',
          desc: 'Determinació cronològica de variacions, lliuraments tardans de disseny, condicions geotècniques imprevistes, restriccions d\'accés i incidències atribuïbles al contractista.'
        },
        {
          number: '05',
          title: 'Comprovació del camí crític i dret',
          desc: 'Determinació del camí crític coetani, quantificació dels períodes de retard crític i avaluació de concurrència o retards de ritme.'
        },
        {
          number: '06',
          title: 'Preparació d\'informes clars i defensables',
          desc: 'Lliurament d\'informes pericials o tècnics estructurats amb resums executius clars, comparatives Gantt i cites explícites als registres.'
        }
      ],
      ctaBox: {
        title: 'Parlem del programa d\'obra del seu projecte',
        desc: 'Conversi amb Joan A. Perelló per revisar els registres disponibles del seu projecte i determinar l\'enfocament analític més adient.',
        button: 'Parlem del seu projecte'
      }
    },
    experience: {
      badge: 'Projectes i sectors',
      title: 'Experiència multisectorial en projectes',
      subtitle: 'Experiència en planificació, enginyeria civil i anàlisi forense de retards en edificació complexa, infraestructures i desenvolupaments crítics.',
      frameworkIntro: 'Cada tipologia de projecte comporta interfícies tècniques, seqüències de contractació i entorns documentals diferents:',
      sectorsTitle: 'Tipologies principals de projecte',
      typicalDelayLabel: 'Causes habituals de retard en aquest tipus de projecte:',
      sectorBreadthTitle: 'Sectors d\'experiència',
      sectorTags: [
        'Centres de dades',
        'Hospitals i sanitat',
        'Infraestructures civils',
        'Infraestructures ferroviàries',
        'Projectes d\'aviació',
        'Infraestructures hidràuliques i canonades',
        'Projectes industrials',
        'Desenvolupaments d\'ús mixt',
        'Promocions residencials',
        'Centres residencials assistits (Extra Care)',
        'Aparcaments subterranis'
      ],
      scaleTitle: 'Escala i complexitat representativa de projectes',
      scaleDisclaimer: 'Els exemples citats reflecteixen l\'escala i complexitat de projectes en què Joan A. Perelló ha exercit funcions de planificació, enginyeria o anàlisi de retards, sense divulgar informació confidencial dels mateixos.',
      scaleHighlights: [
        {
          figure: '120 MW / ~€1.2bn',
          label: 'Campus de centre de dades hyperscale',
          context: 'Experiència en planificació i programa d\'obra en construcció de campus crítics a gran escala i alta intensitat elèctrica i MEP.'
        },
        {
          figure: '~£300m',
          label: 'Nou desenvolupament hospitalari (Anglaterra)',
          context: 'Experiència en gran construcció sanitària aguda al Regne Unit amb serveis clínics complexos i interfícies multinivell.'
        },
        {
          figure: `${YEARS_EXPERIENCE}+ anys`,
          label: 'Enginyeria civil i construcció',
          context: 'Experiència en enginyeria, execució a peu d\'obra, planificació i anàlisi forense de retards en obres públiques i privades al Regne Unit, Europa i Orient Mitjà.'
        }
      ],
      imageAlt: 'Vista aèria monocroma d\'un centre de dades hyperscale i instal·lacions mecàniques industrials',
      imageCaption: 'Infraestructures crítiques i industrials',
      imageLocation: 'Escala i complexitat tècnica',
      sectors: [
        {
          title: 'Infraestructures civils, ferrocarril, aviació i aigua',
          description: 'Corredors lineals de transport, infraestructures ferroviàries i aeroportuàries, xarxes d\'aigua, canonades i estructures civils subterrànies amb complexes interfícies de tercers.',
          delayTypes: 'Retards en permisos, desviaments de serveis afectats, condicions geotècniques imprevistes, canvis de disseny.'
        },
        {
          title: 'Hospitals, residencial, centres assistencials i ús mixt',
          description: 'Hospitals d\'aguts, residencial en alçada, centres assistencials i edificis d\'ús mixt que requereixen coordinació intensiva d\'instal·lacions i lliuraments per fases.',
          delayTypes: 'Paquets de disseny tardans, colls d\'ampolla en subministraments, interferències entre oficis, incidències en posada en servei i llicències.'
        },
        {
          title: 'Centres de dades i instal·lacions industrials',
          description: 'Centres de dades hyperscale i instal·lacions industrials on els equips amb llarg termini de lliurament, l\'alta tensió i les proves marquen el camí crític.',
          delayTypes: 'Lliurament tardà d\'equips crítics, coordinació amb proveïdors tecnològics, contratemps en proves i posada en servei.'
        }
      ],
      confidentialityBadge: 'Parlem del seu projecte',
      futureCasesNote: 'Contacti amb nosaltres per comentar la tipologia del seu projecte, els programes d\'obra disponibles i les seves qüestions concretes de retard o disrupció.',
      contactButton: 'Contactar amb FidePath'
    },
    finalCta: {
      badge: 'Consulta inicial',
      title: 'Necessita una anàlisi tècnica clara i independent sobre un projecte retardat?',
      text: 'Tant si representa un despatx d\'advocats en una disputa formal, un propietari d\'obra que revisa una reclamació EOT o un contractista que avalua retards i disrupció, posi\'s en contacte directament amb Joan A. Perelló.',
      button: 'Parlem del seu projecte'
    },
    about: {
      badge: 'Sobre FidePath i el fundador',
      title: 'Perspectiva independent. Profunditat tècnica i forense.',
      subtitle: 'FidePath Expert Services va ser fundada per l\'enginyer civil Joan A. Perelló per oferir anàlisis de retards i suport pericial rigorós, clar i independent.',
      p1: 'FidePath Expert Services és una consultora especialitzada independent dedicada a l\'anàlisi de retards en construcció, planificació forense, avaluacions d\'ampliació de termini (EOT), anàlisi de disrupció i suport en reclamacions i controvèrsies.',
      p2: 'A diferència de les enginyeries generalistes o constructores, la nostra pràctica se centra exclusivament a ajudar despatxos d\'advocats, promotors, desenvolupadors, contractistes principals i subcontractistes a comprendre les causes tècniques i conseqüències contractuals del retard i la disrupció.',
      p3: 'El nostre treball tendeix un pont entre la realitat constructiva de l\'obra i l\'anàlisi forense del programa d\'obra, combinant fonaments d\'enginyeria civil, planificació pràctica i investigació disciplinada dels registres coetanis del projecte.',
      p4: 'Creiem que l\'assessorament tècnic pericial ha de ser independent, objectiu i presentar-se amb la claredat suficient perquè advocats, àrbitres, adjudicadors i directors comercials puguin recolzar-s\'hi sense ambigüitats.',
      p5: 'Operant des de Palma amb vocació internacional, FidePath dóna suport a assumptes a Espanya, el Regne Unit, Europa i Orient Mitjà.',
      foundationsTitle: 'Pilars de la pràctica',
      foundations: [
        'Estricta independència i imparcialitat fàctica',
        'Enginyeria civil i comprensió real de l\'obra',
        'Traçabilitat forense de programes d\'obra i registres',
        'Informes clars per a tribunals i direcció lletrada'
      ],
      structuralImageAlt: 'Façana d\'edifici amb estructura de formigó i arriostraments d\'acer',
      impartialityTitle: 'Imparcialitat tècnica',
      impartialityQuote: 'El nostre deure es deu als fets acreditats pels registres coetanis del projecte. Lliurem avaluacions tècniques objectives preparades per resistir l\'escrutini.',
      founderSectionBadge: 'Fundador i director',
      founderSectionTitle: 'Joan A. Perelló — Enginyer civil i analista de retards',
      founderName: 'Joan A. Perelló',
      founderRole: 'Fundador, enginyer civil i analista de retards',
      founderBadge: `Fundada el ${formatFounded('ca')}`,
      founderBio1: `Joan A. Perelló és enginyer civil amb més de ${YEARS_EXPERIENCE} anys d'experiència en enginyeria civil i construcció, incloent planificació forense i anàlisi de retards en projectes al Regne Unit, Europa i Orient Mitjà. La seva carrera abasta estudis de viabilitat, disseny detallat, planificació de projectes, execució en obra i anàlisi forense de disputes, fet que li proporciona una comprensió sòlida de com funcionen els programes d'obra en entorns constructius reals.`,
      founderBio2: `Especialitzat en anàlisi de retards i planificació forense, va fundar FidePath Expert Services el ${formatFounded('ca')} per prestar assessorament tècnic focalitzat i independent i serveis pericials de retards.`,
      consiliumNoteTitle: 'Col·laboració externa — Consilium',
      consiliumNoteText: 'Des de febrer de 2026, Joan també actua com a Associate Director amb Consilium en disputes al Regne Unit i Europa. Es tracta d\'una col·laboració professional externa; FidePath Expert Services opera estrictament com a consultora independent i no pertany al mateix grup empresarial.',
      founderFields: {
        focusLabel: 'Especialització',
        focusValue: 'Anàlisi de retards i planificació forense',
        experienceLabel: 'Experiència',
        experienceValue: `${YEARS_EXPERIENCE}+ anys en enginyeria civil i construcció`,
        regionsLabel: 'Àmbit geogràfic',
        regionsValue: 'Regne Unit, Europa i Orient Mitjà',
        contactLabel: 'Contacte directe'
      },
      expertExperience: {
        badge: 'Trajectòria en disputes i adjudicació',
        title: 'Experiència com a expert en retards i en disputes formals',
        subtitle: 'Experiència pràctica en fòrums formals de resolució de disputes, investigació fàctica i revisió crítica d\'arguments tècnics contraris.',
        highlights: [
          {
            title: 'Expert designat en dues adjudicacions',
            detail: 'Va actuar com a expert designat en anàlisi de retards en dos procediments d\'adjudicació (procediment d\'adjudication del Regne Unit), preparant avaluacions de retard i conclusions independents.'
          },
          {
            title: 'Col·laboració en múltiples fòrums de disputa',
            detail: 'Va preparar informes pericials sota revisió d\'expert sènior i va col·laborar estretament amb experts designats en adjudication, arbitratge, Juntes de Resolució de Disputes (DAB) i procediments judicials.'
          },
          {
            title: 'Investigació forense i redacció tècnica',
            detail: 'Va dur a terme investigacions fàctiques detallades, reconstruccions forenses de programes d\'obra i redacció d\'informes tècnics fonamentats en proves coetànies d\'obra.'
          },
          {
            title: 'Contrainformes i auditories de determinacions EOT',
            detail: 'Va respondre a informes pericials de retard de la part contrària i va revisar determinacions d\'ampliació de termini (EOT) emeses per contract administrators.'
          }
        ]
      },
      languages: {
        badge: 'Idiomes i col·laboració internacional',
        title: 'Treball transfronterer i entre jurisdiccions contractuals',
        subtitle: 'Comunicació directa amb clients internacionals, equips d\'obra, contract administrators i direcció lletrada sense barreres lingüístiques.',
        items: [
          { language: 'Anglès', level: 'Fluid' },
          { language: 'Castellà', level: 'Fluid' },
          { language: 'Català', level: 'Fluid' },
          { language: 'Portuguès', level: 'Conversacional' }
        ]
      },
      ctaBox: {
        title: 'Parlem de la seva disputa constructiva o assumpte de retards',
        desc: 'Contacti directament amb Joan A. Perelló per concertar una consulta inicial sobre la documentació del seu projecte i les qüestions de programa d\'obra.',
        button: 'Contactar amb FidePath'
      }
    },
    contact: {
      badge: 'Consulta inicial',
      title: 'Parlem del seu projecte',
      subtitle: 'Compartiu una breu descripció del vostre projecte, el context contractual i les qüestions de retard o disrupció que necessiteu abordar.',
      directContactTitle: 'Dades de contacte directe',
      emailLabel: 'Correu electrònic',
      phoneLabel: 'Telèfon',
      locationLabel: 'Ubicació',
      locationValue: 'Palma, Illes Balears',
      linkedinLabel: 'LinkedIn',
      confidentialityTitle: 'Confidencialitat i no divulgació:',
      confidentialityText: 'Tota la documentació del projecte, programes d\'obra i converses inicials es tracten amb estricta confidencialitat professional.',
      procedureTitle: 'Procés de consulta inicial',
      procedureSteps: [
        '1. Comprovació de conflictes d\'interessos i revisió inicial de dates clau, modalitat contractual i programes d\'obra disponibles.',
        '2. Identificació de la metodologia forense de retard o disrupció adient.',
        '3. Proposta d\'abast i honoraris clara i proporcionada.'
      ],
      form: {
        firstName: 'Nom',
        firstNamePlaceholder: 'p. ex. Joan',
        lastName: 'Cognoms',
        lastNamePlaceholder: 'p. ex. Perelló',
        company: 'Empresa / Despatx d\'advocats',
        companyPlaceholder: 'p. ex. Constructora Balear S.L.',
        email: 'Correu electrònic',
        emailPlaceholder: 'nom@empresa.com',
        phone: 'Telèfon',
        phoneOptional: '(opcional)',
        phonePlaceholder: '+34 600 000 000',
        subject: 'Assumpte',
        subjectPlaceholder: 'p. ex. Revisió EOT o anàlisi de retards en obra hospitalària',
        assistanceType: 'Tipus d\'assistència requerida',
        assistanceSelectDefault: '-- Seleccioni assistència --',
        assistanceOptions: [
          { value: 'Construction Delay Analysis', label: 'Anàlisi de retards en construcció' },
          { value: 'Extension of Time Assessment', label: 'Avaluació d\'ampliació de termini (EOT)' },
          { value: 'Disruption Analysis', label: 'Anàlisi de disrupció en construcció' },
          { value: 'Independent Expert Reports', label: 'Informes pericials independents' },
          { value: 'Construction Claims & Dispute Support', label: 'Suport en reclamacions i controvèrsies' },
          { value: 'Other', label: 'Altre' }
        ],
        projectDescription: 'Resum del projecte i qüestions clau',
        projectDescriptionPlaceholder: 'Indiqui el tipus de projecte, forma contractual (p. ex. FIDIC, NEC3/NEC4, JCT), dates clau, programes d\'obra disponibles i qüestions de retard o disputa...',
        privacyText: 'Accepto el tractament de les meves dades de contacte d\'acord amb la',
        privacyLink: 'Política de Privadesa',
        submitButton: 'Sol·licitar una consulta inicial',
        submitting: 'Enviant consulta...',
        successTitle: 'Consulta rebuda',
        successMessage: 'Gràcies per contactar amb FidePath Expert Services. La seva consulta ha estat registrada de manera segura i remesa a Joan A. Perelló.',
        successFollowUp: 'Revisarem el seu assumpte, farem una comprovació preliminar de conflictes i respondrem per correu electrònic o telèfon en un termini de 24 a 48 hores laborables.',
        referenceCodeLabel: 'Codi de referència de la consulta',
        submitAnother: 'Enviar una altra consulta',
        errorGeneral: 'S\'ha produït un error en enviar el seu missatge. Si us plau, verifiqui els camps o contacti\'ns directament a joan.perello@fidepath.com.',
        secureNotice: 'Consulta inicial confidencial · Revisió amb control de conflictes',
        validation: {
          firstName: 'El nom és obligatori.',
          lastName: 'Els cognoms són obligatoris.',
          company: 'El nom de l\'empresa o despatx és obligatori.',
          email: 'Es requereix una adreça de correu corporativa o professional vàlida.',
          subject: 'L\'assumpte és obligatori.',
          assistanceType: 'Si us plau, seleccioni el tipus d\'assistència requerida.',
          projectDescription: 'Descrigui breument el seu projecte o assumpte (mínim 15 caràcters).',
          privacyConsent: 'Ha d\'acceptar la política de privadesa per enviar la seva consulta.'
        }
      }
    },
    footer: {
      brandDesc: 'Consultora independent especialitzada en planificació forense, anàlisi de retards en construcció, avaluacions EOT, disrupció i suport pericial en controvèrsies.',
      quickLinks: 'Navegació',
      services: 'Serveis',
      contactInfo: 'Contacte',
      discussButton: 'Contactar amb FidePath',
      privacyPolicy: 'Política de Privadesa',
      cookiePolicy: 'Política de Cookies',
      legalNotice: 'Avís Legal'
    },
    legal: {
      badge: 'Informació legal i compliment',
      returnHome: '← Tornar a l\'inici',
      lastUpdated: 'Darrera actualització: 2026',
      underConstructionTitle: 'Pàgina en construcció',
      underConstructionDesc: 'Aquesta pàgina d\'avís legal i compliment normatiu es troba actualment en preparació i es publicarà properament.',
      privacy: {
        title: 'Política de Privadesa',
        disclaimer: 'Avís: Aquest marc de privadesa reflecteix el Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD).',
        sections: []
      },
      cookies: {
        title: 'Política de Cookies',
        sections: []
      },
      legalNotice: {
        title: 'Avís Legal',
        disclaimer: 'Avís Legal: En compliment de la Llei 34/2002 (LSSI-CE).',
        sections: []
      }
    },
    meta: {
      pageTitles: {
        home: 'FidePath Expert Services — Planificació forense i anàlisi de retards en construcció',
        about: 'Sobre Joan A. Perelló — FidePath Expert Services',
        services: 'Serveis especialitzats en retards i disputes — FidePath Expert Services',
        approach: 'El nostre mètode, capacitats i estàndards — FidePath Expert Services',
        contact: 'Parlem del seu projecte — FidePath Expert Services',
        privacy: 'Política de Privadesa — FidePath Expert Services',
        cookies: 'Política de Cookies — FidePath Expert Services',
        legal: 'Avís Legal — FidePath Expert Services'
      },
      pageDescriptions: {
        home: 'Consultora tècnica independent especialitzada en anàlisi de retards en construcció, planificació forense, avaluacions d\'ampliació de termini (EOT), disrupció i informes pericials independents.',
        about: `Perfil de l'enginyer civil i analista de retards Joan A. Perelló: més de ${YEARS_EXPERIENCE} anys en enginyeria civil i construcció, incloent planificació forense i anàlisi de retards al Regne Unit, Europa i Orient Mitjà.`,
        services: 'Anàlisi de retards en construcció, avaluacions EOT, anàlisi de disrupció, informes pericials independents i suport en controvèrsies per a despatxos, promotors i contractistes.',
        approach: 'Metodologies forenses de retard (As-Planned versus As-Built Windows Analysis, Time Slice Windows Analysis, TIA, Retrospective Longest Path Analysis), Oracle Primavera P6, Asta Powerproject i Microsoft Project.',
        contact: 'Contacti amb FidePath Expert Services i Joan A. Perelló per tractar les seves necessitats d\'anàlisi de retards, EOT o suport en controvèrsies.',
        privacy: 'Política de Privadesa de FidePath Expert Services.',
        cookies: 'Política de Cookies de FidePath Expert Services.',
        legal: 'Avís Legal de FidePath Expert Services.'
      }
    }
  }
};
