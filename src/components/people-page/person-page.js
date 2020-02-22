import React, { Component } from "react";

import "./person-page.css";
import { PersonList } from "../../components/sw-component";
import { Record } from "../item-details";
import Row from "../row";
import { PersonDetails } from '../../components/sw-component';

export default class PersonPage extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <PersonList onItemSelected={this.onPersonSelected} />
      );
    const personDetails = (
      <PersonDetails id={this.state.selectedPerson}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </PersonDetails>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
