//soal no 1

console.log("LOOPING PERTAMA");
var x = 0;
while (x < 20) {
    x += 2;
    console.log(x + " - I love coding");
}
console.log("LOOPING KEDUA");
var x = 20;
while (x >= 2) {
    console.log(x + " - I will become fullstack developer");
    x -= 2;

}

//soal no 2

console.log("LOOPING PERTAMA");
for (var x = 1; x <= 20; x++) {
    console.log(x + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var x = 20; x >= 1; x--) {
    console.log(x + " - I will become fullstack developer");
}

//soal no 3

for (var counter = 1; counter <= 100; counter++) {
    if (counter % 2 == 0) {
        console.log("genap")
    } else {
        console.log("ganjil")
    }
}
for (var counter = 1; counter <= 100; counter++) {
    if (counter % 3 == 0) {
        console.log(counter + " kelipatan 3")
    }
}
for (var counter = 1; counter <= 100; counter++) {
    if (counter % 6 == 0) {
        console.log(counter + " kelipatan 6")
    }
}
for (var counter = 1; counter <= 100; counter++) {
    if (counter % 10 == 0) {
        console.log(counter + " kelipatan 10")
    }
}