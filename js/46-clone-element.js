//hame ul ko clone karna h to ul ko select  karna h

let mn = document.getElementById("menu");
let clone = mn.cloneNode(true); //ul ko copy karna h isliye mn. kiye | parameter true hoga i.e boolean m. true likhne se pura elemnet aur uske child v clone ho jayega. false pass karne se sirf parent element copy hoga

console.log(clone);
/*
clone m ul store ho jayega
<ul id="menu">
    <li>Home</li>
    <li>About</li>
    <li>Social</li>
    <li>Contact</li>
</ul>
*/

//ab hume append karna h
//id change karna h
clone.id = "copy-ul"; //ab clone ul ka id change ho jayega
document.body.appendChild(clone);  //2 ul cone ho jayega body m. id v same hi rahega ul ka. but hum upar m clone ka id change kiye hn to yahan id changed rahega






let parclone = mn.cloneNode(false); //false pass karne se sirf parent element copy hoga
console.log(parclone); //<ul id="menu"></ul> sirf parent wala line copy hu h
