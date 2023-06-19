import AbstractView from '../framework/view/abstract-view.js';
import {FilterType} from '../utils/const.js';

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future presents now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

function createNoPointsTemplate(filterType) {
  const noPointsTextValue = NoPointsTextType[filterType];
  return (
    `<p class="trip-events__msg">
      ${noPointsTextValue}
    </p>`
  );
}


export default class NoPointsView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    // return createNoPointsTemplate();
    return createNoPointsTemplate(this.#filterType);
  }
}
