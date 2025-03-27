import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberAvatarProps {
  name: string;
  role: string;
  colorIndex: number;
}

const TeamMemberAvatar: React.FC<TeamMemberAvatarProps> = ({
  name,
  role,
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className='group'
    >
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#fd5f00]/30 bg-[#1A1A2F] hover:border-[#fd5f00] flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-all duration-300'>
          {initials}
        </div>
        <div className='mt-3 text-center'>
          <h3 className='text-white font-medium text-sm md:text-base truncate max-w-[120px]'>
            {name}
          </h3>
          <p className='text-[#fd5f00] text-xs md:text-sm'>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberAvatar;
