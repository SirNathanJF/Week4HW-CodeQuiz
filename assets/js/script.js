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

    userIndex.forEach(() => {
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

        timerDisplay.innerHTML = ("Time Remaing/Score:" + timeRemaining);
        timeRemaining -=1;
    }, 1000);
};

function runQuiz(){
    startScreen.classList.add("hidden");
    questions.classList.remove("hidden");
    gameOver.classList.add("hidden");

    beginTimer();

    questionBase = 0;
    chooseQuestion = quizQuestions.sort(function (){
        Math.random() - .5;
    });
    showNewQuestion(chooseQuestion, questionBase);
};

function showNewQuestion(chooseQuestion, questionBase){
    if (questionBase >= chooseQuestion.length){
        clearInterval(interval)
        questions.classList.add("hidden");
        gameOver.classList.remove("hidden");
        return;
    }

    let presentQuestion = chooseQuestion[questionBase];
    question.innerText = presentQuestion.question;

    answers.forEach(answer => {
        let number = answer.dataset["number"];
        answer.innerText = number + ". " + presentQuestion["answer" + number];
    })
};

answers.forEach(answer => {
    answer.addEventListener("click", event =>{
        event.preventDefault();
        let chosenAnswer = event.target.dataset.number

        if (chosenAnswer == quizQuestions[questionBase].correctAnswer){
            rightOrWrong.classList.remove("hidden");
            correct.classList.remove("hidden");

            setTimeout(function(){
                rightOrWrong.classList.add("hidden");
                correct.classList.add("hidden");
            }, 1000);

            questionBase++
            showNewQuestion(chooseQuestion, questionBase);
        } else{
            rightOrWrong.classList.remove("hidden");
            wrong.classList.remove("hidden");

            timeRemaining-=3;

            setTimeout(function(){
                rightOrWrong.classList.add("hidden");
                correct.classList.add("hidden");
            }, 1000);
        }
    });
});

function submitScore(){
    if(initials.value < 1) {
        return;
    } else{
        let score = timeRemaining;
        let scoreUser = {
            userId: initials.value.toUpperCase(),
            Score: score + 1
        }
        hiscoreIndex.push(scoreUser)
        hiscoreIndex.sort( (a,b) => b.Score - a.Score);

        hiscoreIndex.splice(15)

        localStorage.setItem("hiscoreIndex", JSON.stringify(hiscoreIndex));

        scoreIndex.classList.remove("hidden");
        gameOver.classList.add("hidden");

        userIndex.forEach(() => {
            users = document.createElement("li");
            users.innerText = userIndex[usernameIndex].userId;
            userName.appendChild(users);
            usernameIndex++
    
            scores = document.createElement("li");
            scores.innerText = userIndex[scoreIndex].Score;
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
        correctAnswer: 3,
    },
    {
        question: 'The condition in an if / else statement is enclosed within _____',
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
       correctAnswer: 3,
    },
    {
        question: "Arrays in Javascript can be used to store ____",
        answer1:"numbers and strings",
        answer2:"booleans",
        answer3:"other arrays",
        answer4:"all of the above",
        correctAnswer: 4,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },
    {
        question: "Commonly used data types do not include...",
        answer1:,
        answer2:,
        answer3:,
        answer4:,
        correctAnswer:,
    },

];
