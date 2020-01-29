import React, { Component } from "react";
import Data from "./Data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class Students extends Component {
  constructor() {
    super();
  }

  render() {
    const studentNames = Data.map(item => item.student);
    const uniqueStudenteNamess = studentNames.filter((name, index, names) => {
      return names.indexOf(name) === index;
    });

    const checkboxes = uniqueStudenteNamess.map(function(student) {
      return (
        <label>
          <input type="checkbox" name={student} />
          {student}
        </label>
      );
    });

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          choose student tot view:
          {checkboxes}
        </div>
      </div>
    );
  }
}

export default Students;
