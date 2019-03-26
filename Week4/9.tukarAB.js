function checkAB(str) {
  for (var x = 0; x < str.length; x++) {
    if (str[x] === 'a' && str[x + 4] === 'b') {
      return true;
    } else if (str[x] === 'b' && str[x + 4] === 'a') {
      return true;
    }
  }
  return false;
}



// TEST CASES
console.log(checkAB('lane borrowed')); // truec
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false