const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("dashboard", {
    loggedIn: true,
    style: "dashboard.css"
    
  });
});

module.exports = router;
