import CreationForm from '../view/creation-form';
import EditingForm from '../view/edit-form';
import Sorting from '../view/sorting';
import EventItem from '../view/event-item';
import EventList from '../view/event-list';
import {render} from '../render';

export default class BoardPresenter {
  waypointListComponent = new EventList();

  constructor({boardContainer,waypointsModel}) {
    this.boardContainer = boardContainer;
    this.waypointsModel = waypointsModel;
  }

  init() {
    const waypoints = [...this.waypointsModel.getWaypoints()];
    render(new Sorting(), this.boardContainer);
    render(this.waypointListComponent, this.boardContainer);
    render(new CreationForm(), this.waypointListComponent.getElement());
    render(new EventItem({oneWaypoint: waypoints[0]}), this.waypointListComponent.getElement());
    render(new EditingForm({oneWaypoint: waypoints[0]}), this.waypointListComponent.getElement());

    for (let i = 1; i < 4; i++) {
      render(new EventItem({oneWaypoint: waypoints[i]}), this.waypointListComponent.getElement());
    }
  }
}
