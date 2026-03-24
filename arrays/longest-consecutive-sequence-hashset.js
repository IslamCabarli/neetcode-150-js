/**
 * Problem: Longest Consecutive Sequence
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Approach:
 * - Store all numbers in a Set for O(1) lookup
 * - Iterate through the set and only start counting from the beginning of a sequence
 *   (i.e., when num - 1 does not exist in the set)
 * - Expand the sequence by checking consecutive numbers (num + 1, num + 2, ...)
 * - Keep track of the maximum sequence length
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (let num of set) {
            
            if (!set.has(num - 1)) {
                let current = num;
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
