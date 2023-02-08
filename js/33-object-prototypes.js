function Student(first, last, age, cls) {  //object constructor function  //Student: camel case name of object constructor function is not mandatory but good practice. isse ye pata lagega ki ye object constructor function h normal function nhi
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    // this.name = function () {  //name method add | ye method dono object student1 and 2 m aayega
    //     return this.firstName + " " + this.lastName;
    // }
}
var student1 = new Student("Harsh", "Kumar", 25, 5);
var student2 = new Student("Saurabh", "Kumar", 25, 5);

//unlike object of we want to add method in object constructor function outside it i.e badd m then we need protypes of object
Student.prototype.nationality = "Indian";  //dono obj student1 and student2 m add ho jayega ye property
Student.prototype.name = function () {  //name method add with object prototype | ye method dono object student1 and 2 m aayega
    return this.firstName + " " + this.lastName;
}
//ye ek prototype super class h jisko js ka har ek class intherit karta h
console.log(student1.nationality); //Indian
console.log(student2.nationality); //Indian
console.log(student2.name()); //Saurabh Kumar

