// Simulated live fan/user counter
let userCount = 1000;

function updateUserCount() {
  const increment = Math.floor(Math.random() * 5) + 1;
  userCount += increment;
  const counterElement = document.getElementById("userCount");
  if (counterElement) {
    counterElement.textContent = userCount.toLocaleString();
  }
}

// Simple chat interaction
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message) {
    appendMessage("user", message);
    input.value = "";

    // Simulated bot response
    setTimeout(() => {
      const botReplies = [
        "Interesting take!",
        "I love that actor too!",
        "Can’t wait for the next premiere!",
        "Totally agree!",
        "What’s your favorite Hollywood moment?"
      ];
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      appendMessage("bot", reply);
    }, 600);
  }
}

function appendMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.querySelector("button");
  const inputField = document.getElementById("userInput");

  if (sendButton) {
    sendButton.addEventListener("click", sendMessage);
  }

  if (inputField) {
    inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  // Start counter updates
  setInterval(updateUserCount, 3000);
});
