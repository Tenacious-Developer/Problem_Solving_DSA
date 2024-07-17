function reverseNumber(num){
    let reverse = "";
    while (num > 0) {
        let lastDigit = num % 10;
        reverse += lastDigit;
        num = Math.floor(num/10); 
    }
    return reverse;
}

console.log(reverseNumber(4136));