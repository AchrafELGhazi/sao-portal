import React from 'react';
import { Image, Download, ChevronRight } from 'lucide-react';
import { EmailContact, LogoPreview } from './ResourceComponents';

const LogosTab: React.FC = () => {
  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
      <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <Image className='mr-3 text-orange-500' />
        SAO Logo Versions
      </h2>
      <p className='text-gray-300 mb-8'>
        Official SAO logos for use in club materials, event promotions, and
        other approved student activities. Please follow the usage guidelines
        when using these logos.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'>
        <LogoPreview title='SAO Primary Logo' />
        <LogoPreview title='SAO Vertical Logo' />
        <LogoPreview title='SAO Horizontal Logo' />
        <LogoPreview title='SAO Icon Only' />
        <LogoPreview title='SAO Full Color' />
        <LogoPreview title='SAO White' />
        <LogoPreview title='SAO Black' />
        <LogoPreview title='SAO Grayscale' />
      </div>

      <div className='flex justify-center'>
        <a
          href='#'
          className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition duration-300 flex items-center gap-2'
        >
          <Download className='w-5 h-5' />
          <span>Download All SAO Logos (.zip)</span>
        </a>
      </div>

      <div className='mt-8 p-5 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/50'>
        <h3 className='text-white font-semibold mb-3'>Logo Usage Guidelines</h3>
        <ul className='space-y-2 text-gray-300'>
          <li className='flex items-start'>
            <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
            <span>Always maintain the logo's proportions when resizing</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
            <span>Do not alter the colors of the logo</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
            <span>Maintain adequate clear space around the logo</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
            <span>Use the appropriate version for different backgrounds</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
            <span>
              Do not use the logo in ways that suggest SAO endorsement without
              approval
            </span>
          </li>
        </ul>
      </div>

      <EmailContact email='a.bounasser@aui.ma' />
    </div>
  );
};

export default LogosTab;
