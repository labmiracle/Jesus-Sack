function sum(arr, n) {
  if (n === 0) {
    return 0;
  } else {
    return arr[n-1] + sum(arr, n-1);
  }
}

const arr = [1, 2, 3, 4, 5];
const n = 4;
console.log(sum(arr, n));
