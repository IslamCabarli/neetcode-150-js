/**
 * Problem: Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Approach:
 * - For each index, calculate the product of all other elements using a nested loop
 * - Skip the current index during multiplication
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

function productExceptSelf(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let point = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      point *= nums[j];
    }

    arr.push(point);
  }

  return arr;
}