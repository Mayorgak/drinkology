const drinkFormEl = document.querySelector("#drink-form");
const drinkInputEL = document.querySelector("#drink-search");
const resultsDivEl = document.querySelector("#search-results");

const searchHandler = (event) => {
  event.preventDefault();
    // Takes the value of the searched drink
  const drink = drinkInputEL.value;
  // Appends to URL which executes API call
  window.location = `/search/${drink}`
};

drinkFormEl.addEventListener("submit", searchHandler);
