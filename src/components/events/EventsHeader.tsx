import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface EventsHeaderProps {
  showStats: boolean;
  setShowStats: (value: boolean) => void;
}

const EventsHeader: React.FC<EventsHeaderProps> = ({
  showStats,
  setShowStats,
}) => {
  return (
    <motion.div
      className='relative rounded-2xl overflow-hidden'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/5 rounded-2xl' />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      <div className='relative px-8 py-10 backdrop-blur-sm'>
        <div className='flex justify-between items-start'>
          <div className='space-y-3'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/30'
            >
              <span className='w-2 h-2  bg-[#ff6600] animate-pulse' />
              <span className='text-sm  text-[#ff6600]'>
                Campus Life
              </span>
            </motion.div>

            <motion.h1
              className='text-5xl font-bold text-white tracking-tight'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Events <span className='text-[#ff6600]'>Library</span>
            </motion.h1>

            <motion.p
              className='text-xl text-white/70 max-w-2xl'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Discover and explore our diverse range of events throughout the
              years. From workshops to international trips, find what interests
              you.
            </motion.p>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  onClick={() => setShowStats(!showStats)}
                  className='p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Info className='w-5 h-5 text-white/60 group-hover:text-[#ff6600] transition-colors' />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side='left'>
                <p>{showStats ? 'Hide' : 'Show'} Statistics</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsHeader;
