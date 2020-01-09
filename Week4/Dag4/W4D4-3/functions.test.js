const checkPassword = require("./functions.js");

test("password <= 8 carackters", () => {
  expect(checkPassword()).toHaveLength(8);
});

test("password is not Null", () => {
  expect(checkPassword()).not.toBeNull();
});

// test("password has at least one uppercase", () => {
//   expect(checkPassword()).toHaveLength(8);
// });

// test("password has at least one lowecase", () => {
//   expect(checkPassword()).toHaveLength(8);
// });

// test("password has at least one numer", () => {
//   expect(checkPassword()).toHaveLength(8);
// });

// test("password is not Null", () => {
//   expect(checkPassword()).notToBeNull()
// });
