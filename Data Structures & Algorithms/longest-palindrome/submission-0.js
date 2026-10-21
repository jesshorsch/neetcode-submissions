class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // string given 
    // case sensitive letters 
    // return length of longest palindrome that can be build 
    // -> order of the original string doesnt matter 
    // -> build new string 
    // palindrome needs pairs of two equal letters 
    // go though string and add every letter to a map because we need number of occurence 
    // go though string and check for every letter is there are 2 corresponding letters in the map -> if yes, -2 in the map 
    longestPalindrome(s) {
        let map = new Map();

        for (let i = 0; i<s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0)+1);
        }

        let length = 0;

        for (let [char, count] of map) { // give map variables names 
            if (count >= 2) {
                length += Math.floor(count/2) *2; // calculates the number of pairs we can use by rounding down if its a decimal number, then multiply by 2 to get the number of single numbers for the length 
                map.set(char, count % 2); // sets the new key value of the number where we just found pairs, the value is what is left in the map after forming the pairs 
            }
            }
        for (let count of map.values()) { // goes through all the values of the map 
        if (count === 1) { // if we find a key that has only one occurence 
        length++; // add it to the palindrome
        break; // we can only do this once 
        }
        }

        return length;
        }

    }

