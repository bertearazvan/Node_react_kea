const router = require("express").Router();

router.use((req, res, next) => {
  console.log("Timestampt: ", new Date());
  next();
  //   return res.redirect("/secondpath");
  //   res.send({ response: "First path" });
});

// router.use((req, res, next) => {
//   console.log("Hit the second path");
//   return res.send({ response: "Second path" });
// });

router.get("/secondpath", (req, res, next) => {
  console.log("Hit the second path");
  return res.send({ response: "Second path" });
});

module.exports = router;
