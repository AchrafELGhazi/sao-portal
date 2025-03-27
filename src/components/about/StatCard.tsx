import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '@/types/interfaces';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  stat: StatItem;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-[#fd5f00]/20 transition-all duration-500'
    >
      <stat.icon className='w-10 h-10 mb-4 text-[#fd5f00]' />
      <div className='text-4xl text-white font-bold mb-2'>
        <AnimatedCounter value={stat.value} />
      </div>
      <div className='text-sm text-gray-300 font-medium mb-2'>{stat.label}</div>
      <div className='text-xs text-gray-400'>{stat.description}</div>
    </motion.div>
  );
};

export default StatCard;
