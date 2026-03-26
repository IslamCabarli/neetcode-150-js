/**
 * Problem: Container With Most Water
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 *
 * Approach:
 * - Use two pointers (left and right) starting from both ends
 * - Calculate the area using the minimum height and distance between pointers
 * - Move the pointer pointing to the shorter height inward
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left < right)        {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            let area = width * height;
            maxArea = Math.max(maxArea, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
