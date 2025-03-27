import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, Twitter, Instagram, Mail } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-7 left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-300 rounded-full 
        ${
          isScrolled
            ? 'bg-[#0F0F1A]/80 backdrop-blur-md shadow-lg'
            : 'bg-[#0F0F1A]/60 backdrop-blur-sm'
        }
        max-w-6xl w-[95%]
        border border-white/10
      `}
    >
      <div className='px-6 py-3'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500/50 group-hover:border-orange-500 transition-all duration-300'>
              <img
                src='/sao-logo.png'
                alt='SAO Logo'
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
              />
            </div>
          </Link>

          <nav className='hidden md:flex items-center'>
            <div className='flex space-x-1 px-4 py-1.5 rounded-full bg-white/5'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/clubs'>Clubs</NavLink>
              <NavLink to='/resources'>Resources</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/gallery'>Gallery</NavLink>
            </div>
          </nav>

          <div className='hidden md:flex items-center gap-2'>
            <SocialLink
              href="mailto:sao@aui.ma"
              icon={<Mail size={20} />}
            />
            <SocialLink
              href='https://www.instagram.com/sao_aui/'
              icon={<Instagram size={20} />}
            />
          </div>

          <button
            className='md:hidden text-white/90 hover:text-white transition duration-300'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className='md:hidden bg-black/95 backdrop-blur-md py-4 px-4 shadow-lg absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10'>
          <div className='flex flex-col space-y-2'>
            <NavLink to='/' onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to='/about' onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to='/clubs' onClick={toggleMenu}>
              Clubs
            </NavLink>
            <NavLink to='/resources' onClick={toggleMenu}>
              Resources
            </NavLink>
            <NavLink to='/contact' onClick={toggleMenu}>
              Contact
            </NavLink>
            <NavLink to='/gallery' onClick={toggleMenu}>
              Gallery
            </NavLink>
          </div>
          <div className='flex gap-2 mt-4 pt-4 border-t border-white/10'>
            <SocialLink
              href='https://t.me/saoaui'
              icon={<MessageCircle size={20} />}
            />
            <SocialLink
              href='https://twitter.com/saoaui'
              icon={<Twitter size={20} />}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    className='relative px-4 py-2 text-white/80 hover:text-white transition duration-300 group'
    onClick={onClick}
  >
    <span className='relative z-10'>{children}</span>
    <span className='absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300' />
  </Link>
);

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300'
  >
    {icon}
  </a>
);

export default Header;
