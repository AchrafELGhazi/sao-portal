import React from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

interface EventsEmptyStateProps {
  clearFilters: () => void;
}

const EventsEmptyState: React.FC<EventsEmptyStateProps> = ({
  clearFilters,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='flex justify-center w-full mt-12'
    >
      <div className='bg-[#1A1A2F]/80 border border-white/5 rounded-2xl backdrop-blur-md shadow-xl w-full max-w-2xl overflow-hidden'>
        <div className='relative p-8 md:p-12'>
          {/* Background Elements */}
          <div className='absolute top-0 left-0 w-full h-full opacity-5'>
            <div className='absolute top-0 left-0 w-32 h-32 bg-[#ff6600] rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2' />
            <div className='absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2' />
          </div>

          <div className='flex flex-col items-center justify-center relative z-10 py-8'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='relative'
            >
              <div className='absolute inset-0 bg-[#ff6600]/10 rounded-full filter blur-xl transform scale-150 opacity-70' />
              <div className='relative p-5 rounded-full bg-[#ff6600]/10 mb-6'>
                <SearchX className='w-16 h-16 text-[#ff6600]' />
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className='text-2xl font-bold text-white mb-3 text-center'
            >
              No Events Found
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className='text-white/60 text-center max-w-md mb-8'
            >
              We couldn't find any events matching your current filters. Try
              adjusting your search criteria or clear all filters to see all
              events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className='px-8 py-3 bg-gradient-to-r from-[#ff6600] to-[#ff8c44] rounded-xl text-white shadow-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center gap-2'
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
                  <path d='M3 3h18v18H3zM15 9l-6 6m0-6l6 6' />
                </svg>
                Reset All Filters
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsEmptyState;
