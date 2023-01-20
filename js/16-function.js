/*
function are of 2 types.

1. Predefined(banaya kisi or ne) ex: alert prompt etc.
2. Userdefined(aap hi banake use karte ho)

Function:it is a blok of statements which is used to run same blok of statements multiple times. i.e reptitive tasks


write table of 2 manually

for (i = 1; i <= 10; i++) {
    document.write(`2 x ${i}=${2 * i}`);
    document.write("<br>");
}
*/

// now write table of 2 with function

function MultiTable() { //function defined only abhi use nhi kiya hain
    for (i = 1; i <= 10; i++) {
        document.write(`2 x ${i}=${2 * i}`);
        document.write("<br>");
    }
}

MultiTable(); //function call

document.write("<br>"); //new line

document.write("Hello Sir");

document.write("<br>"); //new line

MultiTable(); //function call
