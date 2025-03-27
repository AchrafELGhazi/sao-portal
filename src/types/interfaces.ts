import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string;
  contact: string;
}

export interface TeamData {
  id: number;
  semester: string;
  admins: string[];
  leaders: string[];
}

export interface ImpactMetric {
  metric: string;
  label: string;
  icon: LucideIcon;
  color?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface Program {
  title: string;
  description: string;
  icon: LucideIcon;
  stats: string;
  color?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}