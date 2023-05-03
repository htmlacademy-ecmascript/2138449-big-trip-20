import { getRandomArrayElement } from '../utils.js';

const offersMock = [
  {
    type: 'train',
    offers: [
      {
        id: '1',
        title: 'Switch to comfort',
        price: 80
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
      }
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
    offers: offersMock[1], // ?
    type: 'flight',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(baseMockPoints);
}

export {getRandomPoint};
