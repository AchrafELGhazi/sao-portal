import React from 'react';
import { Mail } from 'lucide-react';

const OfficeHours: React.FC = () => {
  return (
    <div className='mt-12'>
      <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <span className='inline-block w-4 h-1 bg-orange-500 mr-3'></span>
        Office Hours
      </h3>

      <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50'>
        <div className='grid grid-cols-2 divide-x divide-gray-700/50'>
          <div className='p-6'>
            <h4 className='text-white font-semibold mb-2'>Weekdays</h4>
            <p className='text-gray-300'>9:00 AM - 5:00 PM</p>
          </div>
          <div className='p-6'>
            <h4 className='text-white font-semibold mb-2'>Weekends</h4>
            <p className='text-gray-300'>Closed</p>
          </div>
        </div>
        <div className='border-t border-gray-700/50 p-6'>
          <div className='flex items-start'>
            <div className='bg-orange-500/20 p-2 rounded-full mr-4'>
              <Mail className='w-5 h-5 text-orange-500' />
            </div>
            <div>
              <h4 className='text-white font-semibold mb-1'>
                Email Response Time
              </h4>
              <p className='text-gray-300'>
                We aim to respond to all emails within 24 hours during weekdays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
