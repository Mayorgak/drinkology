const Post = require("../model/Post");
const User = require("../model/User");

const router = require("express").Router();


router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'review',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  });
  console.log(postData);
  res.render("dashboard", {
    loggedIn: true,
    style: "dashboard.css"
  });
});

module.exports = router;
