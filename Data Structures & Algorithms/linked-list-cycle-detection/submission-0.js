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
    // is cycle when one next pointer points to a node that has been visited already 
    // we need to keep track of all the nodes we visited 
    // if the next pointer points to a node already visited -> return true 
    // else condition index -1 -> no cycle exists -> return false 

    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
}
