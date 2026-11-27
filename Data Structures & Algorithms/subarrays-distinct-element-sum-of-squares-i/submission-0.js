class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of numbers given 
    // calculate how many different values one subarray has and square them 
    // subarray: combination of elements in the array 
    // return integer 
    sumCounts(nums) {
        let total = 0;
        
        for (let i = 0; i<nums.length; i++) {
            let seen = new Set(); // save which values in a subarray we've already seen
            for (let j = i; j<nums.length; j++) {
                seen.add(nums[j]);
                total += seen.size * seen.size; // calculate the square of the both values 
            }


            


        }
        return total;
    }
}
