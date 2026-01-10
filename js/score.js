const name = localStorage.getItem("quizUsername") || "Guest";
const quizType = localStorage.getItem("quizType");
const score = Number(localStorage.getItem("score"));
const total = Number(localStorage.getItem("total"));

if (!quizType || isNaN(score) || isNaN(total)) {
  window.location.href = "home.html";
}

const percent = Math.round((score / total) * 100);

document.getElementById("scoreTitle").textContent =
  `Hi ${name}, here’s your ${quizType.toUpperCase()} result`;

document.getElementById("scoreText").textContent =
  `You scored ${score} out of ${total}`;

document.getElementById("scorePercent").textContent =
  `${percent}%`;

const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackMessage = document.getElementById("feedbackMessage");

if (percent >= 90) {
  feedbackTitle.textContent = "Excellent work!";
  feedbackMessage.textContent =
    "You have a strong understanding of the fundamentals.";
} else if (percent >= 70) {
  feedbackTitle.textContent = "Great job!";
  feedbackMessage.textContent =
    "You’re doing something right. Keep practicing.";
} else if (percent >= 50) {
  feedbackTitle.textContent = "Good start.";
  feedbackMessage.textContent =
    "You’re on the right path. Review and try again.";
} else {
  feedbackTitle.textContent = "Keep going!";
  feedbackMessage.textContent =
    "Everyone starts somewhere. Practice will get you there.";
}
