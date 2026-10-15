class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */

    // string given 
    // either w (white) or b (black)
    // k = desired number of consecutive black blocks 
    // one operation can only recolor one white block to become a black block 
    // return minimum number of operations it takes to reach k consecutive black blocks 
    // two pointers: both start at the beginning
    // 
    minimumRecolors(blocks, k) {
        let whites = 0;
        let j = 0;
        let i = 0;

        while (i<k) { // go through array letter by letter in the window of k (because we're looking for a window with k consecutive elements)
            if (blocks[i] === "W") { // if a block is white 
            whites++; // increment count inside the window 
            }
            i++; // afterwards, always move pointer one further because we've checked element 
        }
        let minOps = whites; // best result up to this point (minimal operations) -> is set to whites because the first iteration is the best we've known so far -> starting value 

        for (j = k; j<blocks.length; j++) {
            if(blocks[j] === "W") whites++;
            if(blocks[j-k] === "W") whites--;
            minOps = Math.min(minOps, whites);
        }
        return minOps;
    }
}

// syntax of sliding window (fixed length):
// building window: for loop builds first window at the left of the array -> window now has its fixed length 
// moving window: moving the window one to the right so a right element gets added and a left is deleted, starts at k 
// -> we need to check every possible window with fixed length k inside the array 
// works with fixed length, part has to be consecutive 
