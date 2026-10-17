/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// given the first element of the linked list
// return the middle element 
// if two -> return second middle node 
// go through linked list and count how many nodes there are -> / 2 to find middle
// go through linked list until middle element and return it 
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head) {
        let slow = head;
        let fast = head;

        while (fast != null && fast.next !== null) { // while there are still elements at fast and the element after that -> havent reached end of linked list yet 
        slow = slow.next;
        fast = fast.next.next;
        }

        return slow;
        
    }
}
