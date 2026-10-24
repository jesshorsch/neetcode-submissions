/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// we need to first process the left path of the first node -> go until there is no left path anymore -> save this last value 
// go one node back and save this value to the array 
// process the whole right path of the node -> save last value 
// go one up and save this value -> back at 1 -> repeat process for right path 
// recursion because we do the same steps each time: recursion uses the call stack -> we need array to save values 
// go into left path and save last valid value
// go one up and save this value
// go into right path and save last valid value

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        let res = []; // saves all the values in the right order 

        function traverse(node) {
            if (node === null) return; // base case -> go one node back
            traverse(node.left); // go into the left path 
            res.push(node.val); // saves the last value of the current node
            traverse(node.right); // go into the right path 
        }

        traverse(root); // starts the helper function 
        return res; // when the whole tree is finished, return the array 


    }
}
