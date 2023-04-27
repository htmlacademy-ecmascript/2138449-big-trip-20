import { render } from './render.js'
import FilterView from './view/filter-view.js'
import ListPresenter from './presenter/trip-list-presenter.js';

const siteMainElement = document.querySelector('.main');
const filterElement = document.querySelector('.trip-controls__filters');

const listPresenter = new ListPresenter({boardContainer: siteMainElement});

render(new FilterView(), filterElement);

listPresenter.init();
