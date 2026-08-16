import { ProjectCaseStudy, Competency, TimelinePhase, Testimonial, AdvisoryOption } from '../types';

export const PERSONAL_INFO = {
  name: "SILASHI GERBI NEGASSA",
  shortName: "Silashi Gerbi",
  monogram: "SGN",
  title: "Senior Pharmaceutical Executive",
  tagline: "16+ Years of Multidisciplinary Leadership Across the Pharmaceutical Value Chain",
  location: "Addis Ababa, Ethiopia",
  email: "silasman005@gmail.com",
  phone: "+251 921 861 521",
  rawPhone: "+251921861521",
  telegram: "Brave40759",
  telegramUrl: "https://t.me/Brave40759",
  linkedin: "http://www.linkedin.com/in/sileshi-gerbi-2442a6251",
  photoUrl: "/sile.png",
  avatarUrl: "/sile.png",
  fullPhotoUrl: "/sile.png",
  summary: "A results-driven professional with 16+ years bridging clinical science and commercial strategy across the pharmaceutical ecosystem. Expert in commercial management, WHO-GDP regulatory compliance, wholesale enterprise setup, and national healthcare development.",
  stats: {
    yearsExperience: "16+",
    productsRegistered: "50+",
    turnoverManaged: "$25M+",
    marketShareGrowth: "30%",
    partnerSatisfaction: "98%",
    partnersReached: "60+"
  }
};

export const PARTNER_LOGOS = [
  { name: "Ethiopian Pharmaceuticals Supply Agency (EPSA)", category: "Gov & National Supply" },
  { name: "Ministry of Health Ethiopia (MOH)", category: "Public Health" },
  { name: "Novartis Access Program", category: "Global Multinational" },
  { name: "Pfizer Essential Health", category: "Multinational Pharma" },
  { name: "Cadila Pharmaceuticals", category: "Manufacturer" },
  { name: "Julphar East Africa", category: "Regional Production" },
  { name: "Sandoz Biopharma", category: "Biosimilars & Generics" },
  { name: "WHO Good Distribution Network", category: "Quality & Standards" },
  { name: "EFDA Regulatory Compliance", category: "Regulatory Authority" },
  { name: "Ewket Wholesale Pharmaceuticals", category: "Wholesale & Logistics" },
  { name: "Addis Ababa Health Bureau", category: "Regional Directorate" },
  { name: "Tikur Anbessa Specialized Hospital", category: "Tertiary Healthcare" }
];

