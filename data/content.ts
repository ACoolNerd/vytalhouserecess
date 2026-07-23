export type Service = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  includes: string[];
  status: string;
  image: number;
};

export const services: Service[] = [
  {
    id: 'fire-ice',
    title: 'Fire + Ice Recovery',
    eyebrow: 'RECOVER',
    summary: 'A guided contrast sequence designed around heat, cold, breath, and deliberate recovery pacing.',
    includes: ['Sauna and cold-plunge sequencing', 'Guided breath and recovery intervals', 'Private preparation and decompression flow'],
    status: 'Planned for the flagship; final equipment and protocols remain subject to approval.',
    image: require('../assets/images/cold-plunge.jpg')
  },
  {
    id: 'performance',
    title: 'Performance Technologies',
    eyebrow: 'EVOLVE',
    summary: 'A curated technology lane for members who want structured recovery and performance support without guesswork.',
    includes: ['Hyperbaric experience planning', 'Compression recovery', 'Red-light and restorative modalities'],
    status: 'Availability will depend on final device selection, licensing, provider scope, and operating approvals.',
    image: require('../assets/images/thermal-chamber.jpg')
  },
  {
    id: 'light',
    title: 'Light + Cellular Support',
    eyebrow: 'RECHARGE',
    summary: 'A calming, premium environment for red-light and other non-invasive restoration experiences.',
    includes: ['Red-light sessions', 'Personalized session timing', 'Quiet recovery lounge integration'],
    status: 'Non-medical wellness positioning unless delivered under a separately approved clinical protocol.',
    image: require('../assets/images/red-light.jpg')
  },
  {
    id: 'aesthetics',
    title: 'Clinical + Aesthetic Services',
    eyebrow: 'REFINE',
    summary: 'A separate licensed-provider lane for medical wellness and aesthetic services within a compliance-first structure.',
    includes: ['Medical consultation pathway', 'IV and wellness service planning', 'Aesthetic treatment planning'],
    status: 'No regulated service will launch without licensed oversight, written approvals, insurance, and compliant entity structure.',
    image: require('../assets/images/facial.jpg')
  }
];

export const membershipTiers = [
  {
    name: 'Essential',
    description: 'A consistent recovery rhythm for members building wellness into the week.',
    benefits: ['Member booking access', 'Core recovery experiences', 'Member education and progress check-ins'],
    label: 'Founding details coming soon'
  },
  {
    name: 'Elite',
    description: 'Expanded access for members prioritizing performance, energy, and deeper restoration.',
    benefits: ['Everything in Essential', 'Expanded modality access', 'Priority booking windows and member events'],
    label: 'Founding details coming soon'
  },
  {
    name: 'Executive',
    description: 'Concierge-level planning for leaders, athletes, and high-demand schedules.',
    benefits: ['Everything in Elite', 'Concierge scheduling', 'Personalized recovery pathway and premium access'],
    label: 'Limited founding interest list'
  }
] as const;

export const faqs = [
  {
    question: 'Is the Howard County flagship open?',
    answer: 'The flagship is in development. The current planning reference is 6785 Business Parkway, Units 1 and 2, Howard County, Maryland. Location, construction, services, pricing, licensing, providers, and opening timing remain subject to final approvals.'
  },
  {
    question: 'Is VYTAL House a medical clinic?',
    answer: 'VYTAL House is being designed as a modern wellness and recovery house with clearly separated non-medical and licensed clinical lanes. Regulated services will only be offered through properly licensed providers and compliant operating structures.'
  },
  {
    question: 'Can I reserve a founding membership now?',
    answer: 'You can join the founding interest list. Final membership pricing, benefits, availability, and launch dates will be released only after operating assumptions and approvals are confirmed.'
  },
  {
    question: 'Will there be private or corporate programs?',
    answer: 'Private sessions, executive recovery planning, community events, and employer or partner programs are part of the roadmap, subject to capacity and final operating design.'
  }
] as const;
