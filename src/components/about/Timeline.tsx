import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/timelineEvents';

const Timeline: React.FC = () => {
  return (
    <div className='relative pl-8 mt-8'>
      <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#fd5f00] to-[#fd5f00]/30 rounded-full'></div>

      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className='mb-12 relative'
        >
          <div className='absolute left-[-43px] w-6 h-6 rounded-full bg-[#1A1A2F] border-2 border-[#fd5f00] flex items-center justify-center'>
            <div className='w-2 h-2 rounded-full bg-[#fd5f00]'></div>
          </div>
          <div className='bg-[#1A1A2F]/40 p-5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-[#fd5f00]/20 transition-colors duration-300'>
            <div className='text-[#fd5f00] font-bold text-lg mb-1'>
              {event.year}
            </div>
            <h4 className='text-white text-xl font-bold mb-2'>{event.title}</h4>
            <p className='text-gray-300'>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
