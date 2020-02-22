import React from 'react';
import ItemDetails, { Record } from '../item-details';
import withDetailsData from '../hoc-helper/with-details-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getPerson,
        getStarship,
        getPlanet,
        getImagePeople,
        getImagePlanet,
        getImageStarship 
} = swapiService;

const PersonDetails = withDetailsData(ItemDetails, getPerson, getImagePeople);

const PlanetDetails = withDetailsData(ItemDetails, getPlanet, getImagePlanet);

const StarshipDetails = withDetailsData(ItemDetails, getStarship, getImageStarship);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};