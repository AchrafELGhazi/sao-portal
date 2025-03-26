import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState('idle');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className='min-h-screen pt-10  bg-gradient-to-b from-black via-gray-900 to-black relative'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-full h-full'>
          {/* Grid lines */}
          <div className='absolute inset-0 grid grid-cols-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-l border-orange-500/30 h-full'
              ></div>
            ))}
          </div>
          <div className='absolute inset-0 grid grid-rows-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-t border-orange-500/30 w-full'
              ></div>
            ))}
          </div>

          {/* Glowing orbs */}
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]'></div>
          <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]'></div>
        </div>
      </div>

      {/* Header section */}
      <section className='relative pt-24 pb-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Tag */}
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
            <span className='text-orange-500 text-sm font-medium'>
              Get in Touch
            </span>
            <ChevronRight className='w-4 h-4 text-orange-500' />
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Contact <span className='text-orange-500'>SAO</span>
          </h1>
          <p className='text-gray-300 text-lg max-w-2xl'>
            Have questions or want to get involved? Reach out to the Student
            Activities Office team. We're here to help you make the most of your
            university experience.
          </p>

          {/* Contact methods */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <ContactMethod
              icon={<Mail className='w-6 h-6 text-orange-500' />}
              title='Email Us'
              description='sao@aui.ma'
              action='Send Email'
              link='mailto:sao@aui.ma'
            />
            <ContactMethod
              icon={<Phone className='w-6 h-6 text-orange-500' />}
              title='Call Us'
              description='+212 535 862 000'
              action='Call Now'
              link='tel:+212535862000'
            />
            <ContactMethod
              icon={<MapPin className='w-6 h-6 text-orange-500' />}
              title='Visit Us'
              description='Building 6, Room 101'
              action='View Map'
              link='#campus-map'
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className='py-16 relative'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Staff section */}
            <div>
              <h2 className='text-3xl font-bold text-white mb-8 flex items-center'>
                <span className='inline-block w-6 h-1 bg-orange-500 mr-3'></span>
                SAO Staff
              </h2>

              <div className='space-y-6'>
                <StaffCard
                  name='Yasmine Tazi'
                  role='SAO Administrator'
                  email='y.tazi@aui.ma'
                  phone='+212 535 862 123'
                  avatar='/staff/yasmine.webp'
                />
                <StaffCard
                  name='Aymane Ouajjou'
                  role='SAO Administrator'
                  email='a.ouajjou@aui.ma'
                  phone='+212 535 862 456'
                  avatar='/staff/aymane.webp'
                />
                <StaffCard
                  name='Salah Eddine Azaou'
                  role='SAO Administrator'
                  email='s.azaou@aui.ma'
                  phone='+212 535 862 789'
                  avatar='/staff/salah.webp'
                />
              </div>

              <div className='mt-12'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                  <span className='inline-block w-4 h-1 bg-orange-500 mr-3'></span>
                  Office Hours
                </h3>

                <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50'>
                  <div className='grid grid-cols-2 divide-x divide-gray-700/50'>
                    <div className='p-6'>
                      <h4 className='text-white font-semibold mb-2'>
                        Weekdays
                      </h4>
                      <p className='text-gray-300'>9:00 AM - 5:00 PM</p>
                    </div>
                    <div className='p-6'>
                      <h4 className='text-white font-semibold mb-2'>
                        Weekends
                      </h4>
                      <p className='text-gray-300'>Closed</p>
                    </div>
                  </div>
                  <div className='border-t border-gray-700/50 p-6'>
                    <div className='flex items-start'>
                      <div className='bg-orange-500/20 p-2 rounded-full mr-4'>
                        <Mail className='w-5 h-5 text-orange-500' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold mb-1'>
                          Email Response Time
                        </h4>
                        <p className='text-gray-300'>
                          We aim to respond to all emails within 24 hours during
                          weekdays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className='text-3xl font-bold text-white mb-8 flex items-center'>
                <span className='inline-block w-6 h-1 bg-orange-500 mr-3'></span>
                Send a Message
              </h2>

              <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 relative overflow-hidden'>
                {/* Decorative elements */}
                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px]'></div>

                <form onSubmit={handleSubmit} className='relative z-10'>
                  <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {/* Name field */}
                      <div className='relative'>
                        <div
                          className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-opacity duration-300 ${
                            focusedField === 'name' || formData.name
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                        >
                          <User className='w-5 h-5 text-orange-500' />
                        </div>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder='Your Name'
                          className='w-full bg-gray-700/50 border border-gray-600 focus:border-orange-500 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300'
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label
                          htmlFor='name'
                          className={`absolute text-gray-400 transition-all duration-300 ${
                            focusedField === 'name' || formData.name
                              ? 'transform -translate-y-6 translate-x-4 scale-80 text-orange-500'
                              : 'left-12 top-4'
                          }`}
                        >
                          {focusedField === 'name' || formData.name
                            ? 'Your Name'
                            : ''}
                        </label>
                      </div>

                      {/* Email field */}
                      <div className='relative'>
                        <div
                          className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-opacity duration-300 ${
                            focusedField === 'email' || formData.email
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                        >
                          <Mail className='w-5 h-5 text-orange-500' />
                        </div>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder='Your Email'
                          className='w-full bg-gray-700/50 border border-gray-600 focus:border-orange-500 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300'
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label
                          htmlFor='email'
                          className={`absolute text-gray-400 transition-all duration-300 ${
                            focusedField === 'email' || formData.email
                              ? 'transform -translate-y-6 translate-x-4 scale-80 text-orange-500'
                              : 'left-12 top-4'
                          }`}
                        >
                          {focusedField === 'email' || formData.email
                            ? 'Your Email'
                            : ''}
                        </label>
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className='relative'>
                      <div
                        className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-opacity duration-300 ${
                          focusedField === 'subject' || formData.subject
                            ? 'opacity-100'
                            : 'opacity-50'
                        }`}
                      >
                        <MessageSquare className='w-5 h-5 text-orange-500' />
                      </div>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder='Subject'
                        className='w-full bg-gray-700/50 border border-gray-600 focus:border-orange-500 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300'
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <label
                        htmlFor='subject'
                        className={`absolute text-gray-400 transition-all duration-300 ${
                          focusedField === 'subject' || formData.subject
                            ? 'transform -translate-y-6 translate-x-4 scale-80 text-orange-500'
                            : 'left-12 top-4'
                        }`}
                      >
                        {focusedField === 'subject' || formData.subject
                          ? 'Subject'
                          : ''}
                      </label>
                    </div>

                    {/* Message field */}
                    <div className='relative'>
                      <div
                        className={`absolute top-4 left-0 pl-4 flex items-start pointer-events-none transition-opacity duration-300 ${
                          focusedField === 'message' || formData.message
                            ? 'opacity-100'
                            : 'opacity-50'
                        }`}
                      >
                        <MessageSquare className='w-5 h-5 text-orange-500' />
                      </div>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder='Your Message'
                        className='w-full bg-gray-700/50 border border-gray-600 focus:border-orange-500 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300'
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      ></textarea>
                      <label
                        htmlFor='message'
                        className={`absolute text-gray-400 transition-all duration-300 ${
                          focusedField === 'message' || formData.message
                            ? 'transform -translate-y-6 translate-x-4 scale-80 text-orange-500'
                            : 'left-12 top-4'
                        }`}
                      >
                        {focusedField === 'message' || formData.message
                          ? 'Your Message'
                          : ''}
                      </label>
                    </div>

                    {/* Submit button */}
                    <div className='flex justify-end'>
                      <button
                        type='submit'
                        disabled={formState === 'submitting'}
                        className={`
                          group relative overflow-hidden rounded-full px-8 py-4 
                          ${
                            formState === 'success'
                              ? 'bg-green-600 hover:bg-green-700'
                              : formState === 'error'
                              ? 'bg-red-600 hover:bg-red-700'
                              : 'bg-orange-500 hover:bg-orange-600'
                          } 
                          text-white transition-all duration-300 flex items-center gap-2
                        `}
                      >
                        {/* Background pulse effect */}
                        <span className='absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500'></span>

                        {formState === 'submitting' ? (
                          <>
                            <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                            <span>Sending...</span>
                          </>
                        ) : formState === 'success' ? (
                          <>
                            <svg
                              className='w-5 h-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 13l4 4L19 7'
                              ></path>
                            </svg>
                            <span>Message Sent!</span>
                          </>
                        ) : formState === 'error' ? (
                          <>
                            <svg
                              className='w-5 h-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                              ></path>
                            </svg>
                            <span>Error. Try Again</span>
                          </>
                        ) : (
                          <>
                            <Send className='w-5 h-5' />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* FAQ Section */}
              <div className='mt-12'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                  <span className='inline-block w-4 h-1 bg-orange-500 mr-3'></span>
                  Frequently Asked Questions
                </h3>

                <div className='space-y-4'>
                  <FAQ
                    question='How can I join a student club?'
                    answer='You can join a student club by attending their meetings or events, or by contacting the club leaders directly. Visit the Clubs page for more information on all active clubs.'
                  />
                  <FAQ
                    question='How do I reserve a space for an event?'
                    answer='To reserve a space for your event, please fill out the Event Space Request form at least two weeks before your event date. Our team will review your request and get back to you.'
                  />
                  <FAQ
                    question='Can I start a new student club?'
                    answer="Yes! To start a new club, you need to gather at least 10 interested students, draft a club constitution, and submit an application to the SAO office. We'll guide you through the process."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus map section */}
      <section id='campus-map' className='py-16 relative bg-gray-900/50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white mb-8 flex items-center'>
            <span className='inline-block w-6 h-1 bg-orange-500 mr-3'></span>
            Find Us on Campus
          </h2>

          <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 relative overflow-hidden'>
            <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
              {/* Replace with actual map component or image */}
              <div className='w-full h-full bg-gray-700 flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin className='w-16 h-16 text-orange-500 mx-auto mb-4' />
                  <p className='text-white text-lg'>Interactive Campus Map</p>
                  <p className='text-gray-400'>
                    Building 6, Room 101 - Student Activities Office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Staff Card Component
interface StaffCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  role,
  email,
  phone,
}) => (
  <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group'>
    <div className='flex flex-col sm:flex-row sm:items-center'>
      <div className='relative sm:w-1/3'>
        <div className='w-full aspect-square bg-gray-700 relative overflow-hidden'>
          {/* Avatar */}
          <div className='absolute inset-0 flex items-center justify-center bg-orange-500/20'>
            <User className='w-16 h-16 text-orange-500' />
          </div>

          {/* Hover effect */}
          <div className='absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </div>

      <div className='p-6 sm:w-2/3'>
        <h3 className='text-xl font-bold text-white group-hover:text-orange-500 transition-colors'>
          {name}
        </h3>
        <p className='text-orange-500 text-sm mb-4'>{role}</p>

        <div className='space-y-2'>
          <a
            href={`mailto:${email}`}
            className='flex items-center text-gray-300 hover:text-orange-500 transition-colors'
          >
            <Mail className='w-4 h-4 mr-2' />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className='flex items-center text-gray-300 hover:text-orange-500 transition-colors'
          >
            <Phone className='w-4 h-4 mr-2' />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Contact Method Component
interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  link: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  icon,
  title,
  description,
  action,
  link,
}) => (
  <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 hover:bg-gray-800/50 transition-all duration-300 group'>
    <div className='bg-orange-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4'>
      {icon}
    </div>

    <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
    <p className='text-gray-300 mb-4'>{description}</p>

    <a
      href={link}
      className='inline-flex items-center text-orange-500 group-hover:text-orange-400 transition-colors'
    >
      <span className='mr-2'>{action}</span>
      <ExternalLink className='w-4 h-4' />
    </a>
  </div>
);

// FAQ Component
interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left p-4 flex justify-between items-center'
      >
        <span className='text-white font-medium'>{question}</span>
        <ChevronRight
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-90' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className='p-4 pt-0 text-gray-300 border-t border-gray-700/50'>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
