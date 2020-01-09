let password = "testtes1";

//check of het aantal characters >8 s
const CheckPassword = function() {
  if (password.length <= 8) {
    console.log("Goed, niet langer dan 8 characters");
  } else {
    console.log("password mag niet langer zijn dan 8 characters");
  }

  let numbers = /[0-9]/g;
  if (password.match(numbers)) {
    console.log("Goed, tenminste 1 nummer");
  } else {
    console.log("password moet tenminste 1 nummer hebben");
  }

  let lowerCase = /[a-z]/g;
  if (password.match(lowerCase)) {
    console.log("Goed, tenminste 1 lowercase character.");
  } else {
    console.log("password moet tenminste 1 lowercase character hebben.");
  }

  let upperCase = /[A-Z]/g;
  if (password.match(upperCase)) {
    console.log("Goed, tenminste 1 uppercase character.");
  } else {
    console.log("password moet tenminste 1 uppercase character hebben.");
  }

  return password;
};

CheckPassword();
module.exports = CheckPassword;
