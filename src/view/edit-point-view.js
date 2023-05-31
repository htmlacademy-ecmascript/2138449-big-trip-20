import { humanizePointDueDate } from '../utils/point.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import { CITIES, POINT_TYPES } from '../const.js';
import 'flatpickr/dist/flatpickr.min.css';
//import { destinationsMock } from '../mock/points.js';

const DATE_FORMAT = 'DD/MM/YY HH:mm';
const DEFAULT_TYPE = 'flight';

const DEFAULT_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE
};

function createEditPointTemplate(pointDestination, state, pointOffers) {
  const {point} = state;
  const destination = pointDestination;
  const offers = pointOffers;

  //console.log('createEditPointTemplate', point);
  const {dateFrom, dateTo, type, basePrice} = point;

  const dateStart = humanizePointDueDate(dateFrom, DATE_FORMAT);
  const dateEnd = humanizePointDueDate(dateTo, DATE_FORMAT);

  function createOffersTemplate(offersList) {
    return offersList.map((offer) => `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${offer.isChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
    `).join('');
  }

  function createPictureTemplate(pictures) {
    return pictures.map((picture) =>
      `<img class="event__photo" src="${picture.src}" alt="Event photo">`).join('');
  }

  function createCityTemplate(cities) {
    return cities.map((city) =>
      `<option value="${city}"></option>`).join('');
  }

  function createPointsTypeTemplate(pointTypes) {
    return pointTypes.map((pointType) =>
      `<div class="event__type-item">
       <input id="event-type-${pointType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType.toLowerCase()}">
       <label class="event__type-label  event__type-label--${pointType.toLowerCase()}" for="event-type-${pointType.toLowerCase()}-1">${pointType}</label>
     </div>`).join('');
  }

  return (/*html*/`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${createPointsTypeTemplate(POINT_TYPES)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
      ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${createCityTemplate(CITIES)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${createOffersTemplate(offers)}
      </div>
    </section>

    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
        ${createPictureTemplate(destination.pictures)}
        </div>
      </div>
    </section>
  </section>
</form>
</li>`);
}

export default class PointEditView extends AbstractStatefulView {

  #handleFormSubmit = null;
  #handleFormCancel = null;

  #destinationsModel = null;
  #point = null;
  #offersModel = null;

  #datepickerFrom = null;
  #datepickerTo = null;

  constructor ({ onFormSubmit, onFormCancel, destinationsModel, point = DEFAULT_POINT, offersModel }) {
    super();

    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormCancel = onFormCancel;

    this.#destinationsModel = destinationsModel;
    this._setState(PointEditView.parsePointToState({point}));
    this.#offersModel = offersModel;

    this._restoreHandlers();
  }

  get template() {
    //return createEditPointTemplate(this._state, this._state.pointDestination, this._state.pointOffers);
    return createEditPointTemplate(this.#destinationsModel.getById(this._state.point.destination), this._state, this.#offersModel.getByType(this._state.point.type));
    //return createEditPointTemplate(this._state, this.#destinationModel.getById(this.#point.destination), this.#offersModel.getByType(this.#point.type));
  }

  reset = (point) => this.updateElement({point});

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  _restoreHandlers = () => {
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCancelHandler);

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeInputClick);

    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#formCancelHandler);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationInputChange);

    const offerBlock = this.element.querySelector('.event__available-offers');

    if (offerBlock) {
      offerBlock.addEventListener('change', this.#offerClickHandler);
    }

    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceInputChange);

  };

  // свойство checked нет, дата-атрибутов нет
  #offerClickHandler = (evt) => {
    evt.preventDefault();

    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({
      point: {
        ...this._state.point,
        offers: checkedBoxes.map((element) => element.dataset.offerId)
      }
    });
  };

  #priceInputChange = (evt) => {
    evt.preventDefault();

    this._setState({
      point: {
        ...this._state.point,
        basePrice: evt.target.valueAsNumber
      }
    });
  };

  #typeInputClick = (evt) => {
    evt.preventDefault();

    // Тут выбрать офферы относящиеся к новому типу
    const selectedType = evt.target.value;


    function getOffersByType(type) {

      const allOffers = this.#offersModel; // Получаю все офферы ???
      const offersForSelectedType = allOffers.filter((offer) => offer.type === type);
      return offersForSelectedType;
    }

    const offersForType = getOffersByType(selectedType);

    this.updateElement({
      point: {
        ...this._state.point,
        type: selectedType,
        offers: { // Структура уже другая
          offers: [ offersForType /** тут все офферы по новому типу */],
          type: selectedType,
        }
      }
    });
  };

  #destinationInputChange = (evt) => {
    evt.preventDefault();

    const selectedDestination = this.pointDestinations
      .find((pointDestination) => pointDestination.name === evt.target.value); //???
    //const selectedDestination = this.#pointDestinations.name === evt.target.value;

    const selectedDestinationId = (selectedDestination)
      ? selectedDestination.id
      : null;

    this.updateElement({
      point: {
        ...this._state.point,
        destination: selectedDestinationId
      }
    });
  };

  /*#dateFromChangeHandler = () => {

  };*/

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointEditView.parseStateToPoint(this._state));
  };

  #formCancelHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormCancel();
  };

  /*#setDatepickers = () => {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.point.dateFrom,
        onClose: this.#dateFromChangeHandler,
        enableTime: true,
        maxDate: this._state.point.dateTo,
        locale: {
          firstDayOfWeek: 1,
        },
        'time_24hr': true
      },
    );

    //this.#datepickerTo = flatpickr();
  };*/

  static parsePointToState = ({point}) => ({point});

  static parseStateToPoint = (state) => state.point;
}

