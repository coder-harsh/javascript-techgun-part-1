//select all the elemnt by tag
/*
let bs = document.getElementsByTagName("h2");
for (let i = 0; i < bs.length; i++) {
    bs[i].innerHTML = "Hello";  //sara h2 change hoke hello ho jayegga
}
*/

let divi = document.getElementById("div1");  //div1 ko select karo
let ele = divi.getElementsByTagName("h2"); //div1 k andr jo v h2 hoga usi ko select karo. yahan root dom div1 h bcs div1 k andr hi h2 change karna h

for (let i = 0; i < ele.length; i++) {
    ele[i].innerHTML = "Harsh";
}
