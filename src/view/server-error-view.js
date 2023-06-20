import AbstractView from '../framework/view/abstract-view.js';

function createServerErrorTemplate() {
  return '<p class="trip-events__msg">Oops...Something getting wrong</p>';
}

export default class ServerErrorView extends AbstractView {
  get template() {
    return createServerErrorTemplate();
  }
}
