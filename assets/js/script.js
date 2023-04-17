console.log("The penguin is lost. It's me, I'm the penguin.");

var boxElem = document.querySelector("#color-flip-box");

// array of objects

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
   
	}

];

console.log(myQuestions[0].question)

var boxNames = [
  {
    name: "Penguin",
    backgroundColor: "orange",
    buttonArray: ["a","b","c"]
  },
  
  {
    name: "Tuxedo",
    backgroundColor: "green"
  },
  
  {
    name: "Black and White",
    backgroundColor: "orange"
  },
  
  {
    name: "Beaks",
    backgroundColor: "aquamarine"
  }
];

for(var i = 0; i < boxNames.length; i++){
  console.log(boxNames[i]);
  var boxFigure = document.createElement("button"); 
  boxFigure.textContent = boxNames[0].buttonArray[i];
  var box = document.getElementById("buttonBox");
  box.append(boxFigure);
}

function getQuestions() {

  let question1 = myQuestions[0].question

  let question2 = answers

  document.querySelector('#listofQuestions')
  console.log(question1)
  return [question1, question2]

}


getQuestions();

function printQuestions() {
  document.querySelector('#questionPrint').innerHTML = myQuestions.join(', ');
}
  // <button onclick="printQuestions()">Print Questionss</button>


function showQuestions(questions, quizContainer){
  var output = [];
var answers;

// for each question...
for(var i=0; i<myQuestions.length; i++){
  
  // first reset the list of answers
  answers = [];

  // for each available answer to this question...
  for(letter in myQuestions[i].answers){

    // ...add an html radio button
    answers.push(
      '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
      + '</label>'
    );
    console.log(questions)
    console.log(questions.answers)
  }

  // add this question and its answers to the output
  output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
  );
}

// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('');
}

boxElem.style.backgroundColor = "aquamarine";
var boxIsGreen = true;
var boxIndex = 0;
boxElem.addEventListener("click", test)

function test(){


  // clears box element
  boxElem.innerHTML = "";

  // 1. createElement
  var boxFigure = document.createElement("FIGURE");

  // 2. text / attributes
  console.log(boxNames[boxIndex]);
  boxIndex++; // goes to next box
  if(boxIndex >= boxNames.length){
    boxIndex = 0;
  }
  boxFigure.textContent = boxNames[boxIndex].name;
  boxFigure.style.backgroundColor = boxNames[boxIndex].backgroundColor;

  // 3. append
  boxElem.append(boxFigure);
// });

}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
{/* <button onclick="myFunction()">Click me</button> */}

window.onclick = function () {
  var oneMinute = 60 * 1,
      display = document.querySelector('#demo');
  startTimer(oneMinute, display);
};
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(myQuestions, quizContainer){
		var output = [];
	var answers;

	// for each question...
	for(var i=0; i<myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in myQuestions[i].answers){

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
	quizContainer.innerHTML = output.join('');
}
	

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
  }

console.log(generateQuiz)
}