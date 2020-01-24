import React, { Component } from "react";
import Data from "./Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class StudentBarChart extends Component {
  constructor() {
    super();
    this.state = {
      difficult: {
        data: { fill: "#81ecec", visibility: "visible" }
      },
      // naast de fill ook visibility gebruiken. visible or hidden.
      fun: {
        data: { fill: "#fab1a0", visibility: "visible" }
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

    const difficultChange = event => {
      if (event.target.checked) {
        console.log("check fun");
        this.setState({
          fun: {
            data: { fill: "#81ecec", visibility: "hidden" }
          }
        });
      } else {
        this.setState({
          fun: {
            data: { fill: "#81ecec", visibility: "visible" }
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
            data: { fill: "#fab1a0", visibility: "hidden" }
          }
        });
      } else {
        this.setState({
          difficult: {
            data: { fill: "#fab1a0", visibility: "visible" }
          }
        });
      }

      // setState difficulty op basis van dat event.target.checked true of niet
      // visibility aan of niet
      // zelfe voor fun in andere functie
    };

    return (
      <div>
        <label style={{ color: "#81ecec", fontWeight: 900, fontSize: 50 }}>
          <input
            onChange={difficultChange}
            type="checkbox"
            name="filter"
            value="difficult"
          />
          difficult
        </label>
        <label style={{ color: "#fab1a0", fontWeight: 900, fontSize: 50 }}>
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
              className="victorybar"
              style={this.state.difficult}
              data={studentAverages}
              x="student"
              y="difficultyAverage"
              animate={({ duration: 1000 }, { easing: "bounce" })}
            />

            <VictoryBar
              style={this.state.fun}
              data={studentAverages}
              x="student"
              y="funAverage"
              animate={{ duration: 1000 }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default StudentBarChart;
