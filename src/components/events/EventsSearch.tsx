import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface EventsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const EventsSearch: React.FC<EventsSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <motion.div
      className='relative'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
        <Search className='h-5 w-5 text-[#ff6600]/70' />
      </div>

      <input
        type='text'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search for events...'
        className='w-full pl-12 pr-4 py-4 bg-[#1A1A2F]/60 border border-white/10 focus:border-[#ff6600]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6600]/20 text-white/90 placeholder-white/40 transition-all duration-300'
      />

      {searchQuery && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setSearchQuery('')}
          className='absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/70 transition-colors duration-200'
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </motion.button>
      )}

      {/* Search highlight line */}
      <div className='absolute bottom-0 left-0 w-full h-0.5 overflow-hidden'>
        <motion.div
          className='h-full bg-gradient-to-r from-transparent via-[#ff6600] to-transparent'
          initial={{ x: '-100%' }}
          animate={{
            x: searchQuery ? '100%' : '-100%',
          }}
          transition={{
            duration: 1.5,
            repeat: searchQuery ? Infinity : 0,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

export default EventsSearch;
