'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent=
'Correct Number!😃'  ;  // change the text

console.log(document.querySelector('.message').textContent=
'Correct Number!😃'  );

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=13;
console.log( document.querySelector('.guess').value) ;
*/

///////////  Game Guess
// give decimal number   between 1 and 20 random function wiill give  number between 0 and 1.
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let  highScore=0;

// making function function to refactor
const displayMessage=function (message){
  document.querySelector('.message').textContent=
  message;
}

document.querySelector('.check').addEventListener('click', function () {
  // passing function value direct
  const guess = Number(document.querySelector('.guess').value); // storing in a variable
  console.log(typeof guess,guess); // when we take input it is in string
// When no input
  
if (!guess) {
    // if no value
   // document.querySelector('.message').textContent = 'No number! 😒';
  // calling Function
   displayMessage('No number! 😒');
  
  }
  // When Player wins

  else if (guess === secNumber) {
    // document.querySelector('.message').textContent = 'Correct Number  😊';
    displayMessage('Correct Number');
 
    // changing Css Style(usein camelCase)
  // only selecting element
  document.querySelector('body').style.backgroundColor
 ='#6ab347'; 

 document.querySelector('.number').style.width='30rem';
 document.querySelector('.number').textContent = secNumber; // number taking form random
 // high Score 
 if(score > highScore){
  highScore=score;
  document.querySelector('.highscore').textContent=highScore;
 }
} 

//////// Refactoring when guess is not equal to secNumber

else if(guess !== secNumber){
  if (score > 1) {
  // using ternary operator 
//  document.querySelector('.message').textContent=guess>secNumber ? "😥 Too high":"😥 Too low";
displayMessage(guess>secNumber ? "😥 Too high":"😥 Too low"); 

 score--; // score=score-1
 document.querySelector('.score').textContent = score;
} else {
//  document.querySelector('.message').textContent = 'You lost the game 😥';
displayMessage('You lost the game😥');

 document.querySelector('.score').textContent = 0;
} 
  
}
});
  // When guess is too high
//   else if (guess > secNumber) {
//     /// for greater than 1
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😥 Too high';
//       score--; // score=score-1
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game 😥';
//       document.querySelector('.score').textContent = 0;
//     }
//     // When guess is too low
//   } else if (guess < secNumber) {
//       if(score>1){
//         document.querySelector('.message').textContent = '😥 Too low';
//         score--; // score=score-1
//         document.querySelector('.score').textContent = score;
//       }
//     else{
//       document.querySelector('.message').textContent='You lost the game 😥';
//       document.querySelector('.score').textContent=0;
//     }   
//   }
// });

// for again button
document.querySelector('.again').addEventListener('click',function(){
 // FOR REASSIGNING VALUES
 secNumber = Math.trunc(Math.random() * 20) + 1;
 score = 20;
  document.querySelector('.number').textContent='?';
 document.querySelector('body').style.backgroundColor='#222';
 document.querySelector('.number').style.width='15rem';
 document.querySelector('.guess').value=" ";
//  document.querySelector('.message').textContent="Start Guessing ";
displayMessage("Start Guessing" ); 
document.querySelector('.score').textContent=score;
});

