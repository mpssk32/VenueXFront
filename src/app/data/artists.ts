import isheyka from "@/assets/images/artists/isheyka.jpg";
import soyuzpechal from "@/assets/images/artists/soyuzpechal.jpg";

export interface Artist {
  id: string;
  name: string;
  genre: string;
  members: string[];
  description: string;
  image: string;
  rider: {
    technical: string[];
    hospitality: string[];
  };
}

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Ищейка',
    genre: 'Инди-рок',
    members: ['Иван Афанасьев', 'Владислав Борисов', 'Алексей Шустров', 'Артем Долотказин', 'Константин Арабули'],
    description: 'Молодая инди-рок группа из Санкт-Петербурга, известная своими энергичными живыми выступлениями и мелодичными композициями. Их музыка сочетает в себе элементы классического рока с современными инди-звучаниями, создавая уникальную атмосферу на сцене',
    image: isheyka,
    rider: {
      technical: [
        'Professional sound system (minimum 10kW)',
        'DJ booth with CDJ-3000 (x2) and DJM-900',
        'LED wall or projection system',
        'Fog and haze machines',
        'DMX lighting control',
      ],
      hospitality: [
        '12 bottles of water',
        'Fresh fruit platter',
        '2 vegetarian meals',
        'Green room with AC',
      ],
    },
  },
  {
    id: 'artist-2',
    name: 'soyuzpechal',
    genre: 'Рок',
    members: ['Александр Петров', 'Мария Иванова', 'Дмитрий Соколов', 'Елена Кузнецова'],
    description: 'soyuzpechal - легендарная рок-группа, которая уже более 20 лет радует своих поклонников мощными выступлениями и хитами. Не пропустите их грандиозное шоу в Madison Square Garden!',
    image: soyuzpechal,
    rider: {
      technical: [
        'Full backline (amps, drums, monitors)',
        '32-channel mixing console',
        'Wireless mic systems (x4)',
        'Stage monitors (x6)',
        'Professional stage lighting rig',
      ],
      hospitality: [
        '24 bottles of water',
        'Hot meal for 8 people',
        'Coffee and tea station',
        'Towels and shower facilities',
      ],
    },
  },
];
