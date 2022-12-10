//comarison operator
//== equal to
let t = 5 == '5'; //true bcs in js it will convert both types in string and then compare
document.write(t);


//=== equal value and datatype
//5===5 true
//5===6 false
//5==='5' false

let m = 5 == 5;
document.write(typeof m); //boolean

//not equal to
//8!=5 true
//5!=5 false

let c = 5 != 5;
document.write(c); //false

//not equal to and not equal data type
//5!==5 false
//5!== "5"; true
//5!== 8 true

//greater than
//5 > 8 false

//greater than equal to
//8>=8 true

//less than equal to
//8<=8 true

//comarison operator end

//logical operator

//&& and: dono condition true hoga tabhi true return karega

//(5<10 && 6>1) true

let r = (5 < 10 && 6 > 1);
console.log(r); //true

let x = (5 < 10 && 6 > 12);
console.log(x); //false

let f = (5 > 10 && 6 > 12);
console.log(x); //false

// || or: if any one condition is true then it will return true
let y = (5 < 10 || 7 > 15);
document.write(y); //true bcs anyone condition is true
y = (7 == 5 || 6 == 5);
document.write(y); //false bcs not anyone condition is true


//! not: change the result i.e opposite to condition
//!(6==5): true


