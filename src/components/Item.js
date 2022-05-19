import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [bttnState , setBttn] = useState(false);
  const [clsState , setCls] = useState(false);

  const addToCart = () =>{
    setCls((clsState) => !clsState)
    setBttn((bttnState) => !bttnState)
  }

  return (
    <li className={clsState ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className = {bttnState ? 'remove' : 'add'} onClick={addToCart}>
        {bttnState ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
