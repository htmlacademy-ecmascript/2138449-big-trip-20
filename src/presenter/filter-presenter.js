import FilterView from '../view/filter-view.js';
import {generateFilters} from '../mock/filter.js';
import {render} from '../framework/render.js';

export default class FilterPresenter {
  #container = null;
  #pointsModel = null;
  #filterModel = null;
  #filters = [];

  constructor({container, pointsModel, filterModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel; // что-то надо делать с моделью

    this.#filters = generateFilters(this.#pointsModel.points);

  }

  init() {
    render(new FilterView(this.#filters), this.#container);
  }
}