export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "wholesale-setup",
    title: "Establishing a Pharmaceutical Wholesale Company",
    category: "Operations & Enterprise Setup",
    year: "2021 – 2023",
    metric: "100%",
    metricLabel: "Turnkey GxP Certification & Licensing",
    icon: "📦",
    featured: true,
    summary: "Led the end-to-end establishment of a licensed pharmaceutical wholesale distribution company, spanning regulatory approval, facility architecture, cold-chain deployment, and operational launch.",
    fullDescription: "Spearheaded the complete conceptualization, capital budgeting, EFDA licensing, standard operating procedures (SOPs) development, and warehouse design for a high-capacity pharmaceutical wholesale firm. Implemented digital ERP inventory tracking and temperature-monitored cold storage preserving pharmaceutical stability.",
    challenge: "Navigating stringent EFDA regulatory requirements, securing cold chain reliability under erratic power grids, and recruiting a qualified technical pharmacy personnel team.",
    strategy: [
      "Designed warehouse floor layout adhering strictly to WHO-Good Distribution Practices (GDP).",
      "Drafted 45+ comprehensive SOPs covering receipt, quarantine, storage, temperature logging, and dispatch.",
      "Integrated dual backup generator systems and real-time IoT temperature/humidity telemetric sensors.",
      "Negotiated initial procurement contracts with 12 international and regional manufacturers."
    ],
    outcomes: [
      "Achieved first-round EFDA wholesale operational license without inspection citations.",
      "Generated over $4.2M in distribution volume within the first 14 months of operation.",
      "Maintained 0% temperature-excursion inventory waste across high-value biopharmaceuticals."
    ],
    tags: ["WHO-GDP", "Turnkey Setup", "Cold Chain", "EFDA Licensing", "Supply Chain"]
  },
  {
    id: "product-registration-portfolio",
    title: "Managing a 50+ Product Registration Portfolio",
    category: "Regulatory Affairs & Compliance",
    year: "2019 – Present",
    metric: "50+",
    metricLabel: "CTD Dossiers Approved by EFDA",
    icon: "📋",
    featured: true,
    summary: "Directed the regulatory submission, dossier compilation, query resolution, and post-market surveillance for over 50 essential and specialty medicines.",
    fullDescription: "Managed an expansive portfolio of Common Technical Document (CTD) dossiers submitted to the Ethiopian Food and Drug Authority (EFDA). Streamlined interactions between foreign manufacturing site auditors, local clinical experts, and government evaluation committees.",
    challenge: "Prolonged evaluation lead times, evolving local regulatory guidelines, and multi-country dossier format variances.",
    strategy: [
      "Instituted a rigorous pre-submission technical audit protocol for CTD Modules 1 through 5.",
      "Established proactive weekly touchpoints with regulatory assessment focal points for accelerated query closure.",
      "Coordinated GMP site inspection readiness and documentation for overseas manufacturing facilities."
    ],
    outcomes: [
      "Reduced dossier approval turnaround from an industry average of 18 months to under 9 months.",
      "Expanded client therapeutic reach into essential oncology, cardiovascular, and antibiotic categories.",
      "Zero product dossier rejections over 5 consecutive operational cycles."
    ],
    tags: ["Regulatory Affairs", "CTD Dossiers", "EFDA Approvals", "Pharmacovigilance", "GMP"]
  },
  {
    id: "sales-market-share",
    title: "Leading Sales Team to 30% Market Share Growth",
    category: "Commercial Strategy & Sales",
    year: "2017 – 2020",
    metric: "+30%",
    metricLabel: "Market Share Gain in Key Therapeutics",
    icon: "📈",
    featured: true,
    summary: "Restructured commercial strategy and coached a 24-person field sales force across 4 regional clusters, resulting in sustained double-digit revenue expansion.",
    fullDescription: "Formulated a physician-oriented scientific detailing approach combined with disciplined key account management across major teaching hospitals, regional referral centers, and private pharmacy networks.",
    challenge: "Intense price competition from generic imports and fragmented distributor reach in regional cities.",
    strategy: [
      "Segmented healthcare accounts based on clinical volume, key decision makers, and tender cycles.",
      "Conducted 30+ Continuing Medical Education (CME) scientific symposia with leading Key Opinion Leaders.",
      "Implemented CRM-driven visit frequency tracking and tiered incentive structures for sales representatives."
    ],
    outcomes: [
      "Captured #1 market position in cardiovascular and oral anti-diabetic segments.",
      "Elevated annual commercial turnover from $8.5M to over $14.2M.",
      "Improved field representative retention by 40% through targeted clinical coaching programs."
    ],
    tags: ["Commercial Leadership", "KOL Engagement", "Hospital Formulary", "Revenue Growth", "CME"]
  },
  {
    id: "who-gdp-implementation",
    title: "Implementing WHO-GDP Standards for National Distribution",
    category: "Quality Assurance & GxP",
    year: "2020 – 2022",
    metric: "100%",
    metricLabel: "Audit Compliance & Zero Recalls",
    icon: "🏥",
    featured: false,
    summary: "Engineered comprehensive Good Distribution Practice (GDP) protocols across central distribution centers and regional transit hubs.",
    fullDescription: "Designed and executed a full-scale quality management system (QMS) aligned with WHO Technical Report Series standards, ensuring medicines maintain safety, efficacy, and batch integrity from port of entry to dispensing counters.",
    challenge: "Complex logistics transit conditions, extreme ambient temperatures in lowland corridors, and legacy manual paper tracking.",
    strategy: [
      "Deployed automated temperature data loggers with cloud telemetry for active thermal vehicle tracking.",
      "Trained 80+ warehouse and logistics personnel on batch segregation, recall simulations, and spill response.",
      "Executed thermal mapping across 3,500 sq meters of warehouse capacity during summer and winter peaks."
    ],
    outcomes: [
      "Attained certified WHO-GDP compliance from multinational audit teams.",
      "Eliminated thermal excursion loss across temperature-sensitive biologicals and vaccines.",
      "Shortened order fulfillment cycle times by 35% with standardized pick-and-pack workflows."
    ],
    tags: ["WHO-GDP", "Quality Systems", "Cold Chain Logistics", "Thermal Mapping", "Auditing"]
  },
  {
    id: "clinical-protocols",
    title: "Developing Protocols for Regional Health Centers",
    category: "Public Health & Access",
    year: "2015 – 2017",
    metric: "120+",
    metricLabel: "Health Facilities Impacted",
    icon: "📋",
    featured: false,
    summary: "Collaborated with regional health directorates to formulate standardized dispensing, rational drug use, and stock replenishment protocols for primary healthcare facilities.",
    fullDescription: "Bridged the gap between central public health procurement and remote dispensary management, training clinical health officers and pharmacy technicians in rational antimicrobial stewardship and inventory forecasting.",
    challenge: "Stockouts of life-saving anti-infectives and maternal health supplies alongside improper storage in remote centers.",
    strategy: [
      "Developed visual SOP posters and quick-reference clinical dosage guides in local languages.",
      "Established minimum-maximum stock level calculation tools tailored for paper-based clinics.",
      "Conducted on-site supervisory visits across 4 regional zones."
    ],
    outcomes: [
      "Reduced stockout duration of priority maternal and child health medicines by 60%.",
      "Improved rational antibiotic prescription adherence by 45%.",
      "Established a reliable replenishment cadence connecting regional hubs with rural clinics."
    ],
    tags: ["Public Health", "Rational Drug Use", "Primary Healthcare", "Health Policy", "Access"]
  },
  {
    id: "therapeutic-launch",
    title: "Launching New Therapeutic Categories in East Africa",
    category: "Product Launch & Market Entry",
    year: "2018 – 2021",
    metric: "12",
    metricLabel: "First-to-Market Formulations",
    icon: "💊",
    featured: false,
    summary: "Led market entry strategy and clinical stakeholder engagement for breakthrough combination therapies in respiratory, cardiovascular, and oncology domains.",
    fullDescription: "Orchestrated cross-functional launch plans involving regulatory clearance, hospital tender submissions, medical advisory board formation, and distribution pipeline filling.",
    challenge: "High cost barriers for specialized biologics and limited clinician familiarity with new generation molecules.",
    strategy: [
      "Secured hospital formulary inclusion across 8 top-tier teaching institutions within 90 days of approval.",
      "Structured tiered patient access assistance programs in collaboration with hospital oncology committees.",
      "Published clinical comparison whitepapers for local medical societies."
    ],
    outcomes: [
      "Achieved 140% of first-year launch revenue forecasts.",
      "Trained over 350 physicians and clinical pharmacists through accredited educational forums.",
      "Enabled timely access to modern therapies for thousands of chronic disease patients."
    ],
    tags: ["Market Access", "Product Launch", "Hospital Tenders", "Scientific Detailing", "Biotech"]
  }
];

