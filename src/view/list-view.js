import AbstractView from '../framework/view/abstract-view.js';

function createTripList() {
  return '<section class="trip-events"><section>';
}

export default class ListView extends AbstractView {
  get template() {
    return createTripList();
  }

}
