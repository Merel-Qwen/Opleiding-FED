import React, { Component } from "react";
import StudentBarChart from "./StudentBarChart";
import StudentLineChart from "./StudentLineChart";

class Studentview extends Component {
  constructor() {
    super();
  }

  render() {
    const showDifficulty = function() {
      console.log("showDifficulty is geklikt");
    };

    const showFun = function() {
      console.log("showFun is geklikt");
    };
    const showDifficultyAndFun = function() {
      console.log("showDifficultyAndFun is geklikt");
    };
    return (
      <div>
        <button onClick={showDifficulty}>Show difficulty</button>
        <button onClick={showFun}>Show fun</button>
        <button onClick={showDifficultyAndFun}>Show fun and difficulty</button>
        <h1> Studentview </h1>
        <StudentBarChart />
        <StudentLineChart />
      </div>
    );
  }
}

export default Studentview;
