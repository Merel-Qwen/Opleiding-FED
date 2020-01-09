//Exercise 1:
//Write a function testNum that takes a number as an argument
// and returns a Promise that tests if the value is less than or
//  greater than the value 10. Log the result to the console.

const testNum = num => {
  p = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(` ${num} is groter dan 10`);
    } else {
      reject(` ${num} is kleiner dan(, of gelijk aan) 10`);
    }
  });
  return p;
};

testNum(2)
  .then(result => console.log(result))
  .catch(error => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === "string") {
        return word.toUpperCase();
      } else {
        reject("Error: Not all items in the array are strings!");
      }
    });
    resolve(capsArray);
  });
};

const sortWords = array => {
  return new Promise((resolve, reject) => {
    if (array) {
      array.forEach(el => {
        if (typeof el !== "string") {
          reject("Error: Not all items in the array are strings!");
        }
      });
      resolve(array.sort());
    } else {
      reject("Error: Something went wrong with sorting words.");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));
