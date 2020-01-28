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

    const { getPerson, getPlanet, getStarship,
            getAllPlanets, getAllPeople, getAllStarships,
            getImagePeople, getImagePlanet, getImageStarship } = this.swapiService;
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage 
          getData={getAllPeople}
          onPersonSelected={this.onPersonSelected}
          selectedPerson={this.state.selectedPerson}
          getDetails={getPerson}
          getImagePeople={getImagePeople}
        />

        <StarshipPage
          getData={getAllStarships}
          onStarshipSelected={this.onStarshipSelected}
          selectedStarship={this.state.selectedStarship}
          getDetails={getStarship}
          getImageStarship={getImageStarship}
        />

        <PlanetPage
          getData={getAllPlanets}
          onPlanetSelected={this.onPlanetSelected}
          selectedPlanet={this.state.selectedPlanet}
          getDetails={getPlanet}
          getImagePlanet={getImagePlanet}
        />
      </div>
    );
  }
}
