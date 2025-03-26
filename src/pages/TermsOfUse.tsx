import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  FileText,
  Shield,
  Lock,
  Eye,
  Bell,
  HelpCircle,
  Gavel,
  AlertTriangle,
  Link as LinkIcon,
  XCircle,
  Scale,
  Globe,
  RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
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
      title: 'Terms and Conditions',
      icon: <Gavel className='w-5 h-5 text-orange-500' />,
      content: `Last updated: February 09, 2022

Please read these terms and conditions carefully before using Our Service.`,
    },
    {
      id: 'interpretation',
      title: 'Interpretation and Definitions',
      icon: <FileText className='w-5 h-5 text-orange-500' />,
      content: `Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of these Terms and Conditions:

• Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

• Country refers to: Morocco

• Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Student Activities Office.

• Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

• Service refers to the Website.

• Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.

• Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.

• Website refers to Student Activities Office, accessible from https://sao.aui.ma/

• You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
    },
    {
      id: 'acknowledgment',
      title: 'Acknowledgment',
      icon: <Shield className='w-5 h-5 text-orange-500' />,
      content: `These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.`,
    },
    {
      id: 'external-links',
      title: 'Links to Other Websites',
      icon: <LinkIcon className='w-5 h-5 text-orange-500' />,
      content: `Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.`,
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <XCircle className='w-5 h-5 text-orange-500' />,
      content: `We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.`,
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <AlertTriangle className='w-5 h-5 text-orange-500' />,
      content: `Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.`,
    },
    {
      id: 'disclaimer',
      title: '"AS IS" and "AS AVAILABLE" Disclaimer',
      icon: <Lock className='w-5 h-5 text-orange-500' />,
      content: `The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.`,
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: <Scale className='w-5 h-5 text-orange-500' />,
      content: `The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

Disputes Resolution
If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.`,
    },
    {
      id: 'eu-users',
      title: 'For European Union (EU) Users',
      icon: <Globe className='w-5 h-5 text-orange-500' />,
      content: `If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.

United States Legal Compliance
You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.`,
    },
    {
      id: 'severability',
      title: 'Severability and Waiver',
      icon: <Eye className='w-5 h-5 text-orange-500' />,
      content: `Severability
If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

Waiver
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

Translation Interpretation
These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.`,
    },
    {
      id: 'changes',
      title: 'Changes to These Terms and Conditions',
      icon: <RefreshCw className='w-5 h-5 text-orange-500' />,
      content: `We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <HelpCircle className='w-5 h-5 text-orange-500' />,
      content: `If you have any questions about these Terms and Conditions, You can contact us:

By email: r.elmakroum@aui.ma`,
    },
  ];

  return (
    <div
      ref={topRef}
      className='min-h-screen bg-gradient-to-b from-black to-gray-900 text-white'
    >
      {/* Header Section with Background Effects */}
      <div className='relative pt-20 overflow-hidden'>
        {/* Background Glows for Depth */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]' />
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]' />
          <div className='absolute inset-0 bg-black/40' />
        </div>

        {/* Header Content */}
        <div className='container mx-auto px-6 sm:px-8 py-20 relative z-10'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>

          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-shadow'>
            Terms and Conditions
          </h1>
          <div className='h-1 w-24 bg-orange-500 mb-6 rounded-full' />
          <p className='text-gray-400 max-w-2xl'>
            Last updated: February 09, 2022
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='container mx-auto px-6 sm:px-8 py-12'>
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Sidebar Navigation */}
          <aside className='lg:w-1/4'>
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
          </aside>

          {/* Content Sections */}
          <main className='lg:w-3/4'>
            <div className='space-y-20'>
              {sections.map(section => (
                <section
                  key={section.id}
                  id={section.id}
                  className='scroll-mt-28'
                >
                  {/* Section Header */}
                  <div className='flex items-center mb-8 space-x-4'>
                    <div className='p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 shadow-lg shadow-orange-500/5'>
                      {section.icon}
                    </div>
                    <h2 className='text-2xl font-bold text-white'>
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
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
          </main>
        </div>
      </div>
    </div>
  );
};
export default TermsOfUse;
