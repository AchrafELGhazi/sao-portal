import { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sections } from '@/data/PrivacyPolicy';

const PrivacyPolicy = () => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div
      ref={topRef}
      className='min-h-screen bg-gradient-to-b from-black to-gray-900 text-white'
    >
      {/* Header Section with background effects */}
      {/* COMMENT: Added top padding to account for fixed navigation */}
      <div className='relative pt-20 overflow-hidden'>
        {/* Background glowing effects - creates depth and futuristic feel */}
        <div className='absolute inset-0 z-0'>
          {/* COMMENT: Larger blur radius for more diffused glow */}
          <div className='absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]' />
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]' />
          <div className='absolute inset-0 bg-black/40' />
        </div>

        {/* Header content with improved spacing */}
        {/* COMMENT: Increased horizontal padding (px-6) for better alignment on all devices */}
        <div className='container mx-auto px-6 sm:px-8 py-20 relative z-10'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>

          {/* COMMENT: Added text shadow for better legibility on gradients */}
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-shadow'>
            Privacy Policy
          </h1>
          {/* COMMENT: Increased width and rounded corners more for modern look */}
          <div className='h-1 w-24 bg-orange-500 mb-6 rounded-full' />
          <p className='text-gray-400 max-w-2xl'>
            Last updated: February 09, 2022
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      {/* COMMENT: Increased overall padding for better readability and spacing */}
      <div className='container mx-auto px-6 sm:px-8 py-0'>
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Navigation sidebar - sticky for better UX */}
          <div className='lg:w-1/4'>
            {/* COMMENT: Increased border radius and improved shadow for depth */}
            <div className='sticky top-32 bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/20'>
              <h3 className='text-lg font-medium mb-6 text-orange-500'>
                On this page
              </h3>
              <nav className='space-y-2'>
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className='flex items-center text-gray-400 hover:text-orange-500 py-2 px-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300'
                  >
                    {section.icon}
                    <span className='ml-3'>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content area with sections */}
          <div className='lg:w-3/4'>
            <div className='space-y-20'>
              {sections.map(section => (
                <section
                  key={section.id}
                  id={section.id}
                  className='scroll-mt-28' // COMMENT: Increased scroll margin to account for sticky header
                >
                  {/* Section header with icon */}
                  <div className='flex items-center mb-8 space-x-4'>
                    {/* COMMENT: Increased rounding and added subtle shadow for depth */}
                    <div className='p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 shadow-lg shadow-orange-500/5'>
                      {section.icon}
                    </div>
                    <h2 className='text-2xl font-bold text-white'>
                      {section.title}
                    </h2>
                  </div>

                  {/* Section content card */}
                  {/* COMMENT: Increased rounding, added gradient border for futuristic look */}
                  <div className='bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/20 transition-all duration-500 shadow-xl shadow-black/20'>
                    <div className='prose prose-invert max-w-none'>
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className='mb-6 text-gray-300 leading-relaxed'
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ/Contact Banner with enhanced styling */}
      {/* COMMENT: Added more pronounced gradient and interactive elements */}
      <div className='relative mt-16 py-16 overflow-hidden'>
        <div className='absolute inset-0'>
          {/* COMMENT: Enhanced gradient with more vibrant colors */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-500/25 to-purple-500/25' />
          <div className='absolute inset-0 backdrop-blur-xl' />
          {/* COMMENT: Added animated pulse effect to borders for futuristic feel */}
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent animate-pulse' />
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent animate-pulse' />
        </div>

        {/* COMMENT: Improved padding and rounded corners for container */}
        <div className='container mx-auto px-6 sm:px-8 relative z-10'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8 bg-black/20 p-8 rounded-2xl backdrop-blur-sm border border-white/5'>
            <div>
              <h3 className='text-2xl font-bold mb-2'>Still have questions?</h3>
              <p className='text-gray-400'>
                Contact the Student Activities Office for more information
              </p>
            </div>
            {/* COMMENT: Enhanced button with subtle animation */}
            <Link
              to='/contact'
              className='px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
