import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
        <Wrapped { ...props } >
            {fn}
        </Wrapped>
        )
    } 
}

const PersonList = withData(withChildFunction(ItemList, i => `${i.name}, ${i.birthYear}`),
                            getAllPeople);
  
const PlanetList = withData(withChildFunction(ItemList, i => `${i.name}, ${i.diameter}`),
                            getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, (i) => `${i.name}, ${i.model}`), 
                            getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};