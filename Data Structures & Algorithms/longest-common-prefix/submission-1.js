class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */

    // problem where the strings have no initial internal structure -> double loop -> with sorting, we can reduce it to one loop
    // return the part of the string (substring) that all have in common 
    longestCommonPrefix(strs) {
        strs.sort();
        let first = strs[0];
        let last = strs[strs.length-1];

    let i = 0;
        while (i < first.length && i < last.length && first[i] == last[i]) { // while both strings are in bounds and the letter is identical in both strings that are compared 
        i++;
        }
        return first.substring(0, i);
}
}