export const COMPETENCIES: Competency[] = [
  {
    id: "commercial-leadership",
    title: "Commercial & Sales Leadership",
    subtitle: "Driving sustainable revenue, hospital formulary access, and field execution.",
    icon: "TrendingUp",
    tag: "Commercial Strategy",
    metrics: [
      { label: "Market Growth", value: "+30%" },
      { label: "Annual Revenue", value: "$25M+" },
      { label: "Accounts Led", value: "200+" }
    ],
    description: "Architecting high-performance commercial organizations that align clinical value propositions with robust market access, key account relationship building, and distributor management.",
    keyCapabilities: [
      "Strategic revenue forecasting & commercial budgeting",
      "Hospital formulary inclusion & public tender participation",
      "Key Opinion Leader (KOL) relationship management & advisory boards",
      "Sales force recruitment, territory design, and performance coaching",
      "Pricing strategy, margin optimization, and distributor contracts"
    ],
    toolsAndStandards: [
      "Pharma CRM & Territory Analytics",
      "Tender & Institutional Bidding",
      "Formulary Dossiers & Value Proposition",
      "Continuing Medical Education (CME)"
    ]
  },
  {
    id: "technical-ops",
    title: "Technical & Operational Management",
    subtitle: "Building resilient wholesale infrastructure and cold chain excellence.",
    icon: "ShieldCheck",
    tag: "Operations & GxP",
    metrics: [
      { label: "WHO-GDP Compliance", value: "100%" },
      { label: "Zero Spoilage", value: "0% Waste" },
      { label: "Wholesale Startups", value: "Turnkey" }
    ],
    description: "Designing, licensing, and managing end-to-end pharmaceutical supply chains, from international import clearance to temperature-controlled warehouse logistics and pharmacy distribution.",
    keyCapabilities: [
      "Wholesale enterprise design, licensing, and facility commissioning",
      "WHO-Good Distribution Practice (GDP) & GxP QMS implementation",
      "Cold-chain management, validation, and real-time IoT temperature tracking",
      "Standard Operating Procedures (SOP) authoring and staff qualification",
      "Inventory optimization, FEFO batch tracking, and recall readiness"
    ],
    toolsAndStandards: [
      "WHO TRS 957 / 996 Guidelines",
      "IoT Cold-Chain Telemetry",
      "GxP Warehouse Architecture",
      "ERP Inventory Management"
    ]
  },
  {
    id: "regulatory-development",
    title: "Regulatory & Healthcare Development",
    subtitle: "Navigating EFDA frameworks and advancing national health accessibility.",
    icon: "FileCheck",
    tag: "Regulatory Affairs",
    metrics: [
      { label: "Dossiers Cleared", value: "50+" },
      { label: "Approval Cycle", value: "<9 Mos" },
      { label: "Policy Dialogues", value: "National" }
    ],
    description: "Liaising with government regulators, healthcare ministries, and international manufacturers to accelerate drug registration and ensure uncompromising pharmacovigilance.",
    keyCapabilities: [
      "CTD format dossier compilation (Modules 1–5) and submission",
      "EFDA regulatory query management and accelerated approvals",
      "Foreign manufacturing site GMP inspection coordination",
      "Post-market surveillance, adverse drug reaction reporting, and quality audits",
      "Health systems strengthening and national essential medicine policy collaboration"
    ],
    toolsAndStandards: [
      "ICH-CTD Guidelines",
      "EFDA Regulatory Portal",
      "Pharmacovigilance Reporting",
      "MoH Essential Medicines List"
    ]
  }
];

