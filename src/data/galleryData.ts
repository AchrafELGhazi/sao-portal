// src/data/galleryData.ts

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
  fullDescription?: string;
  category: string;
  date: string;
  location?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/student-fair.webp',
    alt: 'Student Activities Fair',
    description: 'Students exploring various clubs and organizations at the activities fair.',
    fullDescription: 'The Student Activities Fair is an annual event where all campus clubs and organizations set up booths to showcase their activities and recruit new members. This photo captures the vibrant atmosphere of students engaging with different clubs, learning about opportunities, and signing up for memberships that match their interests.',
    category: 'events',
    date: 'September 15, 2024',
    location: 'Student Center Plaza'
  },
  {
    id: 2,
    src: '/gallery/basketball-game.webp',
    alt: 'Basketball Championship',
    description: 'Exciting moments from the intramural basketball championship game.',
    fullDescription: 'The final match of the intramural basketball tournament brought together the best teams on campus for an intense competition. The game featured impressive athletic performances and sportsmanship, with a packed audience cheering on their favorite teams. This tournament is part of our effort to promote physical activity and friendly competition among students.',
    category: 'sports',
    date: 'November 8, 2024',
    location: 'AUI Sports Complex'
  },
  {
    id: 3,
    src: '/gallery/cultural-festival.webp',
    alt: 'International Cultural Festival',
    description: 'Students sharing their cultural heritage through food, performances, and displays.',
    fullDescription: 'The International Cultural Festival celebrates the diversity of our campus community. International students from over 30 countries set up booths to share traditional foods, crafts, and information about their home countries. Throughout the day, the event featured performances of traditional music and dance, creating a rich multicultural experience for all attendees.',
    category: 'cultural',
    date: 'March 22, 2024',
    location: 'Campus Main Square'
  },
  {
    id: 4,
    src: '/gallery/graduation.webp',
    alt: 'Graduation Ceremony',
    description: 'Celebrating the achievements of the Class of 2024 at the commencement ceremony.',
    fullDescription: 'The graduation ceremony marked the culmination of years of hard work and dedication for our students. Family members, friends, faculty, and staff gathered to celebrate this significant milestone. The event included inspiring speeches from distinguished guests and alumni, recognition of academic achievements, and the conferring of degrees to our proud graduates.',
    category: 'academic',
    date: 'May 30, 2024',
    location: 'AUI Auditorium'
  },
  {
    id: 5,
    src: '/gallery/campus-life.webp',
    alt: 'Campus Life',
    description: 'Students relaxing and studying in the central campus gardens.',
    fullDescription: 'This candid shot captures the everyday life of students on campus, showing how they balance academic pursuits with leisure time. The central gardens are a popular spot for students to gather between classes, study outdoors when the weather is nice, or simply enjoy the beautiful landscaping that makes our campus special.',
    category: 'campus',
    date: 'April 10, 2024',
    location: 'Central Campus Gardens'
  },
  {
    id: 6,
    src: '/gallery/academic-conference.webp',
    alt: 'Academic Conference',
    description: 'Students presenting their research at the annual academic conference.',
    fullDescription: 'The Annual Undergraduate Research Conference provides an opportunity for students to present their original research projects to peers, faculty, and visitors. This photo shows a student explaining her findings during the poster session. The conference showcases the intellectual curiosity and academic rigor of our student body across all disciplines.',
    category: 'academic',
    date: 'February 25, 2024',
    location: 'Conference Center'
  },
  {
    id: 7,
    src: '/gallery/volunteer-day.webp',
    alt: 'Community Service Day',
    description: 'Students participating in the annual community service day.',
    fullDescription: 'The Annual Community Service Day brings together hundreds of students to volunteer for various community projects. Activities include environmental cleanup, school renovations, visits to orphanages and elderly homes, and other charitable initiatives. This event embodies our university\'s commitment to social responsibility and community engagement.',
    category: 'community',
    date: 'October 12, 2024',
    location: 'Various Locations'
  },
  {
    id: 8,
    src: '/gallery/leadership-workshop.webp',
    alt: 'Leadership Workshop',
    description: 'Students developing leadership skills through interactive workshops.',
    fullDescription: 'The Leadership Development Series consists of workshops designed to enhance students\' leadership capabilities. This particular session focused on team building and effective communication. Through role-playing exercises and group discussions, participants gained practical skills they can apply in their roles as student leaders and in their future careers.',
    category: 'workshops',
    date: 'January 18, 2024',
    location: 'Student Development Center'
  },
  {
    id: 9,
    src: '/gallery/talent-show.webp',
    alt: 'Annual Talent Show',
    description: 'Students showcasing their diverse talents on stage.',
    fullDescription: 'The Annual Talent Show is one of the most anticipated events of the spring semester. Students demonstrate their abilities in music, dance, comedy, poetry, and other performing arts. This event not only entertains the campus community but also celebrates the diverse talents that our students possess beyond their academic pursuits.',
    category: 'events',
    date: 'April 5, 2024',
    location: 'AUI Theater'
  },
  {
    id: 10,
    src: '/gallery/debate-competition.webp',
    alt: 'Debate Tournament',
    description: 'Students engaging in the final round of the debate tournament.',
    fullDescription: 'The Intercollegiate Debate Tournament brings together teams from various universities to compete in structured argumentation on current affairs and philosophical topics. This photo captures the intensity of the final round, where participants demonstrated critical thinking, research skills, and persuasive speaking abilities. The event fosters intellectual growth and civic engagement.',
    category: 'academic',
    date: 'November 15, 2024',
    location: 'Mohammed VI Conference Center'
  },
  {
    id: 11,
    src: '/gallery/robotics-competition.webp',
    alt: 'Robotics Competition',
    description: 'Engineering students demonstrating their robotics projects.',
    fullDescription: 'The Annual Robotics Competition showcases the innovation and technical prowess of our engineering students. Teams spend months designing, building, and programming robots to complete specific challenges. The event attracts industry representatives who come to observe the next generation of engineering talent and sometimes offer internships or sponsorships.',
    category: 'academic',
    date: 'March 8, 2024',
    location: 'Engineering Building'
  },
  {
    id: 12,
    src: '/gallery/music-festival.webp',
    alt: 'Campus Music Festival',
    description: 'Live performances at the spring music festival.',
    fullDescription: 'The Spring Music Festival features performances by student bands, solo musicians, and sometimes guest artists from the local music scene. This outdoor event transforms the campus into a vibrant concert venue where students can relax, enjoy music spanning various genres, and celebrate the end of the academic year with their friends.',
    category: 'cultural',
    date: 'May 12, 2024',
    location: 'Amphitheater'
  },
  {
    id: 13,
    src: '/gallery/art-exhibition.webp',
    alt: 'Student Art Exhibition',
    description: 'Artwork created by students displayed in the annual exhibition.',
    fullDescription: 'The Student Art Exhibition showcases paintings, sculptures, photographs, digital art, and mixed media pieces created by students from all majors. This annual event highlights the creative talents of our student body and provides them with a professional gallery experience. Visitors can meet the artists and even purchase artwork, with proceeds supporting the university\'s art programs.',
    category: 'cultural',
    date: 'December 10, 2024',
    location: 'Art Gallery'
  },
  {
    id: 14,
    src: '/gallery/career-fair.webp',
    alt: 'Career Fair',
    description: 'Students networking with potential employers at the career fair.',
    fullDescription: 'The Biannual Career Fair connects students with representatives from companies across various industries. Students come prepared with resumes and professional attire to make connections that could lead to internships and job opportunities. The event also features workshops on resume building, interview skills, and career planning to help students prepare for their professional futures.',
    category: 'career',
    date: 'February 7, 2024',
    location: 'Student Center'
  },
  {
    id: 15,
    src: '/gallery/sports-tournament.webp',
    alt: 'Sports Tournament',
    description: 'Students competing in the annual sports tournament.',
    fullDescription: 'The Annual Sports Tournament includes competitions in soccer, basketball, volleyball, tennis, and swimming. Teams representing different departments, residence halls, and student organizations compete for trophies and bragging rights. The event promotes physical fitness, teamwork, and school spirit, with spectators enthusiastically cheering for their favorite teams.',
    category: 'sports',
    date: 'October 25, 2024',
    location: 'Sports Complex'
  },
  {
    id: 16,
    src: '/gallery/club-leaders.webp',
    alt: 'Club Leadership Conference',
    description: 'Student club leaders participating in leadership training.',
    fullDescription: 'The Club Leadership Conference is a day-long event designed to equip club officers with the skills and knowledge needed to lead their organizations effectively. The program includes sessions on budget management, event planning, conflict resolution, and member recruitment. This conference is part of our ongoing effort to develop strong student leaders who can make a positive impact on campus.',
    category: 'workshops',
    date: 'September 8, 2024',
    location: 'Conference Center'
  }
];