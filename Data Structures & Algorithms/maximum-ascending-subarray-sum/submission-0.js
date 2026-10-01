class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of positive numbers given 
    // we need to find the subarray which sum is the maximum -> math.max 
    // -> go through array and check for every number if the number after it is bigger -> if yes move to next number 
    // return sum 
    maxAscendingSum(nums) {
        let max = nums[0]; // biggest sum so far 
        let current = nums[0]; // current element 

        for (let i = 1; i<nums.length; i++) {
            if (nums[i] > nums[i-1]) { // if the previous element is smaller
            current += nums[i]; // add it to current 
            
            }
            else { // if the next element is not bigger 
            current = nums[i]; // set this number to the current element and start again 
            }
            max = Math.max(max, current) // returns the bigger one of these
        }

        
        return max;
    }
}

// in the end, we only need to return the biggest sum, not the individual elements so we dont need to save them in an array but its enough to assign the current elements we need to variables 
// in the loop, its easier to compare the current element with the previous because it has fewer edge cases (we set the first to 1 and set the first element in the variables above already)
