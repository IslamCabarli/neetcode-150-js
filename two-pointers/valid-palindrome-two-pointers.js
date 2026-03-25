/**
   * Valid Palindrome - Two pointers approach
   * 
   * Idea:
   * - Use two pointers (left & right)
   * - Skip non-alphanumeric characters
   * - Compare characters case-insensitively
   * - No extra string is created
   * 
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
 isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphanumeric = (char) => /^[a-z0-9]$/i.test(char);

    while (left < right) {
      while (left < right && !isAlphanumeric(s[left])) left++;
      while (left < right && !isAlphanumeric(s[right])) right--;

      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }
}
