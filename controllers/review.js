const router = require("express").Router();
const axios = require("axios");

router.get('/', async (req, res) => {
    try {
        const drinkId = req.query.drinkid;
        const drinkData = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
        const drink = drinkData.data.drinks;
        res.render('new-post', {
            drink,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;