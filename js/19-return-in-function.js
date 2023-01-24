/*
function add(a, b) {
    document.write(a + b);
}
add();//NaN as we didnt send any arguments
add(3, 6); //9


//now return a value from function then print that value outside function
function add(a, b) {
    return a + b; //statement reuturn karna
}
let c = add(6, 7);
document.write(c); //13


function add(a, b) {
    let d = a + b;
    return d; //d ka value c mein store ho jayega | variable return karna
}
let c = add(6, 7);
document.write(c); //13


//function se ek value return karna
function add(a, b) {
    let d = a + b;
    return 0;
}

let c = add(7, 9);
document.write(c); //0 as function returned 0 to c


//function by default undefined return karta h.
function add(a, b) {
    let d = a + b;
}
let c = add(3, 5);
document.write(c); //undefined as function didnt return anything to c


function add(a, b) {
    let d = a + b;
    return d;
}
let c = add(k, e); //k is not defined
let c = add(a,b); //a is not defined outside add function
document.write(c); 
*/

//hum function se ek array bhi return kar sakte hain
function add(a, b) {
    let d = [2, 3, 4];
    return d;
}
let c = add(2, 5);
document.write(c); //2,3,4
//agar multiple value return karna h to usko array mein store karo aur array return kar do

//hum multiple thing return nhi kar sakte bcs function mein return ke niche ka code execute nhi hoga.