import ContactForm from '@/components/contact/ContactForm';
import ContactHeader from '@/components/contact/ContactHeader';
import FAQSection from '@/components/contact/FaqSection';
import StaffSection from '@/components/contact/StaffSection';
import React from 'react';


const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen pt-10 md:pt-20  md:px-5 bg-gradient-to-b from-black via-gray-900 to-black relative'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full'>
          {/* Grid lines */}
          <div className='absolute inset-0 grid grid-cols-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-l border-orange-500/30 h-full'
              ></div>
            ))}
          </div>
          <div className='absolute inset-0 grid grid-rows-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-t border-orange-500/30 w-full'
              ></div>
            ))}
          </div>

          {/* Glowing orbs */}
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]'></div>
          <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]'></div>
        </div>
      </div>

      {/* Header section */}
      <ContactHeader />

      {/* Main content */}
      <section className='py-16 relative'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Staff section */}
            <StaffSection />

            {/* Contact form and FAQ section */}
            <div>
              <ContactForm />
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
