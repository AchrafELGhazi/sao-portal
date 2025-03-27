import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Calendar,
  Users,
  Image,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';

interface TabButtonProps {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  active,
  onClick,
}) => {
  // Icon mapping
  const getIcon = (): React.ReactNode => {
    switch (icon) {
      case 'FileText':
        return <FileText size={18} />;
      case 'Calendar':
        return <Calendar size={18} />;
      case 'Users':
        return <Users size={18} />;
      case 'Image':
        return <Image size={18} />;
      case 'HelpCircle':
        return <HelpCircle size={18} />;
      default:
        return null;
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`group relative overflow-hidden py-3 px-4 rounded-xl transition-all duration-300 ${
        active
          ? 'text-white shadow-lg'
          : 'bg-white/5 text-white/70 hover:bg-white/10'
      }`}
      style={active ? { backgroundColor: '#ff6600' } : {}}
    >
      {/* Gradient overlay for non-selected tabs on hover */}
      {!active && (
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          style={{
            background: `linear-gradient(120deg, #ff660050, #ff660020)`,
            borderRadius: '0.75rem',
          }}
        />
      )}

      {/* Glowing dot indicator */}
      {active && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='absolute top-2 right-2 w-2 h-2 rounded-full bg-white shadow-glow'
          style={{ boxShadow: `0 0 10px 2px #ff6600` }}
        />
      )}

      <div className='flex items-center justify-center gap-2 relative z-10'>
        {/* Icon */}
        <div
          className={`${
            active ? 'text-white' : 'text-white/70'
          } transition-colors duration-300`}
        >
          {getIcon()}
        </div>

        {/* Text */}
        <span className='text-sm font-medium'>{label}</span>
      </div>

      {/* Bottom border indicator for selected tab */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: active ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
        className='absolute bottom-0 left-0 h-1 bg-white/70'
        style={{
          boxShadow: active ? `0 0 10px #ff6600` : 'none',
        }}
      />
    </motion.button>
  );
};

export default TabButton;
