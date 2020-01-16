import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.shoppingItems.map(grocery => (
          <ShoppingCartItem
            id={grocery.id}
            key={grocery.id}
            grocery={grocery}
          />
        ))}
      </ul>
    );
  }
}

export default ShoppingCart;
