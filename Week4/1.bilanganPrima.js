/*Exercise Mencari Mean 



Logic Challenge - Mencari Mean

Problem
Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan.
*/

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

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false