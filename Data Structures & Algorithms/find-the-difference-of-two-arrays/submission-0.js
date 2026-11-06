class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */

    // two arrays of numbers given 
    // in nums1, find the numbers that are not in nums2
    // in nums2, find the numbers that are not in nums1 
    // return 2d array with at most 2 items per inner array 
    // add all numbers in nums1 to set1, all in nums2 to set2 
    // go through the other array and check for every number is its in the set 
    // if its not in the set, add it to the result array 

    findDifference(nums1, nums2) {
        let set1 = new Set();
        let set2 = new Set();
        let res = [[], []];

        for (let i = 0; i<nums1.length; i++) {
            set1.add(nums1[i]);
        }
        for (let j = 0; j<nums2.length; j++) {
            set2.add(nums2[j]);
        }

        for (let number1 of set1) {
            if (!set2.has(number1)) { // if the number isnt in the other set and not already in the array 
            res[0].push(number1);
            }
        }
        for (let number2 of set2) {
            if (!set1.has(number2)) { // if the number isnt in the other set 
            res[1].push(number2);
            }
        }

        return res;

    }
}
