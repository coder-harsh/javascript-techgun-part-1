// let input;
// input = 1;
// if (input === 1) {
//     document.write("Continue.....");
// }
// else if (input === "y") {
//     document.write("Continue.....");
// }
// else if (input === "Yes") {
//     document.write("Continue.....");
// }
// else if (input === 0) {
//     document.write("End.....");
// }
// else if (input === "n") {
//     document.write("End.....");
// }
// else if (input === "no") {
//     document.write("End.....");
// }
// else {
//     document.write("Wrong input");
// }


//=== strict comparison karta hain switch
let input = "yes";
switch (input) {
    case 1: //(input === 1)
        document.write("Continue");
        break;

    case "y": //(input === "y")
        document.write("Continue");
        break;
    case "yes":
        document.write("Continue");
        `break;`
    case 0:
        document.write("End...");
        break;
    case "n":
        document.write("End...");
        break;
    case "no":
        document.write("End...");
        break;
    default:
        document.write("Wrong input");
}