/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
console.log(" ---------------SOAL NO 1------------------------------ ");
console.log("ada berapa banyak jumlah variable scope pada Javascript?");
console.log("- Ada 2 yaitu global dan local ");
console.log(" ");
console.log("jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript");
console.log("- Global scope : variabel yang dapat di akses 1 dokument");
console.log("- Local scope : variabel yang hanya dapat di akses pada function yang telah di buat atau block tertentu saja");
console.log(" ");
console.log("buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript");
console.log(" ");

const daerah = "Sumbawa";

function daerahZone(cek) {
  console.log("Daerah tinggal saat ini : " + cek);
}
console.log(daerahZone("Sumbawa Barat"));

/// WRITE YOUR ANALYSIS HERE


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
console.log(" ---------------SOAL NO 2------------------------------ ");
console.log("apa yang akan tampil didalam comsole.log ?");
console.log("- Mariah");
console.log(" ");
console.log("apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?");
console.log("- Karena yang akan di tampilkan ialah parameter dari function printFirstName sedangkan John Watson tidak di tampilkan dikarenakan di luar scope");
console.log(" ");



/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));