import { render } from '../framework/render.js';
import PointEditView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';
import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';

export default class ListPresenter {
  #boardContainer = null;
  #pointsModel = null;

  #boardComponent = new ListView();
  #pointListComponent = new PointListView();

  #boardPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];

    render(this.#boardComponent, this.#boardContainer);
    render(new SortView(), this.#boardComponent.element);
    render(this.#pointListComponent, this.#boardComponent.element); // ???
    //render(new PointEditView({point: this.#boardPoints[0]}), this.#pointListComponent.element);

    for (let i = 0; i < this.#boardPoints.length; i++) {
      //render(new NewPointView({point: this.#boardPoints[i]}), this.#pointListComponent.element);
      this.#renderPoint(this.#boardPoints[i]);
    }
  }

  #renderPoint(point) {
    const pointComponent = new NewPointView({point});
    render(pointComponent, this.#pointListComponent.element);
  }
}
