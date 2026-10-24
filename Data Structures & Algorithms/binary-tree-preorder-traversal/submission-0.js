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

// preorder traversal: first print value, then traverse left and right 
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        let res = [];
        function traverse(node) {
            if (node === null) return; // base case 
            res.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(root); // starting position
        return res;
    }
}
