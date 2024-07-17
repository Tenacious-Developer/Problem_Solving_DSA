function gcd(num1,num2) {
    let ans = 1;
    for(let i = 2; i<=Math.min(num1,num2); i++) {
        if(num1 % i === 0 && num2 % i === 0){
            ans = i;
        }
    }
    return ans;
}

function lcm(a, b) {
    let G = gcd(a,b);
    return (a*b) / G;
}

console.log(lcm(9, 12));