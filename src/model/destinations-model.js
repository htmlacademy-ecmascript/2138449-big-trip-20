export default class DestinationsModel {
  #destinations = [];
  #service = null;

  constructor(service) {
    this.#service = service;
  }

  get pointDestinations() {
    return this.#destinations;
  }

  async init() {
    this.#destinations = await this.#service.destinations;
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((elem) => elem.id === id);
  }

  getByName(name) {
    return this.#destinations.find((elem) => elem.name === name);
  }
}
