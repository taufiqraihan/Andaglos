function ubahHuruf(kata) {
  var kamusHuruf = 'abcdefghijklmnopqrstuvwxyz';
  var kamusHurufArr = (kamusHuruf.split(''));
  // console.log(kamusHurufArr);
  var kataBaru = '';
  for (var x = 0; x < kata.length; x++) {
    for (var i = 0; i < kamusHurufArr.length; i++) {
      if (kata[x] === kamusHurufArr[i]) {
        if (kamusHurufArr[i] === 'z') {
          kataBaru += 'a';
        } else {
          kataBaru += kamusHurufArr[i + 1];
        }
      }
    }
  }
  return kataBaru;
}



// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu