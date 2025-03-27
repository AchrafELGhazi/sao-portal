import { Link } from 'react-router-dom';
import { Instagram, Phone, ChevronRight, Youtube } from 'lucide-react';



const Footer = () => {
  return (
    <div className=''>
      <footer className='relative md:px-10 bg-gradient-to-b from-black to-gray-900 text-white py-7 pt-16 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]' />
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[80px]' />
        </div>

        <div className='absolute inset-0 flex justify-between'>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className='w-px h-full bg-gradient-to-b from-gray-800/0 via-gray-800/20 to-gray-800/0'
            />
          ))}
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex flex-col lg:flex-row justify-between gap-12 mb-12'>
            <div className='w-full lg:w-1/4'>
              <div className='mb-6'>
                <img
                  src='/sao-logo.png'
                  alt='SAO Logo'
                  className='h-32  -ml-3  md:-mt-6 w-auto object-contain'
                />
                <div className='h-1 w-12 bg-orange-500 mt-2 rounded-full' />
              </div>
              <p className='text-gray-400 mb-6'>
                Empowering students through engagement and leadership at Al
                Akhawayn University.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='https://www.tiktok.com/@saoaui'
                  target='_blank'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-orange-500'
                  >
                    <path
                      d='M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4247 15.9475 12.1952 16.466 11.809 16.8555C11.4228 17.2451 10.9061 17.4788 10.359 17.51C9.7506 17.5144 9.16324 17.2772 8.72756 16.8518C8.29187 16.4264 8.04055 15.8445 8.03 15.2362C8.01946 14.6278 8.25672 14.0404 8.68213 13.6048C9.10753 13.1691 9.68948 12.9177 10.2978 12.9072C10.5471 12.9072 10.7865 12.9458 11.01 13.0132V9.9C10.6275 9.83513 10.2371 9.80227 9.84601 9.80246C8.65917 9.8384 7.5377 10.3341 6.72972 11.1768C5.92174 12.0195 5.4723 13.1655 5.47998 14.3527C5.48766 15.5399 5.95175 16.6797 6.77173 17.5117C7.59172 18.3437 8.72068 18.8245 9.90743 18.8345C11.0942 18.8444 12.2313 18.3827 13.0648 17.5655C13.8983 16.7483 14.381 15.6185 14.39 14.4317V8.98C15.6296 9.93218 17.1261 10.4551 18.67 10.4917V7.39C18.6396 7.39344 17.44 7.12 16.6 5.82Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
                <a
                  href='https://www.instagram.com/sao_aui/'
                  target='_blank'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <Instagram size={18} className='text-orange-500' />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCbiKwNxW2Y3y4BUj7BvZNYg'
                  target='_blank'
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 
                border border-white/10 hover:border-orange-500/30 transition-all duration-300'
                >
                  <Youtube size={18} className='text-orange-500' />
                </a>
              </div>
            </div>

            <div className='w-full lg:w-1/4'>
              <h4 className='text-xl font-semibold mb-5 text-white'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {['About', 'Sao Team', 'Clubs', 'Resources', 'Contact'].map(
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
