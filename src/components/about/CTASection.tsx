import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='rounded-xl p-px bg-gradient-to-r from-[#fd5f00]/30 to-white/5'
      >
        <div className='bg-[#1A1A2F]/80 backdrop-blur-xl rounded-xl p-12 text-center overflow-hidden'>
          <div className="absolute inset-0 bg-[url('/abstract-grid.svg')] bg-center opacity-5"></div>
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold z-10'>
              Ready to Get Involved?
            </h2>
            <p className='text-xl max-w-3xl mx-auto z-10'>
              Join one of our many student organizations, participate in, or
              develop your leadership skills through our specialized programs.
            </p>
            <div className='flex flex-wrap gap-4 justify-center z-10 pt-2'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='bg-[#fd5f00] text-white px-8 py-4 rounded-xl text-lg font-medium'
              >
                Explore Student Clubs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium border border-white/10'
              >
                View Upcoming Events
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
