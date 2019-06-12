'uses trict';

// line 3-10 is an example from lecture.
// if(family.length === 4 && family[2] === "Zach") {
//     console.log('Get a second job');
//   } else if ( family.length === 5 ) {
//     console.log('Danger, Will Robinson!');
//   }else {
//     console.log("You're Good");
//   }

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

var userAnswer2 = prompt ('Is the number 144 divisible by 3 without a remainder?').charAt(0).toLowerCase(); //yes 48
function question2(userAnswer2){
  if (userAnswer2==='y') {
    alert('correct!');
  } else (userAnswer2!=='y'); {
    alert('try again!');
  }
}
console.log (userAnswer2);

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

question1(userAnswer1);
question2(userAnswer2);
question3(userAnswer3);
question4(userAnswer4);
question5(userAnswer5);
