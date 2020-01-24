import React, { Component } from "react";
import Data from "./Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      difficult: {
        data: { fill: "#00cec9", visibility: "visible" }
      },
      fun: {
        data: { fill: "#e17055", visibility: "visible" }
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
    const difficultChange = event => {
      if (event.target.checked) {
        console.log("check fun");
        this.setState({
          fun: {
            data: { fill: "#00cec9", visibility: "hidden" }
          }
        });
      } else {
        this.setState({
          fun: {
            data: { fill: "#00cec9", visibility: "visible" }
          }
        });
      }
      // setState difficulty op basis van dat event.target.checked true of niet
      // visibility aan of niet
      // zelfe voor fun in andere functie
    };

    const funChange = event => {
      if (event.target.checked) {
        console.log("check fun");
        this.setState({
          difficult: {
            data: { fill: "#e17055", visibility: "hidden" }
          }
        });
      } else {
        this.setState({
          difficult: {
            data: { fill: "#e17055", visibility: "visible" }
          }
        });
      }

      // setState difficulty op basis van dat event.target.checked true of niet
      // visibility aan of niet
      // zelfe voor fun in andere functie
    };
    return (
      <div>
        <label>
          <input
            onChange={difficultChange}
            type="checkbox"
            name="filter"
            value="difficult"
          />
          difficult
        </label>
        <label>
          <input
            onChange={funChange}
            type="checkbox"
            name="filter"
            value="fun"
          />
          fun
        </label>

        <VictoryChart domainPadding={20}>
          <VictoryAxis />
          <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryGroup offset={20}>
            <VictoryBar
              style={this.state.difficult}
              data={exerciseAverages}
              x="exercise"
              y="difficultyAverage"
              animate={{ duration: 1000 }}
            />
            <VictoryBar
              style={this.state.fun}
              data={exerciseAverages}
              x="exercise"
              y="funAverage"
              animate={({ duration: 1000 }, { easing: "bounce" })}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
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
