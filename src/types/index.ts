export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  highlightColor?: string;
}

export interface BentoFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  iconName: string;
  colSpan: string;
  badgeText?: string;
  metric?: string;
  metricLabel?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  verified: boolean;
  metricsResult?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security' | 'Integration' | 'Billing';
}

export interface LiveMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
}
