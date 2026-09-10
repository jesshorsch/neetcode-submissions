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
     * @param {number} val
     * @return {ListNode}
     */

    // we need to go through the nodes and compare each value with val
    // if they match, we need to remove this node by changing the pointer which points on this node and make it point to the next node 
    removeElements(head, val) {
        let dummy = new ListNode(0, head); // placeholder element because it is possible that head gets removed 
        let prev = dummy; // dummy is inserted before the head 
        let curr = head; // sets current to head 

        while (curr) { // while there are nodes 
            let nxt = curr.next; // saves the next node before we break the link

            if (curr.val == val) { // if the value of the node is equal to val 
                prev.next = nxt; // remove the next node with the current one 
            }
            else {
                prev = curr; // if the values are not equal, we dont remove the node and the current node becomes the previous -> we shift the pointer to the new node 
            }
            curr = nxt; // the current element now is the old node we saved in the placeholder 
        }
        return dummy.next; // we return the head 
    }
}
