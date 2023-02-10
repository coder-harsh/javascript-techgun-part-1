//sabse powerful selector
//select isa p tag jisme intro class h
/*
let vari = document.querySelector("p.intro");
vari.innerHTML = "changed text";
console.log(vari); //<p class="intro">changed text</p> | queryselector jo pahle consdition stisfy karta milega usi ko select karega. yahan wo pahle p tag with intro class hi select kiya h. sara element chshiye to uske liye dusra function h queryselectorall.
*/

let vari = document.querySelectorAll("p.intro"); //p tag with intro class. query selector m id, class, tagname v use kar sakte hn i.e all m kam krta h

for (let i = 0; i < vari.length; i++) {
    vari[i].innerHTML = "changed text";  //both p with intro class will changed
}
