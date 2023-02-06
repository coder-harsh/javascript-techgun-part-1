/*
let person = {
    name: "Harsh",
    age: 21,
};

console.log(person.name); //Harsh

//if we need to write Harsh in upper case
console.log(person.name.toUpperCase());  //HARSH //string manipulation


//but hum chahte hn ki object se hi name property ka value capital hoke aye na ki bahar ho
let person = {
    name: "Harsh",
    age: 21,
    getname: function () {   //getname=method name
        return this.name.toUpperCase();
    }
};

console.log(person.getname()); //HARSH //but the problem is hume name property ko access karna tha but hum ek method ko access kar rahe hn
//method ko call karne ka tarika h methodname likheneg aur ()


//suppose ek aisa function banna ho jo method k trike se call na hoke ek property ki tarah call ho. usi m help karta h getter aur setter function

let person = {
    name: "Harsh",
    age: 21,
    get getname() {  //getter function: koi v property ko get karne k liye //getname=method name
        return this.name.toUpperCase();
    }
};

console.log(person.getname);  //HARSH

//jb hume data ko manipulate karke aur original data wahi rahe aur change karke object k bahar send karna hoga to getter function kam aayega

//getter m hum get aur setter m hum set karte hn


//abhi tak hum aise set karte the

let person = {
    name: "Harsh",
    age: 21,
    get getname() {
        return this.name.toUpperCase();
    }
};

person.name = "Saurabh";
console.log(person.getname);  //SAURABH



//now with set function we manipulate name into capital
*/
let person = {
    name: "Harsh",
    age: 21,
    set setname(n) { //name property m uppar case value set/store hoga
        this.name = n.toUpperCase();
    }
};
console.log(person.name); //Harsh bcs. abhi n m value set nhi hua
person.setname = "saurabh";
console.log(person.name); //SAURABH i.e name property capital m set/change ho jayega
//jb hume value ko manipulate karke + original data v change ho tb send karna rahega to setter ka use karenge
//jb hume kisi v property k value ko manipulate karke object ka bahr lana rahe to getter ka use karenege

//normal method se v ye ho sakta h

//jb hume value save karte hue hume use manipulate karna h.

//ex: suppose hume comment se abusive word remove karna ho  to hum comment ko setter function se cross krke store karenge



