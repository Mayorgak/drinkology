const updatePost = async (event) => {
  try{
    const postEl = event.target;
    const drinkId = postEl.closest(".drink-container").getAttribute("data-drinkid");
    const postId = postEl.closest(".drink-container").getAttribute("data-postid");
    if (reviewTextEl && postTitleEl) {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
          title: postTitleEl,
          review: reviewTextEl,
          drinkId
        }),
        headers: { "Content-Type": "application/json" }
      });
      if(response.ok) {
        window.location = '/my-posts'
      } else {
        alert(response.statusText);
      }
    }
  } catch(err) {
    console.log(err);
  }
};


const deletePost = async (event) => {
  const postEl = event.target;
  const postId = postEl.closest(".drink-container").getAttribute("data-postid");
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE"
  });
if (response.ok) {
    postEl.closest(".drink-container").remove();
} else {
    alert(response.statusText);
}
};

const updateButton = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
const postTitleEl = document.querySelector("#review-title").value.trim();
const reviewTextEl = document.querySelector("#review-text").value.trim();

updateButton.addEventListener("click", updatePost);
deleteButton.addEventListener("click", deletePost);