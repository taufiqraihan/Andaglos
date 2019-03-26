function ubahKapital(kalimat) {
  var splitKalimat = kalimat.split(' ');
  var kalimatBaru ='';
  for (var x = 0; x < splitKalimat.length; x++) {
    for (var i = 0; i < splitKalimat[x].length; i++) {
      if (i === 0) {
        kalimatBaru += splitKalimat[x][i].toUpperCase();
      } else if (i !== 0) {
        kalimatBaru += splitKalimat[x][i].toLowerCase();
      }
    }
    kalimatBaru += ' ';
  }
  return kalimatBaru.trim();
}



// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun