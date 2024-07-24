// Problem: Given a 2D integer array matrix, return the transpose of the matrix.
// Example 1: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]], Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2: Input: matrix = [[1,2,3],[4,5,6]], Output: [[1,4],[2,5],[3,6]]

// Logic:
// - The transpose of a matrix flips the matrix over its main diagonal, switching the matrix's row and column indices.
// - We will create a new 2D array `result` with the number of rows equal to the number of columns of the input matrix and vice versa.
// - We iterate through the input matrix and assign the elements to the `result` matrix such that `result[col][row] = matrix[row][col]`.

// Pseudo-code:
// 1. Initialize an empty 2D array `result` with the size of matrix[0].length x matrix.length (transpose dimensions).
// 2. Iterate through each element of the matrix:
//      a. For each element at position (row, col) in the input matrix, assign it to the position (col, row) in the `result` matrix.
// 3. Return the `result` matrix which is the transpose of the input matrix.

// Code:
var transpose = function(matrix) {
    // Initialize the result matrix with dimensions swapped
    let result = Array.from({ length: matrix[0].length }, () => Array(matrix.length));
    
    // Iterate through each element of the input matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // Assign the transposed element to the result matrix
            result[col][row] = matrix[row][col];
        }
    }

    // Return the transposed matrix
    return result;
}

// Example usage
let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[1, 2, 3], [4, 5, 6]];

console.log(transpose(matrix1)); // Output: [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose(matrix2)); // Output: [[1,4],[2,5],[3,6]]

// Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the input matrix. We traverse each element once.
// Space Complexity: O(m * n), as we create a new matrix of the same size to store the transposed result.



// Another Approach

var transpose = function(matrix) {
    // Get the number of rows and columns in the input matrix
    let numRows = matrix.length;
    let numCols = matrix[0].length;

    // Initialize the result matrix with swapped dimensions
    let result = Array(numCols); // Create an array for the columns

    // Create a new array for each column in the result matrix
    for(let i = 0; i < numCols; i++) {
        let arr = Array(numRows); // Create an array for each row in the result matrix
        result[i] = arr; // Assign the array to the result matrix
    }

    // Iterate through each element of the input matrix
    for(let row = 0; row < numRows; row++) {
        for(let col = 0; col < numCols; col++) {
            // Assign the transposed element to the result matrix
            result[col][row] = matrix[row][col];
        }
    }

    // Return the transposed matrix
    return result;
};