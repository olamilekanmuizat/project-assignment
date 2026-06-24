const questions = [
    {
        question: "what does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Order Method",
            "Data Order Model"
        ],
        answer: 0
    },
    {
        question: "which keyword creates a class?",
        options: ["object", "class", "create", "new"],
        answer: 1
    },
    {
        question: "which method adds an item to an array?",
        options: ["push()", "add()", "insert()", "appen()"],
        answer: 0
    },
    {
        question: "which symbol is used for comments in javascript?",
        options: ["<!_  __>", "//", "**", "##"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionE1.textContent = q.question;
    answersE1.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");

        button.addEventListener("click", () =>
        checkAnswer(button, index));

        answersE1.appendChild(button);
    });
}
function checkAnswer(button, selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    let remark;

    if(score === 4) {
        remark = "Excellent!";
    } else if(score >= 3) {
        remark = "Very Good!";
    } else if(score >= 2) {
        remark = "Good!";
    } else {
        remark = "Keep Practicing!";
    }

    document.getElementById("quiz").innerHTML 
    = `
        <h2>Quiz Finished</h2>
        <h3>score: ${score}/${questions.length}</h3>
        <h3>${remark}</h3>
    `;
}
loadQuestion();