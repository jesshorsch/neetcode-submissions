class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string given 
    // either 0 or 1 
    // one operation can change the value from 0 to 1 vice versa 
    // goal: make string alternating (no two neighboring strings are equal)
    // return minimum operations to make s alternating 
    // go through string and always check a pair 
    // if they arent equal, move the pointers one position further to check next pair 
    // if they are equal, one of them need to be changed 
    // increment the operations counter
    // return the operations counter at end of string 

    minOperations(s) {
        let count = 0;
        let arr = s.split("");

        for (let k = 0; k<arr.length; k++) {
            if (k % 2 === 0) { // if the length of the string is even 
                if (arr[k] === "0") { // if the previous value is equal to i 
                    count++;
                }
            }
            else {
                if (arr[k] === "1")
                    count++;
                }
            
    }
    return Math.min(count, arr.length-count);
}
}