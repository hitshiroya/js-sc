'use strict';
// const min = Math.ceil(1);
// const max = Math.floor(10);

// const correct_number = Math.floor(Math.random() * (max - min + 1) + min );

// const number_input_selector = document.querySelector(".guess").value =50;
// console.log(number_input_selector);
// let number=0;

// number_input_selector.addEventListener("change",(e)=>{
//     number = e.target.value;
//     console.log(number);
// })

const correct_number = Math.trunc(Math.random() * 10) + 1;
const secret_number = document.querySelector('.number');
secret_number.textContent = '?';
console.log(correct_number);

const button_check = document.querySelector('.check');

const message = document.querySelector('.message');
let score = 20;
const score_ele = document.querySelector('.score');
const highScorEle = document.querySelector(".highscore");
console.log(highScorEle);
let highScore = 0;
console.log(score);

button_check.addEventListener('click', () => {
  const user_num = Number(document.querySelector('.guess').value);

  if (user_num == correct_number) {
    secret_number.textContent = correct_number;
    message.textContent = 'You have won Finally🎉';
    score_ele.textContent = score;
    secret_number.style.fontSize = '15rem';
    document.querySelector('body').style.backgroundColor = 'Green';

    if(score > highScore) {
      highScore = score;
      highScorEle.textContent = highScore;
    }
  } else if (user_num > correct_number) {
    message.textContent = 'You have guessed bigger number📉';
    score--;
    
   
    score_ele.textContent = score;
  } else if (user_num < correct_number) {
    message.textContent = 'You have guessed lower number📈';
    score--;
    score_ele.textContent = score;
    
    
  }

  if (score <= 0) {
    message.textContent = 'You have loose entire game';
    score_ele.textContent = 0;
  }
});

const resetButton = document.querySelector('.again');
resetButton.addEventListener('click', e => {
  secret_number.textContent = '?';
  score = 20;
  score_ele.textContent = score;
  document.querySelector('.guess').value = '';
  message.textContent = 'Start a new game';
  document.querySelector('body').style.backgroundColor = 'Grey';
  
});
