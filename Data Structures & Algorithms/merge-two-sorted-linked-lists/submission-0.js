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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0); // create starting node 
        let tail = dummy; // the last node is set to the first node initially 

        while (list1 && list2) { // as long as there are nodes in the linked list 
            if (list1.val < list2.val) { // if a value of list 1 is smaller than the corresponding value of list 2 
                tail.next = list1; // set this value as the next node in the list 
                list1 = list1.next; // moves the node that is being pointed at in list 1 forwards
            }

            else { // if node of list 2 is smaller 
                tail.next = list2; // set this value as the next node in the list 
                list2 = list2.next; // moves the node that is being pointed at in list 2 forwards 
            }
            tail = tail.next; // afterwards, the last element is set to the next node 
        }
        if (list1) { // is there are leftover nodes in list 1 
            tail.next = list1; // append them to the linked list 
        }
        else { // if there are leftover nodes in list 2 
            tail.next = list2; // append them to the linked list 
        }
        return dummy.next; // return the first element of the linked list 
    }
}
