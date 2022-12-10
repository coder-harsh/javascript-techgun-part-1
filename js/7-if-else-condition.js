let age = 15;
let votercard = 'no';
if (age >= 14 && votercard == 'yes') {
    alert("You can vote!"); //bracket is not mandatory if there is 1 line in { }.
    // alert("hey");
}
else if (age >= 14 && votercard != "yes") {  //"l"=='l'
    alert("Get your voter card!");
}
else {
    alert("You cannot vote!");
}