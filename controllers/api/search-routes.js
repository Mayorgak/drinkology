const router = require("express").Router();
const axios = require("axios");


router.get ('/:drink', async (req, res) => {
    console.log("searching for " + req.params.drink);
    try{
        const drinkResponse = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + req.params.drink);
        console.log(drinkResponse.data.drinks);
        res.json(drinkResponse.data.drinks);
    } catch (err) {
        res.status(500).json(err)
    }
});
  
module.exports = router;
