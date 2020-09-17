const router = require("express").Router();
const axios = require("axios");

router.get('/:drink', async (req, res) => {
    try{
        // Takes appended search value and calls the API
        const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + req.params.drink);
        // Store response of search in a semantic variable
        const drinkData = drinkResponse.data.drinks;
        // Render the post-details handlebars using the data of the drink searched
        res.render('search-results', {
            drinkData,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
  
module.exports = router;
