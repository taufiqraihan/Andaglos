function perkalianUnik(arr) {

    //perkalian unik adalah memanipulasi jumlah perkalian pada sebuah array dan dibagi dengan angka pada bagian indeks bersangkutan 

    var perkalian=1;

    var hasil=[] //var hasil merupakan variabel yang dibuat sebagai result dari hasil perkalian unik

    //looping pertama digunakan untuk menghitung perkalian yang terdapat pada array

    for(var i=0;i<arr.length;i++){

        perkalian=perkalian*arr[i];

    }

        //looping kedua digunakan untuk membagi hasil perkalian 

        for(var j=0;j<arr.length;j++){

            hasil.push(perkalian/arr[j]);

        }

    return hasil;

  }

  

  // TEST CASES

  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]

  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]

  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]

  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160