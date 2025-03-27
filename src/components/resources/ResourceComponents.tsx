import React, { useState } from 'react';
import {
  Download,
  FileText,
  File,
  ChevronDown,
  ChevronUp,
  Mail,
  Image,
} from 'lucide-react';

interface ResourceItemProps {
  title: string;
  description?: string;
  link: string;
  icon?: React.ReactNode;
  fileType?: string;
}

interface ResourceCardProps {
  title: string;
  resources: {
    title: string;
    description?: string;
    link: string;
    fileType?: string;
  }[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  resources,
}) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
    <h3 className='text-white font-medium mb-4'>{title}</h3>
    <div className='space-y-4'>
      {resources.map((resource, index) => (
        <div key={index} className='flex items-start'>
          <div className='mr-3 flex-shrink-0'>
            {resource.fileType === 'PDF' && (
              <FileText className='text-orange-500' />
            )}
            {resource.fileType === 'DOCX' && <File className='text-blue-400' />}
            {resource.fileType === 'XLSX' && (
              <File className='text-green-400' />
            )}
            {!resource.fileType && <File className='text-gray-400' />}
          </div>
          <div>
            <a
              href={resource.link}
              className='text-white hover:text-orange-500 font-medium transition-colors'
              download
            >
              {resource.title}
              {resource.fileType && (
                <span className='ml-1 text-xs text-gray-400'>
                  .{resource.fileType.toLowerCase()}
                </span>
              )}
            </a>
            {resource.description && (
              <p className='text-gray-400 text-sm mt-1'>
                {resource.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ResourceItem: React.FC<ResourceItemProps> = ({
  title,
  description,
  link,
  icon,
  fileType,
}) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50 hover:border-orange-500/30 transition-colors'>
    <div className='flex items-start mb-4'>
      <div className='mr-3 flex-shrink-0'>
        {icon || <File className='text-gray-400' />}
      </div>
      <div>
        <h3 className='text-white font-medium'>{title}</h3>
        {fileType && (
          <span className='text-xs text-gray-400'>
            .{fileType.toLowerCase()}
          </span>
        )}
      </div>
    </div>

    {description && <p className='text-gray-400 text-sm mb-4'>{description}</p>}

    <a
      href={link}
      className='inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors'
      download
    >
      <Download className='w-4 h-4 mr-2' />
      <span>Download</span>
    </a>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-700/50 pb-4'>
      <button
        className='flex justify-between items-center w-full text-left py-4'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium text-white'>{question}</span>
        {isOpen ? (
          <ChevronUp className='w-5 h-5 text-orange-500 flex-shrink-0' />
        ) : (
          <ChevronDown className='w-5 h-5 text-orange-500 flex-shrink-0' />
        )}
      </button>
      {isOpen && (
        <div className='mt-2 text-gray-300 pl-6 pr-6 pb-2 animate-fadeIn'>
          {answer}
        </div>
      )}
    </div>
  );
};

export const LogoPreview: React.FC<{ title: string }> = ({ title }) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600/50 flex flex-col'>
    <div className='aspect-square bg-gray-800 flex items-center justify-center p-6'>
      <div className='w-full h-full bg-gray-700/50 rounded-xl flex items-center justify-center'>
        <Image className='w-16 h-16 text-orange-500' />
      </div>
    </div>
    <div className='p-4'>
      <h3 className='text-white font-medium text-center'>{title}</h3>
    </div>
  </div>
);

export const EmailContact: React.FC<{ email: string }> = ({ email }) => (
  <div className='mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl'>
    <div className='flex items-start'>
      <Mail className='text-orange-500 mr-3 mt-1 flex-shrink-0' />
      <p className='text-gray-300'>
        If you need assistance, please email{' '}
        <a href={`mailto:${email}`} className='text-orange-500 hover:underline'>
          {email}
        </a>
        .
      </p>
    </div>
  </div>
);
