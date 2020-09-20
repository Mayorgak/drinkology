const updatePost = async (event) => {
  try{
    const postEl = event.target;
    const drinkId = postEl.closest(".drink-container").getAttribute("data-drinkid");
    const postId = postEl.closest(".drink-container").getAttribute("data-postid");
    const updatePost = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: postTitleEl.value.trim(),
        review: reviewTextEl.value.trim(),
        drinkId
      }),
      headers: { "Content-Type": "application/json" }
    });
    window.location = '/my-posts'
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
const postTitleEl = document.querySelector("#review-title");
const reviewTextEl = document.querySelector("#review-text");

updateButton.addEventListener("click", updatePost);
deleteButton.addEventListener("click", deletePost);