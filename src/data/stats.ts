import { Calendar, Users } from 'lucide-react';
import { StatItem } from '@/types/interfaces';

export const stats: StatItem[] = [
  {
    value: '20+',
    label: 'Years of Excellence',
    icon: Calendar,
    color: 'text-[#fd5f00]',
    description: 'Established in 2003, serving the AUI community',
  },
  {
    value: '52',
    label: 'Student Organizations',
    icon: Users,
    color: 'text-[#fd5f00]',
    description: 'Active clubs covering academics, culture, sports & more',
  },
  {
    value: '1,207',
    label: 'Annual Events',
    icon: Calendar,
    color: 'text-[#fd5f00]',
    description: 'Workshops, conferences, cultural events & celebrations',
  },
  {
    value: '11,250+',
    label: 'Student Participants',
    icon: Users,
    color: 'text-[#fd5f00]',
    description: 'Students engaged in at least one SAO activity yearly',
  },
];