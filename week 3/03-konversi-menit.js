function konversimenit(num){
  let minute = Math.floor(num / 60);
  let second = num % 60; 

  if(second < 10){
    return minute + ':0' + second;
    }else {
      return minute + ':' + second;
    }
  }

  console.log(konversimenit(79));