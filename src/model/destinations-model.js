import { destinationsMock } from '../mock/points.js';

export default class DestinationsModel {
  #destinations = destinationsMock;

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
