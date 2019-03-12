Exercise Melakukan Perulangan Menggunakan while 



Melakukan Looping Menggunakan While

Objectives
/*Mengerti Cara Melakukan Looping Menggunakan While

Directions
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

Output
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/
console.log ( 'LOOPING PERTAMA' )
let looping = 0;
while ( looping < 20 ) {
looping += 2;
console.log ( looping + ' - I will become fullstack developer' );
}
console.log ( 'LOOPING KEDUA' )
let looping2 = 20;
while ( looping2 > 0 ) {
console.log ( looping2 + ' - I will become fullstack developer' );
looping2 -= 2;
}