// var boxElement = document.querySelector("#color-flip-box");
// var questionIndex = 0;

// // array of objects

// var myQuestions = [
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


// for(var i = 0; i < myQuestions.length; i++){
//   console.log(myQuestions[i]);
//   var boxFigure = document.createElement("button"); 
//   boxFigure.textContent = myQuestions[0].buttonArray[i];
//   var box = document.getElementById("buttonBox");
//   box.append(boxFigure);
// }

var boxElem = document.querySelector("#color-flip-box");

// array of objects
var questionsArray = [
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

for(var i = 0; i < questionsArray.length; i++){
  console.log(questionsArray[i]);
}

var boxIndex = 0;

// on every click
boxElem.addEventListener("click", function(){

  // clears box element
  boxElem.innerHTML = "";

  // 1. createElement
  var boxFigure = document.createElement("FIGURE");

  // 2. text / attributes
  console.log(questionsArray[boxIndex]);
  boxIndex++; // goes to next box
  if(boxIndex >= questionsArray.length){
    boxIndex = 0;
  }
  boxFigure.textContent = questionsArray[boxIndex].question;

  // 3. append
  boxElem.append(boxFigure);
});
