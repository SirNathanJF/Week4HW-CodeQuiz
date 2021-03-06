let buttonOne = document.getElementById("answer1");
let buttonTwo = document.getElementById("answer2");
let buttonThree = document.getElementById("answer3");
let buttonFour = document.getElementById("answer4");
let questionHeader = document.getElementById("question_h2");
let startButton = document.getElementById("start-button");
let viewHiscores = document.getElementById("view-score");
let timerDisplay = document.getElementById("timer");
let startScreen = document.getElementById("start-screen");
let gameOver = document.getElementById("game-over")
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit-button");
let retryButton = document.getElementById("retry-button");
let answerBtns = document.querySelectorAll(".answer");
let rightOrWrong = document.getElementById("wrong-or-correct");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let secondRetry = document.querySelector("#retry-button-2");
let hiscore = document.querySelector("#hiscores");
let initials = document.querySelector("#initials");
let userName = document.querySelector("#score-initials");
let userScore = document.querySelector("#score-points");
let userIndex = [];
let usernameIndex = 0;
let scoreIndex = 0;
let hiscoreIndex = JSON.parse(localStorage.getItem("hiscoreIndex")) || [];
userIndex = userIndex.concat(hiscoreIndex)
let maximumScoreCount = 15
let timeRemaining = 100;
let timerInterval;
let randomQuestion=[];
let questionBase = 0;
let currentQuestion;


startButton.addEventListener("click", startQuiz);
retryButton.addEventListener("click", retryQuiz);
secondRetry.addEventListener("click", retryQuiz);

for (i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', checkAnswer)
  };

submitButton.addEventListener("click", submitScore)

viewHiscores.addEventListener("click", function(){
    startScreen.classList.add("hidden");
    questions.classList.add("hidden");
    gameOver.classList.add("hidden");
    hiscore.classList.remove("hidden");
  
    userIndex.forEach(() => {
        users = document.createElement("li");
        users.textContent = userIndex[usernameIndex].userId;
        userName.appendChild(users);
        usernameIndex++
  
        scores = document.createElement("li");
        scores.textContent = userIndex[scoreIndex].Score;
        userScore.appendChild(scores);
        scoreIndex++
    });
});

function startQuiz(){
    startScreen.classList.add("hidden");
    startButton.classList.add("hidden");
    questionHeader.classList.remove("hidden");
    buttonOne.classList.remove("hidden");
    buttonTwo.classList.remove("hidden");
    buttonThree.classList.remove("hidden");
    buttonFour.classList.remove("hidden");

    beginTimer();
    showNewQuestion();
}

function beginTimer(){
    timerInterval = setInterval(function(){
        timeRemaining--
        timerDisplay.innerHTML = ("Time Remaining/Score:" + timeRemaining);
        if(timeRemaining === 0){
            clearInterval(timerInterval);
            questionHeader.classList.add("hidden");
            buttonOne.classList.add("hidden");
            buttonTwo.classList.add("hidden");
            buttonThree.classList.add("hidden");
            buttonFour.classList.add("hidden");
            initialsInput.classList.remove("hidden");
            submitButton.classList.remove("hidden");
            retryButton.classList.remove("hidden");
            return;
        }
    }, 1000);
};

function showNewQuestion(){
    console.log(questionBase);
    randomQuestion = quizQuestions.sort(() => Math.floor(Math.random()*quizQuestions.length));
    if(questionBase >= quizQuestions.length){
        clearInterval(timerInterval);
        questionHeader.classList.add("hidden");
        buttonOne.classList.add("hidden");
        buttonTwo.classList.add("hidden");
        buttonThree.classList.add("hidden");
        buttonFour.classList.add("hidden");
        initialsInput.classList.remove("hidden");
        submitButton.classList.remove("hidden");
        retryButton.classList.remove("hidden");
        return;
    } else {
        currentQuestion = randomQuestion[questionBase];
        questionHeader.textContent = currentQuestion.question;
        answer1.textContent = quizQuestions[questionBase].answer1;
        answer2.textContent = quizQuestions[questionBase].answer2;
        answer3.textContent = quizQuestions[questionBase].answer3;
        answer4.textContent = quizQuestions[questionBase].answer4;
    }

}

