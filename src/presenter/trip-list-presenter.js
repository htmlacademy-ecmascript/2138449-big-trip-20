import { render } from '../render.js';
import PointEditView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';
import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';

export default class ListPresenter {
  boardComponent = new ListView();
  pointListComponent = new PointListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.pointListComponent, this.boardContainer);
    render(new PointEditView({point: this.boardPoints[0]}), this.pointListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new NewPointView({point: this.boardPoints[i]}), this.pointListComponent.getElement());
    }
  }
}
