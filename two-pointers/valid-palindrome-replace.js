  /**
   * Valid Palindrome - Replace approach
   * 
   * Idea:
   * - Remove all non-alphanumeric characters using regex
   * - Convert string to lowercase
   * - Compare characters from both ends
   * 
   * Time Complexity: O(n)
   * Space Complexity: O(n) → new string is created
   */
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}
