//kis tarike se elemnt ko select kiya jata h id se. bcs pahle select karenge tabhi chnage/add/delete kuch v kar sakte hn
//ek element select karna k liye id se kareneg
/*
let elem = document.getElementById("mytext");  //document: parent object| getElementById: method name
console.log(elem); // <h2 id="mytext">This is 1st text</h2> elem p pura line store ho jayega


//aisa id dete hn h nhi to wo null return karega

let sp = document.getElementById("st");
console.log(sp); //null
*/

//ab hum element select karne k bad element k value, style chnage kar sakte hn. ya iska koi children add ya koi sibling(uske niche koi element) add kar sakte hn
//ek property h innerHtml jisse kisi v elemnt k andr ka chij add/change kar sakte hn
let elem = document.getElementById("mytext");  //elem m ye element as object store hu h 
elem.innerHTML = "<h2>Hi</h2>"; //p k andr wla text replace hoke <h2>Hi</h2> ho jayega
