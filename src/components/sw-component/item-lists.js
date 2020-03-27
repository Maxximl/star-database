import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

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

const renderNameAndBitrhYear = (i) => `${i.name}, ${i.birthYear}`;
const renderNameAndDiameter = (i) => `${i.name}, ${i.diameter}`;
const renderNameAndModel = (i) => `${i.name}, ${i.model}`;

const PersonList = withData(withChildFunction(ItemList, renderNameAndBitrhYear),
                            getAllPeople);
  
const PlanetList = withData(withChildFunction(ItemList, renderNameAndDiameter),
                            getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), 
                            getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};