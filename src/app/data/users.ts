export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'artist' | 'venue' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  joinedAt: string;
  lastActive: string;
  totalSpent?: number;
  eventsBooked?: number;
}

export const users: User[] = [
  {
    id: 'user-1',
    name: 'алексей',
    email: 'john.doe@email.com',
    role: 'user',
    status: 'active',
    joinedAt: '2025-12-15T10:00:00Z',
    lastActive: '2026-03-20T14:25:00Z',
    totalSpent: 450,
    eventsBooked: 12,
  },
  {
    id: 'user-2',
    name: 'Ульяна',
    email: 'sarah.m@email.com',
    role: 'user',
    status: 'active',
    joinedAt: '2026-01-08T09:30:00Z',
    lastActive: '2026-03-22T11:15:00Z',
    totalSpent: 680,
    eventsBooked: 18,
  },
  {
    id: 'artist-1',
    name: 'Ищейка',
    email: 'booking@neonpulse.com',
    role: 'artist',
    status: 'active',
    joinedAt: '2025-11-10T08:00:00Z',
    lastActive: '2026-03-23T09:45:00Z',
  },
  {
    id: 'artist-2',
    name: 'soyuzpechal',
    email: 'contact@thethunders.com',
    role: 'artist',
    status: 'active',
    joinedAt: '2025-10-22T14:20:00Z',
    lastActive: '2026-03-22T16:30:00Z',
  },
  {
    id: 'venue-1',
    name: 'ONYX',
    email: 'admin@electricarena.com',
    role: 'venue',
    status: 'active',
    joinedAt: '2025-09-05T10:00:00Z',
    lastActive: '2026-03-23T08:20:00Z',
  },
  {
    id: 'venue-2',
    name: 'machian head',
    email: 'booking@brooklynsteel.com',
    role: 'venue',
    status: 'active',
    joinedAt: '2025-08-14T11:30:00Z',
    lastActive: '2026-03-22T19:00:00Z',
  },
  {
    id: 'user-3',
    name: 'Майк',
    email: 'mike.j@email.com',
    role: 'user',
    status: 'inactive',
    joinedAt: '2026-02-10T15:45:00Z',
    lastActive: '2026-02-28T12:00:00Z',
    totalSpent: 120,
    eventsBooked: 3,
  },
  {
    id: 'user-4',
    name: 'Эмили Чен',
    email: 'emily.chen@email.com',
    role: 'user',
    status: 'active',
    joinedAt: '2026-01-20T10:30:00Z',
    lastActive: '2026-03-23T10:00:00Z',
    totalSpent: 890,
    eventsBooked: 24,
  },
  // {
  //   id: 'artist-3',
  //   name: 'Synthwave Dreams',
  //   email: 'info@synthwavedreams.com',
  //   role: 'artist',
  //   status: 'active',
  //   joinedAt: '2025-12-05T09:00:00Z',
  //   lastActive: '2026-03-21T14:30:00Z',
  // },
  {
    id: 'user-5',
    name: 'Давид',
    email: 'david.lee@email.com',
    role: 'user',
    status: 'suspended',
    joinedAt: '2025-11-28T11:00:00Z',
    lastActive: '2026-03-10T08:15:00Z',
    totalSpent: 0,
    eventsBooked: 0,
  },
];
