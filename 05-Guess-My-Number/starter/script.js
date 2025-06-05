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


const min = Math.ceil(1);
const max = Math.floor(10);

const correct_number = Math.floor(Math.random() * (max - min + 1) + min );
console.log(correct_number)

const button_check = document.querySelector(".check");
const score = document.querySelector(".label-score");
console.log(score);

button_check.addEventListener("click" , ()=>{
   const user_num = Number(document.querySelector(".guess").value);

   if(user_num == correct_number)  {
    console.log("YOu have won")
    score.textContent = score.value + 1;
   }else{
    console.log("you bloody looser");
    score.textContent = score.value - 1;
   }
   

})









