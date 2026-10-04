class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // two strings given 
    // check if they are isomorphic: each letter can only be mapped to one other letter
    // check if the letters in s can all be replaced by the letters in t 
    // map: map every letter to another letter, then go through s and check if every letter has only one key 
    // bijection method -> two maps 
    // the strings need to be equally long 
    // return boolean 
    isIsomorphic(s, t) {
        let sT = new Map();
        let tS = new Map();

        if (s.length !== t.length) {
            return false;
        }

        // we need a loop that goes through both strings at the same time and adds every letter in s to a letter in t at the same position -> two-pointers 
        let i = 0;

        while (i<s.length){ // stop when s goes out of bounds 
        let a = s[i]; // current letter in s 
        let b = t[i]; // current letter in t 
        if (sT.has(a) && sT.get(a) !== b) { // if the letter is in s but its value is not b (the same letter in t)
        return false;
        } 
        if (tS.has(b) && tS.get(b) !== a) { // if a letter is in t but its value is not the same letter as in s 
        return false;
        }
        sT.set(a, b); // add the current letter in s to the map and set its value to the letter in t 
        tS.set(b, a); // add the current letter in t to the map and set its value to the letter in s 

        i++;
        } 
        return true;
        
    }
}
