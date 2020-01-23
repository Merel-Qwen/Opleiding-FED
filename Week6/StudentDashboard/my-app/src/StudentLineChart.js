import React, { Component } from "react";
import Data from "./Data";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip
} from "victory";

const StudentLineChart = function() {
  const studentNames = Data.map(item => item.student);
  const uniqueStudentNames = studentNames.filter((name, index, names) => {
    return names.indexOf(name) === index;
  });
  const studentAverages = uniqueStudentNames.map(name => {
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
      <VictoryLine
        style={{
          data: { stroke: "#81ecec" }
        }}
        data={studentAverages}
        x="student"
        y="difficultyAverage"
      />
      <VictoryLine
        style={{
          data: { stroke: "#fab1a0" }
        }}
        data={studentAverages}
        x="student"
        y="funAverage"
      />
      <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  );
};

export default StudentLineChart;
