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