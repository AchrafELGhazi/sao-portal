import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Calendar, Building } from 'lucide-react';

const stats = [
  {
    value: '20+',
    label: 'Years of Excellence',
    icon: Calendar,
  },
  {
    value: '50+',
    label: 'Student Organizations',
    icon: Users,
  },
  {
    value: '1000+',
    label: 'Annual Events',
    icon: Calendar,
  },
  {
    value: '10k+',
    label: 'Student Participants',
    icon: Users,
  },
];
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Director of Student Activities',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Mohammed Ali',
    role: 'Student Organizations Coordinator',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Emily Chen',
    role: 'Events Manager',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Leadership Development Coordinator',
    image: '/placeholder.svg?height=400&width=400',
  },
];

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#121225] to-[#1D1D35] text-white'>
      {/* Hero Section */}
      <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 pt-24 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className='bg-orange-500/10 rounded-full text-orange-500 mb-4'>
              About SAO
            </Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Empowering Student Life at Al Akhawayn
            </h1>
            <p className='text-lg text-gray-400 mb-8'>
              The Student Activities Office (SAO) is the heart of campus life,
              fostering leadership, community engagement, and memorable
              experiences for all students.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <Card className='bg-[#1A1A2F]/80 border-white/10 backdrop-blur-md overflow-hidden'>
              <CardContent className='p-6'>
                <div className='grid grid-cols-2 gap-6'>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='text-center p-4 rounded-xl bg-white/5'
                    >
                      <stat.icon className='w-8 h-8 mx-auto mb-3 text-orange-500' />
                      <div className='text-3xl text-white font-bold mb-1'>
                        {stat.value}
                      </div>
                      <div className='text-sm text-gray-400'>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-16 bg-white/5'>
        <div className='max-w-4xl mx-auto text-center'>
          <Badge className='bg-purple-500/10 rounded-full text-purple-500 mb-4'>
            Our Mission
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Cultivating Tomorrow's Leaders
          </h2>
          <p className='text-lg text-gray-400 mb-8'>
            We are dedicated to enhancing the student experience through diverse
            programs, leadership opportunities, and community engagement
            initiatives. Our goal is to create an environment where every
            student can discover their potential and make lasting contributions
            to our community.
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='bg-[#1A1A2F]/80 border-white/10'>
              <CardContent className='p-6 text-center'>
                <Award className='w-10 h-10 mx-auto mb-4 text-purple-500' />
                <h3 className='text-xl font-semibold mb-2'>Leadership</h3>
                <p className='text-gray-400'>
                  Developing future leaders through hands-on experience
                </p>
              </CardContent>
            </Card>
            <Card className='bg-[#1A1A2F]/80 border-white/10'>
              <CardContent className='p-6 text-center'>
                <Users className='w-10 h-10 mx-auto mb-4 text-purple-500' />
                <h3 className='text-xl font-semibold mb-2'>Community</h3>
                <p className='text-gray-400'>
                  Building strong bonds through shared experiences
                </p>
              </CardContent>
            </Card>
            <Card className='bg-[#1A1A2F]/80 border-white/10'>
              <CardContent className='p-6 text-center'>
                <Building className='w-10 h-10 mx-auto mb-4 text-purple-500' />
                <h3 className='text-xl font-semibold mb-2'>Growth</h3>
                <p className='text-gray-400'>
                  Fostering personal and professional development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  

      {/* Team Section */}
      <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-16 bg-white/5'>
        <div className='max-w-4xl mx-auto text-center'>
          <Badge className='bg-green-500/10 rounded-full text-green-500 mb-4'>
            Our Team
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>
            Meet the People Behind SAO
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='bg-[#1A1A2F]/80 border-white/10 overflow-hidden'>
                  <CardContent className='p-0'>
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className='w-full aspect-square object-cover'
                    />
                    <div className='p-6'>
                      <h3 className='text-lg font-semibold mb-1'>
                        {member.name}
                      </h3>
                      <p className='text-sm text-gray-400'>{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
