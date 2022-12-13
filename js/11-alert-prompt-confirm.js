/*
// alert("Welcome visitors");
let age = prompt('Enter your age?', 20); //20 is default value of prompt which user can change
if (age >= 18) {
    document.write('Your age is ' + age + " and you can vote"); //NO>18
}
else if (age != null) {
    document.write("input field is not blank..");  //A or value less than 18
}
else {
    document.write("input field is blank.."); //NULL
}
*/

var response = confirm('Are you sure, you want to delete?');

if (response) { //on condition we can also write response == true
    document.write('Your data is deleted'); //on clcik ok confirm return true
}
else {
    document.write('Delete is canceled'); //on click cancel, confirm returns false
}