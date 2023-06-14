export default class DestinationsModel {
  #destinations = [];
  #service = null;

  constructor(service) {
    this.#service = service;
  }

  async init() {
    this.#destinations = await this.#service.destinations; // !
    return this.#destinations;
  }

  get pointDestinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((elem) => elem.id === id);
  }

  getByName(name) {
    return this.#destinations.find((elem) => elem.name === name);
  }
}
