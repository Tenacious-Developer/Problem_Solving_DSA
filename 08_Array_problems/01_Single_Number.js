// Problem: Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1: 
// Input: nums = [2, 2, 1] 
// Output: 1

// Example 2: 
// Input: nums = [4, 1, 2, 1, 2] 
// Output: 4

// Example 3: 
// Input: nums = [1] 
// Output: 1

// Logic:
// - XOR (^) operation is used to solve the problem efficiently.
// - XOR of two same numbers results in 0: a ^ a = 0
// - XOR of any number with 0 gives the number itself: a ^ 0 = a
// - XOR is commutative and associative, meaning the order does not matter.
// - Using XOR, all paired elements will cancel out, leaving only the single element.

// Pseudo-code:
// 1. Initialize a variable result to 0.
// 2. Iterate through the input array nums.
//      a. XOR each element with result: result = result ^ nums[i].
// 3. After the loop, result will hold the single number.
// 4. Return result.

// Code:
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

// Example usage:
let nums1 = [2, 2, 1];
let nums2 = [4, 1, 2, 1, 2];
let nums3 = [1];

console.log(singleNumber(nums1)); // Output: 1
console.log(singleNumber(nums2)); // Output: 4
console.log(singleNumber(nums3)); // Output: 1

// Time Complexity: O(n), where n is the number of elements in the input array. We iterate over each element once.
// Space Complexity: O(1), since we only use a constant amount of extra space for the result variable.
