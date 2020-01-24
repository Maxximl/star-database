import React, { Component } from 'react';

import  './person-page.css';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

export default class PersonPage extends Component {

    renderItemList = (peopleList) => {
        const people = peopleList.map(({ id, name, gender }) => {
            return (
              <li className="list-group-item"
                key={id}
                onClick={() => this.props.onPersonSelected(id)}>
                {name}
                {` -----${gender}`}
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
                        getData={this.props.getData}
                        renderItemList={this.renderItemList} />
                </div>
                <div className="col-md-6">
                    <PersonDetails id={this.props.selectedPerson} />
                </div>
            </div>
        );
    }
}