
// Variable for Trivia questions:
var currentQuestion = 0;
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

// Upon opening the page, the trivia container inclucing the title and later the questions, will be loaded, as well as
// the button to start teh game. 
$(document).ready(function () {
	var submitButton = document.getElementById('submit');
	
	//  variable placements
	var triviaContainer = document.getElementById('trivia');

	//On perssing Start Trivia, start the game: write function to start game
	$(".start-button").on("click", function (event) {
		event.preventDefault();
		console.log("hi");
		$(".trivia-container").show();
		$(".time-left").show;
		$(this).hide();
		buildTrivia(questions);
	})

	// Set the timer
	function timer() {
		console.log('hello');
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
	// run timer
	timer();

	// Build The trivia game
	function buildTrivia() {
		console.log(questions);

		var output = [];
		// for each question...
		questions.forEach(
			(currentQuestion, questionNumber) => {

				// we'll need to store the list of answer choices
				var answers = [];

				// and for each available answer...
				for (letter in currentQuestion.answers) {

					// ...add an HTML radio button
					answers.push(
						`<label>
					<input type="radio" name="question${questionNumber}" value="${letter}">
					${letter} :
					${currentQuestion.answers[letter]}
					</label>`
					);
				}
				// add this question and its answers to the output
				output.push(
					`<div class="question"> ${currentQuestion.question} </div>
				<div class="answers"> ${answers.join('')} </div>`
				);
			}

		);

		// finally combine our output list into one string of HTML and put it on the page
		triviaContainer.innerHTML = output.join('');
	}
	var numCorrect = 0;
	// Display results
	function showResults() {
		// gather answer containers from our quiz
		var answerContainers = triviaContainer.querySelectorAll('.answers');

		// keep track of user's answers

		// for each question...
		questions.forEach((currentQuestion, questionNumber) => {

			// find selected answer
			var answerContainer = answerContainers[questionNumber];
			var selector = `input[name=question${questionNumber}]:checked`;
			
			var userAnswer = (answerContainer.querySelector(selector) || {}).value;

			// if answer is correct
			if (userAnswer === currentQuestion.correctAnswer) {
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[questionNumber].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else {
				// color the answers red
				answerContainers[questionNumber].style.color = 'red';
			}
		})
	}


	// on submit, show results
	submitButton.addEventListener('click', showResults);
});
