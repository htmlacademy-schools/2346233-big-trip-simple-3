import CreationForm from '../view/creation-form';
import EditingForm from '../view/edit-form';
import Sorting from '../view/sorting';
import EventItem from '../view/event-item';
import EventList from '../view/event-list';
import {render} from '../render';

export default class BoardPresenter {
  waypointListComponent = new EventList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new Sorting(), this.boardContainer);
    render(this.waypointListComponent, this.boardContainer);
    render(new CreationForm(), this.waypointListComponent.getElement());
    render(new EventItem(), this.waypointListComponent.getElement());
    render(new EditingForm(), this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventItem(), this.waypointListComponent.getElement());
    }
  }
}
