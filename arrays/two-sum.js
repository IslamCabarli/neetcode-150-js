/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Approach:
 * - Use a HashMap to store visited numbers
 * - For each number, check if target - num exists
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};