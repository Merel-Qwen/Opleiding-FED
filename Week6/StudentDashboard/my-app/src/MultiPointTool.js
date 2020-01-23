// import React, { Component } from "react";
// import Data from "./Data";
// import {
//   VictoryLine,
//   VictoryChart,
//   VictoryAxis,
//   VictoryVoronoiContainer,
//   VictoryTooltip
// } from "victory";

// class MultiPointTool extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (

// <VictoryChart domainPadding={15}>
//       <VictoryLine
//         style={{
//           data: { stroke: "#c43a31" },
//           parent: { border: "1px solid #ccc" }
//         }}
//         data={assignmentRatingAverage}
//         x="assignment"
//         y="difficultyRating"
//       />
//       <VictoryLine
//         style={{
//           data: { stroke: "#ff00ff" },
//           parent: { border: "1px solid #ccc" }
//         }}
//         data={assignmentRatingAverage}
//         x="assignment"
//         y="enjoymentRating"
//       />
//       <VictoryAxis
//         // tickValues specifies both the number of ticks and where
//         // they are placed on the axis
//         tickValues={[1, 2, 3, 4, 5]}
//         tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
//       />
//       <VictoryAxis dependentAxis />
//     </VictoryChart>

//       <VictoryChart
//         domainPadding={10}
//         containerComponent={
//           <VictoryVoronoiContainer
//             voronoiDimension="x"
//             labels={({ datum }) => `y: ${datum.y}`}
//             labelComponent={
//               <VictoryTooltip
//                 cornerRadius={0}
//                 flyoutStyle={{ fill: "white" }}
//               />
//             }
//           />
//         }
//       >
//         <VictoryAxis />
//         <VictoryLine
//           data={[
//             { x: 1, y: 5, l: "one" },
//             { x: 1.5, y: 5, l: "one point five" },
//             { x: 2, y: 4, l: "two" },
//             { x: 3, y: -2, l: "three" }
//           ]}
//           style={{
//             data: {
//               stroke: "tomato",
//               strokeWidth: ({ active }) => (active ? 4 : 2)
//             },
//             labels: { fill: "tomato" }
//           }}
//         />

//         <VictoryLine
//           data={[
//             { x: 1, y: -3, l: "red" },
//             { x: 2, y: 5, l: "green" },
//             { x: 3, y: 3, l: "blue" }
//           ]}
//           style={{
//             data: {
//               stroke: "blue",
//               strokeWidth: ({ active }) => (active ? 4 : 2)
//             },
//             labels: { fill: "blue" }
//           }}
//         />

//         <VictoryLine
//           data={[
//             { x: 1, y: 5, l: "cat" },
//             { x: 2, y: -4, l: "dog" },
//             { x: 3, y: -2, l: "bird" }
//           ]}
//           style={{
//             data: {
//               stroke: "black",
//               strokeWidth: ({ active }) => (active ? 4 : 2)
//             },
//             labels: { fill: "black" }
//           }}
//         />
//       </VictoryChart>
//     );
//   }
// }

// export default MultiPointTool;
