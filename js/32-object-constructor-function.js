//why we need a object constructor function
var stuent1 = {
    firstname: "Harsh",
    lastname: "Kumar",
    age: 25,
    class: 5
}
//if also want to create student2 object with same property
var stuent2 = {
    firstname: "Saurabh",
    lastname: "Kumar",
    age: 26,
    class: 3
}

//agar isi tarah hume 10 object with same property with diff. value banna pade to hume 10 bar likhn padega
//for that this is shotcut
//for that hum baki programming language m class banate hn but js m class aaya es6 k bad
//es5 tak object constructor function use krte the class k jagah. baki language m shuru s hi class tha
//same property k multiple object banna
/*
function Student(first, last, age, cls) {  //object constructor function  //Student: camel case name of object constructor function is not mandatory but good practice. isse ye pata lagega ki ye object constructor function h normal function nhi
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;

}


// real object banna
var student1 = new Student("Harsh", "Kumar5", 25, 5);  //Student=object constructor function name. student1 is object
var student2 = new Student("Saurabh", "Kumar", 24, 3);  //new object bnna rahe to just 1 line ka kam h

console.log(student1);  //Student {firstName: 'Harsh', lastName: 'Kumar5', age: 25, class: 5}
console.log(student2);  //Student {firstName: 'Saurabh', lastName: 'Kumar', age: 24, class: 3}




function Student(first, last, age, cls) {  //object constructor function  //Student: camel case name of object constructor function is not mandatory but good practice. isse ye pata lagega ki ye object constructor function h normal function nhi
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;

}


var student1 = new Student("Harsh", "Kumar5", 25, 5);

//if we need to add 1 more property
student1.nationality = "Indian";  //abhi ye student1 object m add hua h na ki object constructor function m. object constructor function m kiase add krna h bad m dekhenge
Student.nationality = "Japan"; //ye add nhi hoga ye particular object m add karne k trika h
console.log(student1); //Student {firstName: 'Harsh', lastName: 'Kumar5', age: 25, class: 5, nationality: 'Indian'}
console.log(student1.age);  //25
*/

//hum method v add kar sakte hn
function Student(first, last, age, cls) {  //object constructor function  //Student: camel case name of object constructor function is not mandatory but good practice. isse ye pata lagega ki ye object constructor function h normal function nhi
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    this.nationality = "Indian"; //student1 and 2 dono m nationality aayega
    this.name = function () {  //name method add | ye method dono object student1 and 2 m aayega
        return this.firstName + " " + this.lastName;
    }
}



var student1 = new Student("Harsh", "Kumar", 25, 5);
var student2 = new Student("Saurabh", "Kumar", 24, 3);

student1.name = function () {  //name method add | ye method student1 object m add hua h
    return this.firstName + " " + this.lastName;
}

console.log(student1.name());  //Harsh Kumar
console.log(student2);  //Student {firstName: 'Saurabh', lastName: 'Kumar', age: 24, class: 3, nationality: 'Indian'}
