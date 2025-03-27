import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  link: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  icon,
  title,
  description,
  action,
  link,
}) => (
  <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 hover:bg-gray-800/50 transition-all duration-300 group'>
    <div className='bg-orange-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4'>
      {icon}
    </div>

    <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
    <p className='text-gray-300 mb-4'>{description}</p>

    <a
      href={link}
      className='inline-flex items-center text-orange-500 group-hover:text-orange-400 transition-colors'
    >
      <span className='mr-2'>{action}</span>
      <ExternalLink className='w-4 h-4' />
    </a>
  </div>
);

const ContactMethods: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
      <ContactMethod
        icon={<Mail className='w-6 h-6 text-orange-500' />}
        title='Email Us'
        description='sao@aui.ma'
        action='Send Email'
        link='mailto:sao@aui.ma'
      />
      <ContactMethod
        icon={<Phone className='w-6 h-6 text-orange-500' />}
        title='Call Us'
        description='+212 535 862 000'
        action='Call Now'
        link='tel:+212535862000'
      />
      <ContactMethod
        icon={<MapPin className='w-6 h-6 text-orange-500' />}
        title='Visit Us'
        description='Building 6, Room 101'
        action='View Map'
        link='#campus-map'
      />
    </div>
  );
};

export default ContactMethods;
