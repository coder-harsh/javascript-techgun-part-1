/*
//anonymous function: aisa function jiska koi name nahi ho

// abhi tak hum aise function bannate the name se
function show() {
    console.log("Hello world");
}
show(); //Hello world


function () { //ncaught SyntaxError: Function statements require a function name
    console.log("Hello world");
}


//anonymous function ko hum is tarah se declare karte hain
//function expression 👇
let show = function () {
    console.log("Hello world");
};

show(); //Hello world


//anonymous function ka example
//abhi hello world turat print ho gaya. but hum chahte hn ki Hello world kuch time baad print ho
// iske liye js mein ek function h


setTimeout(FunctionName, Timeinmillisec);


function show() { //ye function 3 sec baad execute hoga
    document.write("Hello World");
}
setTimeout(show, 3000); //3 sec bad Hello World print hoga but pahle jo likha hoga html mein wo ht jayega


//jb hum function banate hn to computer function name ko ram me store karke rkh leta h. tabhi toh hum function call karte han to wo aa jata h.

//hum function tb banate han jb hume same code baar bar execute karna rahta hain
//agr hum function ko ek hi bar execute karna chahte hain to  to hum function ko ram mein store karke memory waste kyon kare?
//ananymous function memory waste se bachne ke liye kam aata h kyonki hum function ka name hi nhi dete hain.

setTimeout(function () {
    document.write("Hello World");
}, 3000); //3 sec bad automatic Hello World aa jayega koi error nhi



//anonomus function hum tb banate hain 
1. jb hume function ek hi bar execute karna hain
2. jb hume function ko kisi k parameter mein pass karna ho i.e dusre function ke parameter mein function pass karna ho aur sirf ek bar karna ho
*/