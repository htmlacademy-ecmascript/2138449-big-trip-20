import { createElement } from '../render';
import { humanizePointDueDate } from '../utils';
//import dayjs from 'dayjs';

const MOUNTH_DAY = 'MMM DD';
const HOUR_MIN = 'HH:mm';
//const eventDate = dayjs(dateFrom).format(MOUNTH_DAY);

function createNewPointTemplate(data) {

  const { basePrice, dateFrom, dateTo, destination, offers, type } = data;

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
      <p class="event__duration">30M/*ТУТ ДОЛЖЕН БЫТЬ РАСЧЕТ ВРЕМЕНИ*/</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${offers.offers[0].title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers.offers[0].price}</span>
      </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn--active" type="button">
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

export default class NewPointView {
  constructor ({point}) {
    this.point = point;
  }

  getTemplate() {
    return createNewPointTemplate(this.point);
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
}
