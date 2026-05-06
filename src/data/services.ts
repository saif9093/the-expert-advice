export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  description: string;
  requirements: string[];
  benefits: string[];
  processingTime: string;
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Skilled Visa',
    slug: 'skilled-visa',
    icon: 'Briefcase',
    shortDesc: 'Leverage your professional expertise to secure permanent residency in top destinations.',
    description: 'Skilled worker visas are designed for qualified professionals who want to contribute to the economy of their destination country. We help you navigate complex points-based systems and employer-sponsored pathways.',
    requirements: ['Valid job offer or points qualification', 'Recognized qualifications', 'Language proficiency', 'Health and character requirements', 'Sufficient funds'],
    benefits: ['Pathway to permanent residency', 'Bring your family', 'Work for any eligible employer', 'Access to social services'],
    processingTime: '3–12 months',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    id: '2',
    title: 'Study Visa',
    slug: 'study-visa',
    icon: 'GraduationCap',
    shortDesc: 'Pursue world-class education at top universities with expert student visa support.',
    description: 'Study visas open the door to internationally recognized qualifications and post-study work opportunities. Our team ensures your application meets every requirement of your chosen institution and country.',
    requirements: ['Acceptance from accredited institution', 'Proof of tuition funds', 'Language test scores', 'Valid passport', 'Health insurance'],
    benefits: ['Post-study work rights', 'PR pathways after graduation', 'Part-time work during studies', 'Access to scholarship programs'],
    processingTime: '4–8 weeks',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
  },
  {
    id: '3',
    title: 'Business Visa',
    slug: 'business-visa',
    icon: 'TrendingUp',
    shortDesc: 'Expand your business globally with the right visa strategy and expert support.',
    description: 'Business visas allow entrepreneurs, investors, and executives to explore opportunities, attend meetings, or establish operations abroad. We handle everything from short-term business trips to long-term investor visas.',
    requirements: ['Proof of business ownership or employment', 'Business invitation or itinerary', 'Financial statements', 'Valid passport', 'Travel history'],
    benefits: ['Multiple entry options', 'Investor visa pathways', 'Long-term stays available', 'Family accompaniment options'],
    processingTime: '1–6 weeks',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
  },
  {
    id: '4',
    title: 'Work Permit',
    slug: 'work-permit',
    icon: 'FileCheck',
    shortDesc: 'Secure authorized employment in your target country with proper work authorization.',
    description: 'Work permits authorize foreign nationals to work legally in a specific country. Whether employer-sponsored or open work permits, we guide you through every step of the process.',
    requirements: ['Valid job offer from employer', 'Employer sponsorship (where required)', 'Relevant qualifications', 'Language proficiency', 'Police clearance'],
    benefits: ['Legal employment rights', 'Social benefits entitlement', 'Pathway to permanent residency', 'Bring dependents in many cases'],
    processingTime: '4–16 weeks',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  },
  {
    id: '5',
    title: 'Unskilled Visa',
    slug: 'unskilled-visa',
    icon: 'Users',
    shortDesc: 'Opportunities for workers in agriculture, hospitality, and construction sectors abroad.',
    description: 'Many countries actively recruit workers for sectors facing labor shortages, including agriculture, hospitality, and construction. We connect you with legitimate opportunities and handle the full visa process.',
    requirements: ['Valid passport', 'Medical fitness certificate', 'No serious criminal record', 'Employer sponsorship', 'Basic language requirements'],
    benefits: ['Legal work authorization', 'Competitive wages', 'Accommodation often provided', 'Pathway to long-term visa in some countries'],
    processingTime: '4–10 weeks',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
  },
  {
    id: '6',
    title: 'Visitor Visa',
    slug: 'visitor-visa',
    icon: 'MapPin',
    shortDesc: 'Visit family, explore tourism destinations, or attend events with confidence.',
    description: 'Visitor visas allow you to travel internationally for tourism, family visits, medical treatment, or short business trips. We prepare a compelling application that maximizes your approval chances.',
    requirements: ['Valid passport', 'Proof of financial means', 'Return ticket or travel itinerary', 'Accommodation proof', 'Ties to home country'],
    benefits: ['Single or multiple entry options', 'Various duration options', 'Fast processing available', 'Covers tourism and family visits'],
    processingTime: '1–4 weeks',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg',
  },
];
