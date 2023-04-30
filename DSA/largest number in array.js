let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 0;
for (let key in arr) {
    x = Math.max(arr[key]);
}
console.log(x);
