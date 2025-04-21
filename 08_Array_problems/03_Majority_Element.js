// Problem: Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1: 
// Input: nums = [3, 2, 3] 
// Output: 3

// Example 2: 
// Input: nums = [2, 2, 1, 1, 1, 2, 2] 
// Output: 2

// Logic:
// - This problem can be solved using the Boyer-Moore Voting Algorithm.
// - The idea is to maintain a current possible majority element and a count.
// - Start with the first element as the possible majority and a count of 1.
// - As we iterate through the array:
//      1. If the count is 0, update the current possible majority to the current element.
//      2. If the current element matches the current possible majority, increment the count.
//      3. If it doesn’t match, decrement the count.
// - At the end, the current possible majority will be the majority element because it appears more than n/2 times.

// Pseudo-code:
// 1. Initialize two variables:
//      a. `currPossibleMajority` to track the current possible majority element.
//      b. `count` to track the frequency of the current possible majority element.
// 2. Loop through each element of the input array `nums`:
//      a. If count is 0, update `currPossibleMajority` to the current element.
//      b. If the current element is equal to `currPossibleMajority`, increment the count.
//      c. Otherwise, decrement the count.
// 3. After the loop, return `currPossibleMajority` as the majority element.

// Code:
var majorityElement = function(nums) {
    let currPossibleMajority = -1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            currPossibleMajority = nums[i];
        }
        if (currPossibleMajority === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return currPossibleMajority;
};

// Example usage:
let nums1 = [3, 2, 3];
let nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1)); // Output: 3
console.log(majorityElement(nums2)); // Output: 2

// Time Complexity: O(n), where n is the number of elements in the input array. We traverse the array once.
// Space Complexity: O(1), since we only use a constant amount of extra space for the variables count and currPossibleMajority.
