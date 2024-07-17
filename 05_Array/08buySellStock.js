var maxProfit = function(prices) {

    let currMin = prices[0]; // at least buy on day 0
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        // Sell
        if(prices[i] > currMin) {
            profit = Math.max(profit, prices[i] - currMin);
        }
        // Buy
        if(prices[i] < currMin){
            currMin = prices[i];
        }
    }
    return profit;
};