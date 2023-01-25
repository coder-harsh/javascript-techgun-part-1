// global vs local variable
/*
let ya var se variable declare kr sakte hn. const se constant declare hota h.


let car = "audi"; //global variable: the variable which is declared outside the function
function add() {
    let result = 33; //local variable: the variable which is declared inside the function. we can only access the local variable inside the function. ccess the locl variable outside the function gives error
    // console.log(result); //33
    console.log(car); //audi
}
add();
// console.log(result); //Uncaught ReferenceError: result is not defined
// console.log(car); //audi



//local variable function ke bahar nikalte hi delete ho jata h.
// hum same name ka local variable dusre function m use kar sakte hain but function ke bahar use nhi kar sakte


function add() {
    let result = 50;
    console.log(result); //50
}
function subb() {
    let result = 40;
    console.log(result); //40
}

add();
subb();
*/

//same name ka global variable dubara declare nhi kar sakte h. but fyda ye hai ki global variable ko function ke andr bahar khi v use kar sakte h.
let car = "audi";
let car = "bmw"; //Uncaught SyntaxError: Identifier 'car' has already been declared