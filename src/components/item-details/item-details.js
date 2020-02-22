import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-btn";
import "./item-details.css";
import ItemList from "../item-list";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = (props) => {
  const { item, img } = props;
  if (!item) return <span>Select Person</span>;
  const { name } = item;

  return (
    <div className="person-details card">
      <img className="person-image" alt={name} src={img} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
        <ErrorButton />
      </div>
    </div>
  );
};

export default ItemDetails;



