/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */

    // palindrome -> two pointer technique 
    // 
    isPalindrome(head) {

        let nums = []; // convert linked list into array 

        while (head !== null) { // while there are nodes 
            nums.push(head.val); // add every node in the array 
            head = head.next; // shift the pointer 
        }

        let left = 0; // first element
        let right = nums.length -1; // last element

        while (left <= right) { // while there are still characters 
            if (nums[left] !== nums[right]) { // if the left character doesnt match the right -> return false 
            return false;
            
            }
            // shift pointers after every loop that doesnt return false
            left++;
            right--;
            
        }
        return true; // is a palindrome
    }
}
