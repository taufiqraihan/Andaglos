/*Exercise Mengenal penggunaan conditional if-else dalam javascript 

Menggunakan If Else

Objectives
Mengerti Cara Menggunakan If-Else
Mengerti Logika If-Else
Mengerti Cara Menggunakan Operator Evaluasi ===, !==

Directions
Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

Hints
Variabel tetap di-input secara manual.
Variabel nama dan peran dapat diisi apa saja.
Nama tidak perlu dicek sama persis seperti contoh input/output
Buat If-Else berbeda masing-masing untuk mengecek peran

Input
//Contoh input 1
var nama = 'Mikael';
var peran = '';

//Contoh input 2
var nama = 'Nina';
var peran = 'Ksatria';

//Contoh input 3
var nama = 'Danu';
var peran = 'Tabib';

//Contoh input 4
var nama = 'Zero';
var peran = 'Penyihir';

Output
//Output untuk Input 1
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input 2
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input 3
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input 4
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
*/

const saldo = ;
const posisi = 'carry' ;
if ( nama === '' ) {
console.log ( 'Nama akun mu' );
} else if ( nama !== '' && posisi === '' ) {
console.log ( 'Halo ' + nama + ', Pilih peranmu untuk memulai game!' );
} else if ( nama !== '' && posisi === 'mid' ) {
console.log ( 'Selamat datang di DOTA 2, ' + nama + '\n' + 'Halo ' + posisi + ' ' + nama + ', kamu diposisi midlaner untuk menjaga tower tengah' );
} else if ( nama !== '' && posisi === 'carry' ) {
console.log ( 'Selamat datang di DOTA 2, ' + nama + '\n' + 'Halo ' + posisi + ' ' + nama + ', kamu diposisi carry berperan untuk memenangkan game ini')
} else if ( nama !== '' && peran === 'tank' ) {
console.log ( 'Selamat datang di DOTA 2, ' + nama + '\n' + 'Halo ' + posisi + ' ' + nama + ', kamu diposisi offlaner untuk melindungi carry dan midlanner pada game' )
} else if ( nama !== '' && peran === 'ganker' ) {
console.log ( 'Selamat datang di DOTA 2, ' + nama + '\n' + 'Halo ' + posisi + ' ' + nama + ', kamu diposisi gangker untuk membantu carry dan midlaner untuk membunuh musuh' )
} else if ( nama !== '' && peran === 'support' ) {
console.log ( 'Selamat datang di DOTA 2, ' + nama + '\n' + 'Halo ' + posisi + ' ' + nama + ', kamu diposisi support untuk memastikan game yang berjalan terkendalii' )