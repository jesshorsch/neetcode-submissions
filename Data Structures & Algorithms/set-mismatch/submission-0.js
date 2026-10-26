class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // array of numbers given 
    // go through array and check which number occurs twice, find the number that is missing 
    // -> set to find the number that occurs twice 
    // n is length of the array 
    // all numbers of n have to occur 
    // create new result array 
    // to find the missing number, create a set with all the numbers of n and then go through the array and check which number is in the set but not in the array 

    findErrorNums(nums) {
        let set = new Set();
        let duplicate;
        let missing;
        
        for (let i = 0; i<nums.length; i++) {
            if (set.has(nums[i])) { // duplicate 
                duplicate = nums[i];
            }
            else {
                set.add(nums[i]);
            }
        }
        for (let j = 1; j<= nums.length; j++) {
            if (!set.has(j)) { // if the number is not in the set 
            missing = j;
            }
        }
    return [duplicate, missing];
    }
}

// if values 1 to n -> i = 1 as starting value in loop 
