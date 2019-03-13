/*
Exercise Konversi Menit 



Logic Challenge - Konversi Menit

Problem
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversimenit(num){
  let minute = Math.floor(num / 60);
  let second = num % 60; 

  if(second < 10){
    return minute + ':0' + second;
    }else {
      return minute + ':' + second;
    }
  }

  console.log(konversimenit(79));
