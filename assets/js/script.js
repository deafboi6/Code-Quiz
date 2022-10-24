var introScreen = document.querySelector(".intro-screen");
var startEl = document.querySelector(".start-button");
var quizScreen = document.querySelector(".quiz");
var timerEl = document.querySelector(".quiz__timer");
var questionEl = document.querySelector(".quiz__question");
var quizButtonsEl = document.querySelector(".options-container")
var answerEl = document.querySelector(".quiz__answer");
var endScreen = document.querySelector(".end-screen");
var finalScore = document.querySelector(".final-score");
var highScore = document.querySelector(".high-score");
var highScoreButton = document.querySelector(".high-score-button");
var captureHighScore = document.querySelector(".initials");
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

    askQuestion();
    timerId = setInterval(countdown, 1000);
    countdown();
}


//timer function
function countdown() {
    timerEl.textContent = timeLeft;


    if (timeLeft === 0) {
        clearTimeout(timerId);
        hideElement(quizScreen);
        showElement(endScreen);
        finalScore.textContent = "Your score: " + timeLeft;
    } else {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
    }
}

function hideElement(el) {
    el.classList.add("hide");
}
function showElement(el) {
    el.classList.remove("hide");
}

var QUESTIONS = [{
    id: 0,
    q: "What css selector is used for id",
    a: [{ text: ".", isCorrect: false},
        { text: "&&", isCorrect: false},
        { text: "#", isCorrect: true},
        { text: "[ ]", isCorrect: false}],
},

    {id: 1,
    q: "What would you use to dynamically format the UI",
    a: [{ text: "HTML", isCorrect: false},
        { text: "css", isCorrect: false},
        { text: "javascript", isCorrect: true},
        { text: "C#", isCorrect: false}],
},
    {id: 2,
    q: "How do you link a css sheet?",
    a: [{ text: "href='./js'", isCorrect: false},
        { text: "<script src='./script.css'>", isCorrect: false},
        { text: "<link rel='stylesheet' href ='./script.css />'", isCorrect: true},
        { text: "<link href='script.css' />", isCorrect: false}],
},
    {id: 0,
    q: "Which of the following is a string",
    a: [{ text: "143.2", isCorrect: false},
        { text: "hello", isCorrect: false},
        { text: "'hello'", isCorrect: true},
        { text: "[hello]", isCorrect: false}]
}
]

// function correctChoice() {
//     console.log("hello!");
// }

// PROBLEM: something is clicking through everything and then preventing further clicks from registering
function askQuestion() {
    console.log("hello");
    var op1 = document.querySelector("#op1");
    var op2 = document.querySelector("#op2");
    var op3 = document.querySelector("#op3");
    var op4 = document.querySelector("#op4");
    var i = 0;
    var nextEl = document.querySelector(".next");

    // function addI(event) {
    //     event.preventDefault();
    //     i++
    // }

    // nextEl.addEventListener("click", addI());

    questionEl.textContent = QUESTIONS[i].q;

    op1.textContent = QUESTIONS[i].a[0].text;
    op2.textContent = QUESTIONS[i].a[1].text;
    op3.textContent = QUESTIONS[i].a[2].text;
    op4.textContent = QUESTIONS[i].a[3].text;
}





// //////////////////////////////////////////////////////////////////////////////

// Event: Quiz questions
// Have 5 questions

// Questions will be asked
// const Questions = [{
//     id: 0,
//     q: "What is capital of India?",
//     a: [{ text: "gandhinagar", isCorrect: false },
//         { text: "Surat", isCorrect: false },
//         { text: "Delhi", isCorrect: true },
//         { text: "mumbai", isCorrect: false }
//     ]

// },
// {
//     id: 1,
//     q: "What is the capital of Thailand?",
//     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
//         { text: "phuket", isCorrect: false },
//         { text: "Ayutthaya", isCorrect: false },
//         { text: "Bangkok", isCorrect: true }
//     ]

// },
// {
//     id: 2,
//     q: "What is the capital of Gujarat",
//     a: [{ text: "surat", isCorrect: false },
//         { text: "vadodara", isCorrect: false },
//         { text: "gandhinagar", isCorrect: true },
//         { text: "rajkot", isCorrect: false }
//     ]

// }

// ]

// // Set start
// var start = true;

// // Iterate
// function iterate(id) {

// // Getting the result display section
// answerEl[0].innerText = "";

// // Setting the question text
// questionEl.innerText = Questions[id].q;

// var op1 = document.querySelector("#op1");
// var op2 = document.querySelector("#op2");
// var op3 = document.querySelector("#op3");
// var op4 = document.querySelector("#op4");

// // Providing option text 
// op1.innerText = Questions[id].a[0].text;
// op2.innerText = Questions[id].a[1].text;
// op3.innerText = Questions[id].a[2].text;
// op4.innerText = Questions[id].a[3].text;

// // Providing the true or false value to the options
// op1.value = Questions[id].a[0].isCorrect;
// op2.value = Questions[id].a[1].isCorrect;
// op3.value = Questions[id].a[2].isCorrect;
// op4.value = Questions[id].a[3].isCorrect;

// var selected = "";

// // Show selection for op1
// op1.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightgoldenrodyellow";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op1.value;
// })

// // Show selection for op2
// op2.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightgoldenrodyellow";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op2.value;
// })

// // Show selection for op3
// op3.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightgoldenrodyellow";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op3.value;
// })

// // Show selection for op4
// op4.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightgoldenrodyellow";
//     selected = op4.value;
// })

// // Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("submit");

// // Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "Correct!";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "Wrong";
//         result[0].style.color = "red";
//     }
// })
// }

// if (start) {
// iterate("0");
// }

// // Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
// start = false;
// if (id < 2) {
//     id++;
//     iterate(id);
//     console.log(id);
// }

// })