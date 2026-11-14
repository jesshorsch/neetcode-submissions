class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */

    // array of strings given, string pref given 
    // count number of strings that contain prev as prefix
    // check for every word in array if it starts with the prefix 
    // if yes, add to count 
    prefixCount(words, pref) {
        let count = 0;
        for (let word of words) {
            if(word.startsWith(pref)) {
                count++;
            }
        }
        
        return count;
    }
}
