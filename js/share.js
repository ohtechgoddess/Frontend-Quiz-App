const APP_URL = "https://frontend-quiz-game.netlify.app/";

const name = localStorage.getItem("quizUsername");
const score = Number(localStorage.getItem("score"));
const total = Number(localStorage.getItem("total"));
const quizType = localStorage.getItem("quizType");

if (!score || !total || !quizType) {
  window.location.href = "home.html";
}

const percent = Math.round((score / total) * 100);

const message =
  `I scored ${score}/${total} (${percent}%) on the ` +
  `${quizType.toUpperCase()} quiz in the Frontend Quiz App.\n\n` +
  `Try it here: ${APP_URL}`;

document.getElementById("shareText").textContent = message;

// Copy to clipboard
document.getElementById("copyBtn").addEventListener("click", async () => {
  await navigator.clipboard.writeText(message);
  alert("Copied to clipboard!");
});

// Native share (mobile)
document.getElementById("shareBtn").addEventListener("click", async () => {
  if (!navigator.share) {
    alert("Sharing is not supported on this device.");
    return;
  }

  await navigator.share({
    title: "Frontend Quiz App Result",
    text: message
  });
});
