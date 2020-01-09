const opgeteld = function(...number) {
  return number.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(opgeteld(1, 3, 8, 4, 7));

// console.log("test");
