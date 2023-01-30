//ye object ab kuch action karega. action k liye kuch function bannyenege. function ko yaha javascript mein method bol rahe hain.
//wiasa function jo kisi object k sath assosiated ho. kisi object k function ko hum method bolenege

//let create a object person
/*
let person = {
    firstName: 'Harsh',
    lastName: 'Kumar'
};

person.age = 25;

//hum 4 tarike se method bana sakte hain

person.sayHello = function () {//sayHello: method name, anonymous function
    console.log("Hello");
}

person.sayHello();//method calling

//2nd tarika for method


let person = {
    firstName: 'Harsh',
    lastName: 'Kumar'
};
//normal function
function greet() {
    console.log("Hello");
}

person.sayHello = greet;
person.sayHello(); //Hello


//3sra tarika hum jo object declare kar rahe hain na usi k andar method k name likh do

let person = {
    firstName: "Harsh",
    lastName: "Kumar",
    sayHello: function () { //method m anonymous function value m de denge
        console.log("Hello");
    }
};

person.sayHello(); //Hello
*/

//es6 js m bahut sara change leke aaya tha
//4th tarika method ka es6 k baad hi aaya tha

let person = {
    firstName: "Harsh",
    lastName: "Kumar",
    sayHello() {
        console.log("Hello");
    }
};

person.sayHello(); //Hello

//ye 4 tarika use karke object ka method bana sakte hn jisse ki object kuchh action kar sake
