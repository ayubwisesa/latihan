function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = []

    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            hasil = i.toString() + (angka / i).toString()
            faktor.push(hasil.length);

        }
    }
    for (var i = faktor.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (faktor[j] > faktor[j + 1]) {
                y = faktor[j + 1];
                faktor[j + 1] = faktor[j];
                faktor[j] = y;
            }
        }
    }

    return faktor[0];

}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2