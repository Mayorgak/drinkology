const router = require("express").Router();
const axios = require("axios");
const { create } = require("express-handlebars");
const Drinks = require('../../model/Drinks');
const createDrink = require('../../utils/addDrink');

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
        const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + req.params.drink);
        console.log(drinkResponse.data.drinks);
        res.json(drinkResponse.data.drinks);

        drinkResponse.data.drinks.forEach(drink => {
            createDrink(drink);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
  
module.exports = router;
