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

console.log('This was user input:' + userAnswer1);

var userAnswer2 = prompt ('Have I lived in California?').charAt(0).toLowerCase(); //y
function question2(userAnswer2){
  if (userAnswer2==='y') {
    alert('correct!');
  } else (userAnswer2!=='y'); {
    alert('try again!');
  }
}
console.log('This was user input:' + userAnswer2);

var userAnswer3 = prompt ('Was I born in Washington State?').charAt(0).toLowerCase(); //y
function question3(userAnswer3){
  if (userAnswer3==='y') {
    alert('correct!');
  } else (userAnswer3!=='y'); {
    alert('try again!');
  }
}
console.log('This was user input:' + userAnswer3);

var userAnswer4 = prompt ('Do I like tacos more than burritos?').charAt(0).toLowerCase(); //n
function question4(userAnswer4){
  if (userAnswer4==='n') {
    alert('correct!');
  } else (userAnswer4!=='n'); {
    alert('try again!');
  }
}
console.log ('This was user input:' + userAnswer4);

var userAnswer5 = prompt ('Are you having fun?').charAt(0).toLowerCase();
function question5(userAnswer5){
  if (userAnswer5==='y') {
    alert('I\'m glad!');
  } else (userAnswer5!=='y'); {
    alert('Sad!');
  }
}
console.log ('This was user input:' + userAnswer5);

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
console.log ('This was user input:' + userAnswer6);

var userAnswer7 = prompt ('What number am I thinking of?').charAt(0).toLowerCase(); //66
function question7(userAnswer7){
  while (userTries < 6 && userAnswer7 < 66) {
    alert('sorry, too low. Try again');
  }
  if (userAnswer7 > 66) {
    alert('sorry, too high');
  }
  if (userAnswer7 === 66); {
    alert('Congrats, you win!');
  }
  userTries--;
}
console.log ('This was user input:' + userAnswer7);

question1(userAnswer1);
question2(userAnswer2);
question3(userAnswer3);
question4(userAnswer4);
question5(userAnswer5);
question6(userAnswer6);
question7(userAnswer7);
