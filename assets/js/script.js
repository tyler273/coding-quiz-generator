console.log("The penguin is lost. It's me, I'm the penguin.");

var boxElem = document.querySelector("#color-flip-box");

// array of objects
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


// boxElem.style.backgroundColor = "aquamarine";
var boxIsGreen = true;
var boxIndex = 0;
boxElem.addEventListener("click", test)
// on every click
// boxElem.addEventListener("click", function(){
  // // if box is green
  // if(boxIsGreen){
  //   boxElem.style.backgroundColor = "yellow";
  //   boxIsGreen = false;
  // }
  // else{
  //   boxElem.style.backgroundColor = "aquamarine";
  //   boxIsGreen = true;
  // }
  
  // // boxElem.innerHTML = boxNames[boxIndex].name;
  // boxElem.textContent = boxNames[boxIndex].name;
  // boxIndex++;
  // if(boxIndex >= boxNames.length){
  //   boxIndex = 0;
  // }
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

