// Problem: Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique, and you may return the result in any order.

// Example 1: 
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]

// Example 2: 
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4] (Note: [4, 9] is also a valid output)

// Logic:
// - We need to find the unique elements that are common between the two arrays.
// - First, we create a frequency map for nums1 to track the existence of elements.
// - Then, we iterate over nums2 and check if the current element exists in nums1's frequency map.
// - If an element is found in both arrays, we store it in a new frequency map (freqNums2) to ensure uniqueness.
// - Finally, we return the keys of freqNums2 (converted to numbers) as the intersection result.

// Pseudo-code:
// 1. Create a frequency map `freqNums1` to track the elements in `nums1`.
// 2. Loop through `nums1` and add each element to `freqNums1` with a boolean value of `true`.
// 3. Create another map `freqNums2` to store the unique elements found in both arrays.
// 4. Loop through `nums2` and for each element, if it exists in `freqNums1`, add it to `freqNums2`.
// 5. Convert the keys of `freqNums2` from strings to numbers and return them as the result.

// Code:
var intersection = function(nums1, nums2) {
    let freqNums1 = {};
    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        freqNums1[element] = true; // Store existence as a boolean
    }

    let freqNums2 = {};
    for (let i = 0; i < nums2.length; i++) {
        let element = nums2[i];
        if (freqNums1[element]) {
            freqNums2[element] = 1; // Add to freqNums2 only if it exists in freqNums1
        }
    }

    // Convert keys from string to number and return the array of integers
    return Object.keys(freqNums2).map(Number);
};

// Example usage:
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let nums3 = [4, 9, 5];
let nums4 = [9, 4, 9, 8, 4];

console.log(intersection(nums1, nums2)); // Output: [2]
console.log(intersection(nums3, nums4)); // Output: [9, 4] or [4, 9]

// Time Complexity: O(n + m), where n is the length of nums1 and m is the length of nums2.
// Space Complexity: O(n + m), because we store the frequency maps of both nums1 and nums2.
