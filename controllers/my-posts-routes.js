const router = require("express").Router();
const axios = require("axios");
const withAuth = require('../utils/authorization');
const {Post, User} = require('../model');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
              {
                model: User,
                attributes: ['username']
              }
            ]
        });

        if(postData.length === 0) {
            res.render("my-posts", {
              loggedIn: true
          });
          } else {
            const posts = postData.map(post => post.get({plain: true}));
            res.render("my-posts", {
              posts,
              loggedIn: true
            });
          }
    } catch (err) {

    }
});

module.exports = router;