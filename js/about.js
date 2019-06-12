'use strict';

var userAnswer1 = prompt ('Do you want to play a game?').charAt(0).toLowerCase();
function question1(userAnswer1){
  if(userAnswer1==='y'){
    alert('yay');
  }
  else if(userAnswer1==='n'){
    alert('ok');
  }
  else {
    console.log (userAnswer1);
    alert('please answer y/n');
  }
}


var userAnswer3 = prompt ('Was I born in Washington State?').charAt(0).toLowerCase(); //y
function question3(userAnswer3){
  if (userAnswer3==='y') {
    alert('correct!');
  } else (userAnswer3!=='y'); {
    alert('try again!');
  }
}
console.log(userAnswer3);

var userAnswer4 = prompt ('Do I like Burritos more than tacos?').charAt(0).toLowerCase(); //y
function question4(userAnswer4){
  if (userAnswer4==='y') {
    alert('correct!');
  } else (userAnswer4!=='y'); {
    alert('try again!');
  }
}
console.log (userAnswer4);

var userAnswer5 = prompt ('Have you had fun?').charAt(0).toLowerCase();
function question5(userAnswer5){
  if (userAnswer5==='y') {
    alert('correct!');
  } else (userAnswer5!=='y'); {
    alert('try again!');
  }
}
console.log (userAnswer5);

var userTries = 4;

var userAnswer6 = prompt ('What is the square root of 144?').charAt(0).toLowerCase(); //12
function question6(userAnswer6){
  while (userTries < 4 && userAnswer6 < 12) {
    alert('sorry, too low. Try again');
  }
  if (userAnswer6 > 12) {
    alert('sorry, too high');
  }
  if (userAnswer6 === 12); {
    alert('Congrats, you win!');
  }
  userTries--;
}
console.log (userAnswer6);

question1(userAnswer1);
question3(userAnswer3);
question4(userAnswer4);
question5(userAnswer5);
question6(userAnswer6);
