import React, { Component } from 'react';

import './planet-page.css';
import ItemList from '../item-list'
import ItemDetails from '../item-details'
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
            <ItemDetails id={this.props.selectedPlanet}
                getData={this.props.getDetails}
                getImgUrl={this.props.getImagePlanet}/>
        );

        return (
            <Row left={itemList} 
                 right={personDetails}/>
        );
    }
}
