//this is powerful
//isse hum html ko insert karte hn kisi v position p

//baki sb method m ek hi position defined h append m insert m i.e before but isme 4 position h

/*
isse kisi v ek element ke 4 position p insert kar sakte hn
isme kisi v tarah ka element create karne ki jarurat nhi hoti
hum text m koi v html likh denege wo usse as a html prse kar leta h automatic
*/

//1st position: before begining
//jo element select karenge uske pahle add karega


//after begining
//jo element select karenge uske start hone k bad uske 1st child m



//before end
//jo element select karenge uske lst child m i.e before end


//after end
//jo element select karenge uske last child m i.e after end


///ye isliye powerful h ki ek element ko select kiya to uske khi v add kar sakte hn


//ab isko use kaise karte hn
/*
let elm = document.getElementById("intro"); //select div element

let htm = "<h1>new Harsh in h1</h1>"; //ye html khud parse ho jayega
elm.insertAdjacentHTML('beforebegin', htm); //new Harsh in h1 will written before the div with #intro id. 1st parameter is position. 2nd is what to insert


//after begin

let elm = document.getElementById("intro"); //select div element
let htm = "<h1>new Harsh in h1</h1>"; //ye html khud parse ho jayega
elm.insertAdjacentHTML('afterbegin', htm);  //div ka bad 1st child ki tarh add ho jayega.  <h1>new Harsh in h1</h1>



//beforeend
let elm = document.getElementById("intro"); //select div element
let htm = "<h1>new Harsh in h1</h1>"; //ye html khud parse ho jayega
elm.insertAdjacentHTML('beforeend', htm);  //<h1>new Harsh in h1</h1> willbe added as last child of div
*/

//afterend
let elm = document.getElementById("intro"); //select div element
let htm = "<h1>new Harsh in h1</h1>"; //ye html khud parse ho jayega
elm.insertAdjacentHTML('afterend', htm); //div k bahar add ho jyega <h1>new Harsh in h1</h1>
