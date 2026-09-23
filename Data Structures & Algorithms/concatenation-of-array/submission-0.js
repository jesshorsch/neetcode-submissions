class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // create new array double the length of the original array -> the original array should be pushed to the new array twice 
    // 
    getConcatenation(nums) {
        let ans = [...nums, ...nums];
        return ans;
        

        
}
}