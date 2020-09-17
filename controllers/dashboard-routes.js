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
  
  const posts = postData.map(post => post.get({plain: true}));
  console.log(posts);

  if(postData.length === 0) {
    console.log('No Post Data Found')
    res.render("dashboard", {
      loggedIn: true,
      style: "dashboard.css"
    });
  } else {
    res.render("dashboard", {
      posts,
      loggedIn: true,
      style: "dashboard.css"
    });
  }
});

module.exports = router;
