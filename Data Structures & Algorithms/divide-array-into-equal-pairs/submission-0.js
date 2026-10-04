class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // array of numbers given 
    // we need n amount of equal pairs 
    // the amount of pairs is half the length of the array -> divide the length by two to get n 
    // check how many pairs of equal numbers we have
    // we need to walk through the array and count every occurence of a number -> map 
    // if it matches n, return true
    // return boolean
    divideArray(nums) {
        let map = new Map();
        let n = nums.length / 2;
        

        for (let i = 0; i<nums.length; i++) {
            let number = nums[i];
            map.set(number, (map.get(number) || 0) +1);
        }
        // all the numbers are in the map 
        for (let count of map.values()) { // goes through the values map (number of occurences)
        if (count % 2 != 0) { // if the occurence of a number is not even 
            return false;
        }

        }
        return true; // if every occurence of a number in the map is even



    }
}
