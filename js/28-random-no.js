//javascript mein random no kaise genrate kiya jata hain
//ludo game mein no genarate karna h
//captcha no
//isme hume math object kam aata h
/*
var x = Math.random(); //page refresh p no change hoga | 0-1 k bich no generate karega hmesha i.e 0 aur 1 choor k
document.write(x);


//hum esse useful bana ke 0-9 k bich no generate karna chahte hn
//abhi only 0 se uppar ka no generate karega
var x = Math.floor(Math.random() * 10); //0 se 9 k bich no genrate karega
var x = Math.floor(Math.random() * 11); //0 se 10 k bich no genrate karega | jitna no ka limit chahiye usse ek jyda se multiply karenge
var x = Math.floor(Math.random() * 101); //0 se 100 tk no generate karna
var x = Math.floor(Math.random() * 10) + 1; //0 se 10 tk no generate karna
document.write(x);


//hum ab 2 no k bich ka no generate krna chahte only.
//abhi 10 se multiply karenge to 9 tk no dega
// 1to 10 k bich no ggenerate karna

let x = Math.floor(Math.random() * 10) + 1;
console.log(x); //1 to 10 k bich m no aayega. 1 add karne se 9 ab 10 tk chla gaya


//15 se 25 tk k bich no generate karma chate hain

//min no included rahta h max excluded
let x = Math.floor(Math.random() * (25 - 15)) + 15; //15 se 24 tak
console.log(x);


//if need to genrate random no again and again
//min included h but max excluded h

function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min)) + min; //formula  | +min=yahan se start hoga , max-min: itna range tk random no generate karo
    return x;
}

console.log(getRandom(10, 20)); //10 se 19 tak



//min v include rahe aur max v
function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min) + 1) + min; //formula  | +min=yahan se start hoga , max-min+1: itna range+1 tk random no generate karo
    return x;
}

console.log(getRandom(10, 20)); //10 aur 20 v aa sakta h
//aisa formul;a internet p mil jayga
*/