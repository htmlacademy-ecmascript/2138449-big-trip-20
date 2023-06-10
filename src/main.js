import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import PointsModel from './model/point-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import { render } from './framework/render.js';

const bodyElement = document.querySelector('body');
const pageHeaderElement = bodyElement.querySelector('.page-header');
const tripInfoElement = pageHeaderElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const pageMain = bodyElement.querySelector('.page-main');
const eventListElement = pageMain.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const boardPresenter = new BoardPresenter({
  tripInfoContainer: tripInfoElement,
  boardContainer: eventListElement,
  pointsModel,
  destinationsModel,
  offersModel,
  filterModel,
  onNewTaskDestroy: handleNewPointFormClose,
});

const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  pointsModel,
  filterModel,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick,
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, tripInfoElement);

boardPresenter.init();
filterPresenter.init();
