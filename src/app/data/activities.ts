export interface Activity {
  id: string;
  type: 'бронирование' | 'запрос' | 'сообщение' | 'платеж' | 'обновление'; // 'booking' | 'request' | 'message' | 'payment' | 'update'
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

export const activities: Activity[] = [
  {
    id: 'act-1',
    type: 'запрос',
    title: 'новый запрос бронирования',
    description: 'Neon Pulse отправил запрос на 12 мая 2026',
    timestamp: '2026-03-15T10:30:00Z',
    icon: 'calendar',
  },
  {
    id: 'act-2',
    type: 'бронирование',
    title: 'Бронирование подтверждено',
    description: 'The Midnight Collective - 22 апреля 2026',
    timestamp: '2026-03-14T15:45:00Z',
    icon: 'check',
  },
  {
    id: 'act-3',
    type: 'сообщение',
    title: 'Новое сообщение',
    description: 'Neon Pulse отправил вам сообщение',
    timestamp: '2026-03-15T15:10:00Z',
    icon: 'message',
  },
  {
    id: 'act-4',
    type: 'платеж',
    title: 'Платеж получен',
    description: 'Платеж в размере $500 получен от The Midnight Collective за бронирование 22 апреля 2026',
    timestamp: '2026-03-13T11:20:00Z',
    icon: 'dollar',
  },
  {
    id: 'act-5',
    type: 'запрос',
    title: 'Новый запрос бронирования',
    description: 'The Thunders отправил запрос на 11 мая 2026',
    timestamp: '2026-03-18T09:00:00Z',
    icon: 'calendar',
  },
  {
    id: 'act-6',
    type: 'бронирование',
    title: 'Бронирование обновлено',
    description: 'Jazz Quartet - Technical обновили райдер',
    timestamp: '2026-03-12T16:30:00Z',
    icon: 'edit',
  },
];