export const CAREER_JOURNEY: TimelinePhase[] = [
  {
    id: 1,
    period: "Phase 1 • 4+ Years",
    phaseTitle: "Pharmacy Practice & Clinical Foundations",
    role: "Pharmacist-in-Charge & Clinical Dispenser",
    organizationType: "Retail & Government Health Centers",
    description: "Grounding in clinical dispensing, rational medicine use, patient counseling, formulary management, and community health dynamics.",
    highlights: [
      "Managed dispensary operations serving 150+ daily patients across primary care facilities.",
      "Implemented strict inventory controls preventing expired medication waste.",
      "Collaborated with clinical teams on rational antimicrobial stewardship."
    ],
    keyCompetency: "Clinical Pharmacology & Patient Care"
  },
  {
    id: 2,
    period: "Phase 2 • 3+ Years",
    phaseTitle: "Medical Promotion & Scientific Detailing",
    role: "Senior Medical Representative",
    organizationType: "Multinational & Regional Pharmaceutical Companies",
    description: "Delivering evidence-based clinical presentations to physicians, medical directors, and hospital formulary committees.",
    highlights: [
      "Exceeded quarterly sales targets by 135% across key anti-infective and cardiovascular portfolios.",
      "Organized high-impact medical roundtables and symposiums for 200+ clinicians.",
      "Pioneered account-based detailing strategy in premier teaching hospitals."
    ],
    keyCompetency: "Scientific Promotion & Physician Engagement"
  },
  {
    id: 3,
    period: "Phase 3 • 9+ Combined Years",
    phaseTitle: "Sales & Technical Management",
    role: "Sales Manager, Technical Director & Wholesale Operations Lead",
    organizationType: "Leading Wholesale & Distribution Enterprises",
    description: "Leading multi-department teams across commercial sales, regulatory submissions, warehouse operations, and supply chain expansion.",
    highlights: [
      "Successfully launched a newly licensed pharmaceutical wholesale enterprise from concept to profitability.",
      "Achieved EFDA approval for 50+ pharmaceutical products with zero rejection rate.",
      "Scaled commercial operations to over $25M in cumulative distribution turnover."
    ],
    keyCompetency: "Enterprise Wholesale & GxP Regulatory Compliance"
  },
  {
    id: 4,
    period: "Phase 4 • Current",
    phaseTitle: "Executive Leadership & Strategic Advisory",
    role: "Senior Pharmaceutical Executive & Strategic Consultant",
    organizationType: "Executive Advisory & Market Access",
    description: "Providing high-level counsel to international pharmaceutical manufacturers, regional distributors, and health institutions entering or expanding across East Africa.",
    highlights: [
      "Advising multinational brands on regulatory navigation, partner selection, and local market access.",
      "Serving as trusted bridge between clinical requirements, government standards, and commercial execution.",
      "Fostering strategic alliances with health authorities, hospital networks, and wholesale partners."
    ],
    keyCompetency: "Strategic Governance & Value Chain Leadership"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Silashi's deep mastery of Ethiopian pharmaceutical regulations and WHO-GDP standards made our wholesale establishment seamless. His meticulous attention to GxP compliance and commercial strategy is unparalleled in the region.",
    author: "Dr. Tadesse Bekele",
    title: "Medical Director & Former MOH Advisor",
    organization: "Central Healthcare Alliance",
    rating: 5,
    partnershipType: "Regulatory & Quality Advisory"
  },
  {
    id: "test-2",
    quote: "Under Silashi's leadership, our product portfolio achieved record market penetration in record time. He combines scientific clinical rigour with genuine commercial acumen, earning the absolute trust of both physicians and distributor heads.",
    author: "Abebe Hailemariam",
    title: "Managing Director",
    organization: "Ethio-Pharma Wholesale Logistics",
    rating: 5,
    partnershipType: "Wholesale & Commercial Distribution"
  },
  {
    id: "test-3",
    quote: "Securing fast-track CTD dossier approvals in complex regulatory environments requires both technical precision and respected authority. Silashi delivered on every milestone with zero citations.",
    author: "Elena Rostova",
    title: "Head of International Market Access",
    organization: "Global Generics & Biosimilars Group",
    rating: 5,
    partnershipType: "Regulatory Affairs & Product Registration"
  }
];

