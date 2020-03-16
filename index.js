let sumArray = 0;

let addArrayFinalSum = ((arr) => {
    for (let i = 0; i < arr.length; i++) {
        sumArray += arr[i];
    }
    return sumArray;
});
console.log(`${addArrayFinalSum([1,2,3,4,5,6])}`);