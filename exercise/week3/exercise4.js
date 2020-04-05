var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 5, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    console.log(input[3].split('/')[1]);
    console.log(input[3].split('/').sort((a, b) => (b) - (a)));
    console.log(input[3].split('/').join('-'));
    console.log(input[1].slice(0, 15));
}
dataHandling2(input)