import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './item-list.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

  swapi = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapi.getAllPeople()
      .then( (peopleList) => {
        this.setState( {peopleList} )
      });
  }

  renderPeople(peopleList) {
    const people = peopleList.map(({id, name}) => {
      return  (
      <li className="list-group-item"
      key={id}
      onClick={() => this.props.onPersonSelected(id)}>
        {name}
      </li>
    )});
    return people;
  }

  render() {

    const { peopleList } = this.state;



    if(!peopleList) 
      return <Spinner/>



    return (
      <ul className="item-list list-group">
        {this.renderPeople(peopleList)}
      </ul>
    );
  }
}
