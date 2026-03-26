let nums = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10]
let x = 5
let indice = 0;
for (let i = 0;i < nums.length; i++) {
    if(nums[i] === x ){
        indice++
    }

}
console.log(indice)