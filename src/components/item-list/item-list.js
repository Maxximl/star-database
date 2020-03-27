import React from 'react';
import './item-list.css';

const  ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;
  function renderItemList(data) {
    const elements = data.map((item) => {
      const {id} = item;
        return (
          <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
            {renderLabel(item)}
          </li>
        )
      });
      return elements;
    }

  
    return (
      <ul className="item-list list-group">
        {renderItemList(data)}
      </ul>
    );
}

export default ItemList;