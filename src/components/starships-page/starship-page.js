import React, { Component } from 'react';

import  './starship-page.css';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';


export default class StarshipPage extends Component {

    state = {
        selectedStarship: null
      };
    
      onStarshipSelected = id => {
        this.setState({
          selectedStarship: id
        });
      };

    render() {

        const itemList = (
            <ItemList 
                getData={this.props.getData} 
                onItemSelected={this.onStarshipSelected} >
            
            { (i) => `${i.name}, ${i.model}` }
            
            </ItemList>);

        const itemDetails = (
            <ItemDetails id={this.state.selectedStarship}
                getData={this.props.getDetails}
                getImgUrl={this.props.getImageStarship} >
            
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="length" label="Length" />
            </ItemDetails>
                )

        return (
            <Row left={itemList}
                 right={itemDetails}/>
        );
    }
}