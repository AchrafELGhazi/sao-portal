import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageCircle, Calendar } from 'lucide-react';

const CallToActionSection: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]' />
        <div className='absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[80px]' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Enhance Your Campus Experience?
          </h2>
          <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
            Join a vibrant community of students, participate in exciting
            events, and make the most of your time at Al Akhawayn University.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/get-involved'
              className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300'
            >
              <span>Get Involved</span>
              <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
            </Link>
            <Link
              to='/contact'
              className='flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300'
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Action cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <ActionCard
            icon={<Mail className='w-8 h-8 text-orange-500' />}
            title='Subscribe to Newsletter'
            description='Stay updated with the latest events, opportunities, and announcements.'
            linkText='Subscribe Now'
            linkUrl='/subscribe'
          />

          <ActionCard
            icon={<Calendar className='w-8 h-8 text-orange-500' />}
            title='Schedule a Visit'
            description='Book a tour of our facilities and meet our staff and student representatives.'
            linkText='Book a Visit'
            linkUrl='/book-visit'
          />

          <ActionCard
            icon={<MessageCircle className='w-8 h-8 text-orange-500' />}
            title='Talk to a Student Rep'
            description='Connect with current student representatives to learn about their experiences.'
            linkText='Start Conversation'
            linkUrl='/student-reps'
          />
        </div>
      </div>
    </section>
  );
};

type ActionCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
};

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkUrl,
}) => (
  <div className='bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group'>
    <div className='flex flex-col h-full'>
      <div className='bg-orange-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4'>
        {icon}
      </div>

      <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors'>
        {title}
      </h3>

      <p className='text-gray-400 mb-6 flex-grow'>{description}</p>

      <Link
        to={linkUrl}
        className='inline-flex items-center text-orange-500 group-hover:text-orange-400 transition-colors'
      >
        <span>{linkText}</span>
        <ArrowRight className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform' />
      </Link>
    </div>
  </div>
);

export default CallToActionSection;
