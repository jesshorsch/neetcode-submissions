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

        for (let word of words) { // goes through every word 

        if (pref.length > word.length) continue; // if the prefix is longer than the word -> go to next word 

            let matches = true;

            for (let i = 0; i<pref.length; i++) { // go through prefix 
                 if (pref[i] !== word[i]) {
                    matches = false;
                    break; // go to next word 
                }
                
            }
            if (matches) count++;
        }
        return count;
    }
}
