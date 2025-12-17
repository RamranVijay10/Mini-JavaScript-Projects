const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Paris", isCorrect: true },
            { text: "London", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: [
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: false },
            { text: "Jupiter", isCorrect: true },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: [
            { text: "Au", isCorrect: true },
            { text: "Ag", isCorrect: false },
            { text: "Cu", isCorrect: false },
            { text: "Fe", isCorrect: false }
        ]
    },
    {
        question: "What is the highest mountain in the world?",
        answer: [
            { text: "Mount Everest", isCorrect: true },
            { text: "K2", isCorrect: false },
            { text: "Kangchenjunga", isCorrect: false },
            { text: "Lhotse", isCorrect: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answer: [
            { text: "Yen", isCorrect: true },
            { text: "Dollar", isCorrect: false },
            { text: "Euro", isCorrect: false },
            { text: "Pound", isCorrect: false }
        ]
    }
];

const questionText = document.querySelector(".question-text");
const ansButtons = document.querySelector(".ans-buttons");
const nextButton = document.querySelector(".next");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for each answer
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansButtons.appendChild(button);

        // Store the correct answer info in the button itself
        if (answer.isCorrect) {
            button.dataset.isCorrect = answer.isCorrect;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    ansButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    // Check if the clicked button is correct
    const isCorrect = selectedBtn.dataset.isCorrect === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Show the correct answer automatically and disable all buttons
    Array.from(ansButtons.children).forEach(button => {
        if (button.dataset.isCorrect === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

