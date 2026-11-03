class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of numbers given 
    // find a number where there are equal numbers in the array that are bigger or equal than that number 
    // x cannot be greater than the length of the array 
    // calculate the length of the array -> x cannot be greater than that 
    // set a counter and for every x, go through array and check if the condition is fulfilled
    // condition: i >= x for every position 
    // we should return -1 after we went through the array and tried out every possible x ->  
    specialArray(nums) {
        let x = 0;

        while (x<=nums.length) { // loop for every x 
            let count = 0;
            for (let i = 0; i<nums.length; i++) { // for every set x, go through array number by number 
                if (nums[i]>=x) { // if the number at the current position is greater or equal to x 
                    count++; // we found a number that fits 
                    
                }
            } 
            if (count === x) {
                return x;
            }
            x++;
        }

        return -1;
        
    }
}
