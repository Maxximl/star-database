import React, { Component } from 'react';

import  './person-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import ErrorIndicator from '../error-indicator/error-indicator';


class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    render() {
        if(this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
    
}

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
            <ErrorBoundary>
                <PersonDetails id={this.props.selectedPerson} />
            </ErrorBoundary>
        )

        return (
           
            <Row left={itemList}
                 right={personDetails} />
           
        );
    }
}