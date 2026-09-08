class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // given 1 array nums 
    // already sorted 
    // every number in the array needs to be squared 
    // function should return a new array with the sqaures for each number 
    // sort the squares after calculating them 
    sortedSquares(nums) {
        let i = 0; // reads every number
        
        let squaredNums = [];

        while (i<nums.length) {
            let number = nums[i];
            let squaredNumber = number * number;
            squaredNums.push(squaredNumber);
            i++;
            
        }

        squaredNums.sort((a,b) => a-b);
        return squaredNums;

    }
}
