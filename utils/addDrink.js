const Drinks = require('../model/Drinks');

const createDrink = async (drink) => {
    try {
        const { 
            idDrink, 
            strDrink, 
            strCategory, 
            strInstructions, 
            strDrinkThumb,
            strAlcoholic} = drink;

        const drinksData = await Drinks.create(
            {
                id: idDrink,
                drink_name: strDrink,
                alcohol_content: strAlcoholic,
                drink_instructions: strInstructions,
                drink_image: strDrinkThumb,
                drink_category: strCategory
            }
        );
    } catch(err) {
        console.log(err);
    }
}

module.exports = createDrink;