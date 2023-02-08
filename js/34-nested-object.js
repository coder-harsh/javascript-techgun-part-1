//nested object : object k andr object
/*
var user = {} //blank obect
*/

var user = {
    id: 101,
    email: "abcd@gmail.com",
    personalInfo: {  //nested object named personalInfo | level:2
        name: "Harsh",
        address: { //nested object named address | level:3
            street: "Kunwar Tola",
            city: "Delhi",
            country: "India",
        }
    }
}

console.log(user);  //{id: 101, email: 'abcd@gmail.com', personalInfo: {…}}
console.log(user.personalInfo); //{name: 'Harsh', address: {…}}
console.log(user.personalInfo.address); //{street: 'Kunwar Tola', city: 'Delhi', country: 'India'}
console.log(user.personalInfo.address.country); //India


//when we will study json format then ye kam aayega
//api banane m kam aata h.
//nested object property jaisa likhenge