const drinkFormEl = document.querySelector("#drink-form");
const drinkInputEL = document.querySelector("#drink-search");
const resultsdivEL = document.querySelector("#search-results");

const searchHandler = (event) => {
  event.preventDefault();
    // Takes the value of the searched drink
  const drink = drinkInputEL.value;
  // Appends to URL which executes API call
  window.location = `/search/${drink}`  
};
console.log(searchBtn);
searchBtn.addEventListener("click",searchHandler);

drinkFormEl.addEventListener("submit", searchHandler);
