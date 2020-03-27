let tanggal = 29;
let bulan = 12;
let tahun = 2020;

let eror = "";

if ((tanggal) > 31 || (tanggal) < 1) {
	eror = "Tanggal harus diantara 1 - 31";
};

if ((bulan) > 12 || (bulan) < 1) {
	eror = "Bulan harus diantara 1 - 12";
}

if ((tahun) > 2200 || (tahun) < 1900) {
	eror = "Tahun harus diantara 1900 - 2200";
};

if (eror) {
	console.log(eror);
} else {
	switch (bulan) {
		case 1:
			if (1 <= tanggal && tanggal <= 31) {
				console.log(tanggal + " Januari " + tahun);
				break;
			}
			console.log("Januari hanya memiliki tanggal 1-31");
			break;
		case 2:

			if (tahun % 4 === 0) {
				if (1 <= tanggal && tanggal <= 29) {
					console.log(tanggal + " Februari " + tahun);
					break;
				}
				console.log("February hanya memiliki tanggal 1-29");
				break;
			} else {
				if (1 <= tanggal && tanggal <= 28) {
					console.log(tanggal + " Februari " + tahun);
					break;
				}
				console.log("February hanya memiliki tanggal 1-28");
				break;
			}
			case 3:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Maret " + tahun);
					break;
				}
				console.log("Maret hanya memiliki tanggal 1-31");
				break;
			case 4:
				if (1 <= tanggal && tanggal <= 30) {
					console.log(tanggal + " April " + tahun);
					break;
				}
				console.log("April hanya memiliki tanggal 1-30");
				break;
			case 5:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Mei " + tahun);
					break;
				}
				console.log("Mei hanya memiliki tanggal 1-31");
				break;
			case 6:
				if (1 <= tanggal && tanggal <= 30) {
					console.log(tanggal + " Juni " + tahun);
					break;
				}
				console.log("Juni hanya memiliki tanggal 1-30");
				break;
			case 7:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Juli " + tahun);
					break;
				}
				console.log("Juli hanya memiliki tanggal 1-31");
				break;
			case 8:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Agustus " + tahun);
					break;
				}
				console.log("Agustus hanya memiliki tanggal 1-31");
				break;
			case 9:
				if (1 <= tanggal && tanggal <= 30) {
					console.log(tanggal + " September " + tahun);
					break;
				}
				console.log("September hanya memiliki tanggal 1-30");
				break;
			case 10:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Oktober " + tahun);
					break;
				}
				console.log("Oktober hanya memiliki tanggal 1-31");
				break;
			case 11:
				if (1 <= tanggal && tanggal <= 30) {
					console.log(tanggal + " November " + tahun);
					break;
				}
				console.log("November hanya memiliki tanggal 1-30");
				break;
			case 12:
				if (1 <= tanggal && tanggal <= 31) {
					console.log(tanggal + " Desember " + tahun);
					break;
				}
				console.log("Desember hanya memiliki tanggal 1-31");
				break;
			default:
				console.log("Format yang anda masukkan salah");
				break;
	}
}