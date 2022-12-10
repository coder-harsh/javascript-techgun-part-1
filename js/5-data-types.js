let x = 5;
document.write(x);
x = 'hello'; //dynamic data variable. in js we can store diffrent type of data in a variable.
document.write(x);
x = "hi'i";
document.write(x);
let y = 'hel"lo'; //single quote ko print karne k liye double quote ke andar lenge. aur double quote ko print karne k liye single quote ke andr lenge.
document.write(y);
let z = "har\'sh"; //double quote ke anadr double quote likhna hain to \" se likhenge.
document.write(z);

//boolean: true or false
let c = 2 < 3;
document.write(c);
console.log(c);
//array
let l = ["harsh", "tom", "shivam"];
document.write(l[10]); //undefined
//object 
let man = { name: "Harsh", age: 50 };

//undefined: ek variable declare kar do aur usko kuchh assign mt karo. undefined is also a data type.
let p;
document.write(' ');
document.write(p);
let f = "";
document.write(f); //it will be blank as we given a blank string to f

let u = typeof 10; //typeof is a operator.
document.write(u); //number

let b = typeof 4.5;
document.write(b); //number

let g = typeof ("Harsh");
document.write(g); //string

//let t = harsh; //not defined
let d;
console.log(typeof d);  //undefined

let s = "harsh";
alert("hello " + s); //hello harsh

alert(`hello ${s}`);  //${s}: template literal. it will only work on ``(esc ke niche ka button)