import React from "react";

function ShoppingCartItem(props) {
  console.log(props.grocery);
  return (
    <li
      className="list-item"
      key={props.grocery.id}
      id={props.grocery.id}
      value={props.grocery.title}
    >
      {props.grocery.title}
    </li>
  );
}
// console.log(props.item.title);
// onClick = { handleClickGroceryItem };

export default ShoppingCartItem;
