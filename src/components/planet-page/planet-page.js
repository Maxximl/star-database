import React, { Component } from 'react';

import  './planet-page.css';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

export default class PlanetPage extends Component {

    renderPlanetList = (planetList) => {
        const people = planetList.map(({ id, name }) => {
            return (
              <li className="list-group-item"
                key={id}
                onClick={() => this.props.onPlanetSelected(id)}>
                {name}
                {` -----`}
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
                        renderItemList={this.renderPlanetList}
                        getData={this.props.getData} />
                </div>
                <div className="col-md-6">
                    <PersonDetails id={this.props.selectedPlanet} />
                </div>
            </div>
        );
    }
}
