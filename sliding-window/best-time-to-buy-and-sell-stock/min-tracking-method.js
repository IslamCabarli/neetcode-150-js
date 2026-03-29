// Approach: Greedy (Min Price Tracking - Clean Version)
// We keep track of the best buying price (`buy`) while iterating through the array.
// - If a lower price is found, update `buy` (better opportunity to buy).
// - Otherwise, calculate profit using current price as selling point
//   and update maxProfit if it's greater.
//
// This ensures we always buy before selling and maximize profit in one pass.
//
// Time Complexity: O(n)
// Space Complexity: O(1)

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = prices[0];

        for(let i=1; i < prices.length; i++) {
            const sell = prices[i];
            if(buy > sell) {
                buy = sell;
            } else {
                const profit = sell - buy;
                maxProfit = Math.max(maxProfit, profit)
            }
        }

        return maxProfit;
    }
}
