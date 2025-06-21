'use strict';

const Person = function(fulllName,dateOfBirth){
    // Instance property
    this.fulllName = fulllName;
    this.dateOfBirth = dateOfBirth;

    this.calcAge = function(){
        console.log(2024-this.dateOfBirth);
    }
}

const hit  = new Person("Hit Shiroya","March-2002");

console.log(hit);
// What will happen behind the scene

// 1. new object will be created {}
// 2. function will call, this willl be form which will point to {} 
// 3. prototype linking
// 4. Return object with value