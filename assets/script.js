var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<javascript>",
            c: "<js>",
            d: "<scripting"
        },
        correctAnswer: "a"
    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element <p id='demo'>This is a demonstration.</p>?",
        answers: {
            a: "#demo.innerHTML = 'Hello World!';",
            b: "document.getElementById('demo').innerHTML = 'Hello World!';",
            c: "document.getElement('p').innerHTML = 'Hello World!';",
            d: "document.getElementByName('p').innerHTML = 'Hello World!';"
        },
        correctAnswer: 'b'
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <body> section",
            b: "Both the <head> section and the <body> section are correct",
            c: "The <head> section",
            d: "A <meta> element"
        },
        correctAnswer: "b"
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: {
            a: "<script name='xxx.js'>",
            b: "<script href='xxx.js'>",
            c: "<script src='xxx.js'>",
            d: "None of the above"
        },
        correctAnswer: "c"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "msg('Hello World');",
            b: "alertBox('Hello World');",
            c:"msgBox('Hello World');",
            d: "alert('Hello World');"    
        },
        correctAnswer: "d"
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function:myFunction()",
            b: "function = myFunction()",
            c: "function myFunction()",
            d: "var myFunction()"
        },
        correctAnswer: "c"
    },

    {
        question: "How do you call a function named 'myFunction'?",
        answers: {
            a: "myFunction()",
            b: "call myFunction()",
            c: "call function myFunction()",
            d: "myFunction(call)"
        },
        correctAnswer: "a"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if i = 5 then",
            b: "if (i == 5)",
            c: "if i == 5 then",
            d: "if i = 5"
        },
        correctAnswer: "b"
    },

    {
        question: "How does a WHILE loop start?",
        answers: {
            a: "while i = 1 to 10",
            b: "while (i <= 10)",
            c: "while (i <= 10; i++)",
            d: "while (i = 0; i <=10)"
        },
        correctAnswer: "b"
    },

    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for (i = 0; i <= 5)",
            b: "for i = 1 to 5",
            c: "for (i <= 5; i++)",
            d: "for (i = 0; i <= 5; i++)"
        },
        correctAnswer: "d"
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var colors = (1:'red', 2:'green', 3:'blue')",
            b: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            c: "var colors = ['red', 'green', 'blue']",
            d: "var colors = 'red', 'green', 'blue'"
        },
        correctAnswer: "c"
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: "Math.round(7.25)",
            b: "Math.floor(7.25)",
            c: "rnd(7.25)",
            d: "round(7.25)"
        },
        correctAnswer: "a"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onmouseover",
            b: "onmouseclick",
            c: "onchange",
            d: "onclick"
        },
        correctAnswer: "d"
    },

    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: "var carName;",
            b: "v carName;",
            c: "variable carName;",
            d: "None of the above"
        },
        correctAnswer: "a"
    },

    {
        question: "How can you detect the client's browser name?",
        answers: {
            a: "client.navName",
            b: "navigator.appName",
            c: "browser.name",
            d: "window.user"
        },
        correctAnswer: "b"
    },    
];

