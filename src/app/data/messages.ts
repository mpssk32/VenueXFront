export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'artist' | 'venue' | 'user' | 'support';
  recipientId: string;
  recipientName: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  artistId?: string;
  artistName?: string;
  venueId?: string;
  venueName?: string;
  userId?: string;
  userName?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  type: 'artist-venue' | 'user-support';
}

export const messages: Message[] = [
  {
    id: 'msg-1',
    senderId: 'artist-1',
    senderName: 'Ищейка',
    senderType: 'artist',
    recipientId: 'venue-1',
    recipientName: 'Onyx',
    content: ' Привет! Мы хотели бы узнать о доступности вашей площадки для нашего шоу 12 мая 2026. У нас есть технический райдер, который мы можем предоставить. Спасибо!',
    timestamp: '2026-03-15T10:30:00Z',
    read: true,
  },
  {
    id: 'msg-2',
    senderId: 'venue-1',
    senderName: 'Onyx',
    senderType: 'venue',
    recipientId: 'artist-1',
    recipientName: 'Ищейка',
    content: 'Привет Ищейка! Эта дата доступна. У нас есть всё оборудование, которое вам нужно согласно вашему райдеру. Хотите забронировать звонок для обсуждения ценообразования и деталей производства?',
    timestamp: '2026-03-15T11:45:00Z',
    read: true,
  },
  {
    id: 'msg-3',
    senderId: 'artist-1',
    senderName: 'Ищейка',
    senderType: 'artist',
    recipientId: 'venue-1',
    recipientName: 'Onyx',
    content: 'Perfect! Yes, let\'s schedule a call. We\'ll need the LED wall and fog machines for our visual setup. Our production manager will reach out tomorrow.',
    timestamp: '2026-03-15T14:20:00Z',
    read: true,
  },
  {
    id: 'msg-4',
    senderId: 'venue-1',
    senderName: 'Onyx',
    senderType: 'venue',
    recipientId: 'artist-1',
    recipientName: 'Ищейка',
    content: 'звучит отлично! Все оборудование будет готово для вашего шоу. С нетерпением ждем звонка и возможности работать с вами. До скорого!',
    timestamp: '2026-03-15T15:10:00Z',
    read: false,
  },
  {
    id: 'msg-5',
    senderId: 'artist-2',
    senderName: 'soyuzpechal',
    senderType: 'artist',
    recipientId: 'venue-3',
    recipientName: 'machian head',
    content: 'привет! Мы хотели бы узнать о доступности вашей площадки для нашего шоу 11 мая 2026. У нас есть технический райдер, который мы можем предоставить. Спасибо!',
    timestamp: '2026-03-18T09:00:00Z',
    read: true,
  },
  {
    id: 'msg-6',
    senderId: 'venue-3',
    senderName: 'machian head',
    senderType: 'venue',
    recipientId: 'artist-2',
    recipientName: 'soyuzpechal',
    content: 'привет! Эта дата доступна. У нас есть всё оборудование, которое вам нужно согласно вашему райдеру. Хотите забронировать звонок для обсуждения ценообразования и деталей производства?',
    timestamp: '2026-03-18T10:30:00Z',
    read: false,
  },
  // Support messages
  {
    id: 'msg-7',
    senderId: 'user-1',
    senderName: 'алексей',
    senderType: 'user',
    recipientId: 'support',
    recipientName: 'VenueX Support',
    content: 'привет! Я недавно купил билет на концерт Ищейки, но не получил подтверждение по электронной почте. Можете помочь мне с этим?',
    timestamp: '2026-03-20T14:00:00Z',
    read: true,
  },
  {
    id: 'msg-8',
    senderId: 'support',
    senderName: 'VenueX Support',
    senderType: 'support',
    recipientId: 'user-1',
    recipientName: 'алексей',
    content: 'ппривет Алексей! Спасибо за обращение в поддержку VenueX. Я с удовольствием помогу вам с вашим заказом. Можете ли вы предоставить мне номер вашего заказа или адрес электронной почты, который вы использовали при покупке билета?',
    timestamp: '2026-03-20T14:15:00Z',
    read: true,
  },
  {
    id: 'msg-9',
    senderId: 'user-1',
    senderName: 'алексей',
    senderType: 'user',
    recipientId: 'support',
    recipientName: 'VenueX Support',
    content: 'Спасибо за быстрый ответ! Мой номер заказа - 123456. Я использовал адрес электронной почты alexey@example.com',
    timestamp: '2026-03-20T14:20:00Z',
    read: true,
  },
  {
    id: 'msg-10',
    senderId: 'support',
    senderName: 'VenueX Support',
    senderType: 'support',
    recipientId: 'user-1',
    recipientName: 'алексей',
    content: 'Спасибо! Мы нашли ваш заказ и повторно отправили email с подтверждением. Вы должны получить его в течение следующих нескольких минут. Есть ли еще что-нибудь, с чем я могу вам помочь?',
    timestamp: '2026-03-20T14:25:00Z',
    read: false,
  },
];

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    artistId: 'artist-1',
    artistName: 'Ищейка',
    venueId: 'venue-1',
    venueName: 'Onyx',
    lastMessage: 'звучит отлично! Все оборудование будет готово для вашего шоу. С нетерпением ждем звонка и возможности работать с вами. До скорого!',
    lastMessageTime: '2026-03-15T15:10:00Z',
    unreadCount: 1,
    type: 'artist-venue',
  },
  {
    id: 'conv-2',
    artistId: 'artist-2',
    artistName: 'soyuzpechal',
    venueId: 'venue-3',
    venueName: 'machian head',
    lastMessage: 'привет! Эта дата доступна. У нас есть всё оборудование, которое вам нужно согласно вашему райдеру. Хотите забронировать звонок для обсуждения ценообразования и деталей производства?',
    lastMessageTime: '2026-03-18T10:30:00Z',
    unreadCount: 1,
    type: 'artist-venue',
  },
  {
    id: 'conv-3',
    userId: 'user-1',
    userName: 'алексей',
    lastMessage: 'Спасибо! Мы нашли ваш заказ и повторно отправили email с подтверждением. Вы должны получить его в течение следующих нескольких минут. Есть ли еще что-нибудь, с чем я могу вам помочь?',
    lastMessageTime: '2026-03-20T14:25:00Z',
    unreadCount: 1,
    type: 'user-support',
  },
];
