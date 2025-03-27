import { Star, Globe, Heart, Zap } from 'lucide-react';
import { Program } from '@/types/interfaces';

export const programs: Program[] = [
  {
    title: 'Leadership Academy',
    description: 'A semester-long program training the next generation of campus leaders',
    icon: Star,
    stats: '350+ graduates since inception',
  },
  {
    title: 'Global Ambassador Program',
    description: 'Representing AUI at international conferences and cultural exchanges',
    icon: Globe,
    stats: '25 countries visited in the last academic year',
  },
  {
    title: 'Social Impact Initiative',
    description: 'Student-led community service projects addressing local challenges',
    icon: Heart,
    stats: '12,000+ volunteer hours contributed annually',
  },
  {
    title: 'Entrepreneurship Incubator',
    description: 'Supporting student startups from concept to launch',
    icon: Zap,
    stats: '18 successful ventures founded through this program',
  },
];