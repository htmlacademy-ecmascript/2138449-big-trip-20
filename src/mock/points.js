import { getRandomArrayElement } from '../utils/common.js';

const offersMock = [
  {
    type: 'train',
    offers: [
      {
        id: '1',
        title: 'Switch to comfort',
        price: 80
      },
      {
        id: '11',
        title: 'Add luggage',
        price: 40
      },
      {
        id: '111',
        title: 'Choose seats',
        price: 20
      },
      {
        id: '1111',
        title: 'Travel by plane',
        price: 120
      },
      {
        id: '11111',
        title: 'Choose wagon',
        price: 30
      },
      {
        id: '111111',
        title: 'Upgrade to VIP',
        price: 200
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '4',
        title: 'Travel by train',
        price: 40
      },
      {
        id: '44',
        title: 'Switch to comfort',
        price: 80
      },
      {
        id: '444',
        title: 'Switch to VIP',
        price: 160
      },
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '3',
        title: 'Choose seats',
        price: 20,
      },
      {
        id: '33',
        title: 'Switch to comfort',
        price: 60
      },
      {
        id: '333',
        title: 'Add luggage',
        price: 42
      },
      {
        id: '3333',
        title: 'Book nearby seats',
        price: 139
      },
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '5',
        title: 'Add luggage',
        price: 10,
      },
      {
        id: '55',
        title: 'Choose car',
        price: 120,
      },
      {
        id: '555',
        title: 'Choose driver',
        price: 100,
      },
      {
        id: '5555',
        title: 'Choose way',
        price: 150,
      },
      {
        id: '55555',
        title: 'Choose class',
        price: 60,
      },
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: '6',
        title: 'Reserve museum',
        price: 100,
      },
      {
        id: '66',
        title: 'Choose place',
        price: 1190,
      },
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '09',
        title: 'Reserve table',
        price: 100,
      },
      {
        id: '099',
        title: 'Choose place',
        price: 80,
      },
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '100',
        title: 'Late check',
        price: 1000,
      },
      {
        id: '200',
        title: 'Add breakfeast',
        price: 2000,
      },
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: '400',
        title: 'Up class',
        price: 700,
      },
      {
        id: '500',
        title: 'Choose BMW',
        price: 900,
      },
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: '007',
        title: 'Choose not Titanic',
        price: 100,
      },
    ]
  },
];

const destinationsMock = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Geneva',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=2664',
        description: 'Geneva is a beautifull city'
      },
      {
        src: 'https://loremflickr.com/248/152?random=23939939393',
        description: 'Evening Geneva'
      },
    ]
  },
  {
    id: '2',
    description: 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=37535733',
        description: 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy.',
      }
    ]
  },
  {
    id: '3',
    description: 'Nunc fermentum tortor ac porta dapibus.',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=868668868',
        description: 'Amsterdam is a city on the water'
      }
    ]
  },
  {
    id: '4',
    description: 'Vake park is great.',
    name: 'Tbilisi',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=868668393',
        description: 'Tbilisi is the capital of Georgia'
      }
    ]
  },
  {
    id: '5',
    description: 'Batumi garden.',
    name: 'Batumi',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=8682222268393',
        description: 'Tbilisi it is city in Georgia'
      }
    ]
  },
  {
    id: '6',
    description: 'Kutaisi Macdonalds.',
    name: 'Kutaisi',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=82222268393',
        description: 'Kutaisi has Macdonalds'
      },
      {
        src: 'https://loremflickr.com/248/152?random=8222393',
        description: 'Kutaisi old city'
      }
    ]
  },
  {
    id: '7',
    description: 'Aliquam erat volutpat.',
    name: 'Barcelona',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=822218393',
        description: 'In rutrum ac purus sit amet tempus.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=822993',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ]
  },
  {
    id: '8',
    description: 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'London',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=42218393',
        description: 'In rutrum ac purus sit amet tempus.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=12293',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ]
  },
  {
    id: '9',
    description: 'Condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Buenos-Aires',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=18393',
        description: 'Jo rutrum ac purus sit amet tempus.',
      },
      {
        src: 'https://loremflickr.com/248/152?random=93',
        description:  'Lorem dolor sit amet, consectetur adipiscing elit.',
      }
    ]
  },
];

const baseMockPoints = [
  {
    id: '1',
    basePrice: 11,
    dateFrom: '2024-09-08T02:05:16.735Z',
    dateTo: '2024-09-13T14:23:08.155Z',
    destination: '1',
    isFavorite: false,
    offers: ['11', '1111'],
    type: 'train',
  },
  {
    id: '2',
    basePrice: 22,
    dateFrom: '2023-05-14T12:22:10.001Z',
    dateTo: '2023-05-15T14:40:10.235Z',
    destination: '2',
    isFavorite: true,
    offers: ['333', '3333'],
    type: 'bus',
  },
  {
    id: '3',
    basePrice: 33,
    dateFrom: '2020-12-01T01:00:00.000Z',
    dateTo: '2020-12-02T11:10:20.080Z',
    destination: '3',
    isFavorite: false,
    offers: ['444'],
    type: 'flight',
  },
  {
    id: '4',
    basePrice: 44,
    dateFrom: '2022-10-08T02:05:16.735Z',
    dateTo: '2022-10-13T14:23:08.155Z',
    destination: '4',
    isFavorite: false,
    offers: ['5', '5555', '55555'],
    type: 'drive',
  },
  {
    id: '5',
    basePrice: 55,
    dateFrom: '2022-09-08T02:05:16.735Z',
    dateTo: '2022-09-13T14:23:08.155Z',
    destination: '5',
    isFavorite: false,
    offers: ['66'],
    type: 'sightseeing',
  },
  {
    id: '6',
    basePrice: 66,
    dateFrom: '2022-07-08T02:05:16.735Z',
    dateTo: '2022-07-13T14:23:08.155Z',
    destination: '6',
    isFavorite: true,
    offers: [],
    type: 'restaurant',
  },
  {
    id: '7',
    basePrice: 77,
    dateFrom: '2022-02-08T02:05:16.735Z',
    dateTo: '2022-02-13T14:23:08.155Z',
    destination: '7',
    isFavorite: false,
    offers: ['200'],
    type: 'check-in',
  },
  {
    id: '8',
    basePrice: 88,
    dateFrom: '2021-02-08T02:05:16.735Z',
    dateTo: '2021-02-13T14:23:08.155Z',
    destination: '8',
    isFavorite: true,
    offers: ['500'],
    type: 'taxi',
  },
  {
    id: '9',
    basePrice: 99,
    dateFrom: '2023-02-08T02:05:16.735Z',
    dateTo: '2023-02-13T14:23:08.155Z',
    destination: '9',
    isFavorite: false,
    offers: ['007'],
    type: 'ship',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(baseMockPoints);
}

export {getRandomPoint, destinationsMock, offersMock};
