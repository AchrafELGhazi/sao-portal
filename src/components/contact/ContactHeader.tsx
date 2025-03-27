import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ContactHeader: React.FC = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center max-w-3xl mx-auto'
      >
        {/* Decorative element */}
        <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
          <span className='text-orange-500 text-sm font-medium'>
            Contact SAO
          </span>
          <ChevronRight className='w-4 h-4 text-orange-500' />
        </div>

        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
          Get in <span className='text-orange-500'>Touch</span>
        </h1>

        <p className='text-lg md:text-xl text-gray-300 mb-10'>
          Have questions about student activities or need assistance? Our team
          is here to help you navigate campus life and make the most of your
          university experience.
        </p>

        {/* Quick contact info */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-gray-900/60 border border-gray-800 p-6 rounded-xl'
          >
            <div className='w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#ff6b00'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
              </svg>
            </div>
            <h3 className='text-white font-semibold mb-2'>Call Us</h3>
            <p className='text-gray-400'>+123 456 7890</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-gray-900/60 border border-gray-800 p-6 rounded-xl'
          >
            <div className='w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#ff6b00'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                <polyline points='22,6 12,13 2,6'></polyline>
              </svg>
            </div>
            <h3 className='text-white font-semibold mb-2'>Email Us</h3>
            <p className='text-gray-400'>sao@university.edu</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className='bg-gray-900/60 border border-gray-800 p-6 rounded-xl'
          >
            <div className='w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#ff6b00'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                <circle cx='12' cy='10' r='3'></circle>
              </svg>
            </div>
            <h3 className='text-white font-semibold mb-2'>Visit Us</h3>
            <p className='text-gray-400'>Student Center, Building A</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHeader;
