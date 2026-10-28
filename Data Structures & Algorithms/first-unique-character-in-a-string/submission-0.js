class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string given 
    // find the first letter that is unique in the array (occurence of 1)
    // go through string and add all letters to a map 
    // go through string again and find a letter that has the occurence of 1 
    // return its index or -1
    firstUniqChar(s) {
        let map = new Map();

        for (let i = 0; i<s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) +1); 
        }

        for (let j = 0; j<s.length; j++) {
            if (map.get(s[j]) === 1) {
                return j;
            }
        }
        return -1;
    }
}
