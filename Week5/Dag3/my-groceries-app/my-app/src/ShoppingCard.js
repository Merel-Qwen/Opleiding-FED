import React from "react";
import GroceryItem from "./GroceryItem";

class ShoppingCard extends React.Component {
  constructor() {
    super();
    this.state = {
      GroceryItems: [
        { id: 1, title: "Appel" },
        { id: 2, title: "Milk" },
        { id: 3, title: "Groente" },
        { id: 4, title: "Kattenvoer" },
        { id: 5, title: "Kattenvoer" },
        { id: 6, title: "Kattenvoer" }
      ]
    };
  }

  grocery;

  render() {
    const ShoppingItems = this.state.GroceryItems.map(grocery => (
      <GroceryItem key={grocery.id} grocery={grocery} />
    ));

    return <div>{ShoppingItems}</div>;
  }
}

export default ShoppingCard;
