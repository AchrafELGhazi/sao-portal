import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Testimonial } from '@/types/interfaces';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  activeTestimonial,
  setActiveTestimonial,
}) => {
  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='max-w-5xl mx-auto'
      >
        <div className='flex justify-center mb-4'>
          <Badge className='bg-white/10 rounded-full text-[#fd5f00] py-1.5 px-4 text-sm font-medium border border-[#fd5f00]/30'>
            Student Success Stories
          </Badge>
        </div>
        <h2 className='text-4xl font-bold mb-12 text-white text-center'>
          What Our Alumni Say
        </h2>

        <div className='relative h-[300px]'>
          {testimonials.map((testimonial, index) => (
            <AnimatePresence key={index}>
              {activeTestimonial === index && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className='bg-[#1A1A2F]/60 border border-white/5 rounded-xl p-8 backdrop-blur-md absolute inset-0'
                >
                  <div className='flex flex-col md:flex-row gap-8 items-center h-full'>
                    <div className='w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#fd5f00]/30'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex-1'>
                      <div className='text-5xl text-[#fd5f00] mb-4'>"</div>
                      <p className='text-xl text-gray-200 italic mb-6'>
                        {testimonial.quote}
                      </p>
                      <div>
                        <div className='text-white font-bold text-lg'>
                          {testimonial.name}
                        </div>
                        <div className='text-gray-400'>{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <div className='flex justify-center mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-[#fd5f00] scale-125'
                  : 'bg-white/30'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Subtle divider */}
      <div className='mt-20 h-16 w-full flex justify-center'>
        <div className='w-1/3 h-px bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
