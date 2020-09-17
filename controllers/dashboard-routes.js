const Post = require("../model/Post");
const User = require("../model/User");

const router = require("express").Router();


router.get("/", async (req, res) => {
  console.log("get post:", req.session.user_id)
  const postData = await Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
  console.log(postData);

  // if(postData.length > 0) {
  //   console.log('No Post Data Found')
  // } else {
  //   res.render("dashboard", {
  //     loggedIn: true,
  //     style: "dashboard.css"
  //   });
  // }
});

module.exports = router;
