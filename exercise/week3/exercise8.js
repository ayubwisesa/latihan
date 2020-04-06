function pasanganTerbesar(num) {
    // you can only write your code here!

    var temp = []
    for (var i = 0; i < num.toString().length; i++) {

        temp.push(Number([num.toString()[i], num.toString()[i + 1]].join('')))
    }


    var hasil = temp.slice(0, 1)[0]
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > hasil) hasil = temp[i]
    }

    return hasil
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99