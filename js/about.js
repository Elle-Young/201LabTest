'uses trict';

var userAnswer1 = prompt ('Do you want to play a game?').charAt(0).toLowerCase();

function question1(){
  if (userAnswer1==='y') {
    return alert('yay');
  }
  if (userAnswer1!=='y'){
    alert('please answer yes/n');
  }
}
console.log (userAnswer1);

var userAnswer2 = prompt ('Is the number 144 divisible by 3 without a remainder?').charAt(0).toLowerCase(); //yes 48
function question2(userAnswer2){
  if (userAnswer2==='y') {
    return alert('correct!');
  }
  if (userAnswer2!=='y'){
    return alert('try again!');
  }
}
console.log (userAnswer2);

var userAnswer3 = prompt ('Was I born in Washington State?').charAt(0).toLowerCase(); //y
function question3(userAnswer3){
  if (userAnswer3==='y') {
    return alert('yay');
  }
}
console.log(userAnswer3);

var userAnswer4 = prompt ('Do I like Burritos more than tacos?').charAt(0).toLowerCase(); //y
function question4(userAnswer4){
  console.log(userAnswer4);
  if (userAnswer4==='y') {
    return alert('yay');
  }
}
console.log (userAnswer4);

var userAnswer5 = prompt ('Have you had fun?').charAt(0).toLowerCase();
function question5(userAnswer5){
  console.log(userAnswer5);
  if (userAnswer5==='y') {
    return alert('yay');
  }
}
console.log (userAnswer5);

question1();
question2();
question3();
question4();
question5();
