import React, { Component } from "react";
import Data from "./Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class StudentBarChart extends Component {
  constructor() {
    super();
    this.state = {
      difficult: {
        data: { fill: "#81ecec" }
      },
      fun: {
        data: { fill: "#fab1a0" }
      }
    };
  }

  render() {
    const studentNames = Data.map(item => item.student);
    const uniqueStudenteNamess = studentNames.filter((name, index, names) => {
      return names.indexOf(name) === index;
    });
    const studentAverages = uniqueStudenteNamess.map(name => {
      const studentValues = Data.filter(item => item.student === name);
      const difficultyAverage =
        studentValues.reduce(
          (previous, current) => previous + current.difficulty,
          0
        ) / studentValues.length;
      const funAverage =
        studentValues.reduce((previous, current) => previous + current.fun, 0) /
        studentValues.length;
      return {
        student: name,
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
            data={studentAverages}
            x="student"
            y="difficultyAverage"
          />
          <VictoryBar
            style={this.state.fun}
            data={studentAverages}
            x="student"
            y="funAverage"
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default StudentBarChart;
