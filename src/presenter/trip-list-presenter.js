import { render } from '../render.js';
import PointEditView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';
import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';


export default class ListPresenter {
  boardComponent = new ListView();
  pointListComponent = new PointListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.pointListComponent, this.boardComponent.getElement());
    render(new PointEditView, this.boardComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView, this.boardComponent.getElement());
    }
  }
}
