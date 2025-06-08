'use strict';


let firstName = "Hit"; // Global scope



//Function scope - calcAge
function calcAge(birthYear) {
    let age = 24;

    console.log(`${firstName} is ${age} years old and his birth year is ${birthYear}`);

    //block scope
    if( age < 30 ){
        console.log(`${firstName} is ${age} years old and his birth year is ${birthYear} and is genZ`);

        var genz = true;

        function add(a,b){
            return a + b;
        }
    }

    //console.log(add(2,3)); // ReferenceError: add is not defined - it has block scope only for strict-mode



    console.log(genz) // true because it is funtion scope not block scope anymore.

    
}

let age = calcAge(2002);



const hit = {
    firstName : 'Hit',
    lastName : 'Shiroya',
    age : 24,
};



// has the same reference
const hitt = hit;
hitt.lastName = "Hitt";

console.log(hit);
console.log(hitt);


const hittt = {
    firstName : 'Hit',
    lastName : 'Shiroya',
    age : 24,
    friends : ['Sam','Krishi','Utsav']
};


//shallow copy
const dupObj = {...hittt};

dupObj.lastName = "Patel";

console.log(hittt);
console.log(dupObj);


