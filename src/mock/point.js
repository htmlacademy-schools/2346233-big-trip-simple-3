import {getRandomItemFromItems, getRandomPrice, createIDgenerator, getRandomArrayElement} from '../util.js';
import {variousDates, pointTypes } from './consts.js';
import { destinations, generateDestinations } from './destination.js';
import {getRandomOffersIdsByType} from './offer.js';

const waypoints = [];

const generateWaypointId = createIDgenerator();
const generateWaypoints = (n) => {
  for (let i = 0; i < n; i++) {
    const dates = getRandomItemFromItems(variousDates);
    const type = getRandomItemFromItems(pointTypes);
    const waypoint = {
      basePrice: getRandomPrice(),
      dateFrom: dates.dateFrom,
      dateTo: dates.dateTo,
      destination: getRandomItemFromItems(destinations).id,
      id: generateWaypointId(),
      offersIDs: getRandomOffersIdsByType(type),
      type
    };
    waypoints.push(waypoint);
  }
};

const mockInit = (numWaypoints, numDestinations) => { //переставить
  generateDestinations(numDestinations);
  generateWaypoints(numWaypoints);
};

function getRandomPoint() {
  return getRandomArrayElement(waypoints);
}

export {mockInit, waypoints, getRandomPoint};
