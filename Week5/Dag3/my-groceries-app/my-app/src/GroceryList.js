import React from "react";
import GroceryItem from "./GroceryItem";

class GroceryList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="grocery-list">
        {this.props.groceryItems.map(grocery => (
          <GroceryItem
            id={grocery.id}
            key={grocery.id}
            grocery={grocery}
            handleClickGroceryItem={this.props.handleClickGroceryItem}
          />
        ))}
      </ul>
    );
  }
}

export default GroceryList;

// import React from "react";
// import Container from "./Container";

// function GroceryList() {
//   return (
//     <div>
//       <Container />
//     </div>
//   );
// }

// export default GroceryList;
