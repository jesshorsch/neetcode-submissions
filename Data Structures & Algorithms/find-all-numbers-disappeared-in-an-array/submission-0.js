class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // array of numbers given 
    // n is the number of integers -> the range of numbers that should occur is n 
    // find all the missing numbers that do not occur in the array 
    // walk through array and add every number to map, if it already exists increment the count by 1 
    // what do we expect?: a map of n length because n is the length of nums so every number would appear exactly once 
    // return array of integers that dont appear in the array -> we need to create new array 
    findDisappearedNumbers(nums) {
        let map = new Map();
        let n = nums.length;
        let res = [];

        for (let i = 0; i<nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) +1); // adds every number to the map 
        }

    // check where expectation doesnt match reality 
        for (let k = 1; k<=n; k++){ // go through expected array (every number occurs once in the range n) and ask the map if the number exists 
            if (!map.has(k)) { // number doesnt appear in the array 
            res.push(k);
            }
        }
        return res;
    }
}