export const ADVISORY_OPTIONS: AdvisoryOption[] = [
  {
    id: "market-entry",
    title: "Market Entry & Partner Identification",
    description: "Comprehensive landscape analysis, distributor vetting, and commercial launch roadmap for international pharma brands.",
    icon: "Compass",
    typicalDuration: "4 – 8 Weeks",
    deliverables: [
      "Market demand & competitor pricing intelligence",
      "Vetted distributor due diligence reports",
      "Formulary & tender eligibility assessment",
      "Comprehensive go-to-market execution blueprint"
    ]
  },
  {
    id: "regulatory-dossier",
    title: "EFDA Regulatory Clearance & CTD Dossiers",
    description: "End-to-end dossier review, local regulatory agent representation, and expedited submission management.",
    icon: "FileCheck",
    typicalDuration: "3 – 6 Months",
    deliverables: [
      "CTD Module 1–5 pre-submission audit",
      "EFDA submission and focal point query management",
      "Foreign GMP inspection facilitation",
      "Marketing authorization & renewal maintenance"
    ]
  },
  {
    id: "wholesale-gxp",
    title: "Wholesale Startup & WHO-GDP Audit",
    description: "Turnkey design, licensing, and quality management setup for pharmaceutical wholesale and cold-chain facilities.",
    icon: "Boxes",
    typicalDuration: "8 – 16 Weeks",
    deliverables: [
      "GxP warehouse layout & cold storage specs",
      "Complete set of 40+ customized SOPs",
      "Thermal mapping & IoT sensor integration",
      "Audit readiness & regulatory inspection defense"
    ]
  },
  {
    id: "sales-restructure",
    title: "Commercial Strategy & Sales Force Optimization",
    description: "Restructuring medical detailing teams, compensation frameworks, and hospital tender capture systems.",
    icon: "TrendingUp",
    typicalDuration: "4 – 12 Weeks",
    deliverables: [
      "Hospital account segmentation & targeting matrices",
      "Scientific detailing playbooks for sales reps",
      "KOL engagement & CME event architecture",
      "Incentive structures tied to high-margin SKUs"
    ]
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Fast Turnaround",
    tagline: "Agile Execution",
    description: "Accelerated regulatory filings and operational launches without bureaucratic lag."
  },
  {
    title: "Results Focused",
    tagline: "Measurable Impact",
    description: "16+ years of proven commercial growth, market leadership, and zero-defect compliance."
  },
  {
    title: "Unwavering Quality",
    tagline: "Strict WHO-GDP Standards",
    description: "Uncompromising adherence to international GxP, patient safety, and ethics."
  },
  {
    title: "Full Support",
    tagline: "End-to-End Partnership",
    description: "From strategic blueprint to on-the-ground warehouse commissioning and market capture."
  }
];
