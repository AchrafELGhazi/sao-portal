import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from './AnimatedCounter';
import { impactMetrics } from '@/data/impactMetrics';

const ImpactSection: React.FC = () => {
  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <Badge className='bg-white/10 rounded-full text-[#fd5f00] mb-4 py-1.5 text-sm font-medium border border-[#fd5f00]/30'>
          Our Impact
        </Badge>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
          Making a Difference
        </h2>
        <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          Our programs and initiatives create measurable impact for our
          students, university, and wider community. Here's what we've
          accomplished.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {impactMetrics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className='bg-[#1A1A2F]/40 border-white/5 backdrop-blur-md h-full relative overflow-hidden hover:shadow-md hover:shadow-[#fd5f00]/10 transition-all duration-500'>
              <div className='absolute top-0 left-0 right-0 h-1 bg-[#fd5f00]/50'></div>
              <CardContent className='p-8'>
                <item.icon className='w-10 h-10 mb-4 text-[#fd5f00]' />
                <div className='text-4xl font-bold mb-4 text-white'>
                  <AnimatedCounter value={item.metric} />
                </div>
                <p className='text-gray-300'>{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Subtle divider */}
      <div className='mt-20 h-16 w-full flex justify-center'>
        <div className='w-1/3 h-px bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </section>
  );
};

export default ImpactSection;
