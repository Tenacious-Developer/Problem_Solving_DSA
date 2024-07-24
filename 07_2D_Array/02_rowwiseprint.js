// Function to display a 2D array (grid) row by row
function display(grid) {
    // Initialize an empty string to accumulate the elements of the grid
    let str = "";
    
    // Loop through each row in the grid
    for (let i = 0; i < grid.length; i++) { // `grid.length` gives the number of rows
        // Loop through each element in the current row
        for (let j = 0; j < grid[i].length; j++) { // `grid[i].length` gives the number of columns in the current row
            str += grid[i][j] + " "; // Append the element followed by a space to the string
        }
    }
    
    // Print the accumulated string, which represents the whole grid
    console.log(str);
}

// Example usage
let grid = [
  [1, 2, 3, 4], 
  [5, 6, 7, 8], 
  [9, 8, 7, 6], 
  [5, 4, 3, 2]
];

display(grid); // Call the function to display the grid
