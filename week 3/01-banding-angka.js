/*
Exercise Bandingkan Angka 



Logic Challenge - Bandingkan Angka

Problem
Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
Jika kedua angka bernilai sama, function akan me-return -1.
*/

function bandingAngka(angka1, angka2){
if(angka2 > angka1){
	return true;
}else if(angka2 < angka1){
	return false;
}else {
	return -1;}

}

console.log(bandingAngka(8,5));

console.log(bandingAngka(5,8));

console.log(bandingAngka(5,5));
