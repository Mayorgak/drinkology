const router = require("express").Router();


router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.render("homepage", {
      loggedIn: true
    });
  } else {
    res.render("homepage");
  }
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