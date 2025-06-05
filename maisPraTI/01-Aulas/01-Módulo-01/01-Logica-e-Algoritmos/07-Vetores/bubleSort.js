const array = [3, 6, 1, 2, -3];

let n = array.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
