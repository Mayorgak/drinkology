const router = require('express').Router();
const sequelize = require('../../config/connection');
const Post = require('../../model/Post');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: req.params
        });

        res.json(postData);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const postData = await Post.create(
            {
                title: req.body.title,
                post_url: req.body.post_url,
                user_id: req.body.user_id
            }
        );

        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        const postData = await Post.update(
            {
                title: req.body.title
            },
            {
                where: req.params
            }
        );

        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const postData = await Post.destroy(
            {
                where: req.params
            }
        );

        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;