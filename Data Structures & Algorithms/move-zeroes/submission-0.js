class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    // one array -> one pointer i und one j 
    // in-place array manipulation -> splice method
    // count number of zeros 
    // arr.push to push number of zeros to end of array

    moveZeroes(nums) {
        let i = 0; // reads array
        let j = 0; // keeps count of zeros 

        while (i < nums.length) {
            if (nums[i] == 0) {
                nums.splice(i, 1);
                j++;
                
            }
            else {
                i++;
            }
        }
        for (let x = 0; x < j; x++ ) {
            nums.push(0);
        }
        
    }
}
