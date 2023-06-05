import { offersMock } from '../mock/points.js';

export default class OffersModel{
  #offers = offersMock;

  get pointOffers() {
    return this.#offers;
  }

  getByType(type) {
    const offersByType = this.#offers.find((offer) => offer.type === type);

    if (offersByType) {
      return offersByType.offers;
    }
  }

  getById(type, ids) {
    return this.getByType(type).filter((offer) => ids.includes(offer.id));
  }
}
