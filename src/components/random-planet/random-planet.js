import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service.js'
import './random-planet.css';

export default class RandomPlanet extends Component {

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }


  constructor() {
    super();
    setInterval(()=>{this.updateRandomPlanet}, 3000);

  }

  updateRandomPlanet() {
    const id = Math.floor(Math.random()*25+2);
      const swapi = new SwapiService();
      swapi.getPlanet(id).then((planet) => {
        this.setState({
          name: planet.name,
          population: planet.population,
          rotationPerion: planet.rotationPeriod,
          diameter: planet.diameter
        });
      });
  }
  render() {
    const {name, population, rotationPeriod, diameter} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
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
      </div>

    );
  }
}
