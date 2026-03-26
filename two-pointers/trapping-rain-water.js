/**
 * Problem: Trapping Rain Water
 * Link: https://leetcode.com/problems/trapping-rain-water/
 * Difficulty: Hard
 *
 * Approach:
 * - Use two pointers (left and right) starting from both ends
 * - Maintain leftMax and rightMax to track the maximum height seen so far from each side
 * - At each step, move the pointer pointing to the shorter height
 *   and calculate trapped water if current height is less than its max
 * - Accumulate trapped water in 'water' variable
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }

    return water;
}