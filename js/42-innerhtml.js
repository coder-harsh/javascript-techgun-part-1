//now jis element ko selectt kiya h usko change/manipulate krna
// with innerHTML, jo bhi element select kiya h uske andr ka element fetch karna
let ele = document.getElementById("intro");
let cont = ele.innerHTML;
console.log(cont); // <p>This is p tag</p>: we can fetch inner html with this


//now set karna

ele.innerHTML = "<h2>This is now h2 tag</h2>"; //This is now h2 tag text in h2 tag //set karna

//innerHTML is a property