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
class Solution {
  productExceptSelf(nums) {
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
}

/**
 * Problem: Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Approach:
 * - Use prefix and postfix products to avoid division
 * - First pass: store prefix products (product of all elements to the left)
 * - Second pass: multiply with postfix products (product of all elements to the right)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) extra space (output array not counted)
 */

class Solution {
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(n).fill(1);

   
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prefix;   
            prefix *= nums[i];   
        }

       
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;   
            postfix *= nums[i];  
        }

        return res;
    }
}  