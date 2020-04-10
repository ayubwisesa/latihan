function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            hasil = i.toString() + (angka / i).toString()
            faktor.push(hasil);

        }
    }
    for (var i = 0; i < faktor.length; i++) {
        for (var j = 0; j < i; j++) {
            if (faktor[i].length < faktor[i + 1].length) {

            }
            return faktor
        }
    }
}
console.log(digitPerkalianMinimum(24)); // 2


/* TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
*/