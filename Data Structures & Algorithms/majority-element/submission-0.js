class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // array of numbers given 
    // create a hashmap where for every integer, the number of occurence is counted 
    // go through array and get every number 
    // at the end, check which number fulfills the requirement (n/2)
    // n is the length of the array 
    // search for number that makes up the half of the array 
    // sort numbers first so every number makes up a block 

    majorityElement(nums) {
        let map = new Map();
        let i = 0;
        
        while (i<nums.length) {
            if (map.has(nums[i])) { // if the number already exists in the map 
                map.set(nums[i], map.get(nums[i]) +1 ); // first, we calculate the new value with the get method and then, we set it with the set method
            }
            else { // if the number doesnt exist in the map 
            map.set(nums[i], 1);
            }
            i++;
        }

        for (let [zahl, anzahl] of map) {
            if (anzahl > nums.length / 2) {
                return zahl;
            }
        }
        
    
}
}