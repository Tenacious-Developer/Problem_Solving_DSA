function gcdEuclidean(a, b) {
    // Ensure non-negative integers
    a = Math.abs(a);
    b = Math.abs(b);

    // Euclidean Algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// Example usage
const num1 = 48;
const num2 = 18;
const result = gcdEuclidean(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);