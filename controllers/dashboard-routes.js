const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("dashboard", {
    loggedIn: true
  });
});

module.exports = router;
