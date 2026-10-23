class Solution {
    /**
     * @param {string} sentence
     * @return {boolean}
     */

    // string given 
    // words seperated by spaces 
    // each word has to start with the last letter of the previous word 
    // return true if each word (including last to first) fullfill condition 
    // go through string and use split method to get individual string
    // add every word to an array 
    // use modulo operator to compare last and first element (circular check)

    isCircularSentence(sentence) {
        let words = sentence.split(" ");  // returns array of words 

        for (let i = 0; i<words.length; i++) { // split every word into letters 
            let curr = words[i]; // the current word
            let next = words[(i+1) % words.length]; // the next word 

            if (curr[curr.length -1] !== next[0]) // if the last letter of the current word and the first letter of the next word match 
            return false;
        }
        return true;
    }
    
}
// split method returns array -> no new array necessary 
// use % length to skip to the first element again 

