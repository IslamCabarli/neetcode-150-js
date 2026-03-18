/**
 * Problem: Group Anagrams
 * Link: https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 *
 * Approach:
 * - Sort each string to generate a key
 * - Group strings with the same key in a map object
 * - Return all grouped arrays
 *
 * Time Complexity: O(n * k log k), n = number of strings, k = max string length
 * Space Complexity: O(n)
 */

function groupAnagrams(strs) {
  let map = {};

  for (let str of strs) {
    let key = str.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
}
