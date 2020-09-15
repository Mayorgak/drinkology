const router = require("express").Router();
const axios = require("axios");
const Drinks = require('../model/Drinks');
const createDrink = require('../utils/addDrink');

router.get('/', async (req, res) => {
    try{
        const drinksData = await Drinks.findAll();
        res.json(drinksData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:drink', async (req, res) => {
    console.log("searching for " + req.params.drink);
    try{
        // Takes appended search value and calls the API
        const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + req.params.drink);
        // Store response of search in a semantic variable
        const drinkData = drinkResponse.data.drinks;
        // Render the post-details handlebars using the data of the drink searched
        res.render('post-details', {drinkData})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;
