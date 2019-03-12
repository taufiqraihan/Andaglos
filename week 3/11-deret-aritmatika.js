//    Exercise Deret Aritmatika 
// Logic Challenge - Tentukan Deret Aritmatika
// Problem
// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

function tentukanDeretAritmatika(arr) {
  // logic
  // 1. cari selisihNilai yang benar
  // 2. bandingkan, jika selisihNilai yg benar === selisih semua kondisi pengurangan, maka return true sebaliknya
  const selisih = arr[arr.length-1]-arr[arr.length-2];
    for (i = 0; i< arr.length ; i++){
      for(j = i+1 ; j< arr.length; j++){
        if (arr[j] - arr[i] === selisih){
          return true;
        }else{
          return false;
        }
      }
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true