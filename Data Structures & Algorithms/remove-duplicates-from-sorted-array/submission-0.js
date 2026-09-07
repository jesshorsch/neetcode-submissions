class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // 1 array given 
    // change array in-place 
    // return number of unique elements -> counter 
    // hash map to note every element
    removeDuplicates(nums) {
        let left = 0; // keeps track of unique values 
        let right = 0; // goes through array 
        

        while (right < nums.length) { // check as long as the array is in-bounds
        nums[left] = nums[right]; // rechter Wert wird auf Position vom linken Pointer geschrieben
        while (right < nums.length && nums[right] === nums[left]) { // solange das Element ein Duplikat ist, gehe eins weiter nach rechts
            right++;
        }
        left++; // wenn ein neues Element dazukommt, gehe mit dem linken Pointer weiter 
    }
    return left; // gebe Anzahl der einzigartigen Werte zurück 
}
}