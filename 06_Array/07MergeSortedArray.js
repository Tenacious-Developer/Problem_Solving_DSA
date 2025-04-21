// Problem: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively. 
// Merge nums1 and nums2 into a single array sorted in non-decreasing order. 
// The merged result should be stored inside nums1, which has a size of m + n.

// Logic:
// - We iterate over both arrays, nums1 and nums2, comparing elements from each and 
// - inserting the smaller one into the correct position in the result array.
// - Once one of the arrays is fully traversed, we copy the remaining elements from the other array into the result.
// - Finally, we update nums1 with the merged sorted array.

// Pseudo-code:
// 1. Initialize an empty array result of size m + n to store the merged values.
// 2. Set i = 0 for iterating nums1 and j = 0 for iterating nums2. Use k = 0 to track the index in result.
// 3. Iterate while both i < m and j < n:
//    a. If nums1[i] <= nums2[j], add nums1[i] to result and increment i and k.
//    b. Else, add nums2[j] to result and increment j and k.
// 4. After the loop, copy remaining elements from nums1 (if any) and nums2 (if any) to result.
// 5. Update nums1 with the elements from result to ensure in-place sorting.
// 6. Return nums1.

// Code:
var merge = function(nums1, m, nums2, n) {
    let result = Array(m + n).fill(0); // Initialize result array to hold the merged values
    let i = 0; // Pointer to iterate over nums1
    let j = 0; // Pointer to iterate over nums2
    let k = 0; // Pointer to iterate over the result array

    // Merge elements from nums1 and nums2 into result
    while(i < m && j < n) {
        if(nums1[i] <= nums2[j]) {
            result[k] = nums1[i];
            i++;
        } else {
            result[k] = nums2[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements from nums1, if any
    while(i < m) {
        result[k] = nums1[i];
        i++;
        k++;
    }

    // Copy remaining elements from nums2, if any
    while(j < n) {
        result[k] = nums2[j];
        j++;
        k++;
    }

    // Copy the result back into nums1 for in-place modification
    for(let l = 0; l < result.length; l++) {
        nums1[l] = result[l];
    }

    return nums1; // Return the merged sorted array stored in nums1
}

// Test the function
let nums1 = [1, 2, 3, 0, 0, 0]; 
let m = 3; 
let nums2 = [2, 5, 6];
let n = 3;

let mergedArray = merge(nums1, m, nums2, n);
console.log(mergedArray); // Output: [1, 2, 2, 3, 5, 6]

// Time Complexity: O(m + n), where m is the length of nums1 and n is the length of nums2. We iterate over both arrays once.
// Space Complexity: O(m + n) due to the use of the result array to temporarily store the merged elements.
