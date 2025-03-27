export interface Event {
  id: string | number;
  title: string;
  category: string;
  year: string;
  description?: string;
  date?: string;
  location?: string;
  image?: string;
  attendees?: number;
  isHighlighted?: boolean;
}

export interface Stats {
  total: number;
  byCategory: {
    [key: string]: number;
  };
  mostCommonCategory: string;
}

export interface FilterDropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  icon?: React.ReactNode;
  label: string;
}