var questionArray = [
    {question : "what is the best color in the world", a: "orange" , b : "green" , c : "pink" , d : "blue" , answer : "orange"},
    {question : "what is the worst color in the world", a: "orange" , b : "green" , c : "pink" , d : "blue" , answer : "green"},
   {question : "what is the warmest color in the world", a: "orange" , b : "green" , c : "pink" , d : "blue" , answer : "pink"},
   {question : "what is the darkest color in the world", a: "orange" , b : "green" , c : "pink" , d : "blue" , answer : "blue"}

]
var question = 0;
var theAnswer = 0;
var timer;

// fucntion that pulls a question and shows it to the quizSite
function theQuestions () {
    var theQuestion = $ ("<div>")
    theQuestion.text(questionArray [question].question)
    theQuestion.addClass("Question")
    $(".container").append(theQuestion);
};

// function that takes multiple choice and shows it under the question
function theMultChoi () {
    var theQuestion = $ ("<button>")
    theQuestion.text(questionArray [question].a)
    theQuestion.attr("datapass", questionArray [question].a)
    theQuestion.addClass("multchoi")
    $(".container").append(theQuestion);

    theQuestion = $ ("<button>")
    theQuestion.text(questionArray [question].b)
    theQuestion.attr("datapass", questionArray [question].b)
    theQuestion.addClass("multchoi")
    $(".container").append(theQuestion);

    theQuestion = $ ("<button>")
    theQuestion.text(questionArray [question].c)
    theQuestion.attr("datapass", questionArray [question].c)
    theQuestion.addClass("multchoi")
    $(".container").append(theQuestion);

    theQuestion = $ ("<button>")
    theQuestion.text(questionArray [question].d)
    theQuestion.attr("datapass", questionArray [question].d)
    theQuestion.addClass("multchoi")
    $(".container").append(theQuestion);

    //clicklery () ;
};

theQuestions () ;
theMultChoi () ;
clicklery () ;

// on click to the answers and which to the next question
// function that shows if the answer was correct or wrong
function clicklery () {
    $(".multchoi").on("click", function(){
guess = this.getAttribute("datapass")
if (guess == questionArray[question].answer ) {alert ("That is correct"); question++; $ (".container").empty();theQuestions();theMultChoi();} else {
alert("Go Home")
}
})
}

// keep score of wins and losses
// show end results when finished with questions
// Set a timer for each question of 20 seconds