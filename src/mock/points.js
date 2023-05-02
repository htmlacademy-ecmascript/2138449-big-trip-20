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
    dateFrom: new Date('2022-03-04'),
    dateTo: new Date('2022-03-05'),
    destination: [200], // бред
    isFavorite: false,
    offers: [1], // бред
    type: 'train',
  },
  {
    id: '68',
    basePrice: 273,
    dateFrom: new Date('2022-07-08'),
    dateTo: new Date('2022-07-09'),
    destination: [300], // бред
    isFavorite: true,
    offers: [3], // бред
    type: 'bus',
  },
  {
    id: '17',
    basePrice: 379,
    dateFrom: new Date('2020-09-09'),
    dateTo: new Date('2020-10-10'),
    destination: [100], // бред
    isFavorite: false,
    offers: [2], // бред
    type: 'flight',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(baseMockPoints);
}

export {getRandomPoint};
