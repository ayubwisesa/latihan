/*
Sebuah Toko perlengkapan bernama “FoxShop” sedang membagikan beberapa barang khusus bagi membernya.
Pembeli dari barang - barang khusus ini diwajibkan membawa kartu keanggotaan FoxShop.
Kartu keanggotaan terdiri dari 2 label berbeda yaitu Reguler dan VIP, dari setiap kartu memiliki 3 level yang berbeda.

Barang yang akan dibagikan memiliki syarat berikut :
1. kartu dengan level 1 akan mendapatkan kotak berwarna merah
2. kartu dengan level 2 akan mendapatkan kotak berwarna biru
3. kartu dengan level 3 akan mendapatkan kotak berwarna kuning
4. kartu dengan label VIP akan mendapatkan kotak berukuran besar
5. kartu dengan label Reguler akan mendapatkan kotak berukuran kecil
6. jika tidak menginput kartu/nama/level, maka tampilkan 'Data tidak lengkap'
7. jika level melebihi 3 atau jenis kartu berbeda dari yang di atas, maka tampilkan 'Invalid Card'

Program ini akan menerima 3 input:
Name -> di dalam variabel name
Kartu -> di dalam variabel kartu
Level  -> di dalam variabel level
 
Jika kartu VIP dan level 2 , maka output:
[Name] mendapatkan kotak berwarna biru berukuran besar.

Jika input invalid meka output seperti yang di jelaskan pada syarat di atas

Rules : 
- Diperbolehkan membuat variable baru
- Dilarang menggunakan built-in function
- Dilarang menghapus dan mengubah nama dari variable yang tersedia
*/


var name = 'ayub'; // change variable name value to any String
var kartu = 'Reguler'; // change variable kartu to 'VIP' or 'Reguler' or ''
var level = 1; // change variable level value to any Number 


var ukuran = '';

if (kartu === 'VIP') {
    ukuran = "besar";
}

if (kartu === 'Reguler') {
    ukuran = "kecil";
}
var warna = '';

if (level == 1) {
    warna = "merah";
}

if (level == 2) {
    warna = "biru";
}
if (level == 3) {
    warna = "kuning";
}

if (level >= 1 && level <= 3) {
    console.log(name + " mendapatkan kotak berwarna " + warna + " berukuran " + ukuran + ".")
} else {
    console.log("invalid card")
}