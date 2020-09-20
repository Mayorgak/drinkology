const router = require("express").Router();
const {Post} = require('../model');
const withAuth = require('../utils/authorization');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: req.params
        });

        const post = postData.dataValues

        res.render('edit-post', {
            post,
            loggedIn: true
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;