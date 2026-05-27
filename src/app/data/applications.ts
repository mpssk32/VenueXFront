export interface Application {
  id: string;
  artistId: string;
  artistName: string;
  venueId: string;
  venueName: string;
  requestedDate: string;
  status: 'Ожидает' | 'Одобрен' | 'Отклонен'; // 'pending' | 'approved' | 'rejected'
  message: string;
  submittedAt: string;
  genre: string;
}

export const applications: Application[] = [
  {
    id: 'app-1',
    artistId: 'artist-1',
    artistName: 'Neon Pulse',
    venueId: 'venue-1',
    venueName: 'Electric Arena',
    requestedDate: '2026-05-12',
    status: 'Ожидает',
    message: 'С нетерпением ждем возможности привезти наше погружающее электронное шоу на вашу площадку. Мы ожидаем аншлаг.',
    submittedAt: '2026-03-15T10:30:00Z',
    genre: 'Electronic',
  },
  {
    id: 'app-2',
    artistId: 'artist-2',
    artistName: 'The Thunders',
    venueId: 'venue-3',
    venueName: 'Brooklyn Steel',
    requestedDate: '2026-05-11',
    status: 'Ожидает',
    message: 'С нетерпением ждем возможности выступить в Бруклине! Это будет частью нашего восточного побережья тур. Нам понадобится полный бэклайн, как указано в нашем райдере.',
    submittedAt: '2026-03-18T14:20:00Z',
    genre: 'Rock',
  },
  {
    id: 'app-3',
    artistId: 'artist-1',
    artistName: 'Neon Pulse',
    venueId: 'venue-2',
    venueName: 'The Wiltern',
    requestedDate: '2026-05-09',
    status: 'Одобрен',
    message: 'Нам нравится историческая атмосфера The Wiltern, и мы думаем, что это будет идеальное место для нашего предстоящего шоу по выпуску альбома.',
    submittedAt: '2026-03-10T09:15:00Z',
    genre: 'Electronic',
  },
  {
    id: 'app-4',
    artistId: 'artist-2',
    artistName: 'The Thunders',
    venueId: 'venue-1',
    venueName: 'Electric Arena',
    requestedDate: '2026-04-28',
    status: 'Отклонен',
    message: 'Запрашиваем дату для нашего весеннего тура.',
    submittedAt: '2026-03-05T16:45:00Z',
    genre: 'Rock',
  },
];
