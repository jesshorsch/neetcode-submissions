class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    // we have one string with multiple words 
    // we need to find the substrings -> check for every word if it is a substring of another word 
    // compare two pairs of words each time -> two pointers 
    // one pointer stays in one place while the other moves until it reaches the end of the array, then the first pointer moves one further 
    stringMatching(words) {
      let res = []; // result array 

    for (let i = 0; i < words.length; i++) { // focuses on one word
        for (let j = 0; j < words.length; j++) { // checks every other word against this word 
            if (i == j) { // case where the variables point to the same word -> skip by continueing 
                continue;
            }
            if (words[j].includes(words[i])) { // if the word that j points to is a substring of the word i points to 
                res.push(words[i]); // add it to result array 
                break; // go out of the inner loop back to the outer loop
            }
        }
    }
    return res;
    }
}
