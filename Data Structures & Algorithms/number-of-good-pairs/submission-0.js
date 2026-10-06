class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of numbers given 
    // return number 
    // we need to find pairs of two numbers who fulfill these conditions
    // 1. they are the same number 
    // 2. the index of the first number has to be smaller than the index of the last one 
    // we need to go through the array with two-pointers a and b and compare pairs 
    // increase counter every time the conditions are met 
    // one reading and one writing pointer 
    numIdenticalPairs(nums) {
        let map = new Map();
        let count = 0; // number of pairs that fulfill condition 

        for (const num of nums) { // walks through array number by number 
            let c = map.get(num) || 0; // saves the value of this number (number of occurence) in a variable -> there is an entry if the number has already occured 
            count += c; // adds how often a number occured to the pair count 
            map.set(num, c+1); // increments the number of occurence by 1
        }
        return count;
    
        
    }
}

// if an array is changed in-place -> writing and reading pointer 
// all pairs -> brute force or map 
// the number of pairs is calculated while the loop is still running (incremental calculation) -> the result grows iteration by iteration 
// pattern when i only need to look at the previous values in order to calculate a result or a part of it 
