import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './item-list.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {


  state = {
    itemList: null
  }

  componentDidMount() {
    this.props.getData()
      .then((itemList) => {
        this.setState({ itemList })
      });
  }

  renderItemList(peopleList) {
    const people = peopleList.map((item) => {
      const {id} = item;
        return (
          <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
            {this.props.children(item)}
          </li>
        )
      });
      return people;
}

  render() {

    const { itemList } = this.state;

    if (!itemList)
      return <Spinner />

    return (
      <ul className="item-list list-group">
        {this.renderItemList(itemList)}
      </ul>
    );
  }
}
