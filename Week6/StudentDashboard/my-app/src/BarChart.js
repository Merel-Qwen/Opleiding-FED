import React, { Component } from "react";
import Data from "./Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      difficult: {
        data: { fill: "#00cec9" }
      },
      fun: {
        data: { fill: "#e17055" }
      }
    };
  }

  render() {
    const exerciseNames = Data.map(item => item.exercise);
    const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
      return names.indexOf(name) === index;
    });
    const exerciseAverages = uniqueExerciseNames.map(name => {
      const exerciseValues = Data.filter(item => item.exercise === name);
      const difficultyAverage =
        exerciseValues.reduce(
          (previous, current) => previous + current.difficulty,
          0
        ) / exerciseValues.length;
      const funAverage =
        exerciseValues.reduce(
          (previous, current) => previous + current.fun,
          0
        ) / exerciseValues.length;
      return {
        exercise: name,
        difficultyAverage: difficultyAverage,
        funAverage: funAverage
      };
    });

    return (
      <VictoryChart domainPadding={20}>
        <VictoryAxis />
        <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
        <VictoryGroup offset={20}>
          <VictoryBar
            style={this.state.difficult}
            data={exerciseAverages}
            x="exercise"
            y="difficultyAverage"
          />
          <VictoryBar
            style={this.state.fun}
            data={exerciseAverages}
            x="exercise"
            y="funAverage"
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

// console.log(Data);

// class BarChart extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis />
//         <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
//         <VictoryBar data={exerciseAverages} x="exercise" y="difficulty" />
//         <VictoryBar data={exerciseAverages} x="exercise" y="fun" />
//       </VictoryChart>
//     );
//   }
// }
export default BarChart;
