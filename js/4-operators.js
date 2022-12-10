let x;    //console.log(x); will print undefined bcs we didnt assigned any value
x = 10; //assignment operator
let y = 3;
let z;
z = x + y;
document.write(z); //13
document.write(" | ");
z = x ** y; //1000
document.write(z);
console.log(x); //x=10

let p = 5, l = '5';
p = p + l; //in javascript adding variable+string, then it consider both as string i.e 55
document.write(p);
let fn = "Harsh";
let sn = "Kumar";
document.write(" " + fn + " " + sn); //Harsh Kumar

let m = 12;
m **= 2;
document.write(m); //144
