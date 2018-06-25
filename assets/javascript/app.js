
// Variable for Trivia questions:
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

// Write the function to startup the quiz
function generateTrivia(questions, triviaContainer, resultsContainer, submitButton){

	function showQuestions(questions, triviaContainer){
		console.log(questions);
	}

	function showResults(questions, triviaContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, triviaContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, triviaContainer, resultsContainer);
	}
} 

function showQuestions(questions, triviaContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
    var answers;

    // for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	// triviaContainer.innerHTML = output.join('');
}
showQuestions(questions, triviaContainer);

function showResults(questions, triviaContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = triviaContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
    }
    // show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
// on submit, show results
// submitButton.onclick = function(){
// 	showResults(questions, triviaContainer, resultsContainer);
// }

var triviaContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateTrivia(questions, triviaContainer, resultsContainer, submitButton);