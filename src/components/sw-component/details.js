import React from 'react';
import ItemDetails, { Record } from '../item-details';
import withDetailsData from '../hoc-helper/with-details-data';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceConsumer } from '../swapi-service-context';


const swapiService = new SwapiService();
const { getPerson,
        getStarship,
        getPlanet,
        getImagePeople,
        getImagePlanet,
        getImageStarship 
} = swapiService;

const PersonDetails = 
<SwapiServiceConsumer>
    {
        ({ getPerson }) => {
            return withDetailsData(ItemDetails, getPerson, getImagePeople);
        }
    }
</SwapiServiceConsumer>
withDetailsData(ItemDetails, getPerson, getImagePeople);

const PlanetDetails = withDetailsData(ItemDetails, getPlanet, getImagePlanet);

const StarshipDetails = withDetailsData(ItemDetails, getStarship, getImageStarship);


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};