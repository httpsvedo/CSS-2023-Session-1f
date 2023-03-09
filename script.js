//Quiz questions
const questions = [
  {
    //a humble amount of trolling (this is a change! :D)
    question: "What language is used to write kernels in Windows?",
    a: "Python",
    b: "HTML",
    c: "JavaScript",
    d: "TypeScript",
    e: "C",
    correct: "e",
  },
  {
    question: "Which of these OS is NOT unix based?",
    a: "Linux",
    b: "Solaris",
    c: "IBM",
    d: "Windows",
    e: "MacOSX",
    correct: "d",
  },
  {
    question: "Which of these countries borders Bosnia and Herzegovina?",
    a: "Germany",
    b: "India",
    c: "Serbia",
    d: "Japan",
    e: "none of the above",
    correct: "c",
  },
  {
    question: "Which of these products does Yamaha not produce?",
    a: "Electric guitars",
    b: "Grand pianos",
    c: "Accordions",
    d: "Boat engines",
    e: "Electric harp",
    correct: "e",
  },
  {
    question: "Which of these is the most popular/mainstreamed Adobe product?",
    a: "Flash/Animate",
    b: "InDesign",
    c: "Photoshop",
    d: "Illustrator",
    e: "After Effects",
    correct: "c",
  },
];

//Fetching the HTML elements
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitButton = document.getElementById("submit");

//Counters
let currentQuiz = 0;
let score = 0;

//Function that deselects all answers
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

//Function that deselects all answers
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

//Function that loads the quiz (deselects the answers, sets the initial questions and it's possible answers)
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
};

//Loading the quiz
loadQuiz();

//Trigger that checks the validity of the answer
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === questions[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < questions.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${questions.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
