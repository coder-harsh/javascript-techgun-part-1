/*
function table(num) {  //parameter: function defined karte hue variable ka nam dete hain to isko kahte hain parameter. mtlb value le raha hain. yahan let likhne ki koi jarurat nhi hain.
    for (i = 1; i <= 10; i++) { //i declare karne ki jarurat nhi
        document.write(`${num} x ${i}=${num * i}`);
        document.write("<br>");
    }
}
table(8); //argument: jo value hum pass kar rahe hain ye hain argument
table(17);

//jo value function leta hain use parameter kahte hain
*/
//2 parameter accept karna ka function i.e 2 no ka sum
function add(num1, num2) {
    document.write(num1 + num2);
}
add(2, 4); //6 | num1:2  num2:4
add(2, 40, 4); //42 as 4 is not accepted by add function