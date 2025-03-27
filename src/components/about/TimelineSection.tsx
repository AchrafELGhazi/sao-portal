import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import Timeline from './Timeline';

const TimelineSection: React.FC = () => {
  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className='bg-white/10 text-[#fd5f00] mb-4 py-1.5 text-sm font-medium border border-[#fd5f00]/30'>
            Our Journey
          </Badge>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            20 Years of Excellence
          </h2>
          <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
            From humble beginnings to becoming the heart of campus life, the SAO
            has evolved while staying true to our core mission of student
            development and engagement.
          </p>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-12 h-12 rounded-lg bg-[#fd5f00]/10 flex items-center justify-center'>
              <BookOpen className='w-6 h-6 text-[#fd5f00]' />
            </div>
            <div>
              <div className='text-white font-medium'>
                Read our full history
              </div>
              <div className='text-gray-400 text-sm'>
                20th Anniversary Commemorative Book
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <Timeline />
        </div>
      </div>

      {/* Subtle divider */}
      <div className='mt-20 h-16 w-full flex justify-center'>
        <div className='w-1/3 h-px bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </section>
  );
};

export default TimelineSection;
