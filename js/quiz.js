const quizTitle = document.getElementById("quizTitle");
const questionText = document.getElementById("questionText");
const optionsContainer = document.querySelector(".options");
const progressText = document.getElementById("progressText");
const nextBtn = document.querySelector(".next-btn");

// Determine quiz type
const params = new URLSearchParams(window.location.search);
const quizType = params.get("type");

const questions =
  quizType === "css" ? cssQuestions : htmlQuestions;

quizTitle.textContent =
  quizType === "css" ? "CSS Quiz" : "HTML Quiz";

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// Load a question
function loadQuestion() {
  selectedOptionIndex = null;

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  progressText.textContent =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;

    button.addEventListener("click", () =>
      selectOption(index)
    );

    optionsContainer.appendChild(button);
  });
}

// Handle selection
function selectOption(index) {
  if (selectedOptionIndex !== null) return;

  selectedOptionIndex = index;
  const correctIndex = questions[currentQuestionIndex].answer;

  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((btn, i) => {
    btn.classList.add("disabled");

    if (i === correctIndex) btn.classList.add("correct");
    if (i === index && i !== correctIndex) btn.classList.add("wrong");
  });

  if (index === correctIndex) score++;
}

// Next button logic
nextBtn.addEventListener("click", () => {
  if (selectedOptionIndex === null) return;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // ✅ QUIZ FINISHED — SAVE EVERYTHING HERE ONLY

    // Attempts
    const attempts =
      Number(localStorage.getItem("totalAttempts")) || 0;
    localStorage.setItem("totalAttempts", attempts + 1);

    // Best score
    const bestKey =
      quizType === "css" ? "cssBestScore" : "htmlBestScore";

    const prevBest =
      Number(localStorage.getItem(bestKey)) || 0;

    if (score > prevBest) {
      localStorage.setItem(bestKey, score);
    }

    // Results page data
    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);
    localStorage.setItem("quizType", quizType);

    window.location.href = "score.html";
  }
});

// Init
loadQuestion();
