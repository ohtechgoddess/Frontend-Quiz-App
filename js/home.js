const greeting = document.getElementById("greeting");

const username = localStorage.getItem("quizUsername");

if (!username) {
  window.location.href = "index.html";
}

greeting.textContent = `Hi, ${username}!`;

// Navigation.
document.getElementById("htmlQuiz").onclick = () => {
  window.location.href = "quiz.html?type=html";
};

document.getElementById("cssQuiz").onclick = () => {
  window.location.href = "quiz.html?type=css";
};

document.getElementById("portfolio").onclick = () => {
  window.location.href = "portfolio.html";
};

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

function openMenu() {
  menu.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menu.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Fr keyboard accessibility with the esc key...
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("open")) {
    closeMenu();
  }
});
