// let arr = [2, 3, 4, 4, 3];
// let result = [...new Set(arr)];
// console.log(result);

let a = [3, 3, 2, 4, 4];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);
