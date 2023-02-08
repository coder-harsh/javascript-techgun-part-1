//vvi topic for interview | Debugging k time ye concept clear rahega to problem nhi hoga
//hoisting means to lift or pull
/*

hello(); //Uncaught ReferenceError: hello is not defined

means there is no hello function defined by us or js library

//normal case: yahan function ko declare pahle call bad m kiya ja raha h

function hello() {
    console.log("Hello");
}

hello();   //Hello



hello();  //Hello | bahut sare language m isko error mana jata h bcs humne funcction call pahle kiya h but declare baad m kiya h.
function hello() {
    console.log("Hello");
}

//this is the hoisting
js m code run hone se pahle interpreter pure js file ko padhta h ki kahan kahan declartion h chahe wo declaration function ka ho ya variable ka ho
then js all declartion ko inetrnally utha k sabse phle rakh dega niche wale declartion ko v.
then code execute hoga.that's why no error.

Hoisting: all declartion ko js file m upar rakh lena


//hoisting concept in variable

//noramal case
var x; //declartion
x = 7; //assignment

console.log(x);



var x; //declaration
//x=undefined | automatic x declare hone p yaha x=undefined assign kar dega
console.log(x); //call  | undefined
x = 7; //assignment

//js m var k sath koi variable declare karte hn to wo by default decalre k sath assign karta h undefined
var x = undefined; //declartion + assignment\



// 2nd case
//declartion and assign ek hi line m karte hn

var x = 7;
console.log(x); //7


//3rd case
//decalre & assign diff line m karte hn

var x;
x = 7;
console.log(x); //7 | normal case


// 4th case
//pahle assign, call then decalre karte hn

x = 7; //assign
console.log(x); //7 | pahle declartion ko upar kar dega then usko all normal lagega koi error nahi aayega
var x; //declartion


// case 5

console.log(x); //undefined | bcs js var x uppar karke usme defult undefined set kar dega
var x;
x = 7;

// Hoist only declartion ko upar karta hain. na ki assignment ko


//var js m pahle se th. let const bad m aaya

console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization/assignment
let x; //declartion
x = 7; //assignment

//in let,const hoiting will be there to take declartion in top but in let,const x=undefined will not assigned by default

//error aa raha h ki inilize nhi hua h na ki declartion. means hoisting ho rha h let, const me v



x = 7;
console.log(x);  //Uncaught ReferenceError: Cannot access 'x' before initialization
let x;


//strict mode concept in hoisting

x = 4;
console.log(x); //4 | agar hum variable declare nhi karte but use kar rahe hn to js auto declare kar dega top m var x;
//baki language m yahan error deta h. but this make the reason for bug in js.
*/

//but isse bachne k liye js m strict mode ka concept h

"use strict"  //after this. when there is no declaration then it gives error. 

x = 4;
console.log(x);  //Uncaught ReferenceError: x is not defined


//vvi topic for interview