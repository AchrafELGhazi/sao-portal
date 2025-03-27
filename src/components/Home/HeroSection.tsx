import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Users,
  Calendar,
  Trophy,
  Star,
  Heart,
} from 'lucide-react';

type StatProps = {
  icon: React.ReactNode;
  number: string | number;
  label: string;
};

type BadgeProps = {
  icon: string;
  label: string;
};

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [phraseIndex, setPhraseIndex] = useState<number>(0);

  const phrases = ['WE LEAD..WE LEARN..WE ARE A FAMILY '];

  const tags = [
    { icon: <Users className='w-4 h-4' />, text: 'Student Clubs' },
    { icon: <Calendar className='w-4 h-4' />, text: 'Events' },
    { icon: <Trophy className='w-4 h-4' />, text: 'Leadership' },
    { icon: <Star className='w-4 h-4' />, text: 'Activities' },
    { icon: <Heart className='w-4 h-4' />, text: 'Community' },
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
          return;
        }
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className='relative min-h-screen pt-28 md:pt-24 flex items-center'>
      {/* Background with gradient overlay */}
      <div className='absolute inset-0'>
        <img
          src='/a.webp'
          alt='Al Akhawayn University campus'
          className='w-full h-full object-cover mix-blend-overlay opacity-50'
        />
        {/* Enhanced gradients for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/30 to-black/20' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70' />
        <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent' />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          <div className='space-y-4 md:space-y-6'>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1'>
              <span className='text-orange-500 text-xs sm:text-sm font-medium'>
                Empowering Students
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            {/* Heading */}
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight'>
                Student Activities Office
              </h1>
              <div className='h-14 sm:h-16 md:h-20 overflow-hidden'>
                <span
                  className='text-orange-500 block text-xl sm:text-2xl md:text-3xl tracking-wider'
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    letterSpacing: '0.08em',
                    fontWeight: '500',
                  }}
                >
                  {displayText}
                  <span className='animate-pulse ml-1 inline-block w-1.5 h-6 sm:h-8 bg-orange-500' />
                </span>
              </div>
            </div>

            <p className='text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed'>
              Join a vibrant community of leaders, innovators, and changemakers
              at Al Akhawayn University. Discover endless opportunities for
              growth, learning, and meaningful connections.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-3 md:gap-4 pt-2'>
              <Link
                to='/contact'
                className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base'
              >
                <span>Let's Connect</span>
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                to='/about'
                className='flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base'
              >
                Learn More
              </Link>
            </div>

            {/* Tags Section */}
            <div className='pt-4 border-t border-gray-700/50'>
              <div className='flex flex-wrap gap-2 sm:gap-3'>
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className='group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 hover:bg-orange-500/10 
                      text-gray-300 hover:text-orange-500 rounded-full transition-all duration-300 text-xs sm:text-sm'
                  >
                    {tag.icon}
                    <span>{tag.text}</span>
                    <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className='hidden lg:flex flex-col justify-between h-full'>
            {/* Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8'>
              <Stat
                icon={<Users className='w-6 h-6 text-orange-500' />}
                number='50+'
                label='Active Clubs'
              />
              <Stat
                icon={<Calendar className='w-6 h-6 text-orange-500' />}
                number='200+'
                label='Annual Events'
              />
              <Stat
                icon={<Trophy className='w-6 h-6 text-orange-500' />}
                number='2000+'
                label='Active Students'
              />
            </div>

            {/* Decorative element */}
            <div className='relative mt-12'>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[80px]' />

              {/* Mission badges */}
              <div className='relative flex justify-center gap-4'>
                <Badge icon='🎓' label='Education' />
                <Badge icon='🤝' label='Community' />
                <Badge icon='🌟' label='Leadership' />
                <Badge icon='🎯' label='Excellence' />
              </div>
            </div>
          </div>

          {/* Mobile Stats (only visible on smaller screens) */}
          <div className='flex lg:hidden mt-4'>
            <div className='grid grid-cols-3 gap-4 w-full'>
              <StatMobile
                icon={<Users className='w-5 h-5 text-orange-500' />}
                number='50+'
                label='Clubs'
              />
              <StatMobile
                icon={<Calendar className='w-5 h-5 text-orange-500' />}
                number='200+'
                label='Events'
              />
              <StatMobile
                icon={<Trophy className='w-5 h-5 text-orange-500' />}
                number='2000+'
                label='Students'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add font import in the page */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      </style>
    </section>
  );
};

const Stat: React.FC<StatProps> = ({ icon, number, label }) => (
  <div className='flex items-center space-x-4'>
    <div className='bg-white/10 rounded-full p-3'>{icon}</div>
    <div>
      <div className='text-2xl font-bold text-white'>{number}</div>
      <div className='text-gray-400 text-sm'>{label}</div>
    </div>
  </div>
);

// More compact stat component for mobile view
const StatMobile: React.FC<StatProps> = ({ icon, number, label }) => (
  <div className='flex flex-col items-center text-center space-y-1 bg-white/5 rounded-lg p-3'>
    <div className='bg-white/10 rounded-full p-2 mb-1'>{icon}</div>
    <div className='text-lg font-bold text-white'>{number}</div>
    <div className='text-gray-400 text-xs'>{label}</div>
  </div>
);

const Badge: React.FC<BadgeProps> = ({ icon, label }) => (
  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group hover:bg-white/20 transition-all duration-300 cursor-pointer'>
    <div className='flex flex-col items-center'>
      <span className='text-2xl'>{icon}</span>
      <span className='absolute opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-12 transition-all duration-300 text-white text-xs whitespace-nowrap bg-black/80 px-2 py-1 rounded'>
        {label}
      </span>
    </div>
  </div>
);

export default HeroSection;
