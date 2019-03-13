/*
Exercise Balik kata 



Logic Challenge - Balik Kata

Problem
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ"
*/
function balikKata(kata){
  let kebalik= '';
  for(i = kata.length-1; i>=0 ; i--){
    kebalik += kata[i];
  }
  return kebalik;
}
console.log(balikKata('hellow'));
