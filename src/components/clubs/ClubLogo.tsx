import React from 'react';
import { motion } from 'framer-motion';

interface ClubLogoProps {
  name: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const ClubLogo: React.FC<ClubLogoProps> = ({ name, color, size = 'md' }) => {
  // Get dimensions based on size
  const dimensions = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-24 h-24 text-4xl',
  };

  // Get first letter or acronym
  const getLogoText = (clubName: string): string => {
  
    return clubName.charAt(0).toUpperCase();
  };

  return (
    <motion.div
      className={`${dimensions[size]} rounded-full flex items-center justify-center font-bold`}
      style={{ backgroundColor: `${color}20`, color: color }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {getLogoText(name)}
    </motion.div>
  );
};

export default ClubLogo;
