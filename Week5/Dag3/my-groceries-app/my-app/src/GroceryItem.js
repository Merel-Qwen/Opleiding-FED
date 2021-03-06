import React from "react";

function GroceryItem(props) {
  console.log(props.grocery);
  return (
    <li
      className="list-item"
      key={props.grocery.id}
      id={props.grocery.id}
      value={props.grocery.title}
      onClick={props.handleClickGroceryItem}
    >
      {props.grocery.title}
    </li>
  );
}
// console.log(props.item.title);
// onClick = { handleClickGroceryItem };

export default GroceryItem;
