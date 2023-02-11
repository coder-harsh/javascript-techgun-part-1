//ab element before an element
/*
let list1 = document.getElementById("list"); //parent

let item = document.createElement("li");
item.textContent = "new list 5";

let pos = list1.firstElementChild;  //list1 store

list1.insertBefore(item, pos);  //item:kisko add karna h | kis position se pahle add karna h

//new list 5 list se pahle add ho jayega


//list 2 k upar karna h

let list1 = document.getElementById("list"); //parent

let item = document.createElement("li");
item.textContent = "new list 5";

let npos = list1.firstElementChild.nextElementSibling;
list1.insertBefore(item, npos); //list 1 k badd new list 5 add ho jayega



//list2 k badd add karna h
let list1 = document.getElementById("list"); //parent
let item = document.createElement("li");
item.textContent = "new list 5";
let npos = list1.firstElementChild.nextElementSibling.nextElementSibling;
list1.insertBefore(item, npos); //list 2 k badd new list 5 add ho jayega


//kahi v list m add karna rahega to add karte jayenge nextElementSibling
*/

//ul se pahle lagna rahega to parent body ban jayega


let par = document.body;  //parent select ho gaya

let elm = document.createElement("h2");
elm.textContent = "This is a new element";


let ivar = document.getElementById("list");
par.insertBefore(elm, ivar);  //body m elm ko list se pahle add karna h. This is a new element will be added before list

//now you understand kisi elemnt k andr kaise add karte hn aur body k andr kaise add karte hn
