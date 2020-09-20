const {Post, User} = require('../model');

const router = require("express").Router();


router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  });
  if(postData.length === 0) {
    console.log('No Post Data Found')
    res.render("dashboard", {
      loggedIn: true,
      style: "dashboard.css"
  });
  } else {
    const posts = postData.map(post => post.get({plain: true}));
    res.render("dashboard", {
      posts,
      loggedIn: true,
      style: "dashboard.css"
    });
  }
});

module.exports = router;
