let reverse = reverted => {
    let word = ''; 
    for (let i = reverted.length-1; i >= 0; i--){
      word += reverted[i];
    }
    return word;
}

console.log(reverse('Hello World'));
console.log(reverse('Nicoleta'));
