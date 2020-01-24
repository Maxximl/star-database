import React, { Component } from 'react';

import  './starship-page.css';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

export default class StarshipPage extends Component {


    renderStarshipList = (starshipList) => {
        const people = starshipList.map(({ id, name, model }) => {
            return (
              <li className="list-group-item"
                key={id}
                onClick={() => this.props.onStarshipSelected(id)}>
                {name}
                {` -----${model}`}
              </li>
            )
          });
          return people;
    }

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        renderItemList={this.renderStarshipList}
                        getData={this.props.getData} />
                </div>
                <div className="col-md-6">
                    <PersonDetails id={this.props.selectedStarship} />
                </div>
            </div>
        );
    }
}