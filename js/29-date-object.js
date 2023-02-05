//2nd predefined object: Date object | 1st: math object
//jb hum date /time se deal karenge to hume is object ki jarurt padegi

// ye object new trike se iniate hoga
/*
let x = new Date(); //is tarke se date object banega
document.write(x); //hamre browser/computer kka dte store hoga //Fri Feb 03 2023 14:48:50 GMT+0530 (India Standard Time)


//mujhe ab cureent date nhi chajhiye
let x = new Date(2001, 07, 02, 15, 33, 56, 7); //js m jan 0 m store hota h aur dec 11 m   | 14: feb   //year, month,date,hour, min,sec,milisecnd  //, m eneter kiye but print hoga formated //ab hume isi m parameter send karte hn. isme mxm 7 parameter ja sakta h
document.write(x);


//hum chahe to parameter kam v likh sakte hn
let x = new Date(2001, 07, 02, 15, 33, 56); //Thu Aug 02 2001 15:33:56 GMT+0530 (India Standard Time)
x = new Date(2001, 07, 02, 15, 33); //Thu Aug 02 2001 15:33:00 GMT+0530 (India Standard Time) //sec 0 ho jayega
x = new Date(2001, 07, 02, 15); //Thu Aug 02 2001 15:00:00 GMT+0530 (India Standard Time) //min v 0 ho jayega
x = new Date(2001, 07, 02); //Thu Aug 02 2001 00:00:00 GMT+0530 (India Standard Time) | time 0 ho jayega
x = new Date(2001, 07); //automatioc 1 august ho jayega i.e day 1 ho jayega
x = new Date(2001, 0); //0 se jan ho jayega | Mon Jan 01 2001 00:00:00 GMT+0530 (India Standard Time)
// x = new Date(2001); // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time) | min hume 2 parameter year aur month batana padega nahi to wrong dega
document.write(x);

//2 parameter minm dena mmandatory h: date & month
//koi parameter nhi denge to current date time dega


//abhi hum parameter as a argument pass karte the
//ab hum as a string apne format m value de skate hn

let x = new Date("October 13, 2018 11:12:33"); //Sat Oct 13 2018 11:12:33 GMT+0530 (India Standard Time)
//pre defined bahut sare format h jisko as  string pas karenge to work karge
//kisi v predefined format m value dalenge to wo js ek hi format m likhega isse date time compare karna bahut aasan ho jayega
document.write(x);

//aisa man liya gaya h ki jan 1 1970 se hi computer date start hua h. time mili second m store hota h



//now date object method

//milisecond ko dekhne k tarika dhundte hn
let x = new Date("October 13, 2018 11:12:33"); //is date time ko milisecond m print karega  jan 1 1970 se
document.write(x.getTime());  //time in millisecond 1539409353000


//if we need only year
let x = new Date("October 13, 2018 11:12:33");
document.write(x.getTime());//1539409353000: is date time ko milisecond m print karega  jan 1 1970 se

document.write(x.getTimezoneOffset()); //-330: Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
document.write("<br>")
document.write(x.getFullYear()); //only year 2018
document.write("<br>")
document.write(x.getMonth()); //only month 9: because jan is zero
document.write("<br>")
document.write(x.getDate()); //only date 13
document.write("<br>")
document.write(x.getHours()); //only hour 11
document.write("<br>")
document.write(x.getMinutes()); //only minitue 12
document.write("<br>")
document.write(x.getSeconds()); //33 only seconds
document.write("<br>")
document.write(x.getUTCMonth()); //9


//Js sunday ko 0 se start karta hain aur saturday ko 6 se end karta hai

// week name print karna rahega to pahle week name ko array m store karenge aur then ifelse/switch se day name ko day no se print klarenge


//jaise hamare pass get elementth waise hmare pass set krne ka v function h

//chnage karne ke liye hamare pass set function h
// hum set to parameter pss kr k v kr sakte H
//but if we need to set one element
//change karne k liye hamare pass set function ata h

let m = new Date("October 13, 2018 11: 12: 33");
let v = String(m.getFullYear()) + " " + String(m.getMonth()) + " " + String(m.getDate());
console.log(v); //2018 9 13


let x = new Date("October 13, 2018 11: 12: 33");
x.setFullYear(2020);//hame pahle set karna hoga
console.log(x.getFullYear()); //2020
console.log(x); //Tue Oct 13 2020 11:12:33 GMT+0530 (India Standard Time) //direct console m set nahi kar sakte hn
x.setMonth(2); //2: month
console.log(x); //Fri Mar 13 2020 11:12:33 GMT+0530 (India Standard Time)
x.setDate(20);
console.log(x); //Fri Mar 20 2020 11:12:33 GMT+0530 (India Standard Time)
x.setHours(13);
console.log(x); //Fri Mar 20 2020 13:12:33 GMT+0530 (India Standard Time)
x.setSeconds(2)
console.log(x); //Fri Mar 20 2020 13:12:02 GMT+0530 (India Standard Time)
x.setMinutes(61);
console.log(x); //Fri Mar 20 2020 14:01:02 GMT+0530 (India Standard Time)

//suppose if we want to know ek particular date se 50 din bad kaun sa date hoga
let x = new Date("October 13, 2018 11: 12: 33");
x.setDate(x.getDate() + 50); //getDate()+50 se  uppar wale date m 50 din add kar diya gaya h
console.log(x); //Sun Dec 02 2018 11:12:33 GMT+0530 (India Standard Time)



let x = new Date("October 13, 2018 11: 12: 33");
// console.log(x.getDay()); //6=sat
let y = x;
console.log(x); //Sat Oct 13 2018 11:12:33 GMT+0530 (India Standard Time)
y.setDate(x.getDate() + 50); //as y=x, so changing y will change x too
console.log(x); //Sun Dec 02 2018 11: 12: 33 GMT + 0530(India Standard Time)
console.log(y); //Sun Dec 02 2018 11: 12: 33 GMT + 0530(India Standard Time)


//now if we want to manipulate date
let x = new Date("October 13, 2018 11: 12: 33");
let y = new Date("October 13, 2018 11: 12: 33");

y.setDate(x.getDate() + 50);
console.log(x); // Oct 13 2018 11: 12: 33 GMT + 0530(India Standard Time)
console.log(y); //Sun Dec 02 2018 11: 12: 33 GMT + 0530(India Standard Time)


//how to compare date
let x = new Date("October 11, 2023 11: 12: 33");
let y = new Date(); //current adte
if (y > x) {
    console.log("x is past date");
}
else if (x > y) {
    console.log("x is future date"); //✔
}
else {
    console.log("x same as y");
}
*/

//jb jb date/time store manipulate karne ki baat aaye to date object use karna
