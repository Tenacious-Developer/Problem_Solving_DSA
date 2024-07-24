// Function to print a 2D array in a specific pattern: columns in zigzag order
function print(grid, m, n) {
    // Initialize an empty string to accumulate the elements of the grid
    let str = "";

    // Loop through each column
    for (let col = 0; col < n; col++) {
        // Check if the column index is even
        if (col % 2 == 0) {
            // For even columns, print from top to bottom
            for (let row = 0; row < m; row++) { // Loop from top to bottom
                str += grid[row][col] + " "; // Append the element followed by a space
            }
        } else {
            // For odd columns, print from bottom to top
            for (let row = m - 1; row >= 0; row--) { // Loop from bottom to top
                str += grid[row][col] + " "; // Append the element followed by a space
            }
        }
    }
    
    // Print the accumulated string, which represents the grid in zigzag column order
    console.log(str);
}

// Example usage
let grid = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7], 
    [8, 9, 10, 11], 
    [12, 13, 14, 15]
];

print(grid, 4, 4); // Call the function to print the grid in the specified pattern
