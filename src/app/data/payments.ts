export interface Payment {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  type: 'ticket' | 'booking' | 'subscription' | 'deposit';
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  eventName?: string;
  date: string;
  method: 'card' | 'paypal' | 'bank';
}

export const payments: Payment[] = [
  {
    id: 'pay-1',
    userId: 'user-1',
    userName: 'алексей',
    amount: 85,
    type: 'ticket',
    status: 'completed',
    eventName: 'Neon Pulse Live',
    date: '2026-03-20T14:25:00Z',
    method: 'card',
  },
  {
    id: 'pay-2',
    userId: 'venue-1',
    userName: 'Electric Arena',
    amount: 5000,
    type: 'deposit',
    status: 'completed',
    eventName: 'The Midnight Collective',
    date: '2026-03-19T10:30:00Z',
    method: 'bank',
  },
  {
    id: 'pay-3',
    userId: 'user-2',
    userName: 'Sarah Miller',
    amount: 120,
    type: 'ticket',
    status: 'completed',
    eventName: 'The Thunders - Brooklyn Show',
    date: '2026-03-18T16:45:00Z',
    method: 'paypal',
  },
  {
    id: 'pay-4',
    userId: 'artist-1',
    userName: 'Neon Pulse',
    amount: 3500,
    type: 'booking',
    status: 'pending',
    eventName: 'Electric Arena Concert',
    date: '2026-03-17T11:20:00Z',
    method: 'bank',
  },
  {
    id: 'pay-5',
    userId: 'user-4',
    userName: 'Emily Chen',
    amount: 95,
    type: 'ticket',
    status: 'completed',
    eventName: 'Synthwave Dreams',
    date: '2026-03-16T09:15:00Z',
    method: 'card',
  },
  {
    id: 'pay-6',
    userId: 'user-3',
    userName: 'Mike Johnson',
    amount: 75,
    type: 'ticket',
    status: 'refunded',
    eventName: 'Jazz Quartet Night',
    date: '2026-03-15T14:00:00Z',
    method: 'card',
  },
  {
    id: 'pay-7',
    userId: 'venue-2',
    userName: 'Brooklyn Steel',
    amount: 4200,
    type: 'deposit',
    status: 'completed',
    eventName: 'Rock Festival Weekend',
    date: '2026-03-14T08:30:00Z',
    method: 'bank',
  },
  {
    id: 'pay-8',
    userId: 'user-1',
    userName: 'алексей',
    amount: 110,
    type: 'ticket',
    status: 'failed',
    eventName: 'Electric Dreams Show',
    date: '2026-03-13T19:00:00Z',
    method: 'card',
  },
  {
    id: 'pay-9',
    userId: 'user-2',
    userName: 'Sarah Miller',
    amount: 65,
    type: 'ticket',
    status: 'completed',
    eventName: 'Indie Night',
    date: '2026-03-12T15:30:00Z',
    method: 'paypal',
  },
  {
    id: 'pay-10',
    userId: 'artist-3',
    userName: 'Synthwave Dreams',
    amount: 2800,
    type: 'booking',
    status: 'completed',
    eventName: 'Downtown Venue Concert',
    date: '2026-03-11T10:00:00Z',
    method: 'bank',
  },
];
