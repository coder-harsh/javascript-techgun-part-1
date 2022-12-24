/*
let type = true;
alert(typeof type); //boolean
//type='hello': string 
//type=20: number
let st = "true";
alert(typeof st); //string
st = "20";
alert(typeof st); //string


let str = 5 + null; //automatic consider it a number
alert(typeof str);
console.log(str); //5


str = "5" + null; //automatic consider it a string
alert(typeof str);
console.log(str); //5null


str = "5" + 2; //automatic consider it a string as the first char is string so it consider 2 as a string. also work of + is to add no and string both.
alert(typeof str);
console.log(str); //52


str = "5" - 2; //automatic consider it a number as the only work of - is to substract
alert(typeof str);
console.log(str); //3


str = "5" * "2"; //automatic consider it a number as the only work of * is to multiply number
alert(typeof str);
console.log(str); //10

str = "5" * "yes"; //automatic consider it a number as the only work of * is to multiply number
alert(typeof str); //number
console.log(str); //Nan: not a number

*/

/*how to convert data type of variable with js function*/
/*
1. string()
2. Number()
3. Boolean()


let type = 4;
document.write(typeof type); //number

let newtype = String(type);
document.write("<br>" + typeof newtype); //string

let var1 = false;
document.write("<br>" + typeof var1); //boolean


let var2 = "32"; //string
var2 = Number(var2);
document.write("<br>" + typeof var2); //number
document.write("<br>" + var2); //32


let var3 = "hello";//string
var3 = Number(var3);
document.write(typeof var3);  //number
document.write(var3); //Nan


let var4;
document.write("<br>" + var4); //undefined
document.write(typeof var4); //undefined
*/


let var5 = "hello";
var5 = Boolean(var5);
document.write(var5); //true as var5=1 | false as var5=0 | 0 chhor ke koi v no true hoga. | string v boolean m true hoga