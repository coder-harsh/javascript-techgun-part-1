let isLoggedin = 1;   //if 0 logout if 1 login

/*
if (isLoggedin == 0) {
    document.write('Login');
}
else {
    document.write('Logout');
}
*/

//ternary operator
// let option = isLoggedin == 1 ? "Logout" : "Login";
// document.write(option);   //logout(true)    login(false)


// nullish coalescing operator: this operator means if the variable is undefined then print the string in ""
let user;
// user = "Harsh";
alert(user ?? "Guest");