class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // array of numbers given 
    // check if array was sorted in ascending order before the indices have been rotated by a number of steps 
    // return boolean 
    // array is rotated if the remainder of the current position of the new array and the length of the new array is equal to the current position in the old array 
    // go through array number ny number and check if this condition is true 
    check(nums) {
        let drops = 0; // if there is only one drop in values, the array was sorted before 
        
        for (let i = 0; i<nums.length; i++) { // go through array number by number
            if (nums[i] > nums[(i+1) % nums.length]){ // check if the current number is greater than the next number and additionally if the current element is the last one of the array (modulo is 0) -> index becomes 0 -> element becomes first element 
                drops++; // drop counter increments 
            } 
        }

        return drops == 1;
    }
}