function checkAnswer(event){
    const value = event.target.getAttribute("data-number");
    if(quizQuestions[questionBase].correctAnswer === value){
        rightOrWrong.classList.remove("hidden");
        correct.classList.remove("hidden");
        setTimeout(() =>{
            rightOrWrong.classList.add("hidden");
            correct.classList.add("hidden");
        }, 1000);
        questionBase++
        showNewQuestion();
        } else {
            rightOrWrong.classList.remove("hidden");
            wrong.classList.remove("hidden");
            timeRemaining -= 5;
            setTimeout(() =>{
                rightOrWrong.classList.add("hidden");
                wrong.classList.add("hidden");
            }, 1000);
        }
    };

function submitScore(){
    if(initials.value < 1) {
        return;
    } else{
        let score = timeRemaining;
        let scoreUser = {
            userId: initials.value,
            Score: score
        }
        hiscoreIndex.push(scoreUser)
        hiscoreIndex.sort( (a,b) => b.Score - a.Score);
    
        hiscoreIndex.splice(15)
    
        localStorage.setItem("hiscoreIndex", JSON.stringify(hiscoreIndex));
    
        hiscore.classList.remove("hidden");
        gameOver.classList.add("hidden");
    
        userIndex.forEach(() => {
            users = document.createElement("li");
            users.textContent = userIndex[usernameIndex].userId;
            userName.appendChild(users);
            usernameIndex++
        
            scores = document.createElement("li");
            scores.textContent = userIndex[scoreIndex].Score;
            userScore.appendChild(scores);
            scoreIndex++
        });
    }
};
    
function retryQuiz(){
    location.reload();
    return;
}

const quizQuestions = [
    {
        question: 'Commonly used data types do not include...',
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Alerts",
        answer4: "numbers",
        correctAnswer: "3",
    },
    {
        question: 'The condition in an if / else statement is enclosed within _____',
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
       correctAnswer: "3",
    },
    {
        question: "Arrays in Javascript can be used to store ____",
        answer1:"numbers and strings",
        answer2:"booleans",
        answer3:"other arrays",
        answer4:"all of the above",
        correctAnswer: "4",
    },
    {
        question: "Inside which HTML element is the javascript linked?",
        answer1:"<link>",
        answer2:"<a>",
        answer3:"<javscript>",
        answer4:"<script>",
        correctAnswer: "4",
    },
    {
        question: "How do you add a comment in Javascript?",
        answer1:"<!--Example--!>",
        answer2:"Example",
        answer3:'Example',
        answer4:"//Example",
        correctAnswer: "4",
    },
    {
        question: "How do you create a function in javascript?",
        answer1:"function myFunction ()",
        answer2:"function = myFunction ()",
        answer3:"function : myFunction ()",
        answer4:"function => myfunction()",
        correctAnswer: "1",
    },
    {
        question: "What is the proper syntax for an if statement?",
        answer1:"if i == true",
        answer2:"if i = true then",
        answer3:"if (i == true)",
        answer4:"if [i == true]",
        correctAnswer: "3",
    },
    {
        question: "The first index of an array is...",
        answer1:"1",
        answer2:"coders choice",
        answer3:"0",
        answer4:"any",
        correctAnswer: "3",
    },
    {
        question: "How do you call a function to run in Javascript?",
        answer1:"run myFunction();",
        answer2:"myFunction();",
        answer3:"pleaseRun myFunction();",
        answer4:"call myFunction",
        correctAnswer: "2",
    },
    {
        question: "What happens to information on a form without the method event.prefentdefault()?",
        answer1:"All information is stored locally",
        answer2:"The information is lost, form is reloaded",
        answer3:"The information is stored on the internet",
        answer4:"The information gets sent to a server",
        correctAnswer: "2",
    },
];