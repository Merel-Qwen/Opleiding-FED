import React, { Component } from "react";
import Data from "./Data";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

const LineChart = function() {
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
      exerciseValues.reduce((previous, current) => previous + current.fun, 0) /
      exerciseValues.length;
    return {
      exercise: name,
      difficultyAverage: difficultyAverage,
      funAverage: funAverage
    };
  });

  return (
    <VictoryChart domainPadding={20}>
      <VictoryLine
        style={{
          data: { stroke: "#00cec9" }
        }}
        data={exerciseAverages}
        x="exercise"
        y="difficultyAverage"
      />
      <VictoryLine
        style={{
          data: { stroke: "#e17055" }
        }}
        data={exerciseAverages}
        x="exercise"
        y="funAverage"
      />
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  );
};

export default LineChart;
