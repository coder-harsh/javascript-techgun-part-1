//this keyword is used in object
/*
let person = {
    firstName: "Harsh",
    lastName: "Kumar",
    sayHello() {//method
        console.log("Hello! i have a " + car.brand + " car"); //ek object k property ko dusre object k andr access kar sakte hain
    }

};
let car = {
    brand: "Tata",
    model: "Safari"
}

person.sayHello(); //Hello! i have a Tata car
*/

let person = {
    firstName: "Harsh",
    lastName: "Kumar",
    sayHello() {//method
        console.log("Hello! i am " + person.firstName + " & i have a " + car.brand + " car"); //Hello! i am Harsh & i have a Tata car
        //7:18:00 same object k andr hum person.first name kyon likhe direct hum likh sakte hain this.firstName | hume bar bar object name likhne ki jarurat  na pade i.e this: main hi object hun
        console.log("Hello! i am " + this.firstName + " & i have a " + car.brand + " car"); //Hello! i am Harsh & i have a Tata car
        //hume this hi use karna chahiye
    }

};
let car = {
    brand: "Tata",
    model: "Safari"
}

person.sayHello();