const updatePost = async (event) => {
  try{
    // Capture element event happened on
    const postEl = event.target;

    // Find the closest containers drink and post id
    const drinkId = postEl.closest(".drink-container").getAttribute("data-drinkid");
    const postId = postEl.closest(".drink-container").getAttribute("data-postid");

    // Capture values of edited title and review
    const title = document.querySelector("#review-title").value.trim();
    const review = document.querySelector("#review-text").value.trim();

    // If the values are NOT falsy
    if (title && review) {
      // Send PUT/UPDATE request to API route
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          review,
          drinkId
        }),
        headers: { "Content-Type": "application/json" }
      });
      // If PUT/UPDATE was successful
      if(response.ok) {
        // Redirect to users posts
        window.location = '/my-posts'
      } else {
        // Alert user of the error
        alert(response.statusText);
      }
    }
  } catch(err) {
    console.log(err);
  }
};


const deletePost = async (event) => {
  try {
    // Capture element event occurred on
    const postEl = event.target;

    // Get the closest containers post ID
    const postId = postEl.closest(".drink-container").getAttribute("data-postid");
    
    // Send DELETE request for the post
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE"
    });

    // If the response is okay
    if (response.ok) {
      // Remove the element from the DOM
      postEl.closest(".drink-container").remove();
    } else {
      // Alert user of the error
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateButton = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");

updateButton.addEventListener("click", updatePost);
deleteButton.addEventListener("click", deletePost);