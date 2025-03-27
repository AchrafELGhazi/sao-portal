import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50'>
      <button
        className='w-full text-left p-4 flex justify-between items-center focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h4 className='text-white font-medium pr-8'>{question}</h4>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className='p-4 pt-0 text-gray-300 border-t border-gray-700/50'>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
