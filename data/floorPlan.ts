export type FloorPlanZone = {
  number: number;
  name: string;
  lane: 'Arrival' | 'Clinical' | 'Recovery' | 'Performance' | 'Hospitality' | 'Outdoor';
  description: string;
};

export const floorPlanZones: FloorPlanZone[] = [
  { number: 1, name: 'Welcome Lobby & Lounge', lane: 'Arrival', description: 'Primary arrival, orientation, waiting, and member decompression point.' },
  { number: 2, name: 'Member Concierge', lane: 'Arrival', description: 'Central check-in, scheduling, membership support, and wayfinding desk.' },
  { number: 3, name: 'Wellness Lounge', lane: 'Hospitality', description: 'Quiet member seating and recovery transition space.' },
  { number: 4, name: 'Executive Health Suite', lane: 'Clinical', description: 'Working suite for DEXA, VO₂ max, body-composition, and approved executive screening workflows.' },
  { number: 5, name: 'IV Therapy Lounge', lane: 'Clinical', description: 'Licensed-provider infusion lounge with monitored seating and clinical support.' },
  { number: 6, name: 'Halo Salt Therapy Room', lane: 'Recovery', description: 'Dedicated salt-therapy environment with controlled ventilation and sanitation planning.' },
  { number: 7, name: 'Hyperbaric Chamber Room', lane: 'Clinical', description: 'Dedicated HBOT chamber room subject to device class, provider, fire, oxygen, and code requirements.' },
  { number: 8, name: 'Red Light Therapy Suite', lane: 'Recovery', description: 'Private full-body red-light suite with controlled session timing and cleaning flow.' },
  { number: 9, name: 'Cryotherapy Chamber Room', lane: 'Performance', description: 'Whole-body cryotherapy room with safety zoning, ventilation, supervision, and emergency procedures.' },
  { number: 10, name: 'Infrared Sauna', lane: 'Recovery', description: 'Private far-infrared heat room integrated into the recovery circuit.' },
  { number: 11, name: 'Cold Plunge', lane: 'Recovery', description: 'Dedicated cold-water immersion room with drainage, filtration, sanitation, and slip-resistance planning.' },
  { number: 12, name: 'Shower Room', lane: 'Recovery', description: 'Private transition shower supporting heat, cold, and treatment circulation.' },
  { number: 13, name: 'Contrast Therapy Suite', lane: 'Recovery', description: 'Combined sauna and cold-plunge suite for guided contrast protocols.' },
  { number: 14, name: 'Shower Rooms', lane: 'Recovery', description: 'Central shower and changing support for the contrast and recovery zones.' },
  { number: 15, name: 'Compression Lounge', lane: 'Performance', description: 'Multi-station compression recovery lounge with member charging and concierge oversight.' },
  { number: 16, name: 'Massage & Recovery Room', lane: 'Recovery', description: 'Private hands-on recovery, massage, or approved practitioner room.' },
  { number: 17, name: 'Float & Meditation Room', lane: 'Recovery', description: 'Quiet float and meditation environment with acoustic, humidity, and sanitation controls.' },
  { number: 18, name: 'Breathwork / Sound Healing Studio', lane: 'Recovery', description: 'Flexible small-group studio for guided breathwork, meditation, and sound experiences.' },
  { number: 19, name: 'Healthy Café & Nutrition Bar', lane: 'Hospitality', description: 'Member café, hydration, nutrition, and supplement service point.' },
  { number: 20, name: 'Outdoor Recovery Terrace', lane: 'Outdoor', description: 'Landscaped outdoor recovery area with seating, fire feature, and cold-water amenity concept.' }
];

export const premiumAmenities = [
  'HBOT chamber',
  'Whole-body cryotherapy',
  'Full-body red-light therapy',
  'Far-infrared sauna',
  'Cold plunge',
  'Salt therapy',
  'PEMF technology',
  'Compression recovery',
  'IV and NAD+ therapies',
  'Executive health screening',
  'AI health dashboard',
  'Nutrition and supplement bar',
  'Sleep and stress optimization',
  'Personalized longevity programs'
] as const;

export const deliveryGates = [
  ['Field verification', 'Architectural survey, landlord drawings, column grid, demising walls, doors, docks, windows, and verified 5,760-square-foot envelope.'],
  ['Code and life safety', 'Occupancy classification, occupant load, exits, travel distance, fire separation, sprinklers, alarms, accessibility, and emergency procedures.'],
  ['MEP and wet systems', 'Electrical loads, HVAC, ventilation, drainage, waterproofing, filtration, hot water, oxygen, humidity, and equipment heat rejection.'],
  ['Clinical separation', 'Licensed-provider scope, clinical entity and MSO boundaries, privacy, medication and supply controls, consent, charting, and insurance.'],
  ['Equipment coordination', 'Final manufacturer cut sheets, clearances, structural loads, installation sequence, commissioning, warranties, and service access.'],
  ['Permit and construction set', 'Licensed architectural and engineering drawings, specifications, pricing, permits, inspections, certificate of occupancy, and operational readiness.']
] as const;
