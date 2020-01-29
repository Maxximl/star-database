import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './item-details.css';
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-btn'
const Record = ({ item, field, label }) => {
  return (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>);
}

export {
  Record
};

export default class ItemDetails extends Component {

  swapi = new SwapiService();

  state = {
    item: null,
    img: null,
    loading: false

  }

  componentDidMount() {
    // this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updateItem();
    }
  }

  updateItem() {
    this.setState({
      loading: true
    })
    const { id, getImgUrl, getData } = this.props;
    if (!id)
      return;

    getData(id)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          img: getImgUrl(id)
        })
      });
  }

  render() {

   
  
    const { item, img } = this.state;

    if(!item) return <span>Select Person</span>;

    const { name } = item;


    return (
      <div className="person-details card">
        <img className="person-image"
            src={img} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, ( child )=> {
                return React.cloneElement(child, {item} );
              })
            }
          </ul>
          <ErrorButton/>
        </div>
      </div>
    )
  }
}