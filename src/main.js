import ListPresenter from './presenter/trip-list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import PointsModel from './model/point-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { render, RenderPosition } from './framework/render.js';

const bodyElement = document.querySelector('body');
const pageHeaderElement = bodyElement.querySelector('.page-header');
const tripInfoElement = pageHeaderElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const pageMain = bodyElement.querySelector('.page-main');
const eventListElement = pageMain.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const listPresenter = new ListPresenter({
  boardContainer: eventListElement,
  pointsModel,
  destinationsModel,
  offersModel,
});

const filterPresenter = new FilterPresenter({
  container: filterElement,
  pointsModel,
});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);

listPresenter.init();
filterPresenter.init();
