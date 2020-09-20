const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Post} = require('../../model');
const withAuth = require('../../utils/authorization');
const axios = require('axios');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        res.json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: req.params
        });
        res.json(postData);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    try{
        const {user_review, drink_id, review_title} = req.body;
        const drinkData = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink_id}`);
        const drink = drinkData.data.drinks[0];

        const newPost = await Post.create(
            {
                title: review_title.trim(),
                review: user_review.trim(),
                user_id: req.session.user_id,
                drink_id: drink.idDrink,
                drink_name: drink.strDrink,
                alcohol_content: drink.strAlcoholic,
                drink_instructions: drink.strInstructions,
                drink_image: drink.strDrinkThumb,
                drink_category: drink.strCategory
            }
        );
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try{
        const { review, title } = req.body;
        const postData = await Post.update(
            {
                title,
                review
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

router.delete('/:id', withAuth, async (req, res) => {
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