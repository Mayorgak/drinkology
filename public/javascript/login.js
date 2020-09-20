const loginBtn = document.querySelector("#login-btn");

const loginFormHandler = async function (event) {
  try {
    event.preventDefault();
    const usernameEl = document.querySelector("#username-input-login").value.trim();
    const passwordEl = document.querySelector("#password-input-login").value.trim();
    if (usernameEl && passwordEl) {
      const response = await fetch("/api/user/login", {
        method: "post",
        body: JSON.stringify({
          username: usernameEl,
          password: passwordEl,
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        window.location = "/dashboard";
      } else {
        alert(response.statusText);
      }
    }
  } catch(err) {
    console.log(err);
  }
  };
  

  // document
  //   .querySelector("#login-form")
    loginBtn.addEventListener("click", loginFormHandler);
    
