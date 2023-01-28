/*
//object banate kaise hn
let person = {};
console.log(person); //type=object


let person = {//object nme
    firstName: 'Harsh', // , deke 1 line m hi likh sakte hn //propeerty: value
    lastName: 'Kumar' //but new line is more preferable. last property m , dene ki jarurt nhi h. de v skte hn nhi v
};
console.log(person.firstName); //Harsh
console.log(person.lastName); //Kumar

//we cn access object property with 2 method
//. notation and array like notation



let person = {
    firstName: 'Harsh', //ek property m , nhi bhi de sakte hn
    'last Name': 'Kumar' //last & Name k bich space dena rahega to '' ke bich property rakhenge. property name m space nhi recommend kiya jata h. bcs ye . notation m kam nhi karta error deta h
}

console.log(person['firstName']); //Harsh, '' m propery likhna mandatory h array like notation m
console.log(person['last Name']); //Kumar
console.log(person.age); //undefined as age propery is not defined
console.log(person); //{firstName: 'Harsh', last Name: 'Kumar'} array ke tarah all property dekhne k liye



//kisi property k value ko modify karna
let person = {
    firstName: 'Harsh'
}

person.firstName = 'Harish';
console.log(person.firstName); //Harish


//hum 3rd property bahar add karna chahte hn to;

let person = {
    firstName: 'Harsh'
}

person.age = 25; //access modify aur add property v same tarike s krte hn
document.write(person); //[object Object]
console.log(person); //{firstName: 'Harsh', age: 25}


//property delete karna chahte hn
let person = {
    firstName: 'Harsh',
    rank: 23
}

delete person.rank;
console.log(person); //{firstName: 'Harsh'}


//check karna h ki property object m h ya nhi
let person = {
    firstName: 'Harsh',
    rank: 23
}

console.log(person.height); //undefined: property nhi h is object m

//2nd method to check property
//using in operator
console.log('height' in person); //false. //true false m return karega
console.log('rank' in person); //true
*/

//hame patn nhi h is pbject m kitne property h  but hum sare property access karna chahte hn
// then we use forin loop

let person = {
    firstName: 'Harsh',
    lastName: 'Kumar', //sre propery ko value dena mandatory nhi to error ayega. lastName is not defined
    rank: 23
}

for (let key in person) { //key m sare property ka name aa jayega
    // console.log(key); //firstName lastName rank
    console.log(key + ": " + person[key]); // firstName: Harsh lastNmae: Kumar rank: 23 | agar property and value access krna rahega to only we can use array like notation nhi to value undefined aayega
}

//loop ke anadr only array like notation kam karega