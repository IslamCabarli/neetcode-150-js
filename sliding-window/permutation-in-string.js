/* 
Approach: Sliding Window with HashMap
We use two pointers (`left` and `right`) to maintain a sliding window.
- Count character frequencies in `s1` and the current window in `s2`.
- Expand the window by moving `right` and update character counts.
- When the window size equals `s1.length`, check if all character counts match.
- If they match, return true; otherwise, shrink the window from the left.

Time Complexity: O(n)
Space Complexity: O(1) - at most 26 characters in the map
*/

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    let map = new Map();
    for (let c of s1) map.set(c, (map.get(c) || 0) + 1);

    let left = 0,
      matched = 0;

    for (let right = 0; right < s2.length; right++) {
      let char = s2[right];

      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) matched++;
      }

      if (right >= s1.length) {
        let leftChar = s2[left];
        if (map.has(leftChar)) {
          if (map.get(leftChar) === 0) matched--;
          map.set(leftChar, map.get(leftChar) + 1);
        }
        left++;
      }

      if (matched === map.size) return true;
    }

    return false;
  }
}
