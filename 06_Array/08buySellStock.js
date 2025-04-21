// Problem: You are given an array prices where prices[i] represents the price of a stock on the ith day. 
// You want to maximize your profit by choosing a single day to buy and another day in the future to sell. 
// Return the maximum profit possible. If no profit can be made, return 0.

// Logic:
// - We iterate through the array and keep track of the minimum price encountered so far, 
// - as that would represent the best day to buy.
// - For each subsequent day, we calculate the potential profit by selling on that day (i.e., current price - minimum price so far).
// - If the calculated profit is greater than the current maximum profit, we update it.
// - Finally, return the maximum profit. If no profit can be made, return 0.

// Pseudo-code:
// 1. Initialize currMin to store the minimum price encountered so far, starting with prices[0].
// 2. Initialize profit to store the maximum profit, starting at 0.
// 3. Iterate through the prices array from day 1:
//    a. If the current price is greater than currMin, calculate the potential profit and update the maximum profit if necessary.
//    b. If the current price is less than currMin, update currMin to the current price (as it could be a better day to buy).
// 4. Return the profit, which will be the maximum profit found.

// Code:
var maxProfit = function(prices) {
    let currMin = prices[0]; // Initialize to the price on day 0 (the first day)
    let profit = 0; // Initialize profit to 0, as we haven't made any transaction yet

    // Iterate over the prices from day 1 to the end
    for(let i = 1; i < prices.length; i++) {
        // If selling on day i results in a profit, calculate and update max profit
        if(prices[i] > currMin) {
            profit = Math.max(profit, prices[i] - currMin);
        }
        // If the price on day i is lower than currMin, update currMin (better day to buy)
        if(prices[i] < currMin) {
            currMin = prices[i];
        }
    }

    return profit; // Return the maximum profit, or 0 if no profit can be made
};

// Example 1
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (Buy on day 2 at price 1 and sell on day 5 at price 6)

// Example 2
let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No transactions possible for profit)

// Time Complexity: O(n), where n is the length of the prices array. We traverse the array once.
// Space Complexity: O(1), as we use only a constant amount of extra space.
