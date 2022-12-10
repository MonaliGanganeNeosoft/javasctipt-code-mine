function arr_sort(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (ar[i] < ar[j]) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
    }
  }
}
let arr = [1, 4, 2, 3];
arr_sort(arr);
console.log(arr);
