//ul k kisi li ko change karna h eksath replace se. aise remove and append se ho sakta h

//pahle create krna padega li then replace karenege
let par = document.getElementById("menu");  //parent select hua h
let item = document.createElement("li");  ////ek li ban chuka h
item.textContent = "Services";  //li m text add ho chuka h

let rplace = par.firstElementChild.nextElementSibling;  //yahan hamara dusra li select ho gaya h. i.e about wala
par.replaceChild(item, rplace); //item: kis chij se replace karna h. rplace: kisko replace karna h. now about ki jagah Services wala li aa jayega

//body agar hamara parent h to v hum replace kar sakte hn