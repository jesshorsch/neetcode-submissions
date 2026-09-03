class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
        let right = 0;

        while (right < nums.length) { // solange die Leseposition (rechter Pointer) im Array ist
            if (nums[right] !== val) { // Fall dass die aktuelle Zahl nicht val ist:
                nums[left] = nums[right]; // rechter Wert wird an left Position geschrieben -> left rückt auf
                left++
            }
            right++
        }
        return left;
    }
    
}
