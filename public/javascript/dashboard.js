const searchBtn = document.querySelector('#search-button');
const drinkInputEL = document.querySelector("#drink-search");
const resultsdivEL = document.querySelector("#search-results");

const searchHandler = async function (event) {
  // Takes the value of the searched drink
  const drinkName = drinkInputEL.value;
  // Appends to URL which executes API call
  window.location = `/search/${drinkName}`  
};
console.log(searchBtn);
searchBtn.addEventListener("click",searchHandler);