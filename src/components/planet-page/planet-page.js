import React, { Component } from 'react';

import './planet-page.css';
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import Row from '../row'

export default class PlanetPage extends Component {


    render() {

        const itemList = (
            <ItemList
                getData={this.props.getData}
                onItemSelected={this.props.onPlanetSelected} >

            {(i) => (`${i.name}, ${i.diameter}`)}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails id={this.props.selectedPlanet} />
        );

        return (
            <Row left={itemList} 
                 right={personDetails}/>
        );
    }
}
