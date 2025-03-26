import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  Bell,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    if (topRef.current) {
      topRef.current.scrollIntoView();
    }
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield className='w-5 h-5 text-orange-500' />,
      content: `This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Template.`,
    },
    {
      id: 'definitions',
      title: 'Interpretation and Definitions',
      icon: <FileText className='w-5 h-5 text-orange-500' />,
      content: `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

For the purposes of this Privacy Policy:

• Account means a unique account created for You to access our Service or parts of our Service.

• Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Student Activities Office.

• Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

• Country refers to: Morocco

• Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

• Personal Data is any information that relates to an identified or identifiable individual.

• Service refers to the Website.

• Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.

• Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

• Website refers to Student Activities Office, accessible from https://sao.aui.ma/

• You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
    },
    {
      id: 'data-collection',
      title: 'Collecting and Using Your Personal Data',
      icon: <Eye className='w-5 h-5 text-orange-500' />,
      content: `While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.`,
    },
    {
      id: 'cookies',
      title: 'Tracking Technologies and Cookies',
      icon: <Lock className='w-5 h-5 text-orange-500' />,
      content: `We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:

• Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.

• Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies.

• Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).

Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.`,
    },
    {
      id: 'data-use',
      title: 'Use of Your Personal Data',
      icon: <Bell className='w-5 h-5 text-orange-500' />,
      content: `The Company may use Personal Data for the following purposes:

• To provide and maintain our Service, including to monitor the usage of our Service.

• To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.

• For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.

• To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.

• To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.

• To manage Your requests: To attend and manage Your requests to Us.

• For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.

• For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <HelpCircle className='w-5 h-5 text-orange-500' />,
      content: `If you have any questions about this Privacy Policy, You can contact us:

By email: r.elmakroum@aui.ma`,
    },
  ];

  return (
    <div
      ref={topRef}
      className='min-h-screen bg-gradient-to-b from-black to-gray-900 text-white'
    >
      {/* Header Section with background effects */}
      {/* COMMENT: Added top padding to account for fixed navigation */}
      <div className='relative pt-20 overflow-hidden'>
        {/* Background glowing effects - creates depth and futuristic feel */}
        <div className='absolute inset-0 z-0'>
          {/* COMMENT: Larger blur radius for more diffused glow */}
          <div className='absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]' />
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]' />
          <div className='absolute inset-0 bg-black/40' />
        </div>

        {/* Header content with improved spacing */}
        {/* COMMENT: Increased horizontal padding (px-6) for better alignment on all devices */}
        <div className='container mx-auto px-6 sm:px-8 py-20 relative z-10'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>

          {/* COMMENT: Added text shadow for better legibility on gradients */}
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-shadow'>
            Privacy Policy
          </h1>
          {/* COMMENT: Increased width and rounded corners more for modern look */}
          <div className='h-1 w-24 bg-orange-500 mb-6 rounded-full' />
          <p className='text-gray-400 max-w-2xl'>
            Last updated: February 09, 2022
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      {/* COMMENT: Increased overall padding for better readability and spacing */}
      <div className='container mx-auto px-6 sm:px-8 py-0'>
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Navigation sidebar - sticky for better UX */}
          <div className='lg:w-1/4'>
            {/* COMMENT: Increased border radius and improved shadow for depth */}
            <div className='sticky top-32 bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/20'>
              <h3 className='text-lg font-medium mb-6 text-orange-500'>
                On this page
              </h3>
              <nav className='space-y-2'>
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className='flex items-center text-gray-400 hover:text-orange-500 py-2 px-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300'
                  >
                    {section.icon}
                    <span className='ml-3'>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content area with sections */}
          <div className='lg:w-3/4'>
            <div className='space-y-20'>
              {sections.map(section => (
                <section
                  key={section.id}
                  id={section.id}
                  className='scroll-mt-28' // COMMENT: Increased scroll margin to account for sticky header
                >
                  {/* Section header with icon */}
                  <div className='flex items-center mb-8 space-x-4'>
                    {/* COMMENT: Increased rounding and added subtle shadow for depth */}
                    <div className='p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 shadow-lg shadow-orange-500/5'>
                      {section.icon}
                    </div>
                    <h2 className='text-2xl font-bold text-white'>
                      {section.title}
                    </h2>
                  </div>

                  {/* Section content card */}
                  {/* COMMENT: Increased rounding, added gradient border for futuristic look */}
                  <div className='bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/20 transition-all duration-500 shadow-xl shadow-black/20'>
                    <div className='prose prose-invert max-w-none'>
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className='mb-6 text-gray-300 leading-relaxed'
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ/Contact Banner with enhanced styling */}
      {/* COMMENT: Added more pronounced gradient and interactive elements */}
      <div className='relative mt-16 py-16 overflow-hidden'>
        <div className='absolute inset-0'>
          {/* COMMENT: Enhanced gradient with more vibrant colors */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-500/25 to-purple-500/25' />
          <div className='absolute inset-0 backdrop-blur-xl' />
          {/* COMMENT: Added animated pulse effect to borders for futuristic feel */}
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent animate-pulse' />
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent animate-pulse' />
        </div>

        {/* COMMENT: Improved padding and rounded corners for container */}
        <div className='container mx-auto px-6 sm:px-8 relative z-10'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8 bg-black/20 p-8 rounded-2xl backdrop-blur-sm border border-white/5'>
            <div>
              <h3 className='text-2xl font-bold mb-2'>Still have questions?</h3>
              <p className='text-gray-400'>
                Contact the Student Activities Office for more information
              </p>
            </div>
            {/* COMMENT: Enhanced button with subtle animation */}
            <Link
              to='/contact'
              className='px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
