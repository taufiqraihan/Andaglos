/*
Exercise Menggabungkan Konsep Perulangan dan Kondisional 



Proxytia to Next Level

Objectives
Mampu menggunakan variabel dengan benar
Mampu melakukan operasi aritmatika pada JavaScript
Mampu mengimplimentasikan perulangan menggunakan for atau while
Mampu mengimplimentasikan if-else if-else dan mengerti logikanya

Directions
Masih ingat dengan Proxytia? game yang pernah kamu buat pada tugas sebelumnya. Pada challenge kali ini kamu ditantang untuk mengembangkan game ini lebih lanjut. Ada beberapa perubahan yang akan perlu kamu lakukan agar game ini dapat dimainkan. Perhatikan langkah-langkahnya sebagai berikut:
Tambahkan variabel tahunLahir, variabel ini akan diisi dengan tahun lahir pemain.
Isi variabel umur sekarang adalah 2017 - tahunLahir.
Tambahkan variabel playerHealth, assign variabel ini dengan tahunLahir X Math.random()
Tambahkan variabel monsterHealth, assign variabel ini dengan tahunLahir X Math.random()
Tambahkan variabel kodeMonster, assign variabel ini dengan Math.floor(Math.pow(100, Math.random()))
Pada logika if terhadap variabel nama, apabila pemain tidak mengisi variabel, assign variabel peran dengan kacung
Setelah semua pengecekan menggunakan if selesai dilakukan, lakukan perulangan sebanyak tahunLahir.
Di dalam perulangan tersebut, buat sebuah logika if-else untuk melakukan pengecekan sebagai berikut:
jika indeks perulangan adalah kelipatan umur:
console.log(peran + ' ' + nama + ' menyerang monster!')
Kurangi monsterHealth dengan umur
jika indeks perulangan adalah kelipatan kodeMonster:
console.log('monster menyerang ' + peran + ' ' + nama + '!')
Kurangi playerHealth dengan kodeMonster
jika indeks perulangan adalah kelipatan umur dan kodeMonster sekaligus:
console.log('Health keduanya bertambah')
Tambahkan playerHealth dengan kodeMonster
Tambahkan monsterHealth dengan umur
Jika playerHealth lebih besar daripada monsterHealth:
console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
Jika sebaliknya, console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
*/

const nama ='taufiq';
const posisi ='mid';
let tahunlahir =2009;
let umur = 2019 - tahunlahir;
let playerhealth = tahunlahir Math.random();
let monsterhealth = tahunlahir Math.random();
let kodemonster = Math.floor(Math.pow(10, Math.random()));
console.log(umur);
console.log(kodemonster);
if(nama === ''){
console.log('kacung');
}else if(nama !== '' && posisi === ''){
console.log('masukan peran mu sayang!')
}else if(nama !== '' && posisi === 'mid' ){
console.log('halo selamat datang di dota 2 ' + nama + '\n' + 'posisi kamu di ' + posisi + ' tugas kamu adalah melawan monster di midlane')
}else if(nama !== '' && posisi === 'carry' ){
console.log('halo selamat datang di dota 2' + nama + '\n' + 'posisi kamu di ' + posisi + 'tugas kamu adalah melawan monster di safelane')
}else if(nama !== '' && posisi === 'tanker' ){
console.log('halo selamat datang di dota 2' + nama + '\n' + 'posisi kamu di ' + posisi + 'tugas kamu adalah melawan monster di offlane')
}else if(nama !== '' && posisi === 'support 1' ){
console.log('halo selamat datang di dota 2' + nama + '\n' + 'posisi kamu di ' + posisi + 'tugas kamu adalah melawan monster di safelane')
}else if(nama !== '' && posisi === 'support 2' ){
console.log('halo selamat datang di dota 2' + nama + '\n' + 'posisi kamu di ' + posisi + 'tugas kamu adalah melawan monster di safelane')
}
for (i = 1; i<=tahunlahir; i++){
console.log('indeks = '+i)
if(i % umur === 0){
console.log(posisi + ' ' + nama + ' '+ 'menyerang monster');
monsterhealth -= umur;
}else if(i % kodemonster === 0 ){
console.log('monster menyerang ' + nama + '' + posisi);
playerhealth -= kodemonster;
}else if(i % umur === 0 && i % kodemonster === 0 ){
console.log('Health keduanya bertambah')
playerhealth += kodemonster;
monsterhealth += umur;
}
}
if (playerhealth > monsterhealth){
console.log('Selamat, ' + posisi + ' ' + nama + ' memenangkan pertarungan!');
}else {
console.log('Sayang sekali, ' + posisi + ' ' + nama + ' dikalahkan monster...');
}
console.log(playerhealth);
console.log(monsterhealth);