/* Exercise Tantangan Array 2 (Melooping menggunakan Array) 



Melakukan Looping Data Array
Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.

Objectives
Mengenal Array Multidimensi
Mengerti Cara Mengakses Nilai Array Multidimensi

Directions
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:
//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun

*/

const input = [
['0001','taufiq','bandar lampung','6maret1996','tidur'],
['0002','ganda','medan','7april1995','begadang'],
['0003','mintho','padang','8mei19994','belajar'],
['0004','kautsar','jakarta','9juni1993','maingame'],
['0005','reza','jawa','10juli1992','nyusahin']
]
function datahandling(profil){
for(let i = 0 ; i< profil.length; i++){
for(let j =0 ; j< profil[i].length; j++){
if(profil[i][j] === profil[i][0]){
console.log('nomor id : ' + profil[i][j]+ '\n');
} else if(profil[i][j] === profil[i][1]){
console.log('nama :' + profil[i][j]);
} else if(profil[i][j] === profil[i][2]){
console.log('tanggal lahir :' + profil[i][j] + '' + profil[i][j+1]);
} else if(profil[i][j] === profil[i][4]){
console.log('hobi :' + profil[i][j]);
}
}
}
return '';
}
console.log(datahandling(input));