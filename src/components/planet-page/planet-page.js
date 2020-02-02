import React, { Component } from 'react';

import './planet-page.css';
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details'
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

        const itemDetails = (
            <ItemDetails id={this.props.selectedPlanet}
                getData={this.props.getDetails}
                getImgUrl={this.props.getImagePlanet}>

                <Record  field="diameter"  label="Diameter" />
                <Record  field="rotationPeriod"  label="Rotation Period" />
            </ItemDetails>

                
        );

        return (
            <Row left={itemList} 
                 right={itemDetails}/>
        );
    }
}
