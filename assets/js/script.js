let buttonOne = document.getElementById("answer1");
let buttonTwo = document.getElementById("answer2");
let buttonThree = document.getElementById("answer3");
let buttonFour = document.getElementById("answer4");
let questionHeader = document.getElementById("question_h2");
let startButton = document.getElementById("start-button");
let timerDisplay = document.getElementById("timer");
let timeRemaining = 100;


startButton.addEventListener("click", startQuiz)

function startQuiz(){
    startButton.classList.add("hidden");
    questionHeader.classList.remove("hidden");
    buttonOne.classList.remove("hidden");
    buttonTwo.classList.remove("hidden");
    buttonThree.classList.remove("hidden");
    buttonFour.classList.remove("hidden");

    beginTimer();
}

function beginTimer(){
    setInterval(function(){
        if (timeRemaining <= 0){
            clearInterval(timeLeft = 0);
        };

        timerDisplay.innerHTML = ("Time Remaing/Score:" + timeRemaining);
        timeRemaining -=1;
    }, 1000);
};
