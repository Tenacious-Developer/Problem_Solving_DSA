
// What is a 2D Array?

// A 2D array is essentially an array of arrays. 
// It can be visualized as a table or a grid with rows and columns. 
// Each element in the main array is itself an array, where each sub-array represents a row in the grid.


// Create and initialize a 2D array with predefined values
let grid = [
    [1, 2, 3, 4],  // First row
    [5, 6, 7, 8],  // Second row
    [9, 8, 7, 6],  // Third row
    [5, 4, 3, 2]   // Fourth row
];
  
console.log(grid); // Output the initial grid array

// To create a 2D array of 5x6 (5 rows and 6 columns) where every cell is 0
let arr = Array(5); // Initialize an outer array with 5 elements (rows)

for (let i = 0; i < 5; i++) {
    // For each row, create an inner array with 6 columns filled with 0
    let inner = Array(6).fill(0);
    arr[i] = inner; // Assign the inner array to the outer array
}
  
console.log(arr); // Output the 2D array filled with zeros
  
// Assign values to specific cells in the 2D array
arr[0][0] = 11; // Set the value of the cell at row 0, column 0 to 11
arr[0][1] = 12; // Set the value of the cell at row 0, column 1 to 12
  
console.log(arr); // Output the 2D array after modifications
console.log(arr[0][1]); // Output the value at row 0, column 1 which is 12
  