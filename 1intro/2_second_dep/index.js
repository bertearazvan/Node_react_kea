const validator = require("validator");

let email = "me@gmail.com";

if (validator.isEmail(email)) {
  console.log(email, "is an email");
}
