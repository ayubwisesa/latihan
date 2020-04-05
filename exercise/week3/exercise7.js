function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var temp = 0
    for (let i = 0; i < kalimat.split(' ').length; i++) {
        if (kalimat.split(' ')[i] !== '') temp += 1
    }
    return temp
}

// TEST CASES
console.log(hitungJumlahKata('I     have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5