class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // one array -> pointers i and j 
    // we need to check for every integer if its even or uneven -> modulo
    // return new array 
    sortArrayByParity(nums) {
        let left = 0;
        let right = nums.length -1;
        let res = new Array (nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res[left] = nums[i];
            left++
        }
        else {
            res[right] = nums[i];
            right--;
        }
    }

    return res;



        
}
}