import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventsActiveFiltersProps {
  activeFilters: string[];
}

const EventsActiveFilters: React.FC<EventsActiveFiltersProps> = ({
  activeFilters,
}) => {
  if (activeFilters.length === 0) return null;

  return (
    <motion.div
      className='flex flex-wrap gap-2 pt-1'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {activeFilters.map((filter, index) => (
          <motion.span
            key={filter}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className='px-3 py-1.5 bg-[#1A1A2F] border border-[#ff6600]/20 rounded-full text-sm text-white/70 inline-flex items-center gap-1.5'
          >
            <span className='w-1.5 h-1.5 rounded-full bg-[#ff6600]' />
            {filter}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default EventsActiveFilters;
