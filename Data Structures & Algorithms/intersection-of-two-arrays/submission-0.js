class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */

    // two arrays of numbers given 
    // find the numbers that are in both arrays and return a new one 
    // add all of the numbers of array1 to a map -> go through array 2 and check if the current number is already in the map -> if yes add it to the new array 
    intersection(nums1, nums2) {
        let res = [];
        let map = new Map();

        for (let i = 0; i<nums1.length; i++) { // go through nums1
            map.set(nums1[i], (map.get(nums1[i]) || 0)+1); 
        }

        for (let j = 0; j<nums2.length; j++) {
            if (map.has(nums2[j])) { // if the number is in the map
                if (!res.includes(nums2[j]))// check if the number already has been added 
                {
                res.push(nums2[j]);
                }
                
            }
        }

    return res;

    }
}
