/**
 * Problem: Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * Approach:
 * - Sort both strings and compare them
 * - If they are equal after sorting, they are anagrams
 *
 * Time Complexity: O(n log n)  (due to sorting)
 * Space Complexity: O(n)
 */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');
        return sortedS === sortedT;
    }
}
