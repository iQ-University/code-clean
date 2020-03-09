const reverseString = function(stringToReverse) {
  let word = " ";
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    word += stringToReverse[i];
  }
  return word;
}

console.log(reverseString("Hello World"))

