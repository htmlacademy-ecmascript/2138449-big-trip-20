const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
  FAVORITES: 'favorites',
};

const SortType = {
  DAY:  'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const CITIES = [
  'Geneva',
  'Chamonix',
  'Amsterdam',
  'Tbilisi',
  'Batumi',
  'Kutaisi',
  'Barcelona',
  'London',
  'Buenos-Aires',
];

const POINT_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

export {FilterType, SortType, CITIES, POINT_TYPES};
