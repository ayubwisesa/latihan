function angkaPrima(angka) {
    let Prima = true
    for (let i = 2; i < angka; i++) { ////untuk melooping dari 2 hingga sebelum angka karena bilangan prima hanya bisa dibagi 1 dan
        if (angka % i == 0) {
            Prima = false

        }
    }
    return Prima
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false