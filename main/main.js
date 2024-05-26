const quizQuestions = [
  {
    question: "What is my favourite anime?",
    a: "One piece",
    b: "Tokyo ghoul",
    c: "Naruto",
    d: "Killer Akame",
    correct: "a",
  },
  {
    question: "What is my favourite film?",
    a: "Interstellar",
    b: "Harry Potter",
    c: "Jango Unchained",
    d: "The lord of the rings",
    correct: "a",
  },
  {
    question: "What is my favourite game ?",
    a: "Fortnite",
    b: "Cs 2",
    c: "GTA:San Andreas",
    d: "Residend evil 2 remake",
    correct: "c",
  },
  {
    question: "When i was born ?",
    a: "26th March",
    b: "24th September",
    c: "2th January",
    d: "26th September",
    correct: "d",
  },
  {
    question: "Will i find a job in summer 24  ?",
    a: "Yes",
    b: "No",
    c: "Maybe",
    d: "All is possible",
    correct: "a",
  },
];

//needData

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submBtn");
const answerEls = document.querySelectorAll("input");
let currentQuiz = 0;
let score = 0;

//mainFunction

loadQuiz();
function loadQuiz() {
	getDeselectedEl();
	const currentQuizData = quizQuestions[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
  }

//minor functions

  function getDeselectedEl() {
	answerEls.forEach((answerEl) => {
	  answerEl.checked = false;
	});
  }

function getSelectedEl() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//btnClick func

btn.addEventListener("click", () => {
  const answer = getSelectedEl();
  if (answer) {
    if (answer === quizQuestions[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly at
		 ${score}/${quizQuestions.length} questions.</h2>  <button onclick='location.reload()'>Reload quiz</button>`;
    }
  }
});
