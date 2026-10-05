class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // array of numbers given 
    // find index where the sum of the numbers on the left is  equal to the sum of the numbers on the right 
    // go through array and calculate the total sum 
    // the pivot element doesnt count to any of the two part sums 
    pivotIndex(nums) {
        let sum = 0; // all of the numbers added together 
        for (let i = 0; i<nums.length; i++) {
            sum += nums[i];
        }

        let leftSum = 0; // all numbers left from the pivot 
        for (let i = 0; i<nums.length; i++) {
            let rightSum = sum - leftSum - nums[i]; // all numbers right from the pivot -> is calculated new for every position of the pointer 
            if (leftSum === rightSum) { // when they are equally large 
                return i; // return the pivot index 
            }
        leftSum += nums[i]; // number at the current position is counted to left 
        
        }

        
        return -1; // no pivot index found 

        }
    }

// calculate total sum with loop
// create sum that grows with every iteration 
// calculate right sum new every time with loop (because position in array changes every iteration)
// check every time if rightSum == leftSum
// if its not the case -> add the number to leftSum 

