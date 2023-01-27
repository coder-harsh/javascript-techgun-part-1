//pahle hum function banate the phir call karte the
//immediately invoked function: the function which is declared and call together.
/*
(function () {
    console.log("Hello world");
    alert("Hello world");
})(); //function bananya bhi aur execute bhi kar diya


//why to use this function

global variable banane se memory lost hoga kyonki wo hamesha ram m store rahega
agar aisa fnction banna h jiska sirf ek bar use ho to hum immediately invoked function hi bannayenge memory save karne k liye
aisa function jo ek hi bar use ka ho to hum ananymous function banake immediately invoked kara denge

(function () {
    let string = "Hello"; //function k bahar ye varible delete ho jayega
    console.log(string);
    alert(string);
})();


let string = "Hi"; //no error
(function () {
    let string = "Hello";
    console.log(string);
    alert(string);
})();
*/

//jquery ki tarah js m bhi bahaut library hote hn
let msg = "Hello myscript";
function show() {
    console.log(msg);
}

show();