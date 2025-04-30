/* break-continue */
let i = 0;
while (i < 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}