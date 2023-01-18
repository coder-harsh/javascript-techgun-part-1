/*
let book = ["Hindi", "English", "Gk", "CSE"];
document.write(book.length); //4(Array length);
book.push("Hindi");
document.write(book); //add Hindi at last of array;
document.write("<br>");
book.unshift("PPS");
document.write(book); //add PPS at begining of array;


let book = ["Hindi", "English", "Gk", "CSE"];
book.pop();
document.write(book); //cse will be deleted from book
document.write("<br>");
book.pop();
document.write(book); //Gk will be deleted from book. 2 bar pop use krne se last ka 2 element delete hoga.

document.write(book.pop()); //English will be printed as pop delete last element english


let book = ["Hindi", "English", "Gk", "CSE"];
book.shift();
document.write(book); //hindi will be deleted from Array from starting

// Key points

Push se last main array element add hoga
Unshift se begining mein array add hoga

Pop se last element of array delete hoga. lagatar 2 bar pop use karne se last 2 array element delete hoga
shift se begining element of array delete hoga.


// kisi v position ka array element delete karna ho to

let book = ["Hindi", "English", "Gk", "CSE"];
book.splice(1, 2);
document.write(book);  //1: kis position se array element delete karna start karna h. 2: us position(1) se kitna element delete karna hai. Hindi,CSE bachega sirf


let book = ["Hindi", "English", "Gk", "CSE"];
book.splice(2, 1);
document.write(book); //Hindi,English,CSE  bachega



let book = ["Hindi", "English", "Gk", "CSE"];
document.write(book.splice(2, 1));  //GK print karega kyonki GK hi delete hone wala tha

// array ko empty karne ka 2 tarika hota hain
let book = ["Hindi", "English", "Gk", "CSE"];
book = [];
console.log(book); //Array(0) i.e array becomes empty

let book = ["Hindi", "English", "Gk", "CSE"];
book.length = 0;
console.log(book); //[] i.e array becomes empty


let book = ["Hindi", "English", "Gk", "CSE"];
let position = book.indexOf("Gk");
document.write(position); // 2 as Gk is at 2.  it will print -1 if Gk will not be found in array
document.write(book.indexOf("GK")); //-1 as GK is not found in -1

//string and array mein length aur indexOf function same kam karta hain

//string character ka array hain i.e array of characters

let firstname = "Harsh";
document.write(firstname.length); //5
document.write(firstname[2]); //r bcs r is at 2 in Harsh

*/

// Check variable is Array or not
let book = ["Harsh", "Harish", "Hema"];



