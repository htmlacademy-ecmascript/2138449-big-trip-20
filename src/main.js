//import FilterView from './view/filter-view.js';
import ListPresenter from './presenter/trip-list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import PointsModel from './model/point-model.js';
import { render, RenderPosition } from './framework/render.js';

const bodyElement = document.querySelector('body');
const pageHeaderElement = bodyElement.querySelector('.page-header');
const tripInfoElement = pageHeaderElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const pageMain = bodyElement.querySelector('.page-main');
const eventListElement = pageMain.querySelector('.trip-events');
const pointsModel = new PointsModel();

const listPresenter = new ListPresenter({
  boardContainer: eventListElement,
  pointsModel,
});

const filterPresenter = new FilterPresenter({
  container: filterElement,
  pointsModel,
});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
//render(new FilterView(), filterElement);

listPresenter.init();
filterPresenter.init();
