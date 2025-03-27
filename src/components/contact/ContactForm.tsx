import React, { useState, ChangeEvent, FormEvent } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
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
                      ? 'transform -translate-y-6 translate-x-4 text-sm text-orange-500'
                      : 'left-12 top-4'
                  }`}
                >
                  {focusedField === 'name' || formData.name ? 'Your Name' : ''}
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
                      ? 'transform -translate-y-6 translate-x-4 text-sm text-orange-500'
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
                    ? 'transform -translate-y-6 translate-x-4 text-sm text-orange-500'
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
                    ? 'transform -translate-y-6 translate-x-4 text-sm text-orange-500'
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
    </div>
  );
};

export default ContactForm;
