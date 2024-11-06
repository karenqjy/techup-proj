// Sample question bank
const questionBank = {
    L1: {
        multipleChoice: [
            { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
            { question: "Which of these is a color?", options: ["Apple", "Blue", "Car", "Dog"], answer: "Blue" }
        ],
        trueFalse: [
            { question: "The earth is flat.", answer: "False" },
            { question: "Water boils at 100°C.", answer: "True" }
        ],
        shortAnswer: [
            { question: "What is your name?", answer: "Your answer" },
            { question: "What is the capital of France?", answer: "Paris" }
        ]
    },
    L2: {
        multipleChoice: [
            { question: "Which programming language is used for web development?", options: ["Python", "JavaScript", "C++", "Java"], answer: "JavaScript" },
            { question: "Which HTML tag is used to define a link?", options: ["<a>", "<div>", "<link>", "<span>"], answer: "<a>" }
        ],
        trueFalse: [
            { question: "JavaScript is a statically typed language.", answer: "False" },
            { question: "CSS is used to style HTML elements.", answer: "True" }
        ],
        shortAnswer: [
            { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
            { question: "What is the purpose of a 'div' in HTML?", answer: "To define a division or section" }
        ]
    },
    L3: {
        multipleChoice: [
            { question: "What is the purpose of closures in JavaScript?", options: ["Encapsulate variables", "Speed up performance", "Access global scope", "None of the above"], answer: "Encapsulate variables" },
            { question: "Which of the following is used to fetch data from an API?", options: ["fetch()", "getData()", "load()", "callAPI()"], answer: "fetch()" }
        ],
        trueFalse: [
            { question: "JavaScript runs on the server-side only.", answer: "False" },
            { question: "The 'this' keyword in JavaScript refers to the current object.", answer: "True" }
        ],
        shortAnswer: [
            { question: "Explain the concept of hoisting in JavaScript.", answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope." },
            { question: "What is the difference between 'var' and 'let'?", answer: "'let' is block-scoped, while 'var' is function-scoped." }
        ]
    }
};

// Function to generate the assessment
function generateAssessment(event) {
    event.preventDefault();

    // Get input values
    const competency = document.getElementById("competency").value;
    const proficiency = document.getElementById("proficiency").value;
    const numQuestions = parseInt(document.getElementById("numQuestions").value);
    const questionType = document.getElementById("questionType").value;

    // Get the relevant question bank for the selected competency and proficiency level
    const questions = questionBank[proficiency][questionType];

    // Randomize and select questions
    const selectedQuestions = [];
    while (selectedQuestions.length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
    }

    // Display the generated assessment
    const assessmentContainer = document.getElementById("assessmentContainer");
    assessmentContainer.innerHTML = ""; // Clear previous assessment

    selectedQuestions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <ul>
                ${question.options ? question.options.map(option => `<li>${option}</li>`).join("") : ""}
            </ul>
            <p><strong>Answer: </strong>${question.answer}</p>
        `;
        assessmentContainer.appendChild(questionElement);
    });
}

// Event listener for form submission
document.getElementById("testCriteriaForm").addEventListener("submit", generateAssessment);
