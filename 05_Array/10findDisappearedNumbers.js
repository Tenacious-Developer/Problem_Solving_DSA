// Problem: Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Logic:
// - We iterate through the array, marking the presence of each number by negating the element at its corresponding index.
// - After marking the presence of all numbers, we iterate again to find the missing numbers (positive elements).

// Pseudo-code:
// 1. Iterate through the elements of nums:
//    a. For each element nums[i], mark the element at index (|nums[i]| - 1) as negative if it's not already negative.
// 2. Iterate through the elements of nums again:
//    a. For each positive element, its corresponding index + 1 is missing in the array. Add it to the result array.
// 3. Return the result array.

// Code:
var findDisappearedNumbers = function(nums) {
    // Step 1: Mark the presence of numbers by negating elements at their corresponding index
    for(let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]); // Get the absolute value of the current element
        let idx = x - 1; // Calculate the index for the current element
        if(nums[idx] > 0) { // If the element at the calculated index is positive, mark it as negative
            nums[idx] *= -1;
        }
    }
    
    // Step 2: Iterate through the array to find missing numbers (positive elements)
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) { // If the element is positive, its corresponding index + 1 is missing in the array
            result.push(i + 1); // Add the missing number to the result array
        }
    }
    
    // Step 3: Return the result array containing missing numbers
    return result;
};

// Time Complexity: O(n)
// Space Complexity: O(1)