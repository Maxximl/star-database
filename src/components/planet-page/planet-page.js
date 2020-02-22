import React, { Component } from "react";

import "./planet-page.css";
import { PlanetList } from "../../components/sw-component";
import ItemDetails, { Record } from "../item-details";
import Row from "../row";

export default class PlanetPage extends Component {
  state = {
    selectedPlanet: null
  };

  onPlanetSelected = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    const itemList = <PlanetList onItemSelected={this.onPlanetSelected} />;

    const itemDetails = (
      <ItemDetails
        id={this.state.selectedPlanet} >
        <Record field="diameter" label="Diameter" />
        <Record field="rotationPeriod" label="Rotation Period" />
      </ItemDetails>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
