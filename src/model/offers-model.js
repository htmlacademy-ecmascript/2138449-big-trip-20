export default class OffersModel{
  #offers = [];
  #service = null;

  constructor(service) {
    this.#service = service;
  }

  async init() {
    this.#offers = await this.#service.offers;
    return this.#offers;
  }

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
