import AbstractView from '../framework/view/abstract-view';

function createEventListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventList extends AbstractView{
  get template() {
    return createEventListTemplate();
  }
}
