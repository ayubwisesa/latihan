function totalDigitRekursif(angka) {
    // you can only write your code here!
    let result = 0
    if (angka < 10) {
        return result + angka
    } else {
        let n = angka.toString()
        result += Number(n[0])
        return result + totalDigitRekursif(Number(n.substring(1)))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5