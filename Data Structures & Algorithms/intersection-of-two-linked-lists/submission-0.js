/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// two linked lists given 
// return node where the lists intersect (have the same node)
// if there is no intersection, return null
// go through first linked list and add all nodes into the map 
// go through second until there appears a value that is in the map 
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let set = new Set();

        let a = headA;
        while (a !== null) { // while list a is in-bounds
        set.add(a); // how do i add all of the individual nodes without having an index? 
        a = a.next;
        }

        let b = headB;
        while (b !== null) {
        if (set.has(b)) {
            return b;
        }
        else {
            b = b.next;
        }
        }
        return null;
    }
}
