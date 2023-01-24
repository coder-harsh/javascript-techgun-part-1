/*
pichhle video mein hum function mein hum 2 argument send karte the aur function 2 hi parameter receive karta tha. aur add function 2 no hi add kar sakta tha.
but hum ab cahte hain ki agar hum 3 argument bhi send kare to 3 no ko bhi function add kar de, uske liye hum the arguments object ka use karte hain.

isme hume ek array k jaisa ek object milta hain jo function k andar automatic mil jata hain. i.e hume parameter k ek argument mil jata hain.

function add() {//hume parameter pass karne ki need nhi h.
    //hame ek array milta hai arguments name ka. is arguments object mein hume sbhi arguments milte hain jo hum send karte hain function call ke dauran.
    //blank function is valid. it gives no error as all 3 arguments are stored as parameters in the arguments object(array)
}

add(4, 5, 6);


function add() {
    console.log(arguments.length); //3 as 3 parameters are stored in arguments object
}

add(5, 7, 8);
add(6, 7, 8, 9); //4


function add() {
    console.log(arguments); //[7,6,8];
    console.log(arguments[1]); //6 //indivisual array element ko access karna
    console.log(arguments[5]); //undefined as there is no element at 5th position
}
add(7, 6, 8);

function add() {
    if (arguments.length == 0) {
        alert("no arguments passed");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        document.write(sum);
    }
}
add(5, 7, 9); //21
add(5, 8); //13
*/

//function ko ek variable mein store karne wale h.aur variable k name se function call karne wale h.
function add() {
    if (arguments.length == 0) {
        alert("no arguments passed");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        document.write(sum);
    }
}
let addition = add; //yaha add() mein () nhi denge
addition(5, 8); //13
