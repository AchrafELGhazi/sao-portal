import React from 'react';
import { ChevronRight } from 'lucide-react';
import ContactMethods from './ContactMethods';

const ContactHeader: React.FC = () => {
  return (
    <section className='relative pt-24 pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Tag */}
        <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
          <span className='text-orange-500 text-sm font-medium'>
            Get in Touch
          </span>
          <ChevronRight className='w-4 h-4 text-orange-500' />
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4'>
          Contact <span className='text-orange-500'>SAO</span>
        </h1>
        <p className='text-gray-300 text-lg max-w-2xl'>
          Have questions or want to get involved? Reach out to the Student
          Activities Office team. We're here to help you make the most of your
          university experience.
        </p>

        {/* Contact methods */}
        <ContactMethods />
      </div>
    </section>
  );
};

export default ContactHeader;
