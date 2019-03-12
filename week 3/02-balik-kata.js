function balikKata(kata){
  let kebalik= '';
  for(i = kata.length-1; i>=0 ; i--){
    kebalik += kata[i];
  }
  return kebalik;
}
console.log(balikKata('hellow'));