class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // one integer array given 
    // find longest subarray of the array which is either increasing or decreasing
    // return the length of this subarray 
    // we need to go through the array and find both the longest ascending and descending substring -> check afterwards which one is longer 
    // for each element, check if the previous element is bigger 
    // for each element, check if the previous element is smaller
    // we only need the length of the subarray, not the subarray itself -> variables to save values instead of new array 
    longestMonotonicSubarray(nums) {
        let curAscending = 1;
        let curDescending = 1;
        let max = 1; // longest ascending or descending subarray that has been found so far 

        for (let i = 1; i<nums.length; i++) {
            if (nums[i] > nums[i-1]) { // if the element before the current element is smaller than the current = ascending -> add to curAscending 
            curAscending += 1; // add one to ascending 
            curDescending = 1; // descending is broken 
            }
            else if (nums[i] < nums[i-1]){ // if the element before the current element is bigger than the current = descending -> add to curDescending
            curDescending += 1;
            curAscending = 1; // ascending is broken 
            } 
            else { // both are broken (two same numbers)
            curAscending = 1;
            curDescending = 1;
            }

            max = Math.max(max, curAscending, curDescending) // sets max to the biggest one of these values: either the current ascending subarray, the current descending subarray or the best ascending or descending subarray that has been found previously 
        }

        
    
    return max;
}
}