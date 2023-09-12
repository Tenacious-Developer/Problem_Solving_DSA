function solve(a, b, c) {

    const discriminant = b * b - 4 * a * c;

    // Check if the discriminant is negative (complex roots)
    if (discriminant < 0) {
        return "Complex roots";
    } else if (discriminant === 0) {
        // If discriminant is zero, there is one real root
        const root = -b / (2 * a);
        return [root];
    
    } else {
        let sqrtValue = Math.sqrt(b*b - 4*a*c);
        let root1 = (-b + sqrtValue) / (2*a);
        let root2 = (-b - sqrtValue) / (2*a);
        return [root1, root2];
    }
    
}

const roots = solve(2, 5, 3);
console.log("Roots:", roots);