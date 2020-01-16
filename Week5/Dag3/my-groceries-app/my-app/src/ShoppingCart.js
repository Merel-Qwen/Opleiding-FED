import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul className="shopping-list">
          {this.props.shoppingItems.map(grocery => (
            <ShoppingCartItem
              id={grocery.id}
              key={grocery.id}
              grocery={grocery}
            />
          ))}
        </ul>
        <button onClick={this.props.handleClickEmptyCart}> Empty Cart</button>
      </div>
    );
  }
}

export default ShoppingCart;
