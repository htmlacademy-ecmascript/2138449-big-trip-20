import { render } from '../render.js';
import PointEditView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';
import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';

const POINT_COUNT = 3;

export default class ListPresenter {
  boardComponent = new ListView();
  pointListComponent = new PointListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.pointListComponent, this.boardContainer);
    render(new PointEditView, this.pointListComponent.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new NewPointView, this.pointListComponent.getElement());
    }
  }
}
