export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  metricLabel: string;
  icon: string;
  summary: string;
  fullDescription: string;
  challenge: string;
  strategy: string[];
  outcomes: string[];
  tags: string[];
  featured?: boolean;
}

export interface Competency {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  tag: string;
  metrics: { label: string; value: string }[];
  description: string;
  keyCapabilities: string[];
  toolsAndStandards: string[];
}

export interface TimelinePhase {
  id: number;
  period: string;
  phaseTitle: string;
  role: string;
  organizationType: string;
  description: string;
  highlights: string[];
  keyCompetency: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  rating: number;
  partnershipType: string;
}

export interface AdvisoryOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  typicalDuration: string;
  deliverables: string[];
}
