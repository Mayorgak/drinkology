const handleClick = (event) => {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    let targetElement = event.target;
    const drinkId = targetElement.closest(".drink-container").getAttribute("data-drinkid");
    const postId = targetElement.closest(".drink-container").getAttribute("data-postid");

    while (targetElement) {
        if (targetElement.nodeName === "BUTTON" && /edit-button/.test(targetElement.className)) {
            console.log(event)
            console.log(targetElement)
            editButton(drinkId, postId)
            break;
        } else if (targetElement.nodeName === "BUTTON" && /delete-button/.test(targetElement.className)) {
            deleteButton(event, drinkId, postId)
            break;
        }
        break;
        // element = element.parentNode;
    }
}

const editButton = async (drink, post) => {
    try {
        window.location = `/edit-post/${post}`
    } catch (err) {
        console.log(err);
    }
}

const deleteButton = async (event, drink, post) => {
    try {
        const response = await fetch(`/api/posts/${post}`, {
            method: "DELETE",
            body: {
                drink,
                post
            }
        });
        console.log(response);
        if (response.ok) {
            const postEl = event.target;
            postEl.closest(".drink-container").remove();
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.log(err);
    }
}

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
} else if (document.attachEvent) {
    document.attachEvent("onClick", handleClick);
}