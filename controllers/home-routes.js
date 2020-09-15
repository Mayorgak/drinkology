const router = require("express").Router();


router.get("/", (req, res) => {
  res.render("homepage");
});


router.get("/login", (req, res) => {
  res.render("login", {
    style : "login.css"
  }
);
});

router.get("/signup", (req, res) => {
    res.render("signup");
});


module.exports = router;