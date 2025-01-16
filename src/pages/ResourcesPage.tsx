import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define types for props
interface ResourceItemProps {
  title: string;
  link: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const ResourcesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Resources</h1>
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Forms and Documents</h2>
        <ul className='space-y-4'>
          <ResourceItem title='Event Request Form' link='#' />
          <ResourceItem title='Club Registration Form' link='#' />
          <ResourceItem title='Budget Request Form' link='#' />
        </ul>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mb-4'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          <FAQItem
            question='How do I start a new student club?'
            answer="To start a new student club, you need to fill out the Club Registration Form and submit it to the SAO office. You'll also need to find a faculty advisor and at least 10 interested students."
          />
          <FAQItem
            question="What's the process for organizing an event on campus?"
            answer='To organize an event on campus, you should first fill out the Event Request Form at least two weeks before the proposed date. Once approved, you can proceed with planning and promoting your event.'
          />
          <FAQItem
            question='How can I get funding for my club activities?'
            answer='Clubs can request funding by submitting a Budget Request Form to the SAO. Make sure to include a detailed breakdown of expenses and justification for the requested amount.'
          />
        </div>
      </section>
    </div>
  );
};

// Use the defined types for props
const ResourceItem: React.FC<ResourceItemProps> = ({ title, link }) => (
  <li>
    <a
      href={link}
      className='text-blue-600 hover:underline'
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  </li>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-200 pb-4'>
      <button
        className='flex justify-between items-center w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium'>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <p className='mt-2 text-gray-600'>{answer}</p>}
    </div>
  );
};

export default ResourcesPage;
