import React, { Component } from "react";
import State from "./State";
import CalendarDay from "./CalendarDay";

class Container extends Component {
  constructor() {
    super();
    this.state = State;
    // this.addDentist = this.addDentist.bind(this);
  }
  addDentist = (firstName, lastName, phoneNumber, email) => {
    const newState = { ...this.state };
    const dentistsArray = [...this.state.dentists];
    const newDentist = {
      id: Date.now(),
      firstName,
      lastName,
      phoneNumber,
      email,
      sick: false
    };
    dentistsArray.push(newDentist);
    newState["dentists"] = dentistsArray;
    return newState;
  };

  render() {
    const newState = this.addDentist(
      "Merel",
      "Sterker",
      "0629028742",
      "Merel@MediaList.com"
    );

    console.log(newState);

    return (
      <div>
        <CalendarDay state={this.state} />
      </div>
    );
  }
}

export default Container;

// const addDentist = (state, firstName, lastName, phoneNumber, email) => {
//     const newState = { ...state };
//     const dentistsArray = [...state.dentists];
//     const newDentist = {
//       id: Date.now(),
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       sick: false
//     };
//     dentistsArray.push(newDentist);
//     newState["dentists"] = dentistsArray;
//     return newState;
//   };
