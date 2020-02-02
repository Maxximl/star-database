import React, { Component } from 'react';

import  './person-page.css';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import Row from '../row';


export default class PersonPage extends Component {

    render() {

        const itemList = (
            <ItemList 
                getData={this.props.getData}
                onItemSelected={this.props.onPersonSelected} >

            {(i) => `${i.name}, ${i.birthYear}`} 
            </ItemList>
        );
        const personDetails = (
            
                <ItemDetails id={this.props.selectedPerson}
                    getData={this.props.getDetails} 
                    getImgUrl={this.props.getImagePeople}>

                     <Record field="gender" label="Gender" />
                     <Record field="eyeColor" label="Eye Color" />
                </ItemDetails>
            
        )

        return (           
            <Row left={itemList}
                 right={personDetails} /> 
        );
    }
}