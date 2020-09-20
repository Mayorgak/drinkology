const drinkFormEl = document.querySelector("#drink-form");
const drinkInputEl = document.getElementById("drink-search");

const searchHandler = (event) => {
  event.preventDefault();
  // Takes the value of the searched drink
  const drink = drinkInputEl.value.trim();
  // Appends to URL which executes API call
  window.location = `/search/${drink}`
};

drinkFormEl.addEventListener("submit", searchHandler);
