// select elements
let countSpan = document.querySelector('.quiz-info .count span'),
    bullets = document.querySelector(".bullets"),
    mainBullets =document.querySelector(".bullets .spans"),
    quizArea = document.querySelector(".quiz-area"),
    answerArea = document.querySelector(".answers-area"),
    submitBtn = document.querySelector(".submit"),
    resultsContent = document.querySelector(".results"),
    countdownElement = document.querySelector(".countdown");


let currentIndex = 0,
    rightAnswers = 0,
    countdownInterval;


function getQuestions() {
// AJAX
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {

        if(this.readyState === 4 && this.status === 200 ) {
            let questionObject = JSON.parse(this.responseText);
            let questionCount = questionObject.length;

            createBullets(questionCount);

            addQuesData(questionObject[currentIndex],questionCount);

            // start coutdown
            countDown(4, questionCount);
            // click on submit
            submitBtn.onclick = () => {
                let rightAnswer = questionObject[currentIndex].right_answer;

                currentIndex++;
                checkAnswer(rightAnswer, questionCount);

                // remove previous question
                quizArea.innerHTML= "";
                answerArea.innerHTML = "";
                // add next question
                addQuesData(questionObject[currentIndex],questionCount);

                handleBullets();

                clearInterval(countdownInterval);
                countDown(4, questionCount);

                showResults(questionCount);
            }
        }
    };
    myRequest.open("GET", "html_questions.json", true);
    myRequest.send();
}
getQuestions();

function createBullets(num) {
    countSpan.innerHTML = num;

    for(let i=0; i< num; i++) {
        let theBullet = document.createElement("span");
        if(i === 0) {
            theBullet.className = "on";
        }
        mainBullets.appendChild(theBullet);
    }
}

function addQuesData(obj, count) {

    if(currentIndex < count) {
// create h2 questions title
let quesTitle = document.createElement("h2");

let quesText = document.createTextNode(obj['title']);

quesTitle.appendChild(quesText);
quizArea.appendChild(quesTitle);
// create the answers
for(let i=1; i <= 4; i++) {
    let mainDiv = document.createElement("div");
    mainDiv.className = 'answer';
    // create input
    let radioInput = document.createElement("input");
    radioInput.name = 'question';
    radioInput.type = 'radio';
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];
    // create label
    let theLabel = document.createElement("label");
    theLabel.htmlFor = `answer_${i}`;
    let labelText = document.createTextNode(obj[`answer_${i}`]);
    theLabel.appendChild(labelText);
    // add input + label to main div
    mainDiv.appendChild(radioInput);
    mainDiv.appendChild(theLabel);

    answerArea.appendChild(mainDiv);
}
    }
    
}

function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("question");
    let choosenAnswer;

    for(let i = 0; i < answers.length; i++) {
        if(answers[i].checked) {
            choosenAnswer = answers[i].dataset.answer
        }
    }

    if(rAnswer === choosenAnswer) {
        rightAnswers++;
    }
}

function  handleBullets() {

    let bulletsSpan = document.querySelectorAll(".bullets .spans span");
    let arraySpans = Array.from(bulletsSpan);
    arraySpans.forEach((span, index) => {
        if(currentIndex === index) {
            span.className = "on";
        }
    })
}
function showResults(count){
    let theResults;
    if(currentIndex === count) {
        quizArea.remove();
        answerArea.remove();
        submitBtn.remove();
        bullets.remove();

        if (rightAnswers > (count / 2) && rightAnswers < count) {
            theResults = `<span class="good">Good</span>, ${rightAnswers} From ${count} Is Good`;
        } else if(rightAnswers === count) {
            theResults = `<span class="perfect">Perfect</span>, All Answers Is good`;
        } else {
            theResults = `<span class="bad">Bad</span>, ${rightAnswers} From ${count}`;
        }

    resultsContent.innerHTML = theResults;
    }
}

function countDown(duration, count) {
    if(currentIndex < count) {
        let minutes, seconds;
        countdownInterval = setInterval( function() {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            countdownElement.innerHTML = `${minutes} : ${seconds}`;

            if(--duration < 0) {
                clearInterval(countdownInterval);
                submitBtn.onclick();
            }
        },1000);
    }
}