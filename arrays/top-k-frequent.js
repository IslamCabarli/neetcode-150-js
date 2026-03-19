/**
 * Problem: Top K Frequent Elements
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 *
 * Approach:
 * - Sort the array
 * - Group same elements using an object
 * - Store elements in arrays
 * - Sort groups by their length (frequency)
 * - Return top k elements
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        nums.sort((a, b) => a - b);

        for (let num of nums) {
            if (!map[num]) map[num] = [];
            map[num].push(num);
        }

        let arr = Object.entries(map);

        arr.sort((a, b) => b[1].length - a[1].length);

        return arr.slice(0, k).map(item => Number(item[0]));
    }
}