var questionArray = [
    {question : "When does the Atlantic hurricane season officially begin?", a: "April 20" , b : "June 1" , c : "Winter" , d : "Randomly" , answer : "June 1"},
    {question : "In which of these directions is a US tornado most likely to travel?", a: "Westward" , b : "Southward" , c : "Northward" , d : "Eastward" , answer : "Eastward"},
   {question : "The state with the most tornadoes annually is:", a: "Kansas" , b : "Florida" , c : "Oklahoma" , d : "Texas" , answer : "Texas"},
   {question : "Where is one of the most dangerous places to be during a tornado?", a: "Under a tree" , b : "A mobile home" , c : "In my ferrari" , d : "Your girls DM's" , answer : "A mobile home"}

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

    clicklery () ;
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