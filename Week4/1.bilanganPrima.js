/*Exercise Mencari Mean 



Logic Challenge - Mencari Mean

Problem
Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.
*/

//1.suatu fungsi dengan parameter angka sebuah angka prima
  // angka prima adalah angka yg dimulai dari angka 2 dan setiap angka berikutnya
  // adalah angka prima jika tidak habis dibagi 2
//2. buat perulangan untuk mengecek parameter angka adalah sebuah bilangan prima
    //2.1 perulangan akan dimulai dari angka 2 dan mengecek bilangan prima sebuah angka
    //2.2 jika angka dapat habis dibagi index x maka bukan angka prima maka tampilkan false
//3. setelah selesai pengecekan angka tidak habis dibagi index x, maka bilangan prima maka tampilkan true

//code disini Cara 1

function angkaPrima(angka) {
 for(var x=2; x<angka; x++){
   if(angka % x === 0){
     return false;
   }
 }
 return true;
}

// Cara 2
/*
function angkaPrima(angka) {
  if (angka === 1) {
    return false;
  } else if (angka === 2) {
    return true;
  } else {
    for (var i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    
    return true;
  }
}
*/

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
