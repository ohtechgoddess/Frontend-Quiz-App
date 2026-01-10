const name = localStorage.getItem("quizUsername");

if (!name) {
  window.location.href = "index.html";
}

document.getElementById("profileName").textContent = name;

document.getElementById("attempts").textContent =
  localStorage.getItem("totalAttempts") || 0;

document.getElementById("htmlScore").textContent =
  localStorage.getItem("htmlBestScore") || 0;

document.getElementById("cssScore").textContent =
  localStorage.getItem("cssBestScore") || 0;

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("This will reset all your progress. Continue?")) return;

  localStorage.removeItem("totalAttempts");
  localStorage.removeItem("htmlBestScore");
  localStorage.removeItem("cssBestScore");

  location.reload();
});
