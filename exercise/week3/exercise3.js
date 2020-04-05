var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    let form = ['Nomor ID', 'Nama Lengkap', 'TTL', 'Hobi']

    for (let isi of input) {
        isi.splice(2, 2, isi[2] + ' ' + isi[3])
        let temp = ''
        for (let i = 0; i <= isi.length - 1; i++)
            temp += form[i] + ':' + isi[i] + '\n'

        console.log(temp)
    }
}

dataHandling(input)