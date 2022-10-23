var introScreen = document.querySelector(".intro-screen");
var startEl = document.querySelector(".start-button");
var quizScreen = document.querySelector(".quiz");
var timerEl = document.querySelector(".quiz__timer");
var questionEl = document.querySelector(".quiz__question");
var quizButtonsEl = document.querySelector(".quiz__question__buttons")
var answerEl = document.querySelector(".quiz__answer");
var endScreen = document.querySelector(".end-screen");
var finalScore = document.querySelector(".final-score");
var highScore = document.querySelector(".high-score");
var highScoreButton = document.querySelector(".high-score-button");

var QUESTIONS = [
    "How do you input a placeholder",
    "1 + 1",
    "2 + 2",
    "3 + 3",
    "4 + 4"
]

var timeLeft = 5;

// Event: Page loads
    // Intro screen loads
    // Quiz and end screen are hidden
hideElement(quizScreen);
hideElement(endScreen);

// Event: User selects start quiz button
    // Hide intro screen, load quiz and start timer
    startEl.addEventListener("click", startQuiz);
    function startQuiz() {
        showElement(quizScreen);
        hideElement(introScreen);

        timerId = setInterval(countdown, 1000);
        countdown;
        }
    //timer function
function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timerId);
        // hide quiz screen, reveal end screen;
        hideElement(quizScreen);
        showElement(endScreen);
    } else {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
    }
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
    function hideElement(el) {
        el.classList.add("hide");
    }
    function showElement(el) {
        el.classList.remove("hide");
    }
    // Track score based off time
        //Have input for high scores
            // Localstore these high scores
    // Have option to start quiz over
        // Hide end screen
        // Reveal Quiz screen

