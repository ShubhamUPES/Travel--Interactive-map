// Sample question data
const questions = [
    {
        question: "What is the name of the ancient temple situated on the banks of the Ganges in Haridwar, Uttarakhand, where the Ganga Aarti is performed every evening?",
        options: ["Kedarnath Temple", "Badrinath Temple", "Har Ki Pauri", "Yamunotri Temple"],
        answer: "Har Ki Pauri",
        hint: "It is considered one of the holiest ghats in India."
    },
    {
        question: "Which scenic hill station in Uttarakhand is famous for its picturesque lakes, including Naini Lake, and is often referred to as the 'Lake District of India'?",
        options: ["Mussoorie", "Ranikhet", "Nainital", "Auli"],
        answer: "Nainital",
        hint: "It is named after the Naini Lake, a pear-shaped lake reflecting the surrounding mountains."
    },
    {
        question: "What is the name of the UNESCO World Heritage Site in Uttarakhand, known for its intricate wood carvings and architecture dating back to the 16th century?",
        options: ["Baijnath Temple", "Jageshwar Temple", "Kedarnath Temple", "Binsar Wildlife Sanctuary"],
        answer: "Jageshwar Temple",
        hint: "It is located in the Binsar Wildlife Sanctuary and is dedicated to Lord Shiva."
      },
      {
        question: "Which pristine hill station in Uttarakhand is famous for its apple orchards, ancient temples, and panoramic views of the Himalayas?",
        options: ["Chopta", "Mukteshwar", "Almora", "Chakrata"],
        answer: "Mukteshwar",
        hint: "It is named after Lord Shiva and is believed to be the place where he granted a boon to the demon king Ravana."
      },
      {
        question: "What is the name of the famous waterfall located in Chhattisgarh, often referred to as the 'Niagara Falls of India' due to its horseshoe shape?",
        options: ["Chitrakoot Falls", "Tirathgarh Falls", "Amrit Dhara Falls", "Bastar Dhara"],
        answer: "Chitrakoot Falls",
        hint: "It is one of the widest waterfalls in India and is located on the Indravati River."
      },
      {
        question: "Which ancient temple complex in Uttarakhand, dedicated to Lord Shiva, is renowned for its distinct pyramid-shaped architecture and intricate carvings?",
        options: ["Baijnath Temple", "Jageshwar Temple", "Rudranath Temple", "Tungnath Temple"],
        answer: "Tungnath Temple",
        hint: "It is situated in the Kumaon region and is believed to be one of the twelve Jyotirlingas."
      },
      {
        question: "What is the name of the scenic hill station in Uttarakhand, known for its serene environment, lush greenery, and colonial-era architecture?",
        options: ["Lansdowne", "Pauri", "Pangot", "Binsar"],
        answer: "Lansdowne",
        hint: "It was named after Lord Lansdowne, the then Viceroy of India."
      },
      {
        question: "Which sacred river in Uttarakhand is considered the lifeline of the state and is worshipped as a goddess by millions of people?",
        options: ["Ganges (Ganga)", "Yamuna", "Alaknanda", "Bhagirathi"],
        answer: "Ganges (Ganga)",
        hint: "It originates from the Gangotri Glacier in the Himalayas."
      },
      {
        question: "What is the name of the hidden gem in Rajasthan, known for its ancient fortresses, colorful bazaars, and desert landscapes?",
        options: ["Jaipur", "Jaisalmer", "Udaipur", "Jodhpur"],
        answer: "Jaisalmer",
        hint: "It is often called the 'Golden City' due to its golden sandstone architecture."
      },
      {
        question: "Which offbeat destination in Karnataka is famous for its unique rock formations, ancient cave temples, and hippie culture?",
        options: ["Hampi", "Gokarna", "Badami", "Chikmagalur"],
        answer: "Gokarna",
        hint: "It is located along the coast of the Arabian Sea and offers pristine beaches and breathtaking sunsets."
      }
    ];
    // Add more questions here...

// Game settings
const questionDuration = 15; // Time limit for each question in seconds

// Global variables
let score = 0;
let currentQuestionIndex = 0;
let countdown;

// DOM elements
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("time-left");
const hintButton = document.getElementById("hint-btn");
const gameOverScreen = document.getElementById("game-over");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");
const returnHomeButton = document.getElementById("return-home-btn");

// Display question and options
function displayQuestion(questionObj) {
    questionElement.textContent = questionObj.question;
    optionsContainer.innerHTML = "";
    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", function() {
            clearInterval(countdown); // Stop the timer
            checkAnswer(option, questionObj.answer);
        });
        optionsContainer.appendChild(button);
    });
    
    // Start the timer
    timerElement.textContent = questionDuration;
    countdown = setInterval(updateTimer, 1000);
    hintButton.addEventListener("click", function() {
        alert(questionObj.hint);
    });
}

// Update timer
function updateTimer() {
    const timeLeft = parseInt(timerElement.textContent);
    if (timeLeft > 0) {
        timerElement.textContent = timeLeft - 1;
    } else {
        clearInterval(countdown); // Stop the timer
        // Move to the next question or end the game
        moveToNextQuestion();
    }
}

// Move to the next question
function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

// Check answer and display result
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct! You earned points.";
        score++;
        scoreElement.textContent = score;
    } else {
        resultElement.textContent = "Incorrect! Try again.";
    }
    // Move to the next question
    moveToNextQuestion();
}
// Display hint for the current question
function displayHint(hint) {
    const hintElement = document.createElement("p");
    hintElement.textContent = `Hint: ${hint}`;
    hintContainer.appendChild(hintElement);
}
function endGame() {
    clearInterval(countdown); // Stop the timer
    gameOverScreen.style.display = "block";
    finalScoreElement.textContent = score;
}

// Initialize the game
function initGame() {
    displayQuestion(questions[currentQuestionIndex]);
}

// Call the initGame function when the page loads
window.onload = initGame;
function allQuestionsAnswered() {
    return currentQuestionIndex >= questions.length;
}
