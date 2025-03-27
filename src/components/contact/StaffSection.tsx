import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface CompactStaffCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  initial: string;
}

const CompactStaffCard: React.FC<CompactStaffCardProps> = ({
  name,
  role,
  email,
  phone,
  initial,
}) => {
  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group'>
      <div className='flex items-center'>
        {/* Avatar with initial */}
        <div className='flex-shrink-0 mr-4'>
          <div className='w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold text-lg'>
            {initial}
          </div>
        </div>

        {/* Staff info */}
        <div className='flex-1 min-w-0'>
          <h4 className='text-white font-medium truncate'>{name}</h4>
          <p className='text-orange-500 text-sm truncate'>{role}</p>
        </div>
      </div>

      {/* Contact details - revealed on hover/focus */}
      <div className='mt-4 space-y-2 overflow-hidden transition-all duration-300'>
        <a
          href={`mailto:${email}`}
          className='flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm group'
        >
          <Mail className='w-4 h-4 mr-2 text-orange-500' />
          <span className='truncate'>{email}</span>
        </a>
        <a
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className='flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm'
        >
          <Phone className='w-4 h-4 mr-2 text-orange-500' />
          <span>{phone}</span>
        </a>
      </div>

      {/* Schedule meeting button - shown on hover/focus */}
      <div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button className='w-full py-2 px-3 bg-gray-700/50 hover:bg-orange-500/20 text-white text-sm rounded-lg border border-gray-600 hover:border-orange-500/50 transition-all duration-300'>
          Schedule Meeting
        </button>
      </div>
    </div>
  );
};

export default CompactStaffCard;
