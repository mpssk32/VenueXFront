export interface SupportTicket {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  subject: string;
  category: 'technical' | 'billing' | 'booking' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const supportTickets: SupportTicket[] = [
  {
    id: 'ticket-1',
    userId: 'user-1',
    userName: 'алексей',
    userEmail: 'john.doe@email.com',
    subject: 'Не могу скачать билеты',
    category: 'technical',
    priority: 'high',
    status: 'open',
    description: 'Не могу скачать билеты. Пожалуйста, помогите!',
    createdAt: '2026-03-23T09:30:00Z',
    updatedAt: '2026-03-23T09:30:00Z',
  },
  {
    id: 'ticket-2',
    userId: 'user-2',
    userName: 'Ульяна',
    userEmail: 'sarah.m@email.com',
    subject: 'Запрос на возврат средств',
    category: 'billing',
    priority: 'medium',
    status: 'in-progress',
    description: 'Нужно запросить возврат средств за мои билеты, так как я больше не могу присутствовать на мероприятии.',
    createdAt: '2026-03-22T14:15:00Z',
    updatedAt: '2026-03-23T08:20:00Z',
  },
  {
    id: 'ticket-3',
    userId: 'artist-1',
    userName: 'Ищейка',
    userEmail: 'booking@neonpulse.com',
    subject: 'Вопрос по техническому райдеру',
    category: 'booking',
    priority: 'medium',
    status: 'resolved',
    description: 'Привет! У нас есть вопрос по вашему техническому райдеру для предстоящего концерта. Можете ли вы уточнить, какой тип микрофонов вы предпочитаете для вокала? Мы хотим убедиться, что у нас есть все необходимое оборудование для вашего шоу.',
    createdAt: '2026-03-21T11:00:00Z',
    updatedAt: '2026-03-22T16:45:00Z',
  },
  {
    id: 'ticket-4',
    userId: 'venue-1',
    userName: 'machian head',
    userEmail: 'admin@electricarena.com',
    subject: 'Проблема с оплатой',
    category: 'billing',
    priority: 'urgent',
    status: 'in-progress',
    description: 'Мы столкнулись с проблемой при попытке оплатить бронирование для концерта. Платеж не проходит, и мы не уверены, в чем проблема. Пожалуйста, помогите нам решить эту проблему как можно скорее, так как дата концерта быстро приближается.',
    createdAt: '2026-03-20T10:30:00Z',
    updatedAt: '2026-03-23T07:15:00Z',
  },
  {
    id: 'ticket-5',
    userId: 'user-3',
    userName: 'Майк',
    userEmail: 'mike.j@email.com',
    subject: 'Проблема с доступом к аккаунту',
    category: 'technical',
    priority: 'low',
    status: 'closed',
    description: 'Имеются проблемы с входом в мой аккаунт. Сброс пароля не работает.',
    createdAt: '2026-03-19T15:20:00Z',
    updatedAt: '2026-03-20T09:30:00Z',
  },
  {
    id: 'ticket-6',
    userId: 'user-4',
    userName: 'Эмили Чен',
    userEmail: 'emily.chen@email.com',
    subject: 'Вопрос о предстоящих концертах',
    category: 'general',
    priority: 'low',
    status: 'resolved',
    description: 'Есть ли какие-либо концерты инди-рока, запланированные на следующий месяц?',
    createdAt: '2026-03-18T13:45:00Z',
    updatedAt: '2026-03-19T10:00:00Z',
  },
  {
    id: 'ticket-7',
    userId: 'artist-2',
    userName: 'soyuzpechal',
    userEmail: 'contact@thethunders.com',
    subject: 'Задержка подтверждения бронирования',
    category: 'booking',
    priority: 'high',
    status: 'open',
    description: 'Мы подали заявку на бронирование, но до сих пор не получили подтверждения',
    createdAt: '2026-03-22T16:00:00Z',
    updatedAt: '2026-03-22T16:00:00Z',
  },
  {
    id: 'ticket-8',
    userId: 'user-1',
    userName: 'алексей',
    userEmail: 'john.doe@email.com',
    subject: 'Двойное списание за билеты',
    category: 'billing',
    priority: 'urgent',
    status: 'in-progress',
    description: 'Я был зачислен дважды за одну и ту же покупку билетов. Заказ 123456',
    createdAt: '2026-03-23T08:00:00Z',
    updatedAt: '2026-03-23T09:45:00Z',
  },
];
