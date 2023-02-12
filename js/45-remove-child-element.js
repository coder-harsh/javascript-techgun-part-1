//child element ko remove kaise karte hain

//kisi v element ko remove karne k liye jaruri h ki uska ek parent element ho. koi ek parent to hoga hi. body sbka parent hota h
/*
let par = document.getElementById("menu");
let elm = par.firstElementChild; //home wala li store hua h

par.removeChild(elm);  //home dynamicaly remove ho gaya h


let par = document.getElementById("menu");
let elm = par.firstElementChild.nextElementSibling;

par.removeChild(elm);  //about dynamicaly remove ho gaya h
*/

//agar pure ul ko remove karna h. to ul ka parent body ho jayega
let par = document.getElementById("menu");
document.body.removeChild(par);  //pura ul dynamically remove ho jayega ho jayega