// Variables: 
// The Questions:
var questions = [
	{
		question: "What's the name of the famous body building area in Venice?",
		answers: {
			a: "Seal Beach",
			b: "Muscle Beach",
            c: "Venice Beach",
            d: "Gold's Gym"
		},
		correctAnswer: "b"
	},
	{
		question: "What is on the Santa Monica Pier making it recognizable at a glance?",
		answers: {
			a: "Ferris Wheel",
			b: "Carousel",
            c: "Aquarium",
            d: "Food trucks"
		},
		correctAnswer: "a"
    },
    {
        question: "Where is the Grand Canal?",
        answers: {
            a: "Marina Del Rey",
            b: "Venice",
            c: "Playa Vista",
            d: "Santa Monica"
    },
    correctAnswer: "b"
    },
    {
        question: "What is Abbott Kinney?",
        answers: {
            a: "Mall",
            b: "Park",
            c: "Marina",
            d: "Street"
    },
    correctAnswer: "d"
    },
    {
        question: "How many basins does Marina Del Rey have?",
        answers: {
            a: "5",
            b: "1",
            c: "8",
            d: "10"
    },
    correctAnswer: "c"
    },
    {
        question: "Where is the 3rd Street Promenade?",
        answers: {
            a: "Marina Del Rey",
            b: "Venice",
            c: "Playa Vista",
            d: "Santa Monica"
    },
    correctAnswer: "d"
    },
    {
        question: "Which town is closest to LAX?",
        answers: {
            a: "Marina Del Rey",
            b: "Westchester",
            c: "Culver City",
            d: "Hawthorne"
    },
    correctAnswer: "b"
    },
];

// Timer variable
var time = 60;

$(document).ready(function() {
	// Create a function that creates the start button and initial screen
	function initialScreen() {
		startScreen = "<p class='start main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Trivia</a></p>";
		$(".start").html(startScreen);
	}
	
	initialScreen();
	
//On perssing Start Trivia, start the game: write function to start game

$(".container").on("click", ".start", function(event){
	event.preventDefault();  
	generateTrivia(questions);
})

// Set the timer
function timer (){
	intervalId = setInterval(decrement, 1000);
	clearInterval(intervalId);
} 
// Define how timer works
function decrement() {
	time--;
	$("#time-left").html("<h2>" + time + "</h2>");

	if (time === 0) {
        stop();
        alert("Time Up!");
    }
}
// Define how timer stops
function stop() {
	clearInterval(intervalId);
}

timer();

// Write the function to startup the quiz
function generateTrivia(questions){
	console.log(questions);
	// var $triviaDiv =$("<div class='triviaQuestions'>");
	

	function showResults(questions){}

	// when user clicks submit, show results
	// submitButton.onclick = function(){
	// 	showResults(questions, triviaContainer, resultsContainer);
				
	// 		// gather answer containers from our quiz
	// 		var answerContainers = triviaContainer.querySelectorAll('.answers');
				
	// 		// keep track of user's answers
	// 		var userAnswer = '';

	// 		// for each question...
	// 		for(var i=0; i<questions.length; i++){

	// 			// find selected answer
	// 			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
				
	// 			// if answer is correct
	// 			if(userAnswer===questions[i].correctAnswer){
	// 				// add to the number of correct answers
	// 				console.log(userAnswer);
	// 				// color the answers green
	// 				answerContainers[i].style.color = 'lightgreen';
	// 			}
	// 			// if answer is wrong or blank
	// 			else{
	// 				// color the answers red
	// 				answerContainers[i].style.color = 'red';
	// 			}
	// 		}
	// 	}
}
// show number of correct answers out of total

// resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// on submit, show results
// submitButton.onclick = function(){
// 	showResults(questions, triviaContainer, resultsContainer);
// }

var triviaContainer = document.getElementsByClassName('.trivia-container');
var resultsContainer = document.getElementById('#results');
var submitButton = document.getElementById('#submit');

generateTrivia(questions, triviaContainer, resultsContainer, submitButton)});

// // <!-- Timer div -->
//         <div id="time-left"></div>
//         <!-- Questions div -->
//         <div id="questions"></div>
//         <!-- Resutls -->
//         <div id="results"></div>