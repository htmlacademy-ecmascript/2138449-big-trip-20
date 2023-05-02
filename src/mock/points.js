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
    dateFrom: '2019-07-11T22:55:56.845Z',
    dateTo: '2019-07-14T20:03:56.845Z',
    destination: destinationsMock[200], // бред
    isFavorite: false,
    offers: offersMock[1], // бред
    type: 'train',
  },
  {
    id: '68',
    basePrice: 273,
    dateFrom: '2020-02-15T12:05:06.845Z',
    dateTo: '2020-02-18T22:15:26.845Z',
    destination: destinationsMock[300], // бред
    isFavorite: true,
    offers: offersMock[3], // бред
    type: 'bus',
  },
  {
    id: '17',
    basePrice: 379,
    dateFrom: '2021-09-13T22:55:56.845Z',
    dateTo: '2021-09-18T15:15:54.845Z',
    destination: destinationsMock[100], // бред
    isFavorite: false,
    offers: offersMock[2], // бред
    type: 'flight',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(baseMockPoints);
}

export {getRandomPoint};
