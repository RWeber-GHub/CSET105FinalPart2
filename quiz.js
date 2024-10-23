const quizquestions = [
    {
        question: "1: What is 19+17?",
        options: ["26", "36", "37", "29"],
        answer: "36"
    },
    {
        question: "2: What year does George Orwell's famous book use as its title?",
        options: ["1682", "1976", "1984", "2001"],
        answer: "1984"
    },
    {
        question: "3: What is one of the leading car brands in Japan?",
        options: ["Mazda", "Ford", "Volkswagen", "Aston Martin"],
        answer: "Mazda"
    },
    {
        question: "4: Which of these is a key ingredient in bread?",
        options: ["Sugar", "Orange Peel", "Creatine", "Flour"],
        answer: "Flour"
    },
    {
        question: "5: What is the leading language in Paraguay?",
        options: ["Paraguayan Guaraní", "French", "Mandarin", "Tagalog"],
        answer: "Paraguayan Guaraní"
    },
    {
        question: "6: How often does Halley's Comet pass Earth?",
        options: ["100 years", "62 years", "74 years", "76 years"],
        answer: "74 years"
    },
    {
        question: "7: How many main titles of Call of Duty have been released?",
        options: ["88", "51", "44", "23"],
        answer: "23"
    },
    {
        question: "8: What is the famous natural light event that happens in specific parts?",
        options: ["The Northern Lights", "Flashing Lights by Kanye West", "Blinding Lights by The Weeknd", "All of the Lights by Kanye West"],
        answer: "The Northern Lights"
    },
    {
        question: "9: Who was the person who coined the word torque?",
        options: ["Lyndon B. Johnson", "James Thomson", "Nikola Tesla", "Karl Ferdinand Braun"],
        answer: "James Thomson"
    },
    {
        question: "10: What does the term 'arca archa' in Latin most closely mean in English?",
        options: ["Winged Animal", "Fruit Tree", "Container", "Green Plant"],
        answer: "Container"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
let currentQuestion = 0;
let score = 0;


function showQuestion() {
    const question = quizquestions[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = ""; 

    question.options.forEach(option => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement("br"));
    });
}


function selectAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return; 
    }

    const answer = quizquestions[currentQuestion].answer;
    if (selectedOption.value === answer) {
        score++; 
    }

    currentQuestion++;

    if (currentQuestion < quizquestions.length) {
        showQuestion(); 
    } else {
        showResult(); 
    }
}


function showResult() {
    questionElement.innerHTML = `
      <h1>Quiz completed</h1>
      <h1>Your score: ${score}/${quizquestions.length}</h1>
    `;
    optionsElement.innerHTML = ""; 
    submitButton.style.display = "none";
    resetButton.style.display = "inline";
}

function start(){
    questionElement.style.display = "block"
    optionsElement.style.display = "block"
    submitButton.style.display = "block"
    document.getElementById("start").style.display = "none"
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    submitButton.style.display = "inline"; 
    resetButton.style.display = "none"; 
    showQuestion();
}

submitButton.addEventListener("click", selectAnswer);
resetButton.addEventListener("click", resetQuiz);

showQuestion();


submitButton.addEventListener("click", selectAnswer);
