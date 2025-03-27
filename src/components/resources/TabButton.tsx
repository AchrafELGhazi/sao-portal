import React from 'react';
import {
  FileText,
  Calendar,
  Users,
  HelpCircle,
  Image,
  LucideIcon,
} from 'lucide-react';

interface TabButtonProps {
  label: string;
  active: boolean;
  icon: 'FileText' | 'Calendar' | 'Users' | 'Image' | 'HelpCircle';
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  active,
  icon,
  onClick,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'FileText':
        return <FileText className='w-4 h-4' />;
      case 'Calendar':
        return <Calendar className='w-4 h-4' />;
      case 'Users':
        return <Users className='w-4 h-4' />;
      case 'Image':
        return <Image className='w-4 h-4' />;
      case 'HelpCircle':
        return <HelpCircle className='w-4 h-4' />;
      default:
        return <FileText className='w-4 h-4' />;
    }
  };

  return (
    <button
      className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
        active
          ? 'text-orange-500 border-b-2 border-orange-500'
          : 'text-gray-400 hover:text-gray-300'
      }`}
      onClick={onClick}
    >
      {getIcon()}
      <span>{label}</span>
    </button>
  );
};

export default TabButton;
