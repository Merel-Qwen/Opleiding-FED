import React, { Component } from "react";
import StudentBarChart from "./StudentBarChart";
import StudentLineChart from "./StudentLineChart";

class Studentview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> Studentview </h1>
        <StudentBarChart />
        <StudentLineChart />
      </div>
    );
  }
}

export default Studentview;
