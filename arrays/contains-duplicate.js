/**
 * Problem: Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * Approach:
 * - Use a Set to track seen numbers
 * - If number already exists → return true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
         for(let num of nums ){
            if (set.has(num)) return true;
            set.add(num);
         }
         return false;
        
    }
}