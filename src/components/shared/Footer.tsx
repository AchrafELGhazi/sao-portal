import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  ChevronRight,
} from 'lucide-react';

const Footer = () => {
  return (
    <div className=''>
      <footer className='relative md:px-10 bg-gradient-to-b from-black to-gray-900 text-white py-7 pt-16 overflow-hidden'>
        {/* Background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]' />
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[80px]' />
        </div>

        {/* Grid lines */}
        <div className='absolute inset-0 flex justify-between'>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className='w-px h-full bg-gradient-to-b from-gray-800/0 via-gray-800/20 to-gray-800/0'
            />
          ))}
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          {/* Top section */}
          <div className='flex flex-col lg:flex-row justify-between gap-12 mb-12'>
            {/* Brand section */}
            <div className='w-full lg:w-1/4'>
              <div className='mb-6'>
                <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300'>
                  SAO AUI
                </h3>
                <div className='h-1 w-12 bg-orange-500 mt-2 rounded-full' />
              </div>
              <p className='text-gray-400 mb-6'>
                Empowering students through engagement and leadership at Al
                Akhawayn University.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <Facebook size={18} className='text-orange-500' />
                </a>
                <a
                  href='#'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <Instagram size={18} className='text-orange-500' />
                </a>
                <a
                  href='#'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <Twitter size={18} className='text-orange-500' />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className='w-full lg:w-1/4'>
              <h4 className='text-xl font-semibold mb-5 text-white'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {['About Us', 'Events', 'Clubs', 'Resources', 'Contact'].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        className='group flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300'
                      >
                        <ChevronRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300' />
                        <span>{item}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Staff section */}
            <div className='w-full lg:w-2/4'>
              <h4 className='text-xl font-semibold mb-5 text-white'>
                Staff & Extensions
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  { name: 'Chaimae Akkati', title: 'Manager', ext: '3302' },
                  {
                    name: 'Ayoub Bounasser',
                    title: 'Student Engagement Officer',
                    ext: '3222',
                  },
                  {
                    name: 'Soumiya Bellabair',
                    title: 'Student Development Officer',
                    ext: '2303',
                  },
                  {
                    name: 'Loubna El Ayachi',
                    title: 'Events Coordinator',
                    ext: '2767',
                  },
                  {
                    name: 'Driss Ouabbou',
                    title: 'Clubs Assistant',
                    ext: '2903',
                  },
                ].map((staff, index) => (
                  <div
                    key={index}
                    className='flex items-center p-3 rounded-xl bg-white/5 border border-white/10 
                  hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300'
                  >
                    <div className='flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center'>
                      <span className='text-orange-500 font-semibold'>
                        {staff.name.charAt(0)}
                      </span>
                    </div>
                    <div className='ml-3'>
                      <p className='text-white font-medium'>{staff.name}</p>
                      <div className='flex items-center text-gray-400 text-sm'>
                        <span className='truncate'>{staff.title}</span>
                        <div className='mx-2 w-1 h-1 bg-gray-600 rounded-full'></div>
                        <span className='flex items-center'>
                          <Phone className='w-3 h-3 mr-1' />
                          {staff.ext}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className='pt-8 border-t border-gray-800'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <p className='text-gray-500 text-sm mb-4 md:mb-0'>
                &copy; {new Date().getFullYear()} Student Activities Office, Al
                Akhawayn University. All rights reserved.
              </p>
              <div className='flex space-x-6'>
                <Link
                  to='/privacy-policy'
                  className='text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300'
                >
                  Privacy Policy
                </Link>
                <Link
                  to='/terms'
                  className='text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300'
                >
                  Terms of Use
                </Link>
                {/* <Link
                  to='/accessibility'
                  className='text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300'
                >
                  Accessibility
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
