//ye object ab kuch action karega. action k liye kuch function bannyenege. function ko yaha javascript mein method bol rahe hain.
//wiasa function jo kisi object k sath assosiated ho. kisi object k function ko hum method bolenege

//let create a object person

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