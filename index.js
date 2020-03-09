var sumArrAy = 0;


function addArrayFinalSum(arr) {
  for (let index = 0, len = arr.length; index < len; index++) {

    if (typeof arr[index] !== 'number') {
      sumArrAy = sumArrAy + addArrayFinalSum(arr[index])

    } else {

      sumArrAy = sumArrAy + arr[index]
    }
  }
  response = sumArrAy;

  return response;
  console.log("got here!!!");
}
console.log('abc:', addArrayFinalSum([1,2,3,4,5,6]));
