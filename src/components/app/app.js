import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../people-page";
import StarshipPage from "../starships-page";
import SwapiService from "../../services/swapi-service";
import PlanetPage from "../planet-page/planet-page";
import { SwapiServiceProvider } from '../swapi-service-context';
import "./app.css";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
        <Header />
        <RandomPlanet />

        <PersonPage />

        <StarshipPage />

        <PlanetPage />
        </SwapiServiceProvider>
      </div>
    );
  }
}
