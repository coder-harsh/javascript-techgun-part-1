
/*
let str = "Harsh \n Kumar"; //'Hi' | \n: escpe character for new line

let name = `Hi ${str}`; //"${str}": template literal | Hi Harsh | ``: below esc
console.log(name);
*/

/*esacpe character
\t: tab: 4space
\\: print \
\": print " bw " "
etc..
*/

/* string length
let str = "Harsh";
document.write(str.length); //5
*/

/*string se particular character fetch karna
let str = "Harsh";
document.write(str[3]); //s
*/

/* concatinate 2 strings or add 2 strings
let str = "Harsh";
let str2 = "Kumar";
document.write(str + " " + str2);
*/

/*compare 2 strings*/
/*let str = "Harsh";
if (str == "Harsh") {
    document.write("Equal");
}
else {
    document.write("Not Equal");
}
*/
// javascript is case sensitive

// functions to manipulate string in js
// to add 2 string we use + opreator or use concat function
/*let str = "Harsh";
let str2 = "Kumar";
let str3 = str.concat(str2);
document.write(str3); //HarshKumar
document.write(" ", str3); //HarshKumar
str3 = str.concat(" ", str2);
document.write(str3); //Harsh Kumar
*/

// string se ek substring nikalna: string se ek chota tukra nikalna
/*let str = "This is Javascript tutorial";
let str2 = str.substr(8, 19); //8:first character of substring is at, 19: length of substring i.e 8 va character se start karo aur 19 we character tK jao
document.write(str2); //avascript tutorial


str2 = str.substring(8, 18); //8va char se start karo aur 18ve character tak jao
document.write(str2); //Javascript
*/

//kisi v string ka position janana chahte hain
/*
let str = "I love js becuse it is Good";
let pos = str.indexOf("Good"); //23 if the string inside (" ") will not be in str variable then it will rreturn -1. -1 ke alawe kuchh v return karega to char string mein h.
document.write(pos);


let nam = "Hey everyone welcome back to Hey.";
let nam2 = nam.indexOf("Hey");
document.write(nam2); //0 as first Hey is at 0. also it will fetch "is in This".

//if we want to know position of other Hey rather than first Hey then we have to pass another parameter

nam2 = nam.indexOf("Hey", 10); //hey after 10th character. agar 1st string find karna hai then no need of parameter
document.write(nam2);  //29
*/


/*
let str = "This is js tutorial. it is a good tutorial.";
// let pos = str.indexOf('is'); 2 as first is in "This"
let pos = str.indexOf('is', 10); //24 i.e search is after 10 char.
document.write(pos);


//left se hi last char search karo ab
let str = "This is js a js tutorial. it is a good tutorial.";
let pos = str.lastIndexOf('js');
document.write(pos); //13 pe left se hi last wala js aayega


//pure string se aage pichhe dono se space hatana rahega toh
let str = " This is Js tutorial. this is a good tutorial. ";
let trmstr = str.trim();
console.log(trmstr);//string without space aage ya pichhe
console.log(str);//string with space


//sirf aage se space hatana ho toh
let str = " This is js tutorial ";
let trmstr = str.trimStart();
console.log(trmstr); //sirf start se space hat jayega
console.log(str);


//pichhe se space remove karna rahega toh
let str = " This is js tutorial ";
let trmstr = str.trimEnd();
console.log(trmstr); //sirf last se space hat jayega
console.log(str);


//string ko capital mein covert karna chahte hain
let str = "This is js tutorial. this is a good tutorial.";
let chr = str.toUpperCase();
document.write(chr); //str in capital


//string ko lowercase mein covert karna chahte hain
let str = "This is js tutorial. this is a good tutorial.";
let chr = str.toLowerCase();
document.write(chr); //str in lowercase



//replace char in string
let str = "This is js tutorial. this is a good tutorial.";
let chr = str.replace('good', 'very bad'); //replace good with very bad. agar str mein good nhi milega to str hi chr mein chla jayega.
document.write(chr);


//includes: agar koi char string mein hoga to true nhi to false return karo. but in indexof: it tells the index of char. agr nhi h char in string to return -1.
let str = "This is a js tutorial. This is a good tutorial.";
let chr = str.includes('html');
document.write(chr); //false as html is not in str

chr = str.includes('This');
document.write(chr); //true as This is present in str
//includes function ko if else mein use karo
*/