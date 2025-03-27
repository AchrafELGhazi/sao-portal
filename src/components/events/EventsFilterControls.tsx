import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Filter } from 'lucide-react';
import { FilterDropdownProps } from '@/types/Events';

interface EventsFilterControlsProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// Reusable filter dropdown component
const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  selected,
  onSelect,
  icon,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-4 py-3 bg-[#1A1A2F]/60 border border-white/10 rounded-xl hover:border-[#ff6600]/30 hover:bg-[#1A1A2F]/80 transition-all duration-300 backdrop-blur-sm'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon && <div className='text-[#ff6600]/80'>{icon}</div>}
        <span className='text-white/80'>
          {label}:{' '}
          <span className='text-[#ff6600] font-medium'>{selected}</span>
        </span>
        <ChevronDown
          size={16}
          className={`text-white/60 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 mt-2 w-full bg-[#14142B] border border-white/10 rounded-xl shadow-xl overflow-hidden z-20'
            style={{ minWidth: '180px' }}
          >
            <div className='max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#ff6600]/20 scrollbar-track-transparent'>
              {options.map(option => (
                <motion.button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`w-full px-4 py-2.5 text-left hover:bg-[#ff6600]/10 transition-colors duration-150 flex items-center gap-2 ${
                    selected === option
                      ? 'text-[#ff6600] bg-[#ff6600]/5'
                      : 'text-white/80'
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.1 }}
                >
                  {selected === option && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='w-1.5 h-1.5 rounded-full bg-[#ff6600]'
                    />
                  )}
                  <span className={selected === option ? 'ml-0' : 'ml-3.5'}>
                    {option}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main filter controls component
const EventsFilterControls: React.FC<EventsFilterControlsProps> = ({
  selectedYear,
  setSelectedYear,
  selectedCategory,
  setSelectedCategory,
}) => {
  const years = ['All', '2025', '2024', '2023', '2022', '2021'];
  const categories = [
    'All',
    'Musical Night',
    'National Trip',
    'International Trip',
    'Games',
    'Cultural Event',
    'Workshop',
  ];

  return (
    <div className='flex flex-wrap gap-4'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FilterDropdown
          options={years}
          selected={selectedYear}
          onSelect={setSelectedYear}
          icon={<Calendar size={18} />}
          label='Year'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <FilterDropdown
          options={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          icon={<Filter size={18} />}
          label='Category'
        />
      </motion.div>
    </div>
  );
};

export default EventsFilterControls;
