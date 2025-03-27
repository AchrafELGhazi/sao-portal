import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { programs } from '@/data/programs';

const MissionSection: React.FC = () => {
  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <Badge className='bg-white/10 text-[#fd5f00] mb-4 py-1.5 text-sm font-medium border rounded-full border-[#fd5f00]/30'>
            Our Mission
          </Badge>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Cultivating Tomorrow's Leaders
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            We are dedicated to enhancing the student experience through diverse
            programs, leadership opportunities, and community engagement
            initiatives. Our goal is to create an environment where every
            student can discover their potential.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-4 gap-8'>
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='rounded-xl p-px bg-gradient-to-b from-white/5 to-transparent'>
                <Card className='bg-[#1A1A2F]/40 border-0 h-full hover:bg-[#1A1A2F]/60 transition-all duration-500'>
                  <CardContent className='p-6'>
                    <div className='w-12 h-12 rounded-lg bg-[#fd5f00]/10 flex items-center justify-center mb-4 text-[#fd5f00]'>
                      <program.icon className='w-6 h-6' />
                    </div>
                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {program.title}
                    </h3>
                    <p className='text-gray-300 mb-4 text-sm'>
                      {program.description}
                    </p>
                    <div className='flex items-center text-sm'>
                      <Clock className='w-4 h-4 mr-2 text-[#fd5f00]/80' />
                      <span className='text-gray-400'>{program.stats}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle divider */}
      <div className='mt-20 h-16 w-full flex justify-center'>
        <div className='w-1/3 h-px bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </section>
  );
};

export default MissionSection;
