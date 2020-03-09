let sumArray = 0;

addArrayFinalSum = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    sumArray += arr[index]
  }
  return sumArray;
}
console.log(`Sum is: ${addArrayFinalSum([1, 2, 3, 4, 5, 6])}`);



