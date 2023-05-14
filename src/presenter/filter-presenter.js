import FilterView from '../view/filter-view';
import { generateFilters } from '../mock/filter';
import { render } from '../framework/render';

export default class FilterPresenter {
  #container = null;
  #pointsModel = null;
  #filters = [];

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;

    this.#filters = generateFilters(this.#pointsModel.get());
  }

  init() {
    render(new FilterView(this.#filters), this.#container);
  }
}
