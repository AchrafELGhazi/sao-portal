import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem } from './ResourceComponents';

const FAQsTab: React.FC = () => {
  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
      <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <HelpCircle className='mr-3 text-orange-500' />
        Frequently Asked Questions
      </h2>
      <p className='text-gray-300 mb-8'>
        Find answers to common questions about student activities, clubs,
        events, and more.
      </p>

      <div className='space-y-4'>
        <FAQItem
          question='How do I start a new student club?'
          answer="To start a new student club, you need to fill out the Club Creation Form and gather at least 10 interested student signatures. You'll also need to find a faculty advisor, create a club constitution using our template, and develop an action plan. Submit all these documents to the SAO office and wait for approval. Check the Clubs tab for all necessary forms and more details."
        />
        <FAQItem
          question="What's the process for organizing an event on campus?"
          answer="To organize an event on campus, fill out the Pre-event Form at least two weeks before your proposed date. Once approved, you can reserve the necessary space and equipment. After your event, submit the Post-event Form within 3 days. If you're inviting external guests to campus, you'll also need to submit a Guest Request Form. Visit the Events tab for all required forms."
        />
        <FAQItem
          question='How can I get funding for my club activities?'
          answer='Clubs can request funding by submitting a Budget Request Form to the SAO. Make sure to include a detailed breakdown of expenses and justification for the requested amount. Submit your budget request at least 3 weeks before your planned activity. Remember that all expenses must follow university financial policies.'
        />
        <FAQItem
          question='When should clubs renew their registration?'
          answer='Clubs must renew their registration at the beginning of each academic year, typically during the first two weeks of the Fall semester. The renewal process requires submitting the Club Renewal Form, an updated list of officers, and an action plan for the year. Clubs that fail to renew by the deadline may lose their official status.'
        />
        <FAQItem
          question="Can I use the SAO logo for my club's materials?"
          answer='Yes, clubs may use the SAO logo on their materials, but must follow the usage guidelines. The logo should not be altered in any way, and usage should not imply endorsement of activities not approved by SAO. Download the appropriate logo version from the SAO Logos tab. If you have specific needs, contact the SAO office.'
        />
        <FAQItem
          question='How can I reserve a room for a club meeting or event?'
          answer='To reserve a room, first ensure your event is approved through the Pre-event Form. Then, contact the Building and Grounds department with your approved event form to request the specific space. Reservations should be made at least one week in advance for regular meetings and two weeks for special events.'
        />
        <FAQItem
          question='What should I do if I need to change the date or location of my approved event?'
          answer='If you need to change the date, time, or location of an already approved event, contact the SAO office immediately. Minor changes may be approved via email, but significant changes might require submitting an updated Pre-event Form. Always notify the SAO at least 48 hours before the originally scheduled event time.'
        />
      </div>
    </div>
  );
};

export default FAQsTab;
