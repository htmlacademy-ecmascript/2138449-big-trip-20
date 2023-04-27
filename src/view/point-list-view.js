import { createElement } from "../render";

function createPointList() {
 return `<li class="trip-events__item"></li>`;
};

export default class PointListView {
  getTemplate() {
    return createPointList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
};
