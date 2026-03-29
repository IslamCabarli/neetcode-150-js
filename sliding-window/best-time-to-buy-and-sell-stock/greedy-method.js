// Approach: Single Pass with Minimum Price Tracking
// We iterate through the array once while keeping track of the minimum price seen so far.
// - If current price is lower than minPrice, update minPrice (better buying opportunity).
// - Otherwise, calculate profit (current price - minPrice) and update maxProfit if larger.
// This ensures we always buy before we sell and get the maximum possible profit.
//
// Time Complexity: O(n)
// Space Complexity: O(1)

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let minPrice = 1000;
    let maxProfit = 0;

    for (let price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else {
        maxProfit = Math.max(maxProfit, price - minPrice);
      }
    }
    return maxProfit
  }
}
