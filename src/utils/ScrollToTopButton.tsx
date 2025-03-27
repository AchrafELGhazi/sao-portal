import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-[#1A1A2F] to-[#2A2A3F] border border-white/10 shadow-lg hover:shadow-xl focus:outline-none group'
          aria-label='Scroll to top'
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='relative'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='group-hover:stroke-[#8A2BE2] transition-colors duration-300'
            >
              <path d='M18 15l-6-6-6 6' />
            </svg>

            {/* Glow effect */}
            <div
              className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300'
              style={{
                boxShadow: '0 0 15px 5px rgba(138, 43, 226, 0.5)',
                filter: 'blur(4px)',
              }}
            ></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
