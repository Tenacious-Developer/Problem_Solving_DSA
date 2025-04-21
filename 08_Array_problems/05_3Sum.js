// Problem: 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1, 0, 1] and [-1, -1, 2].

// Example 2:
// Input: nums = [0, 1, 1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0, 0, 0]
// Output: [[0, 0, 0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

// Logic:
// - First, sort the input array to facilitate finding triplets and handling duplicates.
// - Iterate through the array, fixing one element and using a two-pointer approach to find the other two elements.
// - Use two pointers (left and right) to check the sum of the fixed element and the two elements at the pointers.
// - If the sum is zero, store the triplet and move both pointers while skipping duplicates.
// - If the sum is less than zero, move the left pointer to increase the sum. If greater than zero, move the right pointer to decrease the sum.
// - Continue until all unique triplets are found.

// Pseudo-code:
// 1. Sort the array nums.
// 2. Initialize an empty result array.
// 3. Loop through the nums array:
//     a. Skip duplicates for the first element.
//     b. Set left pointer to i + 1 and right pointer to the last index.
//     c. While left < right:
//         i. Calculate the sum of nums[i], nums[left], and nums[right].
//         ii. If sum == 0, push the triplet to result, then skip duplicates for both left and right pointers.
//         iii. If sum < 0, move the left pointer to the right.
//         iv. If sum > 0, move the right pointer to the left.
// 4. Return the result array containing all unique triplets.

// Code:
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1; // Start pointer
        let right = nums.length - 1; // End pointer

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]); // Found a triplet

                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }

    return result;
};

// Example usage:
let nums1 = [-1, 0, 1, 2, -1, -4];
let nums2 = [0, 1, 1];
let nums3 = [0, 0, 0];

console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum(nums2)); // Output: []
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]

// Time Complexity: O(n^2), where n is the length of the input array. The sorting takes O(n log n) and the two-pointer search takes O(n).
// Space Complexity: O(1) for the pointers, but O(k) for the result, where k is the number of triplets found.
