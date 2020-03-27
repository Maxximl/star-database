import React, { Component } from "react";

import "./planet-page.css";
import { PlanetList } from "../../components/sw-component";
import  { Record } from "../item-details";
import { PlanetDetails } from '../../components/sw-component';
import Row from "../row";

export default class PlanetPage extends Component {
  state = {
    selectedPlanet: null
  };

  onPlanetSelected = id => {
    this.setState({
      selectedPlanet: id
    });
    console.log('planet clicked');
  };

  render() {
    const itemList = <PlanetList onItemSelected={this.onPlanetSelected} />;

    const itemDetails = (
      <PlanetDetails
        id={this.state.selectedPlanet} >
        <Record field="diameter" label="Diameter" />
        <Record field="rotationPeriod" label="Rotation Period" />
      </PlanetDetails>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
