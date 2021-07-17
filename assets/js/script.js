//Declares all global variables
let startButton = document.getElementById("start-button");
let startScreen = document.getElementById("start-screen");
let viewHiscores = document.getElementById("view-score");
let question = document.getElementById("question_h2");
let questions = document.getElementById("questions");
let answers = Array.from(document.querySelectorAll("answer"));
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let rightOrWrong = document.getElementById("wrong-or-correct");
let chooseQuestion;
let questionBase;
let activeQuestion;
let gameOver = document.getElementById("game-over");
let submit = document.getElementById("submit-button");
let retry = document.getElementById("retry-button");
let hiscore = document.querySelector("#hiscores");
let initials = document.querySelector("#initals");
let userName = document.querySelector("#score-initials");
let userScore = document.querySelector("#score-points");
let secondRetry = document.querySelector("#retry-button-2");
let userIndex = [];
let usernameIndex = 0;
let scoreIndex = 0;
let hiscoreIndex = JSON.parse(localStorage.getItem("hiscoreIndex"));
userIndex = userIndex.concat(hiscoreIndex)
let maximumScoreCount = 15
let timeRemaining = 100;
let timerDisplay = document.getElementById("timer");
let interval;
//This is the start of the even listeners, the first one is to start the quiz

startButton.addEventListener("click", runQuiz);

//This will be the retry quiz buttons

retry.addEventListener("click", retryQuiz);
secondRetry.addEventListener("click", retryQuiz);

// The following will add event listeners to store their score

submit.addEventListener("click", submitScore)
viewHiscores.addEventListener("click", function(){
    startScreen.classList.add("hidden");
    questions.classList.add("hidden");
    gameOver.classList.add("hidden");
    hiscore.classList.remove("hidden");

    userIndex.forEach(function(){
        users = document.createElement("li");
        users.innerText = userIndex[usernameIndex].userId;
        userName.appendChild(users);
        usernameIndex++

        scores = document.createElement("li");
        scores.innerText = userIndex[scoreIndex].Score;
        userScore.appendChild(scores);
        scoreIndex++
    });
});

function beginTimer(){
    interval = setInterval(function(){
        if (timeRemaining <= 0){
            clearInterval(timeLeft =0);
            startScreen.classList.add("hidden");
            questions.classList.add("hidden");
            gameOver.classList.remove("hidden");
        };

        timerDisplay.innerHTML = ("Time Remaing/Score:" + timeLeft);
        timeLeft -=1;
    }, 1000);
};



//Create function for quiz

//Create function to generate new question

//Create function to submit score once finished

//Create function to restart the quiz

//Add questions

