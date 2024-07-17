// Problem: Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Brute force Logic:
// - We iterate through the array using two nested loops to check all possible pairs of numbers.
// - For each pair, we check if their sum equals the target. If it does, we return the indices of those numbers.
// - We assume that each input has exactly one solution.

// Code:
var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length - 2; i++) { // Loop through the array until the second-to-last element
        for(let j = i + 1; j < nums.length; j++) { // Loop through the array starting from the next element after i
            if(nums[i] + nums[j] === target){ // Check if the sum of nums[i] and nums[j] equals the target
                return [i, j]; // Return the indices if the sum is equal to the target
            }
        }
    }
};

// Explanation:
// - We use two nested loops to check all possible pairs of numbers in the array.
// - The outer loop iterates through each element from the beginning up to the second-to-last element.
// - The inner loop starts from the next element after the current element in the outer loop and iterates to the end of the array.
// - For each pair of elements, we check if their sum equals the target.
// - If we find a pair with the desired sum, we return their indices as the solution.

// Example Usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

// Time Complexity: O(n^2) - due to the nested loops
// Space Complexity: O(1) - constant space is used for variables and return value


// Note: in one second your computer can approx executes 10^8 instructions.

// Two Pointer Approach
// There are several variations of the two-pointer approach

// Two Pointers Moving Towards Each Other: This technique is commonly used to find pairs of elements 
// that meet certain criteria, such as finding a pair of numbers that sum up to a target value. 

// Two Pointers Moving in the Same Direction: This technique is useful for problems 
// where you need to maintain a certain property or condition within a subarray or subsequence.

// Fast and Slow Pointers: This variation involves using two pointers where one moves faster than the other. 
// It's commonly used in algorithms like cycle detection in linked lists or finding the midpoint of a 
// linked list.

// if the array is in asc order then start pointer increase the result and end pointer decreases the result


// How to make array sort
// we are using array.sort(fn), where fn is comparator function which determines the sorting of array, 
// either asc or desc

// for asc order
// fn (x, y) {
//     return x - y;
// }

// for desc order
// fn (x, y) {
//     return y - x;
// }


// arr.sort() ---> lexicographical order (dictionary order)

// if the array is sorted

// Function to find two numbers in a sorted array that sum up to a target
var twoSum = function(numbers, target) {
    // Initialize two pointers at the start and end of the array
    let start = 0;
    let end = numbers.length - 1;

    // Loop until the two pointers meet
    while(start < end) {
        // Check if the sum of the current numbers equals the target
        if(numbers[start] + numbers[end] === target){ 
            // If yes, return the indices (adjusted by adding 1)
            return [start + 1, end + 1];
        } else if(numbers[start] + numbers[end] > target) {
            // If the sum is greater than the target, decrement the end pointer
            end--;
        } else {
            // If the sum is less than the target, increment the start pointer
            start++
        }
    }
};


// if the array is not sorted

// Comparator function to sort the array of numbers and their indices based on the numbers
function comparator(x, y){
    return x[0] - y[0];
}

// Function to find two numbers in an array that sum up to a target
var twoSum = function(nums, target) {
    // Transform the input array into an array of [number, index] pairs
    for(let i = 0; i < nums.length; i++) {
        nums[i] = [nums[i], i];
    }

    // Sort the array of pairs based on the numbers using the comparator function
    nums.sort(comparator);
    
    // Initialize two pointers at the start and end of the sorted array
    let start = 0;
    let end = nums.length - 1;

    // Loop until the two pointers meet
    while(start < end) {
        // Check if the sum of the current numbers equals the target
        if(nums[start][0] + nums[end][0] === target){ 
            // If yes, return the indices of the original array
            return [nums[start][1], nums[end][1]];
        } else if(nums[start][0] + nums[end][0] > target) {
            // If the sum is greater than the target, decrement the end pointer
            end--;
        } else {
            // If the sum is less than the target, increment the start pointer
            start++
        }
    }
};



