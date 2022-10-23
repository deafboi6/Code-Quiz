var introScreen = document.querySelector(".intro-screen");
var startEl = document.querySelector("#start-button");
var quizScreen = document.querySelector(".quiz");
var timerEl = document.querySelector(".quiz__timer");
var questionEl = document.querySelector(".quiz__question");
var quizButtonsEl = document.querySelector(".quiz__question__buttons")
var answerEl = document.querySelector(".quiz__answer");
var endScreen = document.querySelector(".end-screen");
var finalScore = document.querySelector(".final-score");
var highScore = document.querySelector(".high-score");
var highScoreButton = document.querySelector(".high-score-button");

var timer = 0;
var timeLeft = null;

// Event: Page loads
    // Intro screen loads
    // Quiz and end screen are hidden


// Event: User selects start quiz button
    // Hide intro screen
    // Load quiz
    // Start timer

startEl.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("game loading...");

    introScreen.style.display = "none";
    quizScreen.style.display = "block";
}

// Event: Quiz questions
    // Have 5 questions
        // Have 3 choices for each question
        // Have 1 correct answer and 2 incorrect answer
    // Once a question is answered, indicate whether it was correct or not
        // If wrong answer is selected, take time out of timer
    // Move to next question

// Event: Quiz ends
    // Hide quiz
    // Reveal end screen
    // Track score based off time
        //Have input for high scores
            // Localstore these high scores
    // Have option to start quiz over
        // Hide end screen
        // Reveal Quiz screen

