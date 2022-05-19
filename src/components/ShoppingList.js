import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory , setCategory] = useState('All')
  
  const updateCategoryState = (event) => {
    let newCategory = event.target.value;
    setCategory((selectedCategory) => selectedCategory = newCategory);
  }

  const handleFilter = items.filter(item => {
    if (selectedCategory === 'All'){
      return item
    } else {
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={updateCategoryState}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {handleFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
