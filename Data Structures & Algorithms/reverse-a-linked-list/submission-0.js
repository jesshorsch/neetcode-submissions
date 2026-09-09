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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null; // at the start there is no previous position -> null
        let curr = head; // we start with the current -> head 

        while (curr != null) { // as long as current is not at its end so the linked list hasnt finished yet 
            let nxt = curr.next; // temporary variable to save the next node before we set curr.next to previous (overwhise would be overwritten)
            curr.next = prev; // the current node is being pointed backwords instead of forwards -> reversal 
            prev = curr; // the current node becomes previous (previous is being slided forwards)
            curr = nxt; // using the reference for the next node, the current pointer slides forwards
        }
        return prev; // the head is at previous because the next node at the end is null

    }
}
