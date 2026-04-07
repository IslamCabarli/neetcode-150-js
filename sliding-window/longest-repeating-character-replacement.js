/*
Approach: Sliding Window with HashMap
We use two pointers (`left` and `right`) to maintain a sliding window.
- Expand the window by moving `right` and count character frequencies.
- If the window size minus the count of the most frequent character is greater than `k`,
  shrink the window from the left until the condition is satisfied.
- Track the maximum valid window size.

Time Complexity: O(n)
Space Complexity: O(1) - at most 26 characters in the map
*/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;
        
        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[right]));
            
            while ((right - left + 1) - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}

