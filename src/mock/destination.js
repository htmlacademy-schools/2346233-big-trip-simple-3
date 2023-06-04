import { getRandomItemFromItems, createIDgenerator } from '../util';
import { descrText, cities } from './consts';

const destinations = [];

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < 6; i++) {
    const picture = {
      src: 'img/photos/1.jpg',
      description: getRandomItemFromItems(descrText)
    };
    pictures.push(picture);
  }
  return pictures;
};

const generateDestinationId = createIDgenerator();

const generateDestinations = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: getRandomItemFromItems(descrText),
      name: getRandomItemFromItems(cities),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};


const getDestinationByID = (id) => destinations.find((item)=>item.id === id);

export {generateDestinations, destinations, getDestinationByID};
