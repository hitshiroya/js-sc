'use strict';

let bookingList = [];
const flightBooking = function(source,destination,roundTrip = true){
    const bookingObject = {
        source,
        destination,
        roundTrip
    }

    bookingList.push(bookingObject);
    return bookingList;
}


const trip1 = flightBooking("Ahmedabad","London");
console.log(trip1);


// higher order function 


// const checkPsg = function (psg){
//     if(psg == 'Hit'){
//         console.log("Data verified...");
//         console.log("Psg is valid...please allow entry");
//         return true;
//     }
// }
// const digiYatraCheck = function(psg,fn){
//     let user = fn(psg);
//     console.log(`${user=psg}'s checkin done...`);
//     console.log(fn.name);
//     return true;
// }

// const psgFlight = digiYatraCheck("Hit",checkPsg);
// console.log(psgFlight);


// function greet (name){
//     return function moshi(lang){
//         console.log(`${lang} ${name}`);
//         return true;
//     }
// }

// const user = greet("Hit")("moshi moshi");
// console.log(user);


// const greet = (name) => {
//     return (lang) => {
//         console.log(`${lang} ${name}`);
//     }
// }

// const user = greet("Hit")("moshi moshi");




// // const airIndia = {
// //     airline : "Air India Express",
// //     iataCode : "HP333",
// //     booking : [],
// //     book(name,flightNumber){
// //         console.log(`${this.airline} with ${this.iataCode} has booking on flight ${flightNumber}
// //             wiih name ${name}`);
// //         this.booking.push(` ${flightNumber}
//              ${name}`)
//     }
// }

// //this is now function so now it has scope of global so it will undefined.
// const hitPsg = airIndia.book;

// const indigo = {
//     airline : "Indigo India",
//     iataCode : "AE435",
//     booking : []
// }

// hitPsg.call(airIndia,"Hit Shiroya","AE333");
// console.log(airIndia);

// hitPsg.call(indigo,"Hit","PS222");
// console.log(indigo);



// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer(){
//     const ansIndex = Number(
//         prompt(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++`)
//     );


//     if(ansIndex <=3 && ansIndex>=0 ) {
//         this.answers[ansIndex]++;
//     }

//     console.log(this.answers);
    
//   },

//   displayResults(){

//   }
// }

// const pollButton = document.querySelector(".poll");
// pollButton.addEventListener("click",poll.registerNewAnswer.bind(poll));
// //console.log(poll);


// //IIFE

// (function(){
//     console.log("This will only execute once");
// })();

// (()=>{
//     console.log("This arrow will only execute once");
// })();



// //closure


// const booking = () => {
//     let pas = 0;

//     return function () {
//         pas++;
//         console.log(pas);
//     }
// }

// const book = booking();

// book();
// book();
// book();




// let chi;

// const par = function(){
//     const d = 20;

//     chi = function(){
//         console.log(d*2);
//     }
// }


// par();
// chi();



// const par2 = function(){
//     const f = 90;

//     chi = function(){
//         console.log(f*2);
//     }
// }

// par2();
// chi();




(function(){
    const ele = document.querySelector("h1");
    ele.style.color = "red";

    const bs = document.querySelector("body");
    bs.addEventListener("click",function(){
        ele.style.color = "yellow";
    })
})();