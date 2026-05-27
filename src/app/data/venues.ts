import onyx from "@/assets/images/venues/onyx.jpg";
import machianHead from "@/assets/images/venues/machian-head.jpg";
import led from "@/assets/images/venues/led.jpg";

export interface Venue {
  id: string;
  name: string;
  location: string;
  city: string;
  capacity: number;
  equipment: string[];
  image: string;
  description: string;
  availableDates: string[];
}

export const venues: Venue[] = [
  {
    id: 'venue-1',
    name: 'Onyx',
    location: 'Тамово 123, Саратов',
    city: 'Саратов',
    capacity: 2500,
    equipment: [
      'Meyer Sound PA System (12kW)',
      'Pioneer DJ Setup (CDJ-3000 x2, DJM-900)',
      'Full LED Wall (20ft x 12ft)',
      'Intelligent lighting rig',
      'Fog and haze machines',
      'Green rooms (x2)',
      'Bar and lounge area',
    ],
    image: onyx,
    description: 'ONYX - крупнейшая концертная площадка в Саратове, известная своими грандиозными шоу и современным оборудованием. Идеальное место для рок, инди и электронной музыки.',
    availableDates: ['2026-04-22', '2026-04-28', '2026-05-05', '2026-05-12', '2026-05-18'],
  },
  {
    id: 'venue-2',
    name: 'Machian head',
    location: 'ул. Большая Садовая 45, Саратов',
    city: 'Саратов',
    capacity: 1850,
    equipment: [
      'L-Acoustics Sound System',
      'Full backline available',
      'Stage lighting rig',
      'Wireless microphones (x8)',
      'Stage monitors (x8)',
      'Green room with catering area',
    ],
    image: machianHead,
    description: 'Machian head - современная концертная площадка в Саратове, предлагающая идеальные условия для различных музыкальных жанров.',
    availableDates: ['2026-04-25', '2026-05-02', '2026-05-09', '2026-05-16'],
  },
  {
    id: 'venue-3',
    name: 'ледовый дворец',
    location: 'пр. Ленина 50, Саратов',
    city: 'Саратов',
    capacity: 1800,
    equipment: [
      'Funktion-One Sound System',
      'Professional stage setup',
      'LED lighting rig',
      'Wireless systems',
      'Multiple green rooms',
      'Full bar',
    ],
    image: led,
    description: 'ледовый дворец - современная концертная площадка в Саратове, предлагающая идеальные условия для различных музыкальных жанров.',
    availableDates: ['2026-04-20', '2026-04-27', '2026-05-04', '2026-05-11'],
  },
];
