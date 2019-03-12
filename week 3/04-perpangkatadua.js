function perpangkatanDua(str){
let factor = 2;
let count = 0;

while (str >= 2){
  if (str % 2 !== 0){
    return -1;
  }else{
    str = str / factor;
    count++;
  }
}
  return count;
}


console.log(perpangkatanDua(64));
