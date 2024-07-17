// Problem: Given a binary array, find the maximum number of consecutive 1s in this array.
// Example: Input: [1,1,0,1,1,1], Output: 3 (as the longest consecutive sequence of 1s is 3)

// Logic:
// - We iterate through the array and keep track of the count of consecutive ones.
// - Whenever we encounter a non-one element, we update the maximum count of consecutive ones encountered so far.
// - Finally, we return the maximum count.

// Pseudo-code:
// 1. Initialize finalAns to store the maximum count of consecutive ones, set it to 0.
// 2. Initialize counter to store the count of consecutive ones encountered while iterating, set it to 0.
// 3. Iterate through the binary array:
//      a. If the current element is 1, increment the counter.
//      b. If the current element is not 1, update finalAns with the maximum of counter and finalAns, then reset counter to 0.
// 4. Return the maximum of finalAns and the last counter value, as there might be a consecutive sequence of ones ending at the last element.

// Code:
var findMaxConsecutiveOnes = function(nums) {
    let finalAns = 0; // Initialize the maximum count of consecutive ones
    let counter = 0; // Initialize the counter for consecutive ones

    // Iterate through the binary array
    for(let i = 0; i < nums.length; i++){
        // Check if the current element is 1 (consecutive one)
        if(nums[i] == 1){
            // Increment the consecutive ones count
            counter++;
        } else {
            // If the current element is not 1, update the final result with the maximum of current consecutive ones count and the existing final result
            finalAns = Math.max(finalAns, counter);
            
            // Reset the consecutive ones count for the next potential sequence
            counter = 0;
        }
    }

    // Update the final result with the maximum of the last consecutive ones count and the existing final result
    return Math.max(finalAns, counter);
}

// Time Complexity: O(n), where n is the length of the input array nums. We traverse the array once.
// Space Complexity: O(1), as we only use a constant amount of extra space for variables regardless of the size of the input array.
