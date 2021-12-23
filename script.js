//all questions and answers are in an object nested in an array

const questionArray = [

    {

        question: 'what is a computer',
        answer: 'a thing that computes',
        a: 'a thing that computes',
        b: 'something cant use',
        c: 'big dumb dumb',
        d: 'idk'

    },
    {

        question: 'what is a string',
        answer: 'a series of characters',
        a: 'not the answer',
        b: 'idk didk didk ',
        c: 'a series of characters',
        d: 'a list to store objects'

    },
    {

        question: 'what is a boolean',
        answer: 'a value of true or false',
        a: 'wqewqe',
        b: 'to bool while on lean',
        c: 'a value of true or false',
        d: 'a thing that computes'

    },
    {

        question: 'what is a computer',
        answer: 'a thing that computes',
        a: 'idk',
        b: 'idk',
        c: 'idk',
        d: 'a thing that computes'

    },
    {

        question: 'what is an array',
        answer: 'a list of thing in order',
        a: 'idk',
        b: 'a list of thing in order',
        c: 'idk',
        d: 'a thing that computes'

    },
    {

        question: 'what is a computer',
        answer: 'a thing that computes',
        a: 'a thing that computes',
        b: 'something cant use',
        c: 'big dumb dumb',
        d: 'idk'

    },
    {

        question: 'what is a string',
        answer: 'a series of characters',
        a: 'not the answer',
        b: 'idk didk didk ',
        c: 'a series of characters',
        d: 'a list to store objects'

    },
    {

        question: 'what is a boolean',
        answer: 'a value of true or false',
        a: 'wqewqe',
        b: 'to bool while on lean',
        c: 'a value of true or false',
        d: 'a thing that computes'

    },
    {

        question: 'what is a computer',
        answer: 'a thing that computes',
        a: 'idk',
        b: 'idk',
        c: 'idk',
        d: 'a thing that computes'

    },
    {

        question: 'what is an array',
        answer: 'a list of thing in order',
        a: 'idk',
        b: 'a list of thing in order',
        c: 'idk',
        d: 'a thing that computes'

    }
]


//global variables 

let score = '0';
let timer = 60;
let questionArrayNumb = -1;
let questionVar = document.getElementById("question-heading");
let buttonA = document.querySelector('#button-a');
let buttonB = document.querySelector('#button-b');
let buttonC = document.querySelector('#button-c');
let buttonD = document.querySelector('#button-d');
let Answer = questionArray;

//function to hide buttons before start is pressed



timerFunc = () => timer--;


function buttonHidden() {
    buttonA.style.display = "none";
    buttonB.style.display = "none";
    buttonC.style.display = "none";
    buttonD.style.display = "none";
}

buttonHidden();

function clearTimer() {
    if (timer === 0) {
        clearInterval();
    }
}
//function to display buttons when called

function buttonDis() {
    buttonA.style.display = "block";
    buttonB.style.display = "block";
    buttonC.style.display = "block";
    buttonD.style.display = "block";
}

//function used to pull the next set of Q and A's from the array

function questionNumb() {
    questionArrayNumb += 1;
    if (questionArrayNumb === 0) {
        const time = setInterval(() => {
            timerFunc();
            document.getElementById("timer").innerHTML = timer;
            console.log(timer);
        }, 1000);
        buttonHidden();
        buttonDis();
        document.querySelector('#button-next').style.display = "none";
    }
    if (questionArrayNumb === questionArray.length) {
        document.getElementById("question-heading").innerHTML = 'Congrats, your score is ' + score;
        buttonHidden();
    }
    console.log(questionArrayNumb)
    let q = questionArray[questionArrayNumb];
    questionVar.innerHTML = q.question;
    buttonA.value = q.a;
    buttonB.value = q.b;
    buttonC.value = q.c;
    buttonD.value = q.d;
}

//function to keep track of score and time 

function timerScore() {
    console.log('right');
    score++;
    document.getElementById("answerDisp").innerHTML = 'Correct!';
    questionNumb();
}

function wrongAnswer() {
    document.getElementById("answerDisp").innerHTML = 'Wrong!';
    timer -= 15;
    questionNumb();
}
//functions to determine if answer is correct 

function correctAnswer1() {
    if (buttonA.value === Answer[questionArrayNumb].answer) {
        timerScore()
    } else {
        wrongAnswer();
    }

}

function correctAnswer2() {
    if (buttonB.value === Answer[questionArrayNumb].answer) {
        timerScore();
    } else {
        wrongAnswer();
    }

}

function correctAnswer3() {
    if (buttonC.value === Answer[questionArrayNumb].answer) {
        timerScore();
    } else {
        wrongAnswer();
    }

}

function correctAnswer4() {
    if (buttonD.value === Answer[questionArrayNumb].answer) {
        timerScore();
    } else {
        wrongAnswer();
    }

}