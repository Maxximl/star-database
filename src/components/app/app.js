import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../people-page";
import StarshipPage from "../starships-page";
import SwapiService from "../../services/swapi-service";

import "./app.css";
import PlanetPage from "../planet-page/planet-page";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedStarship: null,
    selectedPlanet: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  onStarshipSelected = id => {
    this.setState({
      selectedStarship: id
    });
  };

  onPlanetSelected = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage 
          getData={this.swapiService.getAllPeople}
          onPersonSelected={this.onPersonSelected}
          selectedPerson={this.state.selectedPerson} 
        />

        <StarshipPage
          getData={this.swapiService.getAllStarships}
          onStarshipSelected={this.onStarshipSelected}
          selectedStarship={this.state.selectedStarship}
        />

        <PlanetPage
          getData={this.swapiService.getAllPlanets}
          onPlanetSelected={this.onPlanetSelected}
          selectedPlanet={this.state.selectedPlanet}
        />
      </div>
    );
  }
}
