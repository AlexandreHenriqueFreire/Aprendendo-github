let nums = [1, 2, 3, 4, 5, 6, 7, 8, 5]
let x = 5
let indice = -1;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
        indice = i;
        break;
    }
}
console.log(indice)