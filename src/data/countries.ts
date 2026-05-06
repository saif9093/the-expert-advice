export interface Country {
  id: string;
  name: string;
  slug: string;
  flag: string;
  description: string;
  highlights: string[];
  visaTypes: string[];
  processingTime: string;
  image: string;
  capital: string;
  currency: string;
}

export const countries: Country[] = [
  {
    id: '1',
    name: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    description: 'Canada is one of the most welcoming immigration destinations in the world. With its points-based Express Entry system, Provincial Nominee Programs, and family reunification pathways, Canada offers diverse routes to permanent residency and citizenship.',
    highlights: ['Express Entry PR in as little as 6 months', 'Strong healthcare and education system', 'Multicultural society', 'High quality of life rankings', 'Path to citizenship in 3 years'],
    visaTypes: ['Express Entry', 'Provincial Nominee Program', 'Study Permit', 'Work Permit', 'Family Sponsorship', 'Visitor Visa'],
    processingTime: '6–14 months for PR',
    image: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg',
    capital: 'Ottawa',
    currency: 'CAD',
  },
  {
    id: '2',
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    description: "Australia's skilled migration program offers one of the clearest pathways to permanent residency for qualified professionals. With a robust economy, outstanding lifestyle, and diverse cities, Australia attracts talent from across the globe.",
    highlights: ['Points-based SkillSelect system', 'Strong job market for skilled workers', 'World-class universities', 'Excellent healthcare (Medicare)', 'Permanent residency pathway for students'],
    visaTypes: ['Skilled Independent (189)', 'Skilled Nominated (190)', 'Student Visa (500)', 'Employer Sponsored (482)', 'Business Innovation', 'Visitor ETA'],
    processingTime: '8–18 months for PR',
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg',
    capital: 'Canberra',
    currency: 'AUD',
  },
  {
    id: '3',
    name: 'United Kingdom',
    slug: 'uk',
    flag: '🇬🇧',
    description: "The UK's points-based immigration system makes it accessible for skilled professionals worldwide. From the Skilled Worker visa to the Global Talent visa, the UK offers world-class opportunities in finance, tech, healthcare, and beyond.",
    highlights: ['Global financial hub (London)', 'Prestigious universities', 'Skilled Worker visa pathway to ILR', 'Global Talent visa for exceptional talent', 'Rich history and culture'],
    visaTypes: ['Skilled Worker Visa', 'Global Talent Visa', 'Student Visa', 'Innovator Founder Visa', 'Family Visa', 'Visitor Visa'],
    processingTime: '3–8 weeks for work visa',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    capital: 'London',
    currency: 'GBP',
  },
  {
    id: '4',
    name: 'United States',
    slug: 'usa',
    flag: '🇺🇸',
    description: 'The United States remains the world\'s premier destination for innovation, education, and career growth. With diverse visa categories for workers, students, investors, and families, the US offers unparalleled opportunities.',
    highlights: ['World\'s largest economy', 'Top-ranked universities', 'H-1B for skilled professionals', 'Green card lottery (DV program)', 'Strong entrepreneur ecosystem'],
    visaTypes: ['H-1B Work Visa', 'F-1 Student Visa', 'L-1 Intracompany Transfer', 'EB-5 Investor Visa', 'B-1/B-2 Visitor', 'O-1 Extraordinary Ability'],
    processingTime: 'Varies by category',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
    capital: 'Washington D.C.',
    currency: 'USD',
  },
  {
    id: '5',
    name: 'Europe',
    slug: 'europe',
    flag: '🇪🇺',
    description: 'Europe offers a tapestry of immigration opportunities across 27+ countries. From Germany\'s skilled worker visa to Portugal\'s Golden Visa and Malta\'s citizenship by investment, Europe provides pathways for workers, investors, students, and families.',
    highlights: ['Schengen Area free movement', 'Germany\'s Job Seeker visa', 'Portugal Golden Visa', 'Strong social protections', 'Diverse cultural experiences'],
    visaTypes: ['Germany Skilled Worker Visa', 'Portugal Golden Visa', 'Netherlands Highly Skilled Migrant', 'France Talent Passport', 'Schengen Visitor Visa', 'EU Blue Card'],
    processingTime: 'Varies by country',
    image: 'https://images.pexels.com/photos/6056676/pexels-photo-6056676.jpeg',
    capital: 'Multiple capitals',
    currency: 'EUR (and others)',
  },
  {
    id: '6',
    name: 'New Zealand',
    slug: 'new-zealand',
    flag: '🇳🇿',
    description: 'New Zealand offers a balanced lifestyle, breathtaking landscapes, and excellent opportunities for skilled migrants. With its progressive immigration policies and friendly communities, it is a top destination for those seeking a fresh start.',
    highlights: ['High quality of life', 'Safe and welcoming environment', 'Strong demand for skilled workers', 'Excellent healthcare and education', 'Pathway to citizenship'],
    visaTypes: ['Skilled Migrant Category', 'Work to Residence Visa', 'Essential Skills Work Visa', 'Student Visa', 'Partner of a Worker Visa'],
    processingTime: '8-12 months for PR',
    image: 'https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg',
    capital: 'Wellington',
    currency: 'NZD',
  },
];
