import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Download,
  FileText,
  File,
  ExternalLink,
  Calendar,
  Users,
  DollarSign,
  HelpCircle,
  Mail,
  Image,
} from 'lucide-react';

// Define types for props
interface ResourceItemProps {
  title: string;
  description?: string;
  link: string;
  icon?: React.ReactNode;
  fileType?: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

type TabType = 'documents' | 'events' | 'clubs' | 'logos' | 'faqs';

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('documents');
  const [embedFormVisible, setEmbedFormVisible] = useState<boolean>(false);

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black'>
      {/* Header section */}
      <section className='relative pt-24 pb-16'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
            <span className='text-orange-500 text-sm font-medium'>
              SAO Resources
            </span>
            <ChevronRight className='w-4 h-4 text-orange-500' />
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Resources & <span className='text-orange-500'>Documents</span>
          </h1>
          <p className='text-gray-300 max-w-3xl mb-8'>
            Access all the forms, documents, and resources you need for student
            activities, club management, and event planning at Al Akhawayn
            University.
          </p>

          {/* Navigation Tabs */}
          <div className='flex flex-wrap gap-2 border-b border-gray-700'>
            <TabButton
              label='Essential Documents'
              active={activeTab === 'documents'}
              icon={<FileText className='w-4 h-4' />}
              onClick={() => setActiveTab('documents')}
            />
            <TabButton
              label='Events'
              active={activeTab === 'events'}
              icon={<Calendar className='w-4 h-4' />}
              onClick={() => setActiveTab('events')}
            />
            <TabButton
              label='Clubs'
              active={activeTab === 'clubs'}
              icon={<Users className='w-4 h-4' />}
              onClick={() => setActiveTab('clubs')}
            />
            <TabButton
              label='SAO Logos'
              active={activeTab === 'logos'}
              icon={<Image className='w-4 h-4' />}
              onClick={() => setActiveTab('logos')}
            />
            <TabButton
              label='FAQs'
              active={activeTab === 'faqs'}
              icon={<HelpCircle className='w-4 h-4' />}
              onClick={() => setActiveTab('faqs')}
            />
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className='py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Essential Documents */}
          {activeTab === 'documents' && (
            <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <FileText className='mr-3 text-orange-500' />
                Essential Documents
              </h2>
              <p className='text-gray-300 mb-8'>
                These documents are crucial for various student activities and
                processes. Download what you need and follow the instructions
                provided in each document.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <ResourceCard
                  title='General Documents'
                  resources={[
                    {
                      title: 'SAO Handbook',
                      description:
                        'Complete guide to Student Activities Office policies and procedures',
                      link: '#',
                      fileType: 'PDF',
                    },
                    {
                      title: 'Student Organization Guidelines',
                      description:
                        'Rules and regulations for student organizations',
                      link: '#',
                      fileType: 'PDF',
                    },
                    {
                      title: 'Space Reservation Guide',
                      description:
                        'How to reserve campus spaces for events and activities',
                      link: '#',
                      fileType: 'PDF',
                    },
                  ]}
                />
                <ResourceCard
                  title='Budget & Finance'
                  resources={[
                    {
                      title: 'Budget Request Template',
                      description: 'Template for submitting budget requests',
                      link: '#',
                      fileType: 'XLSX',
                    },
                    {
                      title: 'Expense Report Form',
                      description: 'Form for reporting club and event expenses',
                      link: '#',
                      fileType: 'PDF',
                    },
                    {
                      title: 'Fundraising Approval Form',
                      description: 'Required for all fundraising activities',
                      link: '#',
                      fileType: 'PDF',
                    },
                  ]}
                />
              </div>

              <div className='mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg'>
                <div className='flex items-start'>
                  <Mail className='text-orange-500 mr-3 mt-1 flex-shrink-0' />
                  <p className='text-gray-300'>
                    If you are not able to find what you are looking for, you
                    can email{' '}
                    <a
                      href='mailto:a.bounasser@aui.ma'
                      className='text-orange-500 hover:underline'
                    >
                      a.bounasser@aui.ma
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Events */}
          {activeTab === 'events' && (
            <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Calendar className='mr-3 text-orange-500' />
                Event Forms
              </h2>
              <p className='text-gray-300 mb-8'>
                Planning an event? Make sure to complete these forms before and
                after your event to ensure proper approval and documentation.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <ResourceItem
                  title='Pre-event Form'
                  description='Complete this form at least 2 weeks before your event'
                  link='#'
                  icon={<Calendar className='text-orange-500' />}
                  fileType='PDF'
                />
                <ResourceItem
                  title='Post-event Form'
                  description='Submit within 3 days after your event'
                  link='#'
                  icon={<Calendar className='text-orange-500' />}
                  fileType='PDF'
                />
                <ResourceItem
                  title='Guest Request Form'
                  description='Required for inviting external guests to campus'
                  link='#'
                  icon={<Users className='text-orange-500' />}
                  fileType='PDF'
                />
              </div>

              <div className='mt-8'>
                <h3 className='text-xl font-semibold text-white mb-4'>
                  Event Planning Guidelines
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='bg-gray-700/30 backdrop-blur-sm rounded-lg p-5 border border-gray-600/50'>
                    <h4 className='text-white font-medium mb-3'>
                      Event Timeline
                    </h4>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                          1
                        </span>
                        <span>Submit Pre-event Form (2 weeks before)</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                          2
                        </span>
                        <span>Receive approval from SAO</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                          3
                        </span>
                        <span>Book venue and necessary equipment</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                          4
                        </span>
                        <span>Hold event</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                          5
                        </span>
                        <span>Submit Post-event Form (3 days after)</span>
                      </li>
                    </ul>
                  </div>
                  <div className='bg-gray-700/30 backdrop-blur-sm rounded-lg p-5 border border-gray-600/50'>
                    <h4 className='text-white font-medium mb-3'>
                      Event Checklist
                    </h4>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                        <span>Confirm budget approval</span>
                      </li>
                      <li className='flex items-start'>
                        <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                        <span>Arrange for necessary equipment</span>
                      </li>
                      <li className='flex items-start'>
                        <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                        <span>Create promotional materials</span>
                      </li>
                      <li className='flex items-start'>
                        <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                        <span>Confirm attendance of speakers/performers</span>
                      </li>
                      <li className='flex items-start'>
                        <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                        <span>Prepare evaluation forms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clubs */}
          {activeTab === 'clubs' && (
            <div>
              <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8'>
                <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
                  <Users className='mr-3 text-orange-500' />
                  Club Creation and Renewal
                </h2>
                <p className='text-gray-300 mb-8'>
                  Download these essential documents for creating a new club or
                  renewing an existing one. Follow the guidelines provided in
                  each document.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <ResourceItem
                    title='Club Creation/Renewal Form'
                    description='Official form required for new clubs or annual renewal'
                    link='#'
                    icon={<FileText className='text-orange-500' />}
                    fileType='PDF'
                  />
                  <ResourceItem
                    title='Advisor Form'
                    description='Must be completed by the faculty/staff advisor'
                    link='#'
                    icon={<Users className='text-orange-500' />}
                    fileType='PDF'
                  />
                  <ResourceItem
                    title='Sample Action Plan'
                    description="Template for creating your club's action plan"
                    link='#'
                    icon={<Calendar className='text-orange-500' />}
                    fileType='XLSX'
                  />
                  <ResourceItem
                    title='Sample Constitution'
                    description="Template for creating your club's constitution"
                    link='#'
                    icon={<FileText className='text-orange-500' />}
                    fileType='DOCX'
                  />
                </div>
              </div>

              <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h2 className='text-2xl font-bold text-white mb-4 flex items-center'>
                  <Users className='mr-3 text-orange-500' />
                  Create a Club
                </h2>
                <p className='text-gray-300 mb-6'>
                  To create a new club at Al Akhawayn University, please fill
                  out the embedded form below or click the button to open it in
                  a new window.
                </p>

                <div className='flex flex-wrap gap-4 mb-6'>
                  <button
                    onClick={() => setEmbedFormVisible(!embedFormVisible)}
                    className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
                  >
                    {embedFormVisible ? 'Hide Form' : 'Show Embedded Form'}
                    {embedFormVisible ? (
                      <ChevronUp className='w-5 h-5' />
                    ) : (
                      <ChevronDown className='w-5 h-5' />
                    )}
                  </button>

                  <a
                    href='https://forms.office.com/Pages/ResponsePage.aspx?id=TOAlcMpwv0ire3OVTLhGreKnvvJXSbFAndMP7fFaXxpURUZUTlhaVFBRUzJYNUJWR1pZUU1HTzNEVi4u'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
                  >
                    Open in New Window
                    <ExternalLink className='w-5 h-5' />
                  </a>
                </div>

                {embedFormVisible && (
                  <div className='rounded-lg overflow-hidden border border-gray-600 h-[600px]'>
                    <iframe
                      src='https://forms.office.com/Pages/ResponsePage.aspx?id=TOAlcMpwv0ire3OVTLhGreKnvvJXSbFAndMP7fFaXxpURUZUTlhaVFBRUzJYNUJWR1pZUU1HTzNEVi4u'
                      width='100%'
                      height='100%'
                      frameBorder='0'
                      title='Club Creation Form'
                    ></iframe>
                  </div>
                )}

                <div className='mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg'>
                  <h3 className='text-white font-semibold mb-2'>
                    Club Creation Process
                  </h3>
                  <ol className='space-y-2 text-gray-300 list-decimal list-inside'>
                    <li>Fill out the club creation form completely</li>
                    <li>Gather at least 10 interested student signatures</li>
                    <li>Find a faculty or staff advisor</li>
                    <li>
                      Create a club constitution using the template provided
                    </li>
                    <li>Develop an action plan for the semester/year</li>
                    <li>Submit all documents to the SAO office</li>
                    <li>Wait for approval notification</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* SAO Logos */}
          {activeTab === 'logos' && (
            <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Image className='mr-3 text-orange-500' />
                SAO Logo Versions
              </h2>
              <p className='text-gray-300 mb-8'>
                Official SAO logos for use in club materials, event promotions,
                and other approved student activities. Please follow the usage
                guidelines when using these logos.
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

              <div className='mt-8 p-5 bg-gray-700/30 backdrop-blur-sm rounded-lg border border-gray-600/50'>
                <h3 className='text-white font-semibold mb-3'>
                  Logo Usage Guidelines
                </h3>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start'>
                    <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                    <span>
                      Always maintain the logo's proportions when resizing
                    </span>
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
                    <span>
                      Use the appropriate version for different backgrounds
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                    <span>
                      Do not use the logo in ways that suggest SAO endorsement
                      without approval
                    </span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg'>
                <div className='flex items-start'>
                  <Mail className='text-orange-500 mr-3 mt-1 flex-shrink-0' />
                  <p className='text-gray-300'>
                    If you need specific logo formats or have questions about
                    usage, please email{' '}
                    <a
                      href='mailto:a.bounasser@aui.ma'
                      className='text-orange-500 hover:underline'
                    >
                      a.bounasser@aui.ma
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQs */}
          {activeTab === 'faqs' && (
            <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <HelpCircle className='mr-3 text-orange-500' />
                Frequently Asked Questions
              </h2>
              <p className='text-gray-300 mb-8'>
                Find answers to common questions about student activities,
                clubs, events, and more.
              </p>

              <div className='space-y-4'>
                <FAQItem
                  question='How do I start a new student club?'
                  answer="To start a new student club, you need to fill out the Club Creation Form and gather at least 10 interested student signatures. You'll also need to find a faculty advisor, create a club constitution using our template, and develop an action plan. Submit all these documents to the SAO office and wait for approval. Check the Clubs tab for all necessary forms and more details."
                />
                <FAQItem
                  question="What's the process for organizing an event on campus?"
                  answer="To organize an event on campus, fill out the Pre-event Form at least two weeks before your proposed date. Once approved, you can reserve the necessary space and equipment. After your event, submit the Post-event Form within 3 days. If you're inviting external guests to campus, you'll also need to submit a Guest Request Form. Visit the Events tab for all required forms."
                />
                <FAQItem
                  question='How can I get funding for my club activities?'
                  answer='Clubs can request funding by submitting a Budget Request Form to the SAO. Make sure to include a detailed breakdown of expenses and justification for the requested amount. Submit your budget request at least 3 weeks before your planned activity. Remember that all expenses must follow university financial policies.'
                />
                <FAQItem
                  question='When should clubs renew their registration?'
                  answer='Clubs must renew their registration at the beginning of each academic year, typically during the first two weeks of the Fall semester. The renewal process requires submitting the Club Renewal Form, an updated list of officers, and an action plan for the year. Clubs that fail to renew by the deadline may lose their official status.'
                />
                <FAQItem
                  question="Can I use the SAO logo for my club's materials?"
                  answer='Yes, clubs may use the SAO logo on their materials, but must follow the usage guidelines. The logo should not be altered in any way, and usage should not imply endorsement of activities not approved by SAO. Download the appropriate logo version from the SAO Logos tab. If you have specific needs, contact the SAO office.'
                />
                <FAQItem
                  question='How can I reserve a room for a club meeting or event?'
                  answer='To reserve a room, first ensure your event is approved through the Pre-event Form. Then, contact the Building and Grounds department with your approved event form to request the specific space. Reservations should be made at least one week in advance for regular meetings and two weeks for special events.'
                />
                <FAQItem
                  question='What should I do if I need to change the date or location of my approved event?'
                  answer='If you need to change the date, time, or location of an already approved event, contact the SAO office immediately. Minor changes may be approved via email, but significant changes might require submitting an updated Pre-event Form. Always notify the SAO at least 48 hours before the originally scheduled event time.'
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface TabButtonProps {
  label: string;
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  active,
  icon,
  onClick,
}) => (
  <button
    className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
      active
        ? 'text-orange-500 border-b-2 border-orange-500'
        : 'text-gray-400 hover:text-gray-300'
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

interface ResourceCardProps {
  title: string;
  resources: {
    title: string;
    description?: string;
    link: string;
    fileType?: string;
  }[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, resources }) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-lg p-5 border border-gray-600/50'>
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

const ResourceItem: React.FC<ResourceItemProps> = ({
  title,
  description,
  link,
  icon,
  fileType,
}) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-lg p-5 border border-gray-600/50 hover:border-orange-500/30 transition-colors'>
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

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
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

const LogoPreview: React.FC<{ title: string }> = ({ title }) => (
  <div className='bg-gray-700/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-600/50 flex flex-col'>
    <div className='aspect-square bg-gray-800 flex items-center justify-center p-6'>
      <div className='w-full h-full bg-gray-700/50 rounded flex items-center justify-center'>
        <Image className='w-16 h-16 text-orange-500' />
      </div>
    </div>
    <div className='p-4'>
      <h3 className='text-white font-medium text-center'>{title}</h3>
    </div>
  </div>
);

export default ResourcesPage;
