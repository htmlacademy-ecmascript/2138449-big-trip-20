import { render, replace } from '../framework/render.js';
import PointEditView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';

export default class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;

  constructor ({pointListContainer}) {
    this.#pointListContainer = pointListContainer;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new NewPointView({
      point: this.#point,
      onEditClick: this.#editClickHandler,
    });
    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      onFormSubmit: this.#formSubmitHandler,
      onFormCancel: this.#cancelButtonClickHandler,
    });

    render(this.#pointComponent, this.#pointListContainer);
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #formSubmitHandler = () => {
    this.#replaceFormToPoint();
  };

  #cancelButtonClickHandler = () => {
    this.#replaceFormToPoint();
  };

  #editClickHandler = () => {
    this.#replacePointToForm();
  };
}
