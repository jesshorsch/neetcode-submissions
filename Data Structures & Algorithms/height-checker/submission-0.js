class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // given an array of integers 
    // we need to create a new array with all the numbers in ascending order 
    // compare the new array with the old array 
    // the position of the numbers matter -> for loop
    // for every number that isnt in the same position in both arrays -> count++
    // return counter


    heightChecker(heights) {
        let count = 0;
        let expected = [];

        expected = [...heights].sort((a,b) => a-b);

        for (let i = 0; i<heights.length; i++) { // walks through heights array 
        if (heights[i] !== expected[i]) { // if the numbers at this position are not the same 
        count++;
        }
        }
        return count;
    }
}
