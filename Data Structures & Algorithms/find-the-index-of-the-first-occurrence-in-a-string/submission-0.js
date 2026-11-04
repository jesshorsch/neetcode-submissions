class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */

    // two strings given 
    // find first occurence of needle string in haystack string 
    // return the index 
    // else, return -1
    // we need to go through both strings at the same time with two pointers and check for every letter if it matches 
    // if it matches, move both pointers 
    // if it doesnt match, move only the haystack pointer and start again at the start of the needle string 
    // when we finished going through both strings, we want to return the index of the first letter in the needle string that we found in haystack
    // we could use the indexAt method to figure out at which index the first occurence starts in haystack


    strStr(haystack, needle) {
        let i = 0;
        let j = 0;

        while (i <haystack.length && j<needle.length) { // as long as both strings are in-bounds
            if (haystack[i] === needle[j]) { // if the letters match 
                i++;
                j++;
            }
            else { // letters dont match 
                i = i-j +1; // we go back in the haystack string to the position where the last check started +1 because otherwise we would skip letters in haystack
                j = 0; // reset j so the next check for needle in haystack starts with the first letter again 
            }
        }
        // we've gone through the whole strings 
        
        if (j === needle.length) { // checks if needle has been completely found in haystack
            return i-j;
        }
        return -1;
        

    }
}
