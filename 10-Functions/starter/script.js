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


const greet = (name) => {
    return (lang) => {
        console.log(`${lang} ${name}`);
    }
}

const user = greet("Hit")("moshi moshi");
