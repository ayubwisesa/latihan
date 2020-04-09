function ubahHuruf(kata) {
    var kamus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var temp = '';
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < kamus.length; j++) {
            if (kata[i] === kamus[j]) {
                temp += kamus[j + 1];

            }
        }
    }
    return temp;

}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu