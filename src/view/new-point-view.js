import { humanizePointDueDate, getPointDuration } from '../utils/point.js';
import AbstractView from '../framework/view/abstract-view.js';

const MOUNTH_DAY = 'MMM DD';
const HOUR_MIN = 'HH:mm';

function createNewPointTemplate(data) {

  const { basePrice, dateFrom, dateTo, destination, offers, type, isFavorite } = data;

  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  function createOfferTemplate(wayoffers) {
    return `<li class="event__offer">
    <span class="event__offer-title">${wayoffers.offers[1].title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${wayoffers.offers[1].price}</span>
  </li>`;
  }

  return (/*html*/`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${humanizePointDueDate(dateFrom, MOUNTH_DAY)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${humanizePointDueDate(dateFrom, HOUR_MIN)}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${humanizePointDueDate(dateTo, HOUR_MIN)}</time>
      </p>
      <p class="event__duration">${getPointDuration(dateFrom, dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${createOfferTemplate(offers)}
    </ul>
    <button class="event__favorite-btn ${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`);
}

export default class NewPointView extends AbstractView {
  #point = null;
  #onEditClick = null;
  #handleFavoriteClick = null;

  constructor ({point, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#onEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-icon')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createNewPointTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
