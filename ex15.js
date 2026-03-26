let nums = [1, 2, 3, 4, 5, 6, 7, 8, 5]
let crescente = true;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i] + 1) {
        cresente = false;

    }
}
if (crescente) {
    console.log("crescente");
} else {
    console.log("não crescente")
}