import React, { Component } from 'react';

import  './starship-page.css';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

export default class StarshipPage extends Component {



    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        getData={this.props.getData} 
                        onItemSelected={this.props.onStarshipSelected} >
                    
                    { (i) => `${i.name}, ${i.model}` }
                    </ItemList>
                </div>
                <div className="col-md-6">
                    <PersonDetails id={this.props.selectedStarship} />
                </div>
            </div>
        );
    }
}