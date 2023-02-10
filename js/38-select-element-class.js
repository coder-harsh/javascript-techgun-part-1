//class k through ek se jyda elemnt ko select kar sakte hn
/*
let hk = document.getElementsByClassName("elc");
console.log(hk); //HTMLCollection(2) i.e list ka collection bn gaya h array m.
// hk.innerHTML = "<p>Hello</p>"; //isliye ye line kam nhi kiya

for (let i = 0; i < hk.length; i++) {
    hk[i].innerHTML = "<p>Hello</p>";  //elc class walla elemnt k andr m hello p k andr hoga
}
*/

//ab sirf whi element select hoga jisme 2 class hoga

let hk = document.getElementsByClassName("elc cl2");

for (let i = 0; i < hk.length; i++) {
    hk[i].innerHTML = "<p>Hello</p>";  //sirf last li m hello write hoga p tag k andr
}