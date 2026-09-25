class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // two strings given 
    // we need to create a hashmap for one string and then compare if the letters in the other string match the position of the letters in the other string 
    // traverse one string and add all the letters and their position 
    isSubsequence(s, t) {
        let i = 0;
        let j = 0;

        while (i<s.length && j<t.length) {
            if (s[i] ===t[j]) { // wenn ein buchstabe in beiden strings vorkommt, gehe in s weiter 
                i++;
                
                
            }
              j++; // wenn ein buchstaben nur in einem string vorkommt (geht aus if bedingung raus) -> suche in t weiter 
               
                
            }

            return i === s.length;
        }
}
