document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    // Simulated signup – in real app you'd call an API here
    localStorage.setItem("fanUsername", username);

    // Optional: store other info or show welcome
    console.log(`User signed up: ${username}, ${email}`);

    // Redirect to home
    window.location.href = "home.html";
  });
});
