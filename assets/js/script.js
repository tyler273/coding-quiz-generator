// const boxElement = document.querySelector("#color-flip-box");
// const questionIndex = 0;

// // array of objects

// const myQuestions = [
// 	{
// 		question: "What is 10/2?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '115'
// 		},
// 		correctAnswer: 'b'
// 	},
// 	{
// 		question: "What is 30/3?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '10'
// 		},
// 		correctAnswer: 'c'
   
// 	}

// ];

// console.log(myQuestions[0].question)


// for(const i = 0; i < myQuestions.length; i++){
//   console.log(myQuestions[i]);
//   const boxFigure = document.createElement("button"); 
//   boxFigure.textContent = myQuestions[0].buttonArray[i];
//   const box = document.getElementById("buttonBox");
//   box.append(boxFigure);
// }

// Important elements to be referenced
const startButton = document.getElementById("start-btn")
const timerDisplay = document.getElementById("time-remaining");
const questionDisplay = document.getElementById("question");
const answerOptions = document.querySelectorAll(".choice");
const gameOverScreen = document.getElementById("game-over-screen");
const submitButton = document.getElementById("submit-score-btn");
const initialsInput = document.getElementById("initials");


// Variables to track game state
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 60;
let timerInterval;

// Quiz questions
const questions = [
  {
    question: "Question 1",
	choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0
    
  },
  
  {
    question: "Question 2",
	choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0
    
  },
  
  {
    question: "Question 3",
	choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0
  },
  
  {
    question: "Question 4",
	choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0
  },

  {
    question: "Question 5",
	choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 0
  }
];
console.log(questions);

// Function to start the quiz
function startQuiz() {
	startButton.disabled = true;
	timerInterval = setInterval(updateTimer, 1000);
	displayQuestion();
}

// Function to update the timer display
function updateTimer() {
	timeRemaining --;
	timerDisplay.textContent = `Time: ${timeRemaining} seconds`;

	if (timeRemaining <=0) {
		clearInterval(timerInterval);
		endQuiz();
	}
}
// Function to display current question
function displayQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	questionDisplay.textContent = currentQuestion.question;
	questionDisplay.removeAttribute("hidden");

	answerOptions.forEach((option, i) => {
		option.textContent = currentQuestion.choices[i];
		option.addEventListener("click", handleAnswer);
		option.removeAttribute("hidden");
	});

	// Show the timer
	timerDisplay.classList.remove("hidden");
}

// Event listener for start button
startButton.addEventListener("click", startQuiz)

// Function to handle user answer selection
function handleAnswer() {
	const selectedAnswerIndex = Array.from(answerOptions).indexOf(this);
	const currentQuestion = questions[currentQuestionIndex];

	if (selectedAnswerIndex === currentQuestion.correctAnswer) {
		score++;
	} else {
		timeRemaining -= 10;
	}

	currentQuestionIndex++;

	if (currentQuestionIndex < questions.length) {
		displayQuestion();
	} else {
		endQuiz();
	}
}

// Function to end quiz
function endQuiz() {
	clearInterval(timerInterval);
  
	// Show game over screen
	questionDisplay.textContent = "Game Over!";
	answerOptions.forEach(option => option.style.display = "none");
	gameOverScreen.style.display = "block";
  
	// Show the game over screen
	gameOverScreen.classList.remove("hidden");
	
	// Display the score
	const scoreDisplay = document.createElement("p");
	scoreDisplay.textContent = `Your score: ${score}/5`;
	gameOverScreen.appendChild(scoreDisplay);
  
	// Handle score submission
	submitButton.addEventListener('click', handleScoreSubmission);
  
	function handleScoreSubmission(event) {
	  event.preventDefault();
  
	  const initials = initialsInput.value;

	 // Save initials and score in localStorage
	  const scoreData = {
		initials: initials,
		score: score};
		localStorage.setItem("scoreData", JSON.stringify(scoreData));

	 // Clear initials input value
		initialsInput.value = "";
	}
}