class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // sorted array given, target number given 
    // if the target is found, return the index 
    // if not, return index where it would be if it were inserted in order 
    // find middle of array and check if target number is bigger or smaller than current number 
    // if target is smaller -> find middle of left side, else right side 
    // repeat until number is found 

    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length -1;

        while (left <= right) {
            let middle = Math.floor((left+right) / 2); // find middle of the current search area 

            if (nums[middle] === target) { // is number has been found
                return middle;
            }
            else if (nums[middle] < target) {
                left = middle+1; // we set the left margin to the element left next to the middle because middle has already been checked 
            }
            else {
                right = middle-1;
            }
        }
        return left; // when while loop ends, left has to be the position of target because every number in the array has been checked  
}
}