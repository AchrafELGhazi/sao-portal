import React from 'react';
import FAQ from './FAQ';
  
const FAQSection: React.FC = () => {
  return (
    <div className='mt-12'>
      <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <span className='inline-block w-4 h-1 bg-orange-500 mr-3'></span>
        Frequently Asked Questions
      </h3>

      <div className='space-y-4'>
        <FAQ
          question='How can I join a student club?'
          answer='You can join a student club by attending their meetings or events, or by contacting the club leaders directly. Visit the Clubs page for more information on all active clubs.'
        />
        <FAQ
          question='How do I reserve a space for an event?'
          answer='To reserve a space for your event, please fill out the Event Space Request form at least two weeks before your event date. Our team will review your request and get back to you.'
        />
        <FAQ
          question='Can I start a new student club?'
          answer="Yes! To start a new club, you need to gather at least 10 interested students, draft a club constitution, and submit an application to the SAO office. We'll guide you through the process."
        />
      </div>
    </div>
  );
};

export default FAQSection;
