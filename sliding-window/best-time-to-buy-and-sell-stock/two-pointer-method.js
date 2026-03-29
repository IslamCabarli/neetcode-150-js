// Approach: Two Pointers (Single Pass)
// We use two pointers: `first` (buy day) and `last` (sell day).
// - If the current price is higher than the buy price, we calculate profit
//   and update maxprofit if it's larger.
// - If the current price is lower, we move the buy pointer to this day
//   (since it's a better buying opportunity).
// This way, we traverse the array once and keep track of the maximum profit.
// Time Complexity: O(n)
// Space Complexity: O(1)

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let first = 0;
      let last = 1;
      let profit = 0;
      let maxprofit = 0;
      while ( last < prices.length ) 
      {
        if ( prices[first] < prices[last] ) 
        {
          profit = prices[last] - prices[first]
          if ( profit > maxprofit ) 
          {
            maxprofit = profit;
          }
        }
        else { 
          first = last;
        }
        last++;
      }
      return maxprofit
    }
}