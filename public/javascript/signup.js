const submitBtn = document.querySelector("#submit-btn")
const signupBtn = document.querySelector("#signup-btn");

const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
const login = document.querySelector("#login-redirect");


async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

// document
//   .querySelector(".signup-form")
  submitBtn.addEventListener("click", signupFormHandler);
  signupBtn.addEventListener("click", function(){
    loginForm.style.display = "none"
    signupForm.style.display = "block";
   
  });

  

