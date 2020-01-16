import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "Groente" },
        { id: 4, title: "Kattenvoer" }
      ],

      shoppingItems: [
        { id: 5, title: "Broccoli" },
        { id: 6, title: "Yoghurt" },
        { id: 7, title: "Fruit" },
        { id: 8, title: "Shampoo" }
      ]
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
  }
  handleClickGroceryItem(event) {
    const { id } = event.target;
    let idInt = parseInt(id);
    const value = event.target.getAttribute("value");
    let object = { id: idInt, title: value };
    console.log(
      event.target.getAttribute("value"),
      "Klik op handleClickGroceryItem"
    );
    this.AddItem(object);
  }
  AddItem = object => {
    this.setState({
      shoppingItems: [...this.state.shoppingItems, object]
    });
  };

  render() {
    return (
      <div>
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
        />
        <ShoppingCart shoppingItems={this.state.shoppingItems} />
      </div>
    );
  }
}

export default Container;

// import React from "react";
// import GroceryList from "./GroceryItem";

// class Container extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       groceryItems: [
//         { id: 1, title: "Appels" },
//         { id: 2, title: "Pak melk" },
//         { id: 3, title: "Groente" },
//         { id: 4, title: "Kattenvoer" }
//       ],

//       shoppingListItems: [
//         { id: "a", title: "Broccoli" },
//         { id: "b", title: "Yoghurt" },
//         { id: "c", title: "Fruit" },
//         { id: "d", title: "Shampoo" }
//       ]
//     };
//     this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
//   }
//   handleClickGroceryItem = function() {
//     console.log("ik werk");
//   };

//   render() {
//     const groceryItem = this.state.groceryItems.map(grocery => (
//       <GroceryList key={grocery.id} grocery={grocery} />
//     ));

//     const shoppingItem = this.state.shoppingListItems.map(grocery => (
//       <GroceryList key={grocery.id} grocery={grocery} />
//     ));

//     return (
//       <div>
//         {groceryItem}
//         <br />
//         {shoppingItem}
//       </div>
//     );
//   }
// }

// export default Container;
