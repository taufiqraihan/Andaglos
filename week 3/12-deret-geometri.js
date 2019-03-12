// Problem
// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).


function tentukanDeretGeometri(arr) {
  // logic
  // 1. cari selisihNilai yang benar
  // 2. bandingkan, jika selisihNilai yg benar === selisih semua kondisi pengurangan, maka return true sebaliknya
  const perkalian = arr[arr.length-1]/arr[arr.length-2];
    for (i = 0; i< arr.length ; i++){
      for(j = i+1 ; j< arr.length; j++){
        if (arr[j]/arr[i] === perkalian){
          return true;
        }else{
          return false;
        }
      }
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([4,8,16,32])); // true