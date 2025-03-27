import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import StatCard from './StatCard';
import { StatItem } from '@/types/interfaces';

interface HeroSectionProps {
  opacity: any;
  scale: any;
  stats: StatItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ opacity, scale, stats }) => {
  return (
    <motion.section
      className='w-full max-w-[2000px] mx-auto px-4 md:px-20 pt-32 pb-16 relative'
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 bg-[url('/abstract-grid.svg')] bg-center opacity-5"></div>
      <div className='grid lg:grid-cols-2 gap-12 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className='bg-[#fd5f00] rounded-2xl text-white py-1.5 text-sm mb-5'>
            About SAO
          </Badge>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold  mb-7'>
            Empowering Student Life at Al Akhawayn
          </h1>
          <p className='text-xl text-white/80 leading-tight mb-10'>
            The Student Activities Office (SAO) is the heart of campus life,
            fostering leadership, community engagement, and memorable
            experiences for all students.
          </p>
          <div className='flex gap-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='bg-[#fd5f00] text-white rounded-full px-6 py-3  text-lg font-medium flex items-center'
            >
              Our Programs
              <ChevronRight className='ml-1 w-5 h-5' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='bg-white/5 text-white px-6 py-3 rounded-full text-lg font-medium border border-white/10'
            >
              Meet the Team
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          <div className='absolute inset-0 bg-[#fd5f00]/20 rounded-2xl blur-3xl opacity-10 transform rotate-12'></div>
          <Card className='bg-[#1A1A2F]/40 border-white/5 backdrop-blur-xl overflow-hidden rounded-xl'>
            <CardContent className='p-8'>
              <div className='grid grid-cols-2 gap-6'>
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className='mt-16 w-full flex justify-center'>
        <div className='w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
