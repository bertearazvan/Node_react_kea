const router = require("express").Router();

// router.use((req, res, next) => {
//   console.log("Timestamp: ", new Date());
//   next();
//   //   return res.redirect("/secondpath");
//   //   res.send({ response: "First path" });
// });

// router.use((req, res, next) => {
//   console.log("Hit the second path");
//   return res.send({ response: "Second path" });
// });

router.get("/secondpath", (req, res, next) => {
  console.log("Hit the second path for the first time");
  next();
});

// // Controllers
// // MVC
// const customeValidateFunction = (next) => {
//   if (valid) {
//     next();
//   }
// };

router.get("/secondpath", (req, res) => {
  console.log("Hit the second path for the 2nd time");
  return res.send({ response: "Second path" });
});

module.exports = router;
