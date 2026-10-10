class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // array of numbers given 
    // find pairs in the array, one of them has to be even and one odd, they arent both allowed to be even or add
    // return boolean 
    // go though array and find the pairs

    isArraySpecial(nums) {
        if (nums.length === 1) return true;

        for (let i = 1; i<nums.length; i++) {

            if (nums[i-1] % 2 === 0 && nums[i] % 2 === 0 || nums[i-1] % 2 !== 0 &&    nums[i] % 2 !== 0) {
                return false;
            }
            
        }
        return true;
    }
}

// when using i and i+1, length has to be length -1 so i+1 is still in scope 

