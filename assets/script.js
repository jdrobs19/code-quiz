var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<javascript>",
            "<js>",
            "<scripting"
        ],
        correctAnswer: "<script>"
    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element <p id='demo'>This is a demonstration.</p>?",
        answers: [
            "#demo.innerHTML = 'Hello World!';", 
            "document.getElementById('demo').innerHTML = 'Hello World!';", 
            "document.getElement('p').innerHTML = 'Hello World!';", 
            "document.getElementByName('p').innerHTML = 'Hello World!';"
        ],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            "The <body> section",
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
            "A <meta> element"
        ],
        correctAnswer: "Both the <head> section and the <body> section are correct"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            "<script name='xxx.js'>",
            "<script href='xxx.js'>",
            "<script src='xxx.js'>",
            "None of the above"
        ],
        correctAnswer: "<script src='xxx.js'>"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            "msg('Hello World');",
            "alertBox('Hello World');",
            "msgBox('Hello World');",
            "alert('Hello World');"
        ],
        correctAnswer: "alert('Hello World');"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "var myFunction()"
        ],
        correctAnswer: "function myFunction()"
    },

    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            "myFunction()",
            "call myFunction()",
            "call function myFunction()",
            "myFunction(call)"
        ],
        correctAnswer: "myFunction()"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            "if i = 5 then",
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5"
        ],
        correctAnswer: "if (i == 5)"
    },

    {
        question: "How does a WHILE loop start?",
        answers: [
            "while i = 1 to 10",
            "while (i <= 10)",
            "while (i <= 10; i++)",
            "while (i = 0; i <=10)"
        ],
        correctAnswer: "while (i <= 10)"
    },

    {
        question: "How does a FOR loop start?",
        answers: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)"
        ],
        correctAnswer: "for (i = 0; i <= 5; i++)"
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'"
        ],
        correctAnswer: "var colors = ['red', 'green', 'blue']"
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            "Math.round(7.25)",
            "Math.floor(7.25)",
            "rnd(7.25)",
            "round(7.25)"
        ],
        correctAnswer: "Math.round(7.25)"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            "onmouseover",
            "onmouseclick",
            "onchange",
            "onclick"
        ],
        correctAnswer: "onclick"
    },

    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            "var carName;",
            "v carName;",
            "variable carName;",
            "None of these answers"
        ],
        correctAnswer: "var carName;"
    },

    {
        question: "How can you detect the client's browser name?",
        answers: [
            "client.navName",
            "navigator.appName",
            "browser.name",
            "window.user"
        ],
        correctAnswer: "navigator.appName"
    },
];

var score = 0;
var questionIndex = 0;

var remainingTime = document.querySelector("#timer");
var startQuiz = document.querySelector("#start-btn");
var questions = document.querySelector("#questions");
var mainWindow = document.querySelector("#wrapper");

var timer = (quizQuestions.length * 10);
var stopTimer = 0;
var penalty = 10;

var createEl = document.createElement("ul");

startQuiz.addEventListener('click', function(){
    if(stopTimer === 0){
        stopTimer = setInterval(function(){
            timer--;
            remainingTime.textContent = "Time remaining: " + timer;

            if(timer<=0){
                clearInterval(stopTimer);
                gameOver()
                remainingTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    nextQuestion(questionIndex);
});

function nextQuestion(questionIndex){
    questions.innerHTML = "";
    createEl.innerHTML = "";

    for(var i = 0; i < quizQuestions.length; i++){
        var presentQuestion = quizQuestions[questionIndex].question;
        var presentChoice = quizQuestions[questionIndex].answers;
        questions.textContent = presentQuestion;
    }

    presentChoice.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(createEl);
        createEl.appendChild(listItem);
        listItem.addEventListener("click", (grade));
    })
}

function grade(event){
    var validate = event.target;

    if(validate.matches("li")){
        var notification = document.createElement("div");
        notification.setAttribute("id", "notification");
        //correct answer
        if(validate.textContent == quizQuestions[questionIndex].correctAnswer){
            score++;
            notification.textContent = "Correct!"
        }
        else{
            timer = timer - penalty;
            notification.textContent = "Incorrect.";
        }
    }
    questionIndex++

    if(questionIndex >= quizQuestions.length){
        gameOver();
    }

    else{
        nextQuestion(questionIndex);
    }
    questions.appendChild(notification);
}

function gameOver(){
    questions.innerHTML = "";
    remainingTime.innerHTML = "";

    var createHeader = document.createElement("h1");
    createHeader.setAttribute("id", "createHeader");
    createHeader.textContent = "Mission Complete!"

    questions.appendChild(createHeader);

    var finalMessage = document.createElement("p");
    finalMessage.setAttribute("id", "finalMessage");

    questions.appendChild(finalMessage);

    if(timer >=0){
        var secondsLeft = timer
        var displayScore = document.createElement("p");
        clearInterval(stopTimer);
        finalMessage.textContent = "Your final score is " + secondsLeft;

        questions.appendChild(displayScore);
    }

    
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questions.appendChild(createLabel);


    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questions.appendChild(createInput);

    
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questions.appendChild(createSubmit);


    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {
           alert("Please enter your initials");
        } 
        
        else {
            var finalScore = {
                initials: initials,
                score: secondsLeft
            }
            
            var storeScores = localStorage.getItem("storeScores");
            if(storeScores === null){
                storeScores = [];
            }

            else{
                storeScores = JSON.parse(storeScores);
            }

            storeScores.push(finalScore);

            var newScore = JSON.stringify(storeScores);
            localStorage.setItem("storeScores", newScore);
        
            window.location.replace("./highscores.html");
        }
    });
}


