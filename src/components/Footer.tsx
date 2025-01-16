import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SAO AUI</h3>
            <p className="text-sm">Empowering students through engagement and leadership.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500 transition duration-300">About Us</Link></li>
              <li><Link to="/events" className="hover:text-orange-500 transition duration-300">Events</Link></li>
              <li><Link to="/resources" className="hover:text-orange-500 transition duration-300">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-orange-500 transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-orange-500 transition duration-300"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Student Activities Office, Al Akhawayn University. All rights reserved.</p>
          <Link to="/privacy-policy" className="text-sm hover:text-orange-500 transition duration-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

