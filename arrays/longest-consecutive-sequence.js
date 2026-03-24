/**
 * Problem: Longest Consecutive Sequence
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Approach:
 * - Remove duplicates using a Set
 * - Sort the array
 * - Traverse the sorted array and count consecutive sequences
 * - Reset count when sequence breaks and track the maximum length
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b) => (a-b));
        nums = [...new Set(nums)];
        if (nums.length === 0) return 0;
        let longest = 0;
        let current = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i-1] === 1) {
                current++;
            } else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }
        longest = Math.max(longest, current);
        return longest;

    }
}

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
