import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left p-4 flex justify-between items-center'
      >
        <span className='text-white font-medium'>{question}</span>
        <ChevronRight
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-90' : ''
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
