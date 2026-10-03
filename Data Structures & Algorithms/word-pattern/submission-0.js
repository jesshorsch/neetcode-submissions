class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */

    // given two strings (pattern and s)
    // every same letter in the pattern string has to have a corresponding word in s
    // hash map to map every letter in pattern to a word in s 
    // return boolean 
    wordPattern(pattern, s) {
        let wordLetter = new Map();
        let letterWord = new Map();
        let words = s.split(" ");

        if (pattern.length !== words.length) {
            return false;
        }

        for (let i = 0; i<pattern.length; i++) { // walks through every letter in pattern 
            let letter = pattern[i];
            let word = words[i];

            if (letterWord.has(letter) && letterWord.get(letter) !== word){ // if the letter is in the letterWord map and its value isnt word
        return false; // -> we've seen this letter before but with another word
        } 
        if (wordLetter.has(word) && wordLetter.get(word) !== letter) { // if the wordLetter map has word in it but the value is not letter 
            return false; // we've seen this word before but with another letter 
        }

    letterWord.set(letter, word); // because we've saved the indices in variables before 
    wordLetter.set(word, letter);
        }

        

    return true;



    }
}
