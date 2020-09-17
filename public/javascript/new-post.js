const submitButton = document.querySelector("#submit-review");
const drinkContainerEl = document.querySelector("#drink-container");
const userReviewEl = document.querySelector("#user-review");
const reviewTitleEl = document.querySelector("#review-title");


const reviewHandler = async function (event) {
    event.preventDefault();
    try {
        // Get The Drinks ID
        const drinkId = drinkContainerEl.getAttribute("data-drinkid");
        const response = await fetch("/api/posts/", {
            method: "post",
            body: JSON.stringify({
                user_review: userReviewEl.value,
                drink_id: drinkId,
                review_title: reviewTitleEl.value
            }),
            headers: {"Content-Type": "application/json"}
        })
    
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } catch(err){  
        console.log(err);
    }
}

submitButton.addEventListener("click", reviewHandler);