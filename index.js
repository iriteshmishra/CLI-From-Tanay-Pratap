var readlineSync = require('readline-sync');

var score = 0;

var myAge = readlineSync.question('Is Ritesh is older than 20? ');

console.log("you entered " + myAge);

if (myAge === 'yes') {
  console.log("you are right")
  score = score + 1;
  console.log("score is " + score);
} else {
  console.log("you are wrong")
  score = score - 1;
  console.log("score is " + score);
}

  var FavColor = readlineSync.question("Ritesh's fav color is black? ");

  console.log("you entered " + FavColor);
  
  if (FavColor === "yes") {
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
