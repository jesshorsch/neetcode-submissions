class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // array of numbers given 
    // find 4 numbers in the array so the product difference is maximized 
    // pairs (a, b) and (c, d)
    // we need to find the two biggest numbers for a, b and the two smallest numbers for c, d 
    // find two biggest numbers: go through array and check if there has been a bigger number seen, then repeat 
    maxProductDifference(nums) {
        let max1 = 0, max2 = 0;
        let min1 = Infinity, min2 = Infinity;

        for (let i = 0; i<nums.length; i++) {
            if (nums[i] > max1) {
                max2 = max1;
                max1 = nums[i];
            }
            else if (nums[i] > max2) {
                max2 = nums[i];
            }
        
            if (nums[i] < min1) {
                min2 = min1;
                min1 = nums[i];
            }
            else if (nums[i] < min2) {
                min2 = nums[i];
            }
            
    
        
        
}
    let difference = (max1*max2) - (min1*min2);
        return difference;
}
}

// if there is nothing to do in the else block, we can skip it 