const searchBtn = document.querySelector('#search-button');
const drinkInputEL = document.querySelector("#drink-search");
const resultsdivEL = document.querySelector("#search-results");

const searchHandler = async function (event) {

  const drinkName = drinkInputEL.value;


  const res = await fetch(`/api/search/${drinkName}`);
  const drinks = await res.json()
  console.log(drinks);
  drinks.forEach(drinkObject => {
      const ptag = document.createElement("p")
       ptag.textContent = drinkObject.strDrink;
    const img = document.createElement("img")
    img.setAttribute("src",drinkObject.strDrinkThumb + "/preview")
     
      resultsdivEL.append(ptag)
      resultsdivEL.append(img);
  });
};

searchBtn.addEventListener("click",searchHandler)
