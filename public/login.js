document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (!username) {
      alert("Please enter your username.");
      return;
    }

    // Optionally save the username to local storage
    localStorage.setItem("fanUsername", username);

    // Redirect to the main dashboard
    window.location.href = "home.html";
  });
});
