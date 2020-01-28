import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './item-details.css';
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-btn'

export default class ItemDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null,
    img: null,
    loading: false

  }

  componentDidMount() {
    // this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updatePerson();
    }
  }

  updatePerson() {
    this.setState({
      loading: true
    })
    const { id, getImgUrl, getData } = this.props;
    if (!id)
      return;

    getData(id)
      .then((person) => {
        this.setState({
          person,
          loading: false,
          img: getImgUrl(id)
        })
      });
  }

  render() {

    const { loading, person } = this.state;

    const spinner = loading ? <Spinner /> : null;

    const isPersonNotSelected = !person ?
      <span>Selected Person From List!</span> :
      null;
    if (isPersonNotSelected) return isPersonNotSelected;

    const personDetails =   personDetailsView(this.state);

    return (
      <div className="person-details card">
        {spinner}
        {isPersonNotSelected}
        {personDetails}
      </div>
    )
  }
}

const personDetailsView = ({ person, img }) => {
  
  
  const { id, name, gender, birthYear, eyeColor } = person;

  return (<React.Fragment>
    <img className="person-image"
      src={img} />

    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>{birthYear}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>{eyeColor}</span>
        </li>
      </ul>
      <ErrorButton/>
    </div>
  </React.Fragment>
  )
}