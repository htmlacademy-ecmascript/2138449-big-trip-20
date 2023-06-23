import AbstractView from '../framework/view/abstract-view.js';

import { humanizePointDueDate } from '../utils/point.js';
import { sortByDate } from '../utils/point.js';
import dayjs from 'dayjs';
const MAX_CITIES_COUNT = 3;

function createTripInfoTemplate({points, firstDestination, lastDestination, shortPoints, firstDate, lastDate, totalPrice}) {
  return (
    `<section class="trip-main__trip-info  trip-info">
       <div class="trip-info__main">
         <h1 class="trip-info__title">
         ${points.length > MAX_CITIES_COUNT ? `${firstDestination ? firstDestination : ''} &mdash; . . . &mdash;
         ${lastDestination ? lastDestination : ''}` : shortPoints.join(' &mdash; ')}
         </h1>

         <p class="trip-info__dates">${firstDate}&nbsp;&mdash;&nbsp;${lastDate}</p>
       </div>

       <p class="trip-info__cost">
         Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice ? totalPrice : ''}</span>
       </p>
     </section>`
  );
}

export default class TripInfoView extends AbstractView {
  #destinationsModel = null;
  #pointsModel = null;
  #offersModel = null;

  constructor({destinationsModel, pointsModel, offersModel}) {
    super();
    this.#destinationsModel = destinationsModel;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
  }

  get template() {
    const points = this.#pointsModel.points;
    const shortPoints = sortByDate(points).map((point) => this.#destinationsModel.getById(point.destination)?.name);

    const firstDestination = this.#destinationsModel.getById(points[0]?.destination)?.name;
    const lastDestination = this.#destinationsModel.getById(points[points.length - 1]?.destination)?.name;

    const isSameMonth = dayjs(points[0]?.dateFrom).month() === dayjs(points[points.length - 1]?.dateTo).month();
    const firstDate = humanizePointDueDate(points[0]?.dateFrom, `${isSameMonth ? 'MMM D' : 'D MMM'}`);
    const lastDate = humanizePointDueDate(points[points.length - 1]?.dateTo, `${isSameMonth ? 'D' : 'D MMM'}`);

    const totalPrice = points?.reduce((total, point) => {
      const checkedOffers = this.#offersModel.getById(point.type, point.offers);
      const checkedOffersPrice = checkedOffers?.reduce((sum, checkedOffer) => sum + checkedOffer.price, 0);
      total += checkedOffersPrice + point.basePrice;
      return total;
    }, 0);

    return createTripInfoTemplate({points, firstDestination, lastDestination, shortPoints, firstDate, lastDate, totalPrice});
  }

}
