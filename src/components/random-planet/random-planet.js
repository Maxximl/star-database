import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updateRandomPlanet();
   // setInterval(this.updateRandomPlanet, 1500);
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading:false,
      error: false
    })
  };

  onError = () => {
    this.setState( {
      error: true
    })
  }
  updateRandomPlanet = () => {
 //   const id = Math.floor(Math.random()*25+2);
 const id = 13123;
      this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  }

  render() {

    const { loading, planet, error } = this.state;

    const hasError = !(error || loading);
    const spinner = !error && loading ? <Spinner /> : null;
    const content = hasError ? <PlanetView planet={planet}/> : null;
    
      
    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};


