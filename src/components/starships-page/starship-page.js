import React, { Component } from 'react';

import  './starship-page.css';
import ItemList from '../item-list'
import ItemDetails from '../item-details'

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
                    <ItemDetails id={this.props.selectedStarship}
                        getData={this.props.getDetails}
                        getImgUrl={this.props.getImageStarship} />
                </div>
            </div>
        );
    }
}