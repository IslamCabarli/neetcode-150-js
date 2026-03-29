// Approach: Sliding Window with Set
// We use two pointers (`start` and `end`) to maintain a sliding window of unique characters.
// - If the current character `s[end]` is already in the set, we remove characters from the start
//   until the duplicate is removed.
// - Add the current character to the set.
// - Update maxLen to track the length of the longest substring without repeating characters.
//
// This ensures we always maintain a substring of unique characters in O(n) time.
//
// Time Complexity: O(n)
// Space Complexity: O(min(n, charset))

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
   lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

}
