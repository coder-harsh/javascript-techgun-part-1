

// break: exit from all the loop outside break i.e if and for. it means break se niche ka code execute nahi hoga { closed loop tak}
//loop se unconditionaly bahar aane ke liye break ka use karte hain
// continue: continue se niche ka code run nahi hoga closed loop tak. fir again for loop start hoga.  it will print 1234678910
//ek particular condition pe loop kaam  nahi kare aur aage badh jaye iske liye continue ka use karte hain.
for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {
        continue;
    }
    document.write(counter);
    document.write('<br>');
}