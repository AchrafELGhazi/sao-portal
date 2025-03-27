import { TrendingUp, Award, Heart, Globe } from 'lucide-react';
import { ImpactMetric } from '@/types/interfaces';

export const impactMetrics: ImpactMetric[] = [
  {
    metric: '87%',
    label: 'of graduates report SAO involvement improved their leadership skills',
    icon: TrendingUp,
  },
  {
    metric: '92%',
    label: 'of employers value our students extracurricular experiences',
    icon: Award,
  },
  {
    metric: '35+',
    label: 'community service projects completed annually',
    icon: Heart,
  },
  {
    metric: '70+',
    label: 'global partnerships with universities and organizations',
    icon: Globe,
  },
];