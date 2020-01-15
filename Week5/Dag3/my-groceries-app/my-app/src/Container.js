import React from "react";
import GroceryList from "./GroceryItem";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      GroceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "Groente" },
        { id: 4, title: "Kattenvoer" }
      ]
    };
  }

  grocery;

  render() {
    const ShoppingItems = this.state.GroceryItems.map(grocery => (
      <GroceryList key={grocery.id} grocery={grocery} />
    ));

    return <div>{ShoppingItems}</div>;
  }
}

export default Container;

// import React from "react";
// import GroceryList from "./GroceryItem";

// class Container extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       GroceryItems: [
//         { id: 1, title: "Appels" },
//         { id: 2, title: "Pak melk" },
//         { id: 3, title: "Groente" },
//         { id: 4, title: "Kattenvoer" }
//       ]
//     };
//   }

//   grocery;

//   render() {
//     const ShoppingItems = this.state.GroceryItems.map(grocery => (
//       <GroceryList key={grocery.id} grocery={grocery} />
//     ));

//     return <div>{ShoppingItems}</div>;
//   }
// }

// export default Container;
