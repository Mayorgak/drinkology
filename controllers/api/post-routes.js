const router = require('express').Router();
const sequelize = require('../../config/connection');
const Post = require('../../model/Post');
const withAuth = require('../../utils/authorization');

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

router.post('/', withAuth, async (req, res) => {
    try{
        const {user_review, drink_id, review_title} = req.body;
        const drinkData = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink_id}`);
        const drink = drinkData.data.drinks[0];

        const newPost = await Post.create(
            {
                title: review_title,
                review: user_review,
                user_id: req.session.user_id,
                drink_id: drink.idDrink,
                drink_name: drink.strDrink,
                alcohol_content: drink.strAlcoholic,
                drink_instructions: drink.strInstructions,
                drink_image: drink.strDrinkThumb,
                drink_category: drink.strCategory
            }
        );

        const getPostData = await Post.findAll();

        res.render('dashboard', {
            getPostData,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => {
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