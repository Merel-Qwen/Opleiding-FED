// Opdracht A.
const isArray = function(data) {
  return Array.isArray(data);
};

// const data = [1, 2, 3];

// console.log(data);
// console.log(data.isArray(data));
// console.log(Array.isArray("hallo!"));

console.log(isArray("Winc Winc, nudge nudge")); // false
console.log(isArray([1, 2, 4, 0])); // true

// Opdracht B

const amountOfElementsInArray = function(fruit) {
  return fruit.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

// Opdracht C

const selectBelgiumFromBenelux = function(landen) {
  // return landen[0];
  // return landen.shift();
  return landen.slice(0, 1);
};

console.log(
  selectBelgiumFromBenelux([
    "Belgie",
    "Nederland",
    "Luxemburg"
    // "Duitsland",
    // "Frankrijk"
  ])
);
// resultaat: "Belgie"

// Opdracht D

const lastElementInArray = function(dieren) {
  // return dieren[3];
  // return dieren.slice(3, 4);
  return dieren.pop();
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// Opdracht E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

// const impeachTrumpSlice = function(array) {

//   return array.slice(1, 4);
// };
const impeachTrumpSplice = function(array) {
  const removedElement = array.splice(0, 1);
  // console.log(
  //   "removed element:",
  //   removedElement,
  //   "De mutated array, Trump is missing:",
  //   array
  // );
  return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// Opdracht F

const stringsTogether = function(array) {
  return array.join();
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

// Opdracht G

const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
