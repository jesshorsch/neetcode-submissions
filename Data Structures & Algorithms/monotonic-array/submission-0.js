class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let increasing = true; // stays true as long as there has been only ascending pairs 
        let decreasing = true; // stays true as long as there has been only descending pairs 

        for (let i = 0; i<nums.length -1; i++) { 
            if (nums[i] > nums[i+1]) increasing = false; // if descending pair -> set ascending flag to false
            if (nums[i] < nums[i+1]) decreasing = false; // if ascending pair -> set descending flag to false
        }
        return increasing ||decreasing; // at least one of them has to be true to return true;
    }
}

// use flag when checking for something that can be falsified with one iteration (all pairs have to fullfill a condition)
// we have two cases that were checking for -> two flags 
// flags are popular with questions like is monotone, is sorted, is dividable, password check 
