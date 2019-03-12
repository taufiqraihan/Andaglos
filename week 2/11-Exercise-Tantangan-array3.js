/*Exercise Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort) 



Menggunakan Built-in Function pada Array
Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.

Objectives
Mengerti Kegunaan dari Built-in Function yang dimiliki Array
Mampu Menggunakan Built-in Function yang dimiliki Array

Directions
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case
Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
*/

var input =['0001','taufiq raihan','bandar lampung','06/03/1996','belajar'];
function datahandling2 (array3){
array3.splice(1,1,'muhammad taufiq raihan');
array3.splice(2,1,'kota bandar lampung');
array3.splice(4,1, 'pria','sma metra');
console.log(array3);
var tanggal = array3[3].split('/');
var bulan = tanggal[1];
var namaBulan = ""
switch (bulan){
case '01':
namaBulan ='januari'
break;
case '02':
namaBulan='februari'
break;
case '03':
namaBulan='maret'
break;
case '04':
namaBulan='april';
break;
case '05':
namaBulan='mei';
break;
case '06':
namaBulan='juni';
break;
case '07':
namaBulan='juli';
break;
case '08':
namaBulan='agustus';
break;
case '09':
namaBulan='september';
break;
case '10':
namaBulan='oktober';
break;
case '11':
namaBulan='nomvember';
break;
case '12':
namaBulan='desember';
break;
default:
namaBulan='cuma sampe desember tong';
break;
}
console.log(namaBulan);
var sortir =(array3[3].split('/'));
sortir.sort(function(angka1, angka2){return angka2 > angka1});
console.log(sortir);
var tukar =tanggal.join('-');
console.log(tukar);
var batas = (array3[1].slice(0,16));
console.log(batas);
}
console.log(datahandling2(input));