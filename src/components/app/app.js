import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../people-page";
import StarshipPage from "../starships-page";
import SwapiService from "../../services/swapi-service";
import PlanetPage from "../planet-page/planet-page";

import "./app.css";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage />

        <StarshipPage />

        <PlanetPage />
      </div>
    );
  }
}
