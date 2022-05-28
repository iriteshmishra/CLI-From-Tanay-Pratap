var readlineSync = require('readline-sync');

var score = 0;

var questionOne = 'Is Ritesh is older than 20? '
var answerOne = "yes";

var userAnswer = readlineSync.question(questionOne);

console.log("you entered " + userAnswer);

if (userAnswer === answerOne) {
  console.log("you are right")
  score = score + 1;
  console.log("score is " + score);
} else {
  console.log("you are wrong")
  score = score - 1;
  console.log("score is " + score);
}

  var questionTwo = "Ritesh's fav color is black?"; 
  var answerTwo = "yes";

  var userAnswer = readlineSync.question(questionTwo);

  console.log("you entered " + userAnswer);
  
  if (userAnswer === answerTwo) {
    console.log("You are right!") 
    score = score + 1;
    console.log("score is: " + score)
  } else {
    console.log("you are wrong!")
    score = score - 1;
    console.log("score is: " + score)
  }
















//var FavColor = readlineSync.question('Your fav color : - ');
// console.log(FavColor)

// var WelcomeMessage = "welcome  "+ FavColor;
// console.log(WelcomeMessage)
