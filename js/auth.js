// Select elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");

// Handle form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please enter your name");
    return;
  }

  // Save name to localStorage
  localStorage.setItem("quizUsername", username);

  // Redirect to home dashboard
  window.location.href = "home.html";
});
