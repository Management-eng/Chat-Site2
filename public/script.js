// Utility to get fan username
function getFanUsername() {
  return localStorage.getItem("fanUsername") || "Hollywood Fan";
}

// Display fan name in any element with ID `fanName`
function displayFanName() {
  const fanName = getFanUsername();
  const fanNameElement = document.getElementById("fanName");
  if (fanNameElement) {
    fanNameElement.textContent = fanName;
  }
}

// Simulated live user counter
let userCount = 1000;
function updateUserCounter() {
  const counter = document.getElementById("userCount");
  if (counter) {
    userCount += Math.floor(Math.random() * 5) + 1;
    counter.textContent = userCount.toLocaleString();
  }
}

// Logout utility
function setupLogoutButton() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("fanUsername");
      window.location.href = "login.html";
    });
  }
}

// Initialize shared features
document.addEventListener("DOMContentLoaded", () => {
  displayFanName();
  setupLogoutButton();
  setInterval(updateUserCounter, 3000);
});
