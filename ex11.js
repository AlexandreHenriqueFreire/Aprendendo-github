let nums = [1, 2, 3, 4, 5]
let b = []
let s = 0;
for (let i = nums.length -1 ;i >= 0; i--) {
    b[s] = nums[i] 
    s++
}
console.log(b)
