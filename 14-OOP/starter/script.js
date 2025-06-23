// // // // 'use strict';

// // // // const Person = function(fulllName,dateOfBirth){
// // // //     // Instance property
// // // //     this.fulllName = fulllName;
// // // //     this.dateOfBirth = dateOfBirth;

// // // // }

// // // // const hit  = new Person("Hit Shiroya","March-2002");



// // // // // What will happen behind the scene

// // // // // 1. new object will be created {}
// // // // // 2. function will call, this willl be form which will point to {} 
// // // // // 3. prototype linking
// // // // // 4. Return object with value


// // // // Person.prototype.calcAge = function() {
// // // //     console.log("Prototype Method....");
// // // // }

// // // // console.log(hit.__proto__)


// // // // // Coding Challenge #1

// // // // /* 
// // // // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // // // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // // // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // // // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // // // DATA CAR 1: 'BMW' going at 120 km/h
// // // // DATA CAR 2: 'Mercedes' going at 95 km/h

// // // // GOOD LUCK 😀
// // // // */


// // // // const Car = function(make,speed) {
// // // //     this.make = make;
// // // //     this.speed = speed;
// // // // }

// // // // Car.prototype.accelerate = function() {
// // // //     console.log(`Speed has been increased to ${this.speed + 10}`);
// // // // }

// // // // Car.prototype.brake = function() {
// // // //     console.log(`Speed has been increased to ${this.speed - 5}`);
// // // // }

// // // // const bmw = new Car("BMW",100);
// // // // bmw.accelerate();

// // // // const audi = new Car("Audi",80);
// // // // audi.brake();



// // // const Person =  {
// // //     constructor(firstName,lastName){
// // //         this.firstName = firstName;
// // //         this.lastName = lastName;
// // //     },

// // //     friends : ["Sam","Neel","Vishal","Krishi"],

// // //     showName(){
// // //         console.log(`Name is ${this.firstName} and last name ${this.lastName}`);
// // //     },

// // //     get firstLetter () {
// // //         return this.firstName[0];
// // //     },

// // //     set firstLetter (c){
// // //         return this.friends.push(c);
// // //     }
// // // }


// // // const hit = new Person("Hit","Shiroya");
// // // console.log(hit.firstLetter = "ABJHa");
// // // hit.showName();


// // const Person = function(firstName,lastName){
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// // }   

// // Person.prototype.showName = function(){
// //     console.log(`The full name is ${this.firstName} ${this.lastName}`);
// // }


// // const Student = function(firstName,lastName,courseName) {
// //     Person.call(this,firstName,lastName);
// //     this.courseName = courseName;
// // }

// // Student.prototype.showCourse = function() {
// //     console.log(`The student Name with ${this.firstName} ${this.lastName} is taking 
// //         course of ${this.courseName}`);
// // }

// // const hit = new Student("Hit","Shiroya","CS");
// // hit.showCourse();



// // Incapsulation 
// // Public fields and public methods
// // Privare fields and private methods


// // 1. Public Fields
// // 2. Public Methods
// // 3. Priavte Fields
// // 4. Private Methods
// // STATIC version of these 4 



// class bankOperation {
//     #pin;
//     #movements = [];
//     constructor(fullName,curreny,pin){
//         this.fullName  = fullName;
//         this.curreny = curreny;
//         this.#pin = pin;
//         this.locale = navigator.language;
        
//     }


//     deposit(val){
//         console.log(`Started deposit process of ${val}`);
//         return this.#movements.push(val);
//     }

//     withdraw(val){
//         return this.#movements.push(-val);
//     }

//     #printBalance(pin){
//         if(pin === 333){
//             console.log("Your balance is 3000");
//         }
//     }
// }


// const hit = new bankOperation("Hit Shiroya","INR",333);
// hit.deposit(500);
// hit.deposit(400);
// hit.deposit(600);
// hit.#printBalance(333);
// hit.withdraw(200);
// console.log(hit);




class Car {
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(range){
        this.speed+=range;
        console.log(`speed is now ${this.speed}`);
    }

    brake(){
        this.speed-=20;
        console.log(`Speed is decrease to ${this.speed}`);
    }
}

class Evcl extends Car {
    #charge;
    constructor(brand,speed,charge){
        super(brand,speed);
        this.#charge = charge;
    }
    

    charge(per){
        console.log(`The car with brand ${this.brand} can goes up to ${this.speed} with charging
            ${per}%`);
    }
}


const bmw = new Car("BMW",80);
bmw.accelerate(40);
bmw.brake();
bmw.accelerate(40);
bmw.accelerate(40);

const rivian = new Evcl("Rivian",45);
rivian.charge(45);

