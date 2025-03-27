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
}) => (
  <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group'>
    <div className='p-4 flex items-start'>
      {/* Avatar */}
      <div className='relative flex-shrink-0'>
        <div className='w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-3'>
          <span className='text-orange-500 font-bold text-lg'>{initial}</span>
        </div>
      </div>

      {/* Info */}
      <div className='flex-grow'>
        <h3 className='text-white text-base font-semibold group-hover:text-orange-500 transition-colors'>
          {name}
        </h3>
        <p className='text-orange-500 text-xs mb-2'>{role}</p>

        <div className='space-y-1'>
          <a
            href={`mailto:${email}`}
            className='flex items-center text-gray-300 hover:text-orange-500 transition-colors text-xs'
          >
            <Mail className='w-3 h-3 mr-1' />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className='flex items-center text-gray-300 hover:text-orange-500 transition-colors text-xs'
          >
            <Phone className='w-3 h-3 mr-1' />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CompactStaffCard;
