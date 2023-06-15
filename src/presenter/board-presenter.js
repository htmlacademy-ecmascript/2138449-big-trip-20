import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import NoPointsView from '../view/no-points-view.js';
import LoadingView from '../view/loading-view.js';

import TripInfoView from '../view/trip-info-view.js';

import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter.js';

import { render, remove, RenderPosition } from '../framework/render.js';
import { sortByTime, sortByPrice } from '../utils/point.js';

import { SortType, UpdateType, UserAction, FilterType } from '../const.js';
import { filter } from '../utils/filters.js';

export default class BoardPresenter {
  #boardContainer = null;
  #tripInfoContainer = null;

  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filtersModel = null;

  #pointListComponent = new PointListView();
  #tripInfoComponent = new TripInfoView();
  #loadingComponent = new LoadingView();
  #noPointsComponent = null;
  #sortComponent = null;

  #pointPresenter = new Map();
  #newPointPresenter = null;

  #filterType = FilterType.EVERYTHING;
  #currentSortType = SortType.DAY;
  #isLoading = true;

  constructor({tripInfoContainer, boardContainer, pointsModel, destinationsModel, offersModel, filterModel, onNewPointDestroy}) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filtersModel = filterModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointListComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filtersModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filteredPoints;
      case SortType.TIME:
        return filteredPoints.sort(sortByTime);
      case SortType.PRICE:
        return filteredPoints.sort(sortByPrice);
    }
    return filteredPoints;
  }

  init() {
    this.#renderBoard();
    this.#renderTripInfo();
  }

  #renderTripInfo() {
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();
  }

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenter.get(update.id).setSaving();
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenter.get(update.id).setDeleting();
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#clearBoard();
        this.#renderBoard();
        break;
    }
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      destinationsModel: this.#destinationsModel,
      pointsModel: this.#pointsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #renderNoPoints() {
    this.#noPointsComponent = new NoPointsView({
      filterType: this.#filterType,
    });

    render(this.#noPointsComponent, this.#boardContainer);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#pointListComponent.element);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#boardContainer);
  }

  #clearBoard(resetSortType = false) {
    this.#newPointPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }
  }

  #renderBoard() {
    this.#renderSort();
    render(this.#pointListComponent, this.#boardContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    if (!this.points.length) {
      this.#renderNoPoints();
      return;
    }

    this.points.forEach((point) => this.#renderPoint(point));
  }
}
