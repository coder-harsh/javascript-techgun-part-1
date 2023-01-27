//problem
//suppose is library wale n v same variable bana liya. usko pata nhi h mere bare m. //6:38:42 tech gun
/*
let msg = "Hello thirdparty";
function greet() {
    console.log(msg);
}
greet(); //error: Uncaught SyntaxError: Identifier 'msg' has already been declared
*/

//solution
//siko immidately invoked function bana dete hn

(function () {
    let msg = "Hello thirdparty";
    function greet() {
        console.log(msg);
    }
    greet();
})();//no error. ab Hello myscript aur Hello thirdparty bhi print ho jayega


