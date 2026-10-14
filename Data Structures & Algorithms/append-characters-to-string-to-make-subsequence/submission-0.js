class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    // two string arrays given 
    // subsequence = string can be derived from the other by deleting characters without changing order of the other characters 
    // we need the string t to be completely in s for it to be a substring
    // we need to go through s and count the number of occurence of every letter with a map 
    // then, we need to go through t and check which letter is already in s 
    // we need to make sure the order stays the same 
    // return the number of letters we need to append to s to make it a subsequence 

// new solution 
    // two pointers: one at start of s, one at start of t 
    // check for every iteration if s includes t 
    // if yes, move pointer in t and check if s still includes t 
    // continue and each time, add the current position of s to the new array 

    appendCharacters(s, t) {
    
    let i = 0;
    let j = 0;

    while (i<s.length) { // while we're going through the s array 

    if (j<t.length && s[i] === t[j]) { // if we find the first letter that is in t, and also occurs in s 
    j++; // move the pointer in t because we found the letter at the last position 
    }
    i++;
    }
    return t.length - j; // returns the length of t without the longest prefix we also found in s 
        
}
}
// greedy algorithm: makes the best decision for every step and doesnt go back to chance the decision 
// subsequence matching: one pointer in the short string (the one that needs to be a subsequence), one pointer in the long string 
// pointer in long string moves with every iteration, pointer in short string only when we found a match 
// order stays the same and we dont need a map 