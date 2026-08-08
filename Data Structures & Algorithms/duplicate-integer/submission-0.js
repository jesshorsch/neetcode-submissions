class Solution {

    hasDuplicate(nums) {
        const gesehen = new Set();
        for (const num of nums) {
       if (gesehen.has(num)) return true;
       gesehen.add(num)
    }
    return false;
    }
    
}

