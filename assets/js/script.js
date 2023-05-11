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

console.log("The penguin is lost");

var boxElem = document.querySelector("#color-flip-box");

// array of objects
var boxNames = [
  {
    question: "Question 1"
    
  },
  
  {
    question: "Question 2"
    
  },
  
  {
    question: "Question 3"
  },
  
  {
    question: "Question 4"
  },

  {
    question: "Question 5"
  }
];

for(var i = 0; i < boxNames.length; i++){
  console.log(boxNames[i]);
  // will put box creation today after class
}

var boxIsGreen = true;
var boxIndex = 0;

// on every click
boxElem.addEventListener("click", function(){

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
  boxFigure.textContent = boxNames[boxIndex].question;
  boxFigure.style.backgroundColor = boxNames[boxIndex].backgroundColor;

  // 3. append
  boxElem.append(boxFigure);
});
