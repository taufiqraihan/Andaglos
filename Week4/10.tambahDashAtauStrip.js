function tambahDash(str) {
  var splitStr = str.split('');
  var strBaru = '';
  for (var x = 0; x < splitStr.length; x++) {
    // check genap
    if (splitStr[x] % 2 === 0) {
      strBaru += splitStr[x];
      // check genap pertama
    } else if (splitStr[x] % 2 !== 0) {
      // check genap kedua
      if (splitStr[x + 1] % 2 == 1) {
        strBaru += splitStr[x] + '-';
      } else {
        strBaru += splitStr[x];
      }
    }
  }
  return strBaru;
}



// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'