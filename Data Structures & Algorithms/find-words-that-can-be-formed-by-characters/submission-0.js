class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */

    // two strings given 
    // check if a string from word can be formed with a character from chars 
    // if yes, add the length of this string of the word to the total sum of good strings 
    // add all the letters in chars to a hashmap 
    // go through every word in the words string
    // go through every letter in a word and check if it exists in the map and there are still enough instances available 
    countCharacters(words, chars) {
        let map = new Map();
        let sum = 0;

        for (let i = 0; i<chars.length; i++) {
            map.set(chars[i], (map.get(chars[i]) || 0)+1);
        }

        for (let word of words) { // go through every word 
        let copy = new Map(map); // copy of the letters available for every word 
        let good = true; // variable good because the inner loop decides what runs after it depending on the outcome 
            for (let i = 0; i<word.length; i++) { // go through every letter of word 
                if ((copy.get(word[i]) || 0) > 0) { // if there is still at least an instance of the letter in the map (if not assign to 0)
                copy.set(word[i], (copy.get(word[i])-1));
                }
                else { // there is no instance of a letter left in the map 
                    good = false; // the word is not good 
                }
            }

        if (good) {
            sum += word.length;
        }
        }

        return sum;


    }
}
