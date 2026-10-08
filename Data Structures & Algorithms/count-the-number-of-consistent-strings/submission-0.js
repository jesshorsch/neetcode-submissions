class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    // string and array of strings given 
    // check if all the letters in the array appear in the string 
    // return number of consistent strings 
    // we only need to know if a letter appears in the string, not where or how often -> set 
    // a set consists of only an entry and no key value pair 
    // go through array and add the letters to the set 
    // go through the string and check if for every letter, there is an entry in the set 
    countConsistentStrings(allowed, words) {
        let set = new Set(allowed);
        let count = 0;

        for (let word of words) { // go through words array word by word 
            let consistent = true; // flag to save the outcome of the inner loop outside 

        for (let letter of word) { // goes through every word in words letter by letter 
            if (!set.has(letter)) { // the letter is not allowed 
                consistent = false; // flag is set to false
                break; // goes out of the loop completely 
            }

            // flag stays true
        }
           if (consistent) count++; 
            
        }
        return count;
    }
}

// set.has returns boolean 
// use a flag if an inner loop should detect something the outside code needs to run 
