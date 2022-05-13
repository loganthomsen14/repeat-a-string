function repeatStringNumTimes(str, num) {
    let string = ''
    
    while (num > 0) {
    string += str
    num--
    }
      return string;
    }
    
    console.log(repeatStringNumTimes("$", 3));