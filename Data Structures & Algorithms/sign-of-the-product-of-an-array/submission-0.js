class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of numbers given 
    // calculate product of all values in the array 
    // if the product is positive, return 1, else -1
    // if its 0, return 0 
    // go through array 
    arraySign(nums) {
        let result = 1;

        for (let i = 0; i<nums.length; i++) {
            if (nums[i] === 0) {
                return 0;
            }
            result *= nums[i];
        }

        if (result > 0) { // if positive 
            return 1;
        }
        
        else {
            return -1;
        }
    }
}
