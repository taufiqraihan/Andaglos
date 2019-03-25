/*
Exercise Faktor Persekutuan Terbesar 



Logic Challenge - Faktor Persekutuan Terbesar

Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/
function fpb(angka1, angka2) {
  // you can only write your code here!
  let factor =[];

  for (let i = 1 ; i < angka1; i++){
    if(angka1 % i === 0 ){
      if(angka2 % i === 0 ){
        factor.push(i);
      }
    }
  }
  let result = factor[factor.length-1];
  return result;
  }

  console.log(fpb(12, 16));
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
