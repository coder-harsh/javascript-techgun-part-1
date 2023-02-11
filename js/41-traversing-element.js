//indirect selcetion. now select the parent element by their child id. bcs if we selcect ul by tag then there are 2 ul
/*
let elm = document.getElementById("intro"); //getelementbyid is method
console.log(elm); //<li id="intro">List 1</li>

let parent = elm.parentElement; //elm.parentElement is property
console.log(parent); //intro li ka parent ul select ho jayega

parent.innerHTML = "Hello"; //parent ul k andr hello likh do.



//ek elemnet select hoga to noram change kareneg multiple element m change karne  liye for loop lagayenege


//now parent ko id dekar 1st child element select karna

let elm = document.getElementById("intro");
console.log(elm); //intro id wala ul select ho jyega

let fchild = elm.firstElementChild;
console.log(fchild); //intro id wale ul ka first li jsime list 1 likha h select hoga

//parent elemnt ko id deke last child select karna
let lchild = elm.lastElementChild;
console.log(lchild); //into class m last child select hoga


//all child select ho intro id wale parent ka

let child = elm.children;
console.log(child);
for (let i = 0; i < child.length; i++) {
    child[i].innerHTML = "Changed";  //intro parent ka all li change ho jayega
}
*/

//sibling ko select karna. jaise kisi elemnt pe id ho to uske level wale 1st element ko select karna
//select list 1 by id of list 2

let ele = document.getElementById("intro");
console.log(ele); //<li id="intro">List 2</li> store ho jayega ele m
let fsibling = ele.previousElementSibling;
console.log(fsibling); //list 1 select ho gaya
let nsibling = ele.nextElementSibling;
console.log(nsibling); //list 3 select ho gaya