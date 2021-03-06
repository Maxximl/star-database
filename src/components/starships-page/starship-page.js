import React, { Component } from "react";
import ItemDetails, { Record } from "../item-details";
import "./starship-page.css";
import { StarshipList, StarshipDetails } from "../../components/sw-component";


import Row from "../row";

export default class StarshipPage extends Component {
  state = {
    selectedStarship: null
  };

  onStarshipSelected = id => {
    this.setState({
      selectedStarship: id
    });
  };

  render() {
    const itemList = <StarshipList onItemSelected={this.onStarshipSelected} />;

    const itemDetails = (
      <StarshipDetails
        id={this.state.selectedStarship} >
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="length" label="Length" />
      </StarshipDetails>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
