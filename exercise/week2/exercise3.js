let name = 'ayub';
let peran = '';

if (name === '') {
    console.log("Nama harus diisi!");
} else {
    if (peran === '') {
        console.log("Halo " + name + " Pilih peranmu untuk memulai game!");
    } else {
        console.log("Selamat datang di Dunia Proxytia," + name);
        if (peran === 'Ksatria') {
            console.log("Halo Ksatria " + name + ", kamu dapat menyerang dengan senjatamu!");
        } else if (peran === 'Tabib') {
            console.log("Halo Tabib " + name + ", kamu akan membantu temanmu yang terluka.");
        } else if (peran === 'penyihir') {
            console.log("Halo Penyihir " + name + ", ciptakan keajaiban yang membantu kemenanganmu!");
        } else {
            console.log("Peran " + peran + " belum tersedia.");
        }
    }

}