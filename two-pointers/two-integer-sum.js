/**
 * Two Sum II - Two Pointers Approach
 *
 * Idea:
 * - Array is sorted → use two pointers (left & right)
 * - If sum is smaller than target → move left pointer right
 * - If sum is greater than target → move right pointer left
 * - When sum equals target → return indices
 *
 * Important:
 * - Return 1-indexed result
 * - Do NOT use extra space (O(1) space required)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (left < right)
        {
            let sum = numbers[left] + numbers[right];
            if (sum === target)
            {
                return [left + 1, right + 1];
            }
            else if (sum < target) 
            {
                left++;
            }
            else {
                right--;
            }
        }
    }
}
