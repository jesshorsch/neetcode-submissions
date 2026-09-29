class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    // two integer arrays given 
    // nums1 is always smaller than nums2
    // two pointers i and j one for each array
    // for every number that i points to in nums1, we need to find the same number j in nums2 
    // then, we need to check if there is a greater number in nums2 after that 
    // if yes, push it to the new array
    // if no, push -1 to the new array 

    nextGreaterElement(nums1, nums2) {
        let res = [];
        let i = 0;
        let j = 0;
        

        while (i < nums1.length && j < nums2.length) { // while both arrays are in-bounds
            if (nums1[i] == nums2[j]) { // if its the same number
            let max = 0;
            for (let k = j+1; k < nums2.length; k++) { // finds the first bigger number to the right side of j 
                if (nums2[k] > nums2[j]) { // if one is found, set max to this number 
                    max = nums2[k]; 
                    break; // if a number is found, we can leave the for loop 
                }
            }
            
            if (max > nums2[j]) { // if there is a bigger number after the pointer in nums2
                res.push(max);
                
            }
            else {
                res.push(-1);
                
            }
            i++; // move the pointer in nums1 one position further 
            j = 0; // reset the position of j so it searches from the beginning again 
            
        }
        else {
               j++; 
            }
    }
        return res;
    
}
}

// reset a variable that should have a new value every iteration inside the loop
// inner loop with additional pointer (find bigger number for every number)