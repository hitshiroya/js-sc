// strict mode use to write secure js code in enviroment.

'use strict';

const user = {
    name : "hit",
    DOB : 2002,
    des : "Associate Software Quality Enginneer",
    friends : ["Samarth","Vishal","Krishi","Nachiket"],

    calcAge : function(DOB){
        return 2025 - this.DOB;
    }
}

const hitAge = user.calcAge();
console.log(hitAge)

user.lastName = "Shiroya";
user['Location'] = "Gujarat"

user.friends.map((friend)=>{
    if(friend == "Samarth"){
        console.log(` ${friend} is Hit's best friend`);
        
    }
})

