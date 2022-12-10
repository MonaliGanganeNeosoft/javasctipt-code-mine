let a = [1, 2, 1, 3, 4];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);
