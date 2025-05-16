const quiz = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: 1
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Venus", "Jupiter", "Mars"],
    answer: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  const optionsHTML = q.options.map((opt, i) => 
    `<button onclick="checkAnswer(${i})">${opt}</button>`).join('');
  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) {
    score++;
  }
  document.getElementById("options").innerHTML = "Answer saved.";
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = `Quiz Over! Your score: ${score}/${quiz.length}`;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();