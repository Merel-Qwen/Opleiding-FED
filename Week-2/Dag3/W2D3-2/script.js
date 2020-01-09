// Opdracht A.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};

console.log(findSpiderMan(superheroes));

// Opdracht B

// const doubleArrayValues = function(array) {
//   let newArray = [];
//   array.forEach(number => {
//     newArray.push(number * 2);
//   });
//   return newArray;
// };

// console.log("Double 1,2,3:", doubleArrayValues([1, 2, 3]));

// Opdracht C

containsNumberBiggerThan10 = array => {
  return array.some(number => {
    return number > 10;
  });
};

console.log(
  "Je suis bigger than 10:",
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);

// Opdracht D

isItalyInTheGreat7 = array => array.includes("Italy");
console.log(
  "It is " +
    isItalyInTheGreat7([
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ]) +
    " that Italy is in the great seven"
);

// Opdracht E
const tenfold = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
