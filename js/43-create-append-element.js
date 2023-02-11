//append means jo existing chij h uske bad add kar dena

//pahle element create karna
/*
let varh1 = document.createElement("h1"); //create element is a method. yahan h1 tag create ho gaya h

//now add element after specific element

let ele = document.getElementById("intro");
ele.appendChild(varh1); //intro m p tag k bad ek h1 element add karna. abhi blank h1 add hoga. //<h1></h1>
console.log(varh1); //<h1></h1>

let text = document.createTextNode("This is genrated h1 tag"); //this will create a text node
varh1.appendChild(text); //This is genrated h1 tag under h1 tag after p tag. this will append text in varh1 var i.e h1 tag

*/

//abhi jo h1 banaya h usme class/id lgana h

let varh1 = document.createElement("h1");
varh1.className = "try pi"; //genrated h1 m try & pi class lag jayega. // <h1 class="try pi">This is genrated h1 tag</h1>
varh1.id = "intro1"; //genrated h1 m intro1 id lag jayega. <h1 class="try pi" id="intro1">This is genrated h1 tag</h1>
let ele = document.getElementById("intro");
ele.appendChild(varh1);
let text = document.createTextNode("This is genrated h1 tag"); //createTextNode is a method
varh1.appendChild(text);


//now body m content k bad h1 append karna
let bh1 = document.createElement("h1"); //body k content k badd blank h1 add ho jayega
document.body.appendChild(bh1);


//abhi hum text add kisiv element m createTextNode method s kar rahe hn. ab hum text property s add karenge
bh1.textContent = "content add in body h1"; //ab hum body k content k bad k h1 m text add karte hn property se. textContent is a property

//hum textContent k through text ko append hi nhi but text read v kar sakte hn

let para = document.getElementById("p1");
console.log(para.textContent); //This is a p tag | text under p tag with p1 id