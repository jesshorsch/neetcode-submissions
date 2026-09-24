class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // given string with multiple words seperated by spaces 
    // figure out the last word of the string 
    // return the length -> letter count 
    lengthOfLastWord(s) {
        let lastWord = s.trim().split(" ").pop().length;
        return lastWord;
    }
}
