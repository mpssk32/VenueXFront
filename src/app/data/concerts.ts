import isheyka from "@/assets/images/artists/isheyka.jpg";
import soyuzpechal from "@/assets/images/artists/soyuzpechal.jpg";
import mzlff from "@/assets/images/artists/mzlff.jpg";
import prokcrastination from "@/assets/images/artists/prokcrastination.jpg";

export interface Concert {
  id: string;
  artist: string;
  genre: 'Rock' | 'Electronic' | 'Jazz' | 'Indie' | 'Hip-Hop' | 'Pop';
  venue: string;
  city: string;
  date: string;
  time: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const concerts: Concert[] = [
  {
    id: '1',
    artist: 'Ищейка',
    genre: 'Rock',
    venue: 'ONYX',
    city: 'Саратов',
    date: '2026-04-15',
    time: '20:00',
    price: 800,
    image: isheyka,
    description: 'Ищейка возвращается в Саратов! В этот раз они привезут с собой новый материал и обещают незабываемое шоу. Не пропустите шанс увидеть их вживую!',
    featured: true,
  },
  {
    id: '2',
    artist: 'soyuzpechal',
    genre: 'Rock',
    venue: 'Machian head',
    city: 'Саратов',
    date: '2026-04-20',
    time: '19:30',
    price: 1200,
    image: soyuzpechal,
    description: 'soyuzpechal - легендарная рок-группа, которая уже более 20 лет радует своих поклонников мощными выступлениями и хитами. Не пропустите их грандиозное шоу в Madison Square Garden!',
    featured: true,
  },
  {
    id: '3',
    artist: 'mzlff',
    genre: 'Hip-Hop',
    venue: 'Blue Note',
    city: 'Chicago',
    date: '2026-04-25',
    time: '21:00',
    price: 980,
    image: mzlff,
    description: 'mzlff - хип-хоп исполнитель, который уже давно завоевал сердца слушателей своим уникальным стилем и мощными рэп-линиями. Не пропустите их выступление в Blue Note!',
  },
  {
    id: '4',
    artist: 'Прокрастинация',
    genre: 'Indie',
    venue: 'The Wiltern',
    city: 'Los Angeles',
    date: '2026-05-01',
    time: '20:30',
    price: 800,
    image: prokcrastination,
    description: 'Echo Valley brings their dreamy indie sound to LA. Join us for a night of atmospheric guitar work and haunting vocals.',
    featured: true,
  },
];