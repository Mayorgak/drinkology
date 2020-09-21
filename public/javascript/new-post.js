const submitButton = document.querySelector("#submit-review");
const drinkContainerEl = document.querySelector("#drink-container");

const reviewHandler = async (event) => {
    event.preventDefault();
    try {
        // Capture drink ID of closest container element
        const drinkId = drinkContainerEl.getAttribute("data-drinkid");

        // Capture values of review and title
        const user_review = document.querySelector("#user-review").value.trim();
        const review_title = document.querySelector("#review-title").value.trim();

        // If values are NOT falsy
        if (user_review && review_title) {
            // Submit NEW POST request to API
            const response = await fetch("/api/posts/", {
                method: "post",
                // Req.Body Will Contain Review, Drink Id, and Title
                body: JSON.stringify({
                    user_review,
                    drink_id: drinkId,
                    review_title
                }),
                headers: {"Content-Type": "application/json"}
            })
            
            // If NEW POST successful
            if(response.ok) {
                // Redirect to dashboard
                document.location.replace('/dashboard');
            } else {
                // Alert user of the response
                alert(response.statusText);
            }
        }
    } catch(err){  
        console.log(err);
    }
}

submitButton.addEventListener("click", reviewHandler);