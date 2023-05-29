function addOnlyNums(...args) {
    let sum = 0;
    for (let arg of args) {
      if (typeof arg === 'number') {
        sum += arg;
      } else if (!isNaN(arg)) {
        sum += parseInt(arg);
      }
    }
    return sum;
  }
  console.log(addOnlyNums(1, 2, 9, '4', '5', '6')); 
  