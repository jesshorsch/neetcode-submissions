class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    // array of numbers given, number of students k given 
    // find window where the difference between the highest and lowest score is minimized 
    // return minimum
    // we first need to build the first window at the left of the array 
    // length is k 
    // we need to sort from higest to lowest score 

    minimumDifference(nums, k) {
        nums.sort((a,b) => a-b);

        let minDiff = Infinity; // starting value 

        for (let i = 0; i + k -1 < nums.length; i++) { // as long as we havent reached the right margin (i + k-1)
        let diff = nums[i+k-1] - nums[i]; // calculates the difference between the max and min in the window 
        minDiff = Math.min(minDiff, diff) // checks if the current diff (current score difference) is smaller than the minDiff we've seen before 
        }

        return minDiff;
        

        
    }
}
