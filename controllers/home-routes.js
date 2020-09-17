const router = require("express").Router();


router.get("/", (req, res) => {
  res.render("homepage");
});


router.get("/login", (req, res) => {
  res.render("login", {
    style: "login.css",
  });
});


router.get("/signup", (req, res) => {
    res.render("signup");
});


router.get("/logout", (req, res) => {
  res.render("homepage");
});

module.exports = router;