//Declares all global variables
let startButton = document.getElementById("start-button");
let startScreen = document.getElementById("start-screen");
let viewHiscores = document.getElementById("view-score");
let question = document.getElementById("question_h2");
let questions = document.getElementById("questions");
let answers = Array.from(document.querySelectorAll(".answer"));
let buttonOne = document.getElementById("answer1");
let buttonTwo = document.getElementById("answer2");
let buttonThree = document.getElementById("answer3");
let buttonFour = document.getElementById("answer4");
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
//This is the start of the even listeners, the first one is to start the quiz, the next are for the answer buttons.

startButton.addEventListener("click", runQuiz);
buttonOne.addEventListener("click", checkAnswer);
buttonTwo.addEventListener("click", checkAnswer);
buttonThree.addEventListener("click", checkAnswer);
buttonFour.addEventListener("click", checkAnswer);

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
        users.textContent = userIndex[usernameIndex].userId;
        userName.appendChild(users);
        usernameIndex++

        scores = document.createElement("li");
        scores.textContent = userIndex[scoreIndex].Score;
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
    chooseQuestion = quizQuestions.sort(() => Math.random() - .5);
    showNewQuestion();
};

// function showNewQuestion(chooseQuestion, questionBase){
//     if (questionBase >= chooseQuestion.length){
//         clearInterval(interval)
//         questions.classList.add("hidden");
//         gameOver.classList.remove("hidden");
//         return;
//     }

//     let presentQuestion = chooseQuestion[questionBase];
//     question.textContent = presentQuestion.question;

//     answers.forEach(answer => {
//         let number = answer.dataset["number"];
//         answer.textContent = number + ". " + presentQuestion["answer" + number];
//     })
// };

// answers.forEach(answer => {
//     answer.addEventListener("click", event =>{
//         event.preventDefault();
//         let chosenAnswer = event.target.dataset.number

//         if (chosenAnswer == quizQuestions[questionBase].correctAnswer){
//             rightOrWrong.classList.remove("hidden");
//             correct.classList.remove("hidden");

//             setTimeout(function(){
//                 rightOrWrong.classList.add("hidden");
//                 correct.classList.add("hidden");
//             }, 1000);

//             questionBase++
//             showNewQuestion(chooseQuestion, questionBase);
//         } else{
//             rightOrWrong.classList.remove("hidden");
//             wrong.classList.remove("hidden");

//             timeRemaining-=3;

//             setTimeout(function(){
//                 rightOrWrong.classList.add("hidden");
//                 correct.classList.add("hidden");
//             }, 1000);
//         }
//     });
// });

function showNewQuestion(){
    if(questionBase >= quizQuestions.length){
        clearInterval(interval)
        questions.classList.add("hidden");
        gameOver.classList.remove("hidden");
        return;
    }
    question.textContent = quizQuestions[questionBase].question;
    answer1.textContent = quizQuestions[questionBase].answer1;
    answer2.textContent = quizQuestions[questionBase].answer2;
    answer3.textContent = quizQuestions[questionBase].answer3;
    answer4.textContent = quizQuestions[questionBase].answer4;   
};

function checkAnswer(){
    // answers.forEach(answer => {
    //     answers.addEventListener("click", event => {
    //         event.preventDefault();
            //  const selectedAnswer = target.dataset.number
        if(quizQuestions[questionBase].correctAnswer){
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
            }
        };


//                 timeRemaining-=5
//                 setTimeout(() =>{
//                     rightOrWrong.classList.add("hidden");
//                     wrong.classList.add("hidden");
//                 }, 1000);
//             }
//         })
//     })       
// };

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
        question: "Inside which HTML element is the javascript linked?",
        answer1:"<link>",
        answer2:"<a>",
        answer3:"<javscript>",
        answer4:"<script>",
        correctAnswer: 4,
    },
    {
        question: "How do you add a comment in Javascript?",
        answer1:"<!--Example--!>",
        answer2:"Example",
        answer3:'Example',
        answer4:"//Example",
        correctAnswer: 4,
    },
    {
        question: "How do you create a function in javascript?",
        answer1:"function myFunction ()",
        answer2:"function = myFunction ()",
        answer3:"function : myFunction ()",
        answer4:"function => myfunction()",
        correctAnswer: 1,
    },
    {
        question: "What is the proper syntax for an if statement?",
        answer1:"if i == true",
        answer2:"if i = true then",
        answer3:"if (i == true)",
        answer4:"if [i == true]",
        correctAnswer: 3,
    },
    {
        question: "The first index of an array is...",
        answer1:"1",
        answer2:"coders choice",
        answer3:"0",
        answer4:"any",
        correctAnswer: 3,
    },
    {
        question: "How do you call a function to run in Javascript?",
        answer1:"run myFunction();",
        answer2:"myFunction();",
        answer3:"pleaseRun myFunction();",
        answer4:"call myFunction",
        correctAnswer: 2,
    },
    {
        question: "What happens to information on a form without the method event.prefentdefault()?",
        answer1:"All information is stored locally",
        answer2:"The information is lost, form is reloaded",
        answer3:"The information is stored on the internet",
        answer4:"The information gets sent to a server",
        correctAnswer: 2,
    },
];