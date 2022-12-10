// for (let counter = 1; counter <= 10; counter++) {
//     document.write(counter);
//     document.write('<br>');
//     for (let counter2 = 1; counter2 < 3; counter2++) {
//         if (counter == 3) {
//             break; //3 pe 2 bar tech gun nahi aayega
//         }
//         document.write('Tech Gun');
//         document.write('<br>');
//     }
// }

// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 3) {
//         break; //1 and 2 tak hi tech gun likhayega
//     }
//     document.write(counter);
//     document.write('<br>');
//     for (let counter2 = 1; counter2 < 3; counter2++) {

//         document.write('Tech Gun');
//         document.write('<br>');
//     }
// }

outer: for (let counter = 1; counter <= 10; counter++) {
    document.write(counter);
    document.write('<br>');
    if (counter == 3) {
        break outer; //3 pe 2 bar tech gun nahi aayega
    }
    for (let counter2 = 1; counter2 < 3; counter2++) {
        document.write('Tech Gun');
        document.write('<br>');
    }
}


//break aur continue mein similarity ye hai ki jaha p break aur continue milega waha se aage ka code execute nahi hoga current blok mein.
//break aur continue mein difference ye hai ki break us loop/blok se bahar aa jata hai, continue next loop p chala jata hain.

//bahar wale lopp ko label tag se break kar sakte hain