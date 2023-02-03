//2nd predefined object: Date object | 1st: math object
//jb hum date /time se deal karenge to hume is object ki jarurt padegi

// ye object new trike se iniate hoga
/*
let x = new Date(); //is tarke se date object banega
document.write(x); //hamre browser/computer kka dte store hoga //Fri Feb 03 2023 14:48:50 GMT+0530 (India Standard Time)


//mujhe ab cureent date nhi chajhiye
let x = new Date(2001, 07, 02, 15, 33, 56, 7); //js m jan 0 m store hota h aur dec 11 m   | 14: feb   //year, month,date,hour, min,sec,milisecnd  //, m eneter kiye but print hoga formated //ab hume isi m parameter send karte hn. isme mxm 7 parameter ja sakta h
document.write(x);
*/

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
