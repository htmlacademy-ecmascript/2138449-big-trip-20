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
        id: '1111',
        title: 'Upgrade to VIP',
        price: 200
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '2',
        title: 'Add meal',
        price: 30
      },
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
        id: '123',
        title: 'Choose seats',
        price: 50
      },
      {
        id: '444',
        title: 'Switch to VIP',
        price: 160
      },
      {
        id: '123',
        title: 'Choose class',
        price: 90
      }
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
      {
        id: '333',
        title: 'Upgrade to bussines',
        price: 92
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
  }
];

const destinationsMock = [
  {
    id: '100',
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
    id: '200',
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
    id: '300',
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
    id: '400',
    description: 'Vake park is great.',
    name: 'Tbilisi',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=868668393',
        description: 'Tbilisi is the capital of Georgia'
      }
    ]
  }
];

const baseMockPoints = [
  {
    id: '23',
    basePrice: 195,
    dateFrom: '2022-09-08T02:05:16.735Z',
    dateTo: '2022-09-13T14:23:08.155Z',
    destination: destinationsMock[1], // ?
    isFavorite: false,
    offers: offersMock[0], // ?
    type: 'train',
  },
  {
    id: '68',
    basePrice: 273,
    dateFrom: '2021-01-01T12:00:10.001Z',
    dateTo: '2021-01-15T14:40:10.235Z',
    destination: destinationsMock[2], // ?
    isFavorite: true,
    offers: offersMock[2], // ?
    type: 'bus',
  },
  {
    id: '17',
    basePrice: 379,
    dateFrom: '2020-12-01T01:00:00.000Z',
    dateTo: '2020-12-02T11:10:20.080Z',
    destination: destinationsMock[0], // ?
    isFavorite: false,
    offers: offersMock[1], // ?
    type: 'flight',
  },
  {
    id: '2',
    basePrice: 153,
    dateFrom: '2022-10-08T02:05:16.735Z',
    dateTo: '2022-10-13T14:23:08.155Z',
    destination: destinationsMock[3], // ?
    isFavorite: false,
    offers: offersMock[3], // ?
    type: 'drive',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(baseMockPoints);
}

export {getRandomPoint};
