import { createElement } from "../render";

function createTripList() {
 return `<section class="trip-events"><section>`;
};

export default class ListView {
  getTemplate() {
    return createTripList();
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